"use client";

import { useState, useEffect } from "react";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { 
  FaEdit, 
  FaPlus, 
  FaTrash, 
  FaEye, 
  FaEyeSlash,
  FaSave,
  FaTimes,
  FaGlobe,
  FaBox,
  FaRoad,
  FaNewspaper
} from "react-icons/fa";

interface SiteContent {
  key: string;
  value: string;
  description?: string;
  updated_at?: string;
}

interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  features: string[];
  status: string;
  created_at?: string;
  updated_at?: string;
}

interface RoadmapItem {
  id: string;
  phase: string;
  title: string;
  description: string;
  status: string;
  is_visible: boolean;
  created_at?: string;
  updated_at?: string;
}

interface JournalPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  is_published: boolean;
  publish_date?: string;
  created_at?: string;
  updated_at?: string;
}

export default function AdminCMS() {
  const [activeTab, setActiveTab] = useState<'site' | 'products' | 'roadmap' | 'journal'>('site');
  const [siteContent, setSiteContent] = useState<SiteContent[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [roadmapItems, setRoadmapItems] = useState<RoadmapItem[]>([]);
  const [journalPosts, setJournalPosts] = useState<JournalPost[]>([]);
  const [loading, setLoading] = useState(false);
  const [editingItem, setEditingItem] = useState<any>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const tabs = [
    { id: 'site', label: 'Site Content', icon: FaGlobe },
    { id: 'products', label: 'Products', icon: FaBox },
    { id: 'roadmap', label: 'Roadmap', icon: FaRoad },
    { id: 'journal', label: 'Journal', icon: FaNewspaper }
  ];

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const endpoint = `/api/admin/${activeTab}`;
      const response = await fetch(endpoint);
      const data = await response.json();
      
      switch (activeTab) {
        case 'site':
          setSiteContent(data);
          break;
        case 'products':
          setProducts(data);
          break;
        case 'roadmap':
          setRoadmapItems(data);
          break;
        case 'journal':
          setJournalPosts(data);
          break;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#111213] text-[#E6E7E8]">
        {/* Header */}
        <div className="bg-[#0F1011] border-b border-[#2B2D2E] py-6">
          <div className="max-w-7xl mx-auto px-6">
            <h1 className="text-3xl font-semibold text-[#E6E7E8]">AcronIQ CMS</h1>
            <p className="text-[#B5B7BB] mt-2">Content Management System</p>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="bg-[#151617] border-b border-[#2B2D2E]">
          <div className="max-w-7xl mx-auto px-6">
            <nav className="flex space-x-8">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                      activeTab === tab.id
                        ? 'border-[#C28B4A] text-[#C28B4A]'
                        : 'border-transparent text-[#B5B7BB] hover:text-[#E6E7E8] hover:border-[#2B2D2E]'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </nav>
          </div>
        </div>

        {/* Content Area */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#C28B4A]"></div>
            </div>
          ) : (
            <div>
              {/* Add Button */}
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-[#E6E7E8]">
                  {tabs.find(t => t.id === activeTab)?.label}
                </h2>
                <button
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center space-x-2 bg-[#C28B4A] text-[#111213] px-4 py-2 rounded-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <FaPlus className="w-4 h-4" />
                  <span>Add New</span>
                </button>
              </div>

              {/* Content Grid */}
              <div className="grid gap-4">
                {activeTab === 'site' && siteContent.map((item) => (
                  <SiteContentCard key={item.key} item={item} onEdit={setEditingItem} />
                ))}
                {activeTab === 'products' && products.map((item) => (
                  <ProductCard key={item.id} item={item} onEdit={setEditingItem} />
                ))}
                {activeTab === 'roadmap' && roadmapItems.map((item) => (
                  <RoadmapCard key={item.id} item={item} onEdit={setEditingItem} />
                ))}
                {activeTab === 'journal' && journalPosts.map((item) => (
                  <JournalCard key={item.id} item={item} onEdit={setEditingItem} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

// Component cards for each content type
function SiteContentCard({ item, onEdit }: { item: SiteContent; onEdit: (item: any) => void }) {
  return (
    <div className="bg-[#151617] border border-[#2B2D2E] rounded-sm p-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="font-semibold text-[#E6E7E8] mb-2">{item.key}</h3>
          <p className="text-[#B5B7BB] text-sm mb-2">{item.description}</p>
          <p className="text-[#B5B7BB] truncate">{item.value}</p>
        </div>
        <button
          onClick={() => onEdit(item)}
          className="text-[#C28B4A] hover:text-[#E6E7E8] transition-colors"
        >
          <FaEdit className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function ProductCard({ item, onEdit }: { item: Product; onEdit: (item: any) => void }) {
  return (
    <div className="bg-[#151617] border border-[#2B2D2E] rounded-sm p-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="font-semibold text-[#E6E7E8]">{item.title}</h3>
            <span className={`px-2 py-1 text-xs rounded-sm ${
              item.status === 'active' ? 'bg-green-500/20 text-green-400' :
              item.status === 'development' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {item.status}
            </span>
          </div>
          <p className="text-[#B5B7BB] text-sm mb-2">/{item.slug}</p>
          <p className="text-[#B5B7BB] truncate">{item.description}</p>
        </div>
        <button
          onClick={() => onEdit(item)}
          className="text-[#C28B4A] hover:text-[#E6E7E8] transition-colors"
        >
          <FaEdit className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function RoadmapCard({ item, onEdit }: { item: RoadmapItem; onEdit: (item: any) => void }) {
  return (
    <div className="bg-[#151617] border border-[#2B2D2E] rounded-sm p-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="font-semibold text-[#E6E7E8]">{item.title}</h3>
            <span className={`px-2 py-1 text-xs rounded-sm ${
              item.status === 'completed' ? 'bg-green-500/20 text-green-400' :
              item.status === 'in_progress' ? 'bg-blue-500/20 text-blue-400' :
              'bg-gray-500/20 text-gray-400'
            }`}>
              {item.status}
            </span>
            {item.is_visible ? (
              <FaEye className="w-4 h-4 text-green-400" />
            ) : (
              <FaEyeSlash className="w-4 h-4 text-gray-400" />
            )}
          </div>
          <p className="text-[#B5B7BB] text-sm mb-2">{item.phase}</p>
          <p className="text-[#B5B7BB] truncate">{item.description}</p>
        </div>
        <button
          onClick={() => onEdit(item)}
          className="text-[#C28B4A] hover:text-[#E6E7E8] transition-colors"
        >
          <FaEdit className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

function JournalCard({ item, onEdit }: { item: JournalPost; onEdit: (item: any) => void }) {
  return (
    <div className="bg-[#151617] border border-[#2B2D2E] rounded-sm p-6">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-2">
            <h3 className="font-semibold text-[#E6E7E8]">{item.title}</h3>
            {item.is_published ? (
              <FaEye className="w-4 h-4 text-green-400" />
            ) : (
              <FaEyeSlash className="w-4 h-4 text-gray-400" />
            )}
          </div>
          <p className="text-[#B5B7BB] text-sm mb-2">/{item.slug}</p>
          <p className="text-[#B5B7BB] truncate">{item.excerpt || 'No excerpt'}</p>
          {item.publish_date && (
            <p className="text-xs text-[#B5B7BB] mt-2">
              {new Date(item.publish_date).toLocaleDateString()}
            </p>
          )}
        </div>
        <button
          onClick={() => onEdit(item)}
          className="text-[#C28B4A] hover:text-[#E6E7E8] transition-colors"
        >
          <FaEdit className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
