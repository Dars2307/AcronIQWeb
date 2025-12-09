# 🚀 Admin Dashboard Guide

## Overview

The AcronIQ CMS Admin Dashboard is a secure, premium-branded interface for managing all website content. Built with the same charcoal/bronze aesthetic as the main site, it provides comprehensive content management capabilities.

## 🔐 Access & Authentication

### Admin Access
- **URL**: `/admin`
- **Authentication**: Access key required
- **Access Key**: `AcronIQ@25` (set in `.env.local`)
- **Session**: Persisted in localStorage until logout

### Security Features
- ✅ **Access Key Protection**: Prevents unauthorized access
- ✅ **Session Management**: Secure login/logout functionality
- ✅ **Premium UI**: Matches main site branding
- ✅ **Responsive Design**: Works on all devices

## 📊 Dashboard Features

### Content Management Tabs

#### 1. **Site Content**
- Manage hero text, founder quotes, taglines
- Key-value pairs for dynamic content
- Real-time updates to homepage

#### 2. **Products**
- Add/edit product information
- Manage product status (active, development, planned)
- Control product visibility and features

#### 3. **Roadmap**
- Update roadmap phases and timelines
- Manage status indicators
- Control public visibility

#### 4. **Journal**
- Create and edit journal posts
- Rich text editing capabilities
- Publish/draft workflow
- SEO-friendly slug management

### Interface Components

#### Navigation
- **Tabbed Interface**: Clean navigation between content types
- **Visual Indicators**: Icons for each content category
- **Active States**: Bronze accent for current tab

#### Content Cards
- **Status Indicators**: Visual status badges
- **Quick Actions**: Edit buttons on each item
- **Visibility Controls**: Show/hide toggles
- **Timestamps**: Last updated information

#### Edit Modals
- **Form Validation**: Required field validation
- **Rich Text Editor**: For journal content
- **Auto-save**: Prevents data loss
- **Cancel/Save**: Clear action buttons

## 🎨 Design System

### Colors
- **Background**: `#111213` (Deep Charcoal)
- **Cards**: `#151617` (Matte Graphite)
- **Borders**: `#2B2D2E` (Secondary Surfaces)
- **Text**: `#E6E7E8` (Off-white)
- **Accent**: `#C28B4A` (Matte Bronze)
- **Secondary Text**: `#B5B7BB` (Stone Grey)

### Typography
- **Headers**: Semibold, large sizes
- **Body**: Regular weight, readable sizes
- **Mono**: Access key display, technical info

### Interactive Elements
- **Buttons**: Bronze background, dark text
- **Hover States**: Opacity changes, color transitions
- **Focus States**: Bronze border highlights
- **Loading States**: Spinning indicators

## 🔧 Technical Architecture

### Frontend Components
```
/app/admin/page.tsx          # Main dashboard
/components/admin/AdminAuth.tsx    # Authentication wrapper
/components/admin/EditModals.tsx   # Content editing modals
```

### API Routes
```
/api/admin/auth/route.ts     # Authentication endpoint
/api/admin/site/route.ts     # Site content CRUD
/api/admin/products/route.ts # Products CRUD
/api/admin/roadmap/route.ts  # Roadmap CRUD
/api/admin/journal/route.ts  # Journal CRUD
```

### Data Flow
1. **Authentication**: Access key validation
2. **Content Fetch**: API calls to Supabase
3. **Real-time Updates**: Immediate UI refresh
4. **Error Handling**: Graceful failure states
5. **Caching**: Optimized performance

## 📝 Content Management Workflows

### Adding New Content

#### Site Content
1. Navigate to "Site Content" tab
2. Click "Add New"
3. Enter key, value, and description
4. Save to update live site

#### Products
1. Go to "Products" tab
2. Click "Add New"
3. Fill in product details
4. Set status and visibility
5. Save to publish

#### Roadmap Items
1. Select "Roadmap" tab
2. Click "Add New"
3. Enter phase information
4. Set timeline and status
5. Toggle visibility as needed

#### Journal Posts
1. Open "Journal" tab
2. Click "Add New"
3. Write title and content
4. Set publish date
5. Publish or save as draft

### Editing Existing Content
1. Click edit icon on any content card
2. Modify fields in modal
3. Save changes
4. Changes reflect immediately on live site

### Publishing Workflow
- **Drafts**: Save without publishing
- **Published**: Live on website
- **Visibility**: Control public display
- **Timestamps**: Track creation and updates

## 🚀 Getting Started

### First Time Setup
1. **Access Dashboard**: Visit `/admin`
2. **Enter Access Key**: `AcronIQ@25`
3. **Explore Tabs**: Familiarize with interface
4. **Test Editing**: Make a small change
5. **Verify Live Site**: Check changes appear

### Daily Usage
1. **Login**: Enter access key
2. **Navigate**: Use tabs to find content
3. **Edit**: Click edit icons to modify
4. **Publish**: Save changes to go live
5. **Logout**: Use logout button when done

## 🔒 Security Best Practices

### Access Control
- **Change Access Key**: Update in `.env.local`
- **Secure Environment**: Protect environment variables
- **Regular Logout**: Don't leave sessions open
- **Monitor Access**: Check for unauthorized usage

### Content Security
- **Backup Content**: Regular database backups
- **Version Control**: Track content changes
- **Validation**: Ensure content quality
- **Testing**: Verify changes before publishing

## 🎯 Advanced Features

### Bulk Operations
- **Multiple Selection**: Select multiple items
- **Batch Actions**: Apply changes to multiple items
- **Import/Export**: Content migration tools

### Rich Text Editing
- **WYSIWYG Editor**: Visual content editing
- **Markdown Support**: Technical content creation
- **Media Upload**: Image and file management
- **Link Management**: Internal and external links

### Analytics Integration
- **Content Performance**: Track engagement
- **Edit History**: See who changed what
- **Usage Patterns**: Understand content usage
- **Optimization**: Data-driven improvements

## 📊 Monitoring & Maintenance

### Performance
- **Load Times**: Monitor dashboard speed
- **API Response**: Check backend performance
- **User Experience**: Ensure smooth operation
- **Error Tracking**: Monitor for issues

### Content Quality
- **Regular Reviews**: Check content accuracy
- **SEO Optimization**: Ensure good SEO practices
- **Brand Consistency**: Maintain voice and tone
- **User Feedback**: Incorporate user suggestions

---

**Status**: ✅ **Fully Operational**

**Access**: Secure admin dashboard ready for content management

**Next Steps**: Begin content management and explore advanced features
