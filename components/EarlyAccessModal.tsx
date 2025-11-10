"use client";

import { useState } from 'react';
import { HiX } from 'react-icons/hi';

interface EarlyAccessModalProps {
  open: boolean;
  onClose: () => void;
}

export default function EarlyAccessModal({ open, onClose }: EarlyAccessModalProps) {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    email: '', 
    first_name: '', 
    last_name: '', 
    role: '', 
    company: '', 
    website: '', 
    country: '',
    interests: [] as string[], 
    use_case: '', 
    timeline: 'Exploring', 
    how_heard: '',
    consent_terms: false, 
    consent_marketing: false,
  });
  const [done, setDone] = useState<{ ok: boolean; dup?: boolean; score?: number } | null>(null);

  function update<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm(prev => ({ ...prev, [k]: v }));
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/early-access', {
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({
          ...form,
          utm_source: new URLSearchParams(window.location.search).get('utm_source'),
          utm_medium: new URLSearchParams(window.location.search).get('utm_medium'),
          utm_campaign: new URLSearchParams(window.location.search).get('utm_campaign'),
        })
      });
      const json = await res.json();
      if (res.ok) {
        setDone({ ok: true, dup: json?.duplicate, score: json?.score });
      } else {
        alert(json?.error || 'Something went wrong');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally { 
      setLoading(false); 
    }
  }

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white rounded-t-2xl border-b border-gray-100 px-6 py-4 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Get Early Access</h2>
            <p className="text-gray-600">Be first to try TrueNorth. Join the waitlist.</p>
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Close"
          >
            <HiX size={24} />
          </button>
        </div>

        <div className="p-6">
          {!done ? (
            <form onSubmit={submit} className="space-y-6">
              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Work Email *
                  </label>
                  <input 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                    placeholder="your@company.com" 
                    type="email" 
                    required
                    value={form.email} 
                    onChange={e => update('email', e.target.value)} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name
                  </label>
                  <input 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                    placeholder="John" 
                    value={form.first_name}
                    onChange={e => update('first_name', e.target.value)} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name
                  </label>
                  <input 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                    placeholder="Smith" 
                    value={form.last_name}
                    onChange={e => update('last_name', e.target.value)} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Role
                  </label>
                  <input 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                    placeholder="Founder, Analyst, Executive..." 
                    value={form.role}
                    onChange={e => update('role', e.target.value)} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                    placeholder="Your Company" 
                    value={form.company}
                    onChange={e => update('company', e.target.value)} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website
                  </label>
                  <input 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                    placeholder="https://yourcompany.com" 
                    value={form.website}
                    onChange={e => update('website', e.target.value)} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Country
                  </label>
                  <input 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                    placeholder="United Kingdom" 
                    value={form.country}
                    onChange={e => update('country', e.target.value)} 
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline
                  </label>
                  <select 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                    value={form.timeline} 
                    onChange={e => update('timeline', e.target.value)}
                  >
                    <option>Exploring</option>
                    <option>1-3 months</option>
                    <option>Right now</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  How did you hear about us?
                </label>
                <input 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                  placeholder="LinkedIn, Twitter, Search, Friend..." 
                  value={form.how_heard}
                  onChange={e => update('how_heard', e.target.value)} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your use case
                </label>
                <textarea 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors" 
                  placeholder="Tell us briefly what you want to achieve with strategic intelligence tools..."
                  rows={3}
                  value={form.use_case} 
                  onChange={e => update('use_case', e.target.value)} 
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Areas of Interest
                </label>
                <div className="flex flex-wrap gap-2">
                  {['Strategy', 'Market analysis', 'Signals', 'Finance', 'Operations'].map(tag => (
                    <label 
                      key={tag} 
                      className={`inline-flex items-center px-4 py-2 rounded-full border cursor-pointer transition-colors ${
                        form.interests.includes(tag) 
                          ? 'bg-blue-100 border-blue-300 text-blue-800' 
                          : 'bg-gray-50 border-gray-300 text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        className="sr-only"
                        checked={form.interests.includes(tag)}
                        onChange={(e) => {
                          const next = new Set(form.interests);
                          e.target.checked ? next.add(tag) : next.delete(tag);
                          update('interests', Array.from(next));
                        }} 
                      />
                      <span className="text-sm font-medium">{tag}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-3 pt-4 border-t border-gray-200">
                <label className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={form.consent_terms}
                    onChange={e => update('consent_terms', e.target.checked)} 
                  />
                  <span className="text-sm text-gray-700">
                    I agree to the{' '}
                    <a href="/legal/terms" target="_blank" className="text-blue-600 hover:text-blue-700 underline">
                      Terms of Use
                    </a>{' '}
                    and{' '}
                    <a href="/legal/privacy" target="_blank" className="text-blue-600 hover:text-blue-700 underline">
                      Privacy Policy
                    </a>
                    . *
                  </span>
                </label>
                <label className="flex items-start gap-3">
                  <input 
                    type="checkbox" 
                    className="mt-1 w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    checked={form.consent_marketing}
                    onChange={e => update('consent_marketing', e.target.checked)} 
                  />
                  <span className="text-sm text-gray-700">
                    Send me research updates & early access news.
                  </span>
                </label>
              </div>

              <button 
                type="submit"
                className="w-full bg-blue-600 text-white px-6 py-4 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading || !form.consent_terms}
              >
                {loading ? 'Submitting...' : 'Join the Waitlist'}
              </button>

              <p className="text-center text-sm text-gray-500">
                🔒 We respect your privacy. No spam, unsubscribe anytime.
              </p>
            </form>
          ) : (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">You're on the list!</h3>
              <p className="text-gray-600 mb-4">
                We've sent a confirmation to your email. We'll be in touch soon with early access details.
              </p>
              {done.dup && (
                <p className="text-sm text-blue-600 mb-4">
                  Looks like you're already on the list — thanks for sticking with us.
                </p>
              )}
              {done.score && done.score >= 70 && (
                <p className="text-sm text-green-600 mb-4">
                  ⭐ High-priority lead detected. Expect priority access.
                </p>
              )}
              <button 
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                onClick={onClose}
              >
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
