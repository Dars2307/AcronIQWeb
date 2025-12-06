"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaSave, FaEye, FaEyeSlash } from "react-icons/fa";

interface SiteContent {
  key: string;
  value: string;
  description?: string;
}

interface Product {
  id?: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  status: string;
}

interface RoadmapItem {
  id?: string;
  phase: string;
  title: string;
  description: string;
  status: string;
  is_visible: boolean;
}

interface JournalPost {
  id?: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  is_published: boolean;
  publish_date?: string;
}

interface EditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => Promise<void>;
  item?: any;
  type: 'site' | 'products' | 'roadmap' | 'journal';
}

export function EditModal({ isOpen, onClose, onSave, item, type }: EditModalProps) {
  const [formData, setFormData] = useState<any>({});
  const [loading, setSaving] = useState(false);

  useEffect(() => {
    if (item) {
      setFormData({ ...item });
    } else {
      // Initialize empty form based on type
      switch (type) {
        case 'site':
          setFormData({ key: '', value: '', description: '' });
          break;
        case 'products':
          setFormData({ title: '', slug: '', description: '', features: [], status: 'development' });
          break;
        case 'roadmap':
          setFormData({ phase: '', title: '', description: '', status: 'planned', is_visible: true });
          break;
        case 'journal':
          setFormData({ title: '', slug: '', content: '', excerpt: '', is_published: false, publish_date: '' });
          break;
      }
    }
  }, [item, type]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await onSave(formData);
      onClose();
    } catch (error) {
      console.error('Error saving:', error);
    } finally {
      setSaving(false);
    }
  };

  const updateField = (field: string, value: any) => {
    setFormData((prev: any) => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#151617] border border-[#2B2D2E] rounded-sm w-full max-w-4xl max-h-[90vh] overflow-hidden"
        >
          <div className="flex items-center justify-between p-6 border-b border-[#2B2D2E]">
            <h2 className="text-xl font-semibold text-[#E6E7E8]">
              {item ? 'Edit' : 'Add'} {type === 'site' ? 'Site Content' : 
               type === 'products' ? 'Product' : 
               type === 'roadmap' ? 'Roadmap Item' : 'Journal Post'}
            </h2>
            <button
              onClick={onClose}
              className="text-[#B5B7BB] hover:text-[#E6E7E8] transition-colors"
            >
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            {type === 'site' && (
              <SiteContentForm formData={formData} updateField={updateField} />
            )}
            {type === 'products' && (
              <ProductForm formData={formData} updateField={updateField} />
            )}
            {type === 'roadmap' && (
              <RoadmapForm formData={formData} updateField={updateField} />
            )}
            {type === 'journal' && (
              <JournalForm formData={formData} updateField={updateField} />
            )}

            <div className="flex justify-end space-x-3 mt-8 pt-6 border-t border-[#2B2D2E]">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-[#B5B7BB] hover:text-[#E6E7E8] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={loading}
                className="flex items-center space-x-2 bg-[#C28B4A] text-[#111213] px-6 py-2 rounded-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                <FaSave className="w-4 h-4" />
                <span>{loading ? 'Saving...' : 'Save'}</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function SiteContentForm({ formData, updateField }: { formData: SiteContent; updateField: (field: string, value: any) => void }) {
  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
          Key *
        </label>
        <input
          type="text"
          value={formData.key || ''}
          onChange={(e) => updateField('key', e.target.value)}
          className="w-full px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none"
          placeholder="e.g., hero_title"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
          Description
        </label>
        <input
          type="text"
          value={formData.description || ''}
          onChange={(e) => updateField('description', e.target.value)}
          className="w-full px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none"
          placeholder="Brief description of this content"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
          Value *
        </label>
        <textarea
          value={formData.value || ''}
          onChange={(e) => updateField('value', e.target.value)}
          rows={6}
          className="w-full px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none"
          placeholder="Content value..."
          required
        />
      </div>
    </div>
  );
}

function ProductForm({ formData, updateField }: { formData: Product; updateField: (field: string, value: any) => void }) {
  const [newFeature, setNewFeature] = useState('');

  const addFeature = () => {
    if (newFeature.trim()) {
      updateField('features', [...(formData.features || []), newFeature.trim()]);
      setNewFeature('');
    }
  };

  const removeFeature = (index: number) => {
    const features = [...(formData.features || [])];
    features.splice(index, 1);
    updateField('features', features);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
            Title *
          </label>
          <input
            type="text"
            value={formData.title || ''}
            onChange={(e) => updateField('title', e.target.value)}
            className="w-full px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
            Slug *
          </label>
          <input
            type="text"
            value={formData.slug || ''}
            onChange={(e) => updateField('slug', e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
            className="w-full px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none"
            placeholder="product-slug"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
          Status
        </label>
        <select
          value={formData.status || 'development'}
          onChange={(e) => updateField('status', e.target.value)}
          className="w-full px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none"
        >
          <option value="development">Development</option>
          <option value="active">Active</option>
          <option value="deprecated">Deprecated</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
          Description *
        </label>
        <textarea
          value={formData.description || ''}
          onChange={(e) => updateField('description', e.target.value)}
          rows={4}
          className="w-full px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
          Features
        </label>
        <div className="space-y-2">
          {(formData.features || []).map((feature: string, index: number) => (
            <div key={index} className="flex items-center space-x-2">
              <span className="flex-1 px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8]">
                {feature}
              </span>
              <button
                type="button"
                onClick={() => removeFeature(index)}
                className="text-red-400 hover:text-red-300 transition-colors"
              >
                <FaTimes className="w-4 h-4" />
              </button>
            </div>
          ))}
          <div className="flex space-x-2">
            <input
              type="text"
              value={newFeature}
              onChange={(e) => setNewFeature(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addFeature())}
              className="flex-1 px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none"
              placeholder="Add a feature..."
            />
            <button
              type="button"
              onClick={addFeature}
              className="px-4 py-2 bg-[#2B2D2E] text-[#E6E7E8] rounded-sm hover:bg-[#3B3D3E] transition-colors"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function RoadmapForm({ formData, updateField }: { formData: RoadmapItem; updateField: (field: string, value: any) => void }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
            Phase *
          </label>
          <input
            type="text"
            value={formData.phase || ''}
            onChange={(e) => updateField('phase', e.target.value)}
            className="w-full px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none"
            placeholder="Q1 2025"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
            Status
          </label>
          <select
            value={formData.status || 'planned'}
            onChange={(e) => updateField('status', e.target.value)}
            className="w-full px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none"
          >
            <option value="planned">Planned</option>
            <option value="in_progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
          Title *
        </label>
        <input
          type="text"
          value={formData.title || ''}
          onChange={(e) => updateField('title', e.target.value)}
          className="w-full px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
          Description *
        </label>
        <textarea
          value={formData.description || ''}
          onChange={(e) => updateField('description', e.target.value)}
          rows={4}
          className="w-full px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none"
          required
        />
      </div>

      <div>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={formData.is_visible || false}
            onChange={(e) => updateField('is_visible', e.target.checked)}
            className="rounded border-[#2B2D2E] bg-[#111213] text-[#C28B4A] focus:ring-[#C28B4A]"
          />
          <span className="text-sm text-[#E6E7E8]">Visible to public</span>
          {formData.is_visible ? (
            <FaEye className="w-4 h-4 text-green-400" />
          ) : (
            <FaEyeSlash className="w-4 h-4 text-gray-400" />
          )}
        </label>
      </div>
    </div>
  );
}

function JournalForm({ formData, updateField }: { formData: JournalPost; updateField: (field: string, value: any) => void }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
            Title *
          </label>
          <input
            type="text"
            value={formData.title || ''}
            onChange={(e) => updateField('title', e.target.value)}
            className="w-full px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
            Slug *
          </label>
          <input
            type="text"
            value={formData.slug || ''}
            onChange={(e) => updateField('slug', e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, '-'))}
            className="w-full px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none"
            placeholder="post-slug"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
          Excerpt
        </label>
        <textarea
          value={formData.excerpt || ''}
          onChange={(e) => updateField('excerpt', e.target.value)}
          rows={3}
          className="w-full px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none"
          placeholder="Brief summary of the post..."
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
          Content *
        </label>
        <textarea
          value={formData.content || ''}
          onChange={(e) => updateField('content', e.target.value)}
          rows={12}
          className="w-full px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none font-mono text-sm"
          placeholder="Write your post content here (Markdown supported)..."
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-[#E6E7E8] mb-2">
            Publish Date
          </label>
          <input
            type="datetime-local"
            value={formData.publish_date ? new Date(formData.publish_date).toISOString().slice(0, 16) : ''}
            onChange={(e) => updateField('publish_date', e.target.value)}
            className="w-full px-3 py-2 bg-[#111213] border border-[#2B2D2E] rounded-sm text-[#E6E7E8] focus:border-[#C28B4A] focus:outline-none"
          />
        </div>

        <div className="flex items-end">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={formData.is_published || false}
              onChange={(e) => updateField('is_published', e.target.checked)}
              className="rounded border-[#2B2D2E] bg-[#111213] text-[#C28B4A] focus:ring-[#C28B4A]"
            />
            <span className="text-sm text-[#E6E7E8]">Published</span>
            {formData.is_published ? (
              <FaEye className="w-4 h-4 text-green-400" />
            ) : (
              <FaEyeSlash className="w-4 h-4 text-gray-400" />
            )}
          </label>
        </div>
      </div>
    </div>
  );
}
