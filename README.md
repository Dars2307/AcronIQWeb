# AcronIQ Research - Main Website

A professional Next.js 14 marketing website for AcronIQ Research, featuring modern British-style design with AI-powered intelligence and research solutions.

## 🚀 CMS Integration Status

**Frontend**: ✅ Complete (Homepage integrated)  
**Backend**: ✅ Complete (API routes configured)  
**Database**: ⏳ **ACTION REQUIRED** (Schema needs installation)

### ⚡ Quick Start: Install CMS Schema

The CMS is ready to use, but you need to install the database schema first:

1. **Open Supabase**: https://supabase.com/dashboard
2. **Select Project**: `zmfqwiyqgglznkpvusgp`
3. **Open SQL Editor**: Click "SQL Editor" → "New Query"
4. **Run Schema**: Copy `supabase/schema.sql` → Paste → Run
5. **Verify**: Copy `supabase/verify-cms-schema.sql` → Paste → Run

**See**: `INSTALL_CMS_NOW.md` for detailed instructions

### 📚 CMS Documentation

- `INSTALL_CMS_NOW.md` - Quick 3-minute setup
- `CMS_CHECKLIST.md` - Step-by-step checklist
- `CMS_INTEGRATION_SUMMARY.md` - Complete overview
- `docs/CMS_INSTALLATION_NEXT_STEPS.md` - Detailed guide

## 🎨 Design Features

- **Modern British Design**: Clean, minimalist aesthetic with white backgrounds and deep navy accents
- **Gradient Blue Elements**: Professional gradient blues inspired by the AcronIQ brand
- **Responsive Layout**: Fully responsive design optimized for desktop, tablet, and mobile devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **SEO Optimized**: Complete meta tags, OpenGraph data, and semantic HTML

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Inter & Poppins (Google Fonts)

## 📁 Project Structure

```
main-web/
├── app/
│   ├── about/
│   │   └── page.tsx          # About page
│   ├── products/
│   │   └── page.tsx          # Products showcase
│   ├── contact/
│   │   └── page.tsx          # Contact form
│   ├── legal/
│   │   ├── privacy/
│   │   │   └── page.tsx      # Privacy policy
│   │   └── terms/
│   │       └── page.tsx      # Terms of service
│   ├── layout.tsx            # Root layout with metadata
│   ├── page.tsx              # Landing page
│   └── globals.css           # Global styles & Tailwind config
├── components/
│   ├── Navbar.tsx            # Navigation bar
│   ├── Footer.tsx            # Footer component
│   └── Layout.tsx            # Layout wrapper
├── public/
│   └── icon.svg              # AcronIQ Q logo favicon
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies
```

## 🛠️ Setup Instructions

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone or navigate to the project directory**:
   ```bash
   cd main-web
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to [http://localhost:5000](http://localhost:5000)

### Available Scripts

- `npm run dev` - Start development server on port 5000
- `npm run build` - Build production-ready application
- `npm run start` - Start production server
- `npm run lint` - Run ESLint for code quality

## 🎨 Customization Guide

### Brand Colors

**Tailwind CSS v4 Configuration:**

This project uses Tailwind CSS v4 with a hybrid configuration approach:

1. **CSS-based theme** (`app/globals.css`):
   ```css
   @theme {
     --color-navy: #0A1931;          /* Primary dark navy */
     --color-navy-dark: #050D1A;     /* Darker navy variant */
     --color-navy-light: #1A2F4A;    /* Lighter navy variant */
     
     --font-sans: Inter, Poppins, system-ui, sans-serif;
   }
   ```

2. **Legacy config** (`tailwind.config.ts`):
   - Still present for content path definitions
   - Color extensions preserved for backward compatibility
   - Tailwind v4 prioritizes `@theme` over config file

**To modify colors:**
- Edit the `@theme` block in `app/globals.css` for Tailwind v4 approach
- Or update `tailwind.config.ts` if using traditional configuration
- Both work, but `@theme` is the modern Tailwind v4 method

### Custom Components

Pre-built component classes available in `globals.css`:

- `.btn-primary` - Gradient blue button
- `.btn-secondary` - White button with navy border
- `.card` - Elevated card with hover effect
- `.gradient-text` - Gradient text effect
- `.gradient-bg` - Gradient background

### Updating Content

#### Homepage Hero Section
Edit `app/page.tsx`:
```tsx
<h1>Transforming Ideas into Intelligent Solutions</h1>
<p>We provide AI-driven insight and research...</p>
```

#### Product Information
Update product details in `app/products/page.tsx`:
```tsx
const products = [
  {
    title: "Veritus",
    subtitle: "AI Strategist & Business Validator",
    // ...
  }
]
```

#### Contact Information
Modify contact details in `components/Footer.tsx` and `app/contact/page.tsx`.

### Adding New Pages

1. Create a new folder in `app/` directory
2. Add a `page.tsx` file
3. Import and use the Layout component:

```tsx
import Layout from "@/components/Layout";

export default function NewPage() {
  return (
    <Layout>
      <div>Your content here</div>
    </Layout>
  );
}
```

## 🚢 Production Deployment

### Pre-Deployment Checklist

1. **Run Quality Checks**:
   ```bash
   npm run lint        # Check code quality
   npm run build       # Test production build
   ```

2. **Environment Requirements**:
   - Node.js 18+ 
   - npm 9+
   - Environment variables (if using backend):
     - `NEXT_PUBLIC_API_URL` - Backend API endpoint
     - `NEXT_PUBLIC_PORTAL_URL` - Portal redirect URL (default: https://portal.acroniq.co.uk)

### Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**:
   - Visit [vercel.com](https://vercel.com) and sign in
   - Click "Add New Project"
   - Import your GitHub repository
   - Configure project:
     - **Framework Preset**: Next.js
     - **Root Directory**: `main-web`
     - **Build Command**: `npm run build` (auto-detected)
     - **Output Directory**: `.next` (auto-detected)
   - Add environment variables (if needed)
   - Click "Deploy"

3. **Post-Deployment**:
   - Verify all pages load correctly
   - Test contact form functionality
   - Check mobile responsiveness
   - Validate SEO meta tags

### Custom Domain Setup

1. **Add Domain in Vercel**:
   - Go to Project Settings → Domains
   - Enter your domain: `acroniq.co.uk` or `www.acroniq.co.uk`

2. **Configure DNS**:
   - Add Vercel DNS records to your domain provider:
     - Type: `CNAME` or `A` record
     - Value: Provided by Vercel
   - Wait for DNS propagation (up to 48 hours)

3. **SSL Certificate**:
   - Automatically provisioned by Vercel
   - Force HTTPS in Vercel settings

### Alternative: Self-Hosted Deployment

```bash
# Build for production
npm run build

# Start production server
npm run start  # Runs on port 5000
```

**Server Requirements**:
- Node.js 18+ runtime
- Process manager (PM2 recommended):
  ```bash
  npm install -g pm2
  pm2 start npm --name "acroniq-web" -- start
  ```

### Production Configuration

**next.config.js** includes:
- Image optimization
- React strict mode
- Security headers (add if needed)

**Recommended additions for production**:
```js
// next.config.js
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['your-cdn-domain.com'],
  },
  // Add security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
        ],
      },
    ];
  },
};
```

## 🔗 Backend Integration (Future Enhancement)

### Contact Form Backend

**Current State**: Contact form shows success toast without actual submission

**Implementation Steps**:

1. **Create API route** (`app/api/contact/route.ts`):
   ```tsx
   import { NextResponse } from 'next/server';
   
   export async function POST(request: Request) {
     const body = await request.json();
     const { name, email, message } = body;
     
     // Validate input
     if (!name || !email || !message) {
       return NextResponse.json(
         { error: 'All fields required' }, 
         { status: 400 }
       );
     }
     
     // Send to backend API
     const response = await fetch(
       `${process.env.BACKEND_API_URL}/api/contacts`,
       {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ name, email, message }),
       }
     );
     
     if (!response.ok) {
       return NextResponse.json(
         { error: 'Failed to send message' }, 
         { status: 500 }
       );
     }
     
     return NextResponse.json({ success: true });
   }
   ```

2. **Update Contact Page** (`app/contact/page.tsx`):
   ```tsx
   const handleSubmit = async (e: React.FormEvent) => {
     e.preventDefault();
     setIsSubmitting(true);
     
     try {
       const response = await fetch('/api/contact', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify(formData),
       });
       
       if (response.ok) {
         setShowToast(true);
         setFormData({ name: '', email: '', message: '' });
       } else {
         // Handle error
         setError('Failed to send message');
       }
     } catch (error) {
       setError('Network error');
     } finally {
       setIsSubmitting(false);
     }
   };
   ```

3. **Environment Variables**:
   ```bash
   # .env.local (development)
   BACKEND_API_URL=http://localhost:3000
   NEXT_PUBLIC_PORTAL_URL=http://localhost:4000
   
   # .env.production (Vercel)
   BACKEND_API_URL=https://api.acroniq.co.uk
   NEXT_PUBLIC_PORTAL_URL=https://portal.acroniq.co.uk
   ```

4. **Add Email Service** (optional):
   - Use Resend, SendGrid, or Mailgun
   - Store API keys in environment variables
   - Send confirmation emails to user and admin

### Dynamic Content Integration

**Future CMS Integration**:
- Connect to Strapi, Contentful, or Sanity
- Make product features editable
- Add blog/insights section
- Manage testimonials dynamically

**Example with Contentful**:
```tsx
// lib/contentful.ts
import { createClient } from 'contentful';

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

export async function getProducts() {
  const entries = await client.getEntries({ content_type: 'product' });
  return entries.items;
}
```

## 📱 Pages Overview

### Landing Page (`/`)
- Hero section with gradient Q logo
- Company slogan and mission
- CTA buttons (Access Portal, Contact Us)
- Trusted partners section
- Product features overview

### About Page (`/about`)
- Company mission statement
- Large Q graphic showcase
- Product tools overview
- Animated timeline (Framer Motion)

### Products Page (`/products`)
- Veritus details and features
- AcronIQ Signals information
- BusinessHub overview
- Call-to-action sections

### Contact Page (`/contact`)
- Contact form (name, email, message)
- Toast notification on submission
- Contact information display
- Social media links

### Legal Pages
- `/legal/privacy` - Privacy Policy
- `/legal/terms` - Terms of Service

## 🎯 Key Features

✅ **Fully Responsive** - Mobile-first design approach  
✅ **SEO Optimized** - Meta tags, OpenGraph, semantic HTML  
✅ **Fast Performance** - Next.js 14 optimizations, image optimization  
✅ **Modern Animations** - Smooth Framer Motion transitions  
✅ **Type Safe** - Full TypeScript support  
✅ **Accessible** - ARIA labels, semantic structure  
✅ **Production Ready** - Optimized for Vercel deployment

## 🐛 Troubleshooting

### Development Server Issues

**Port already in use**:
```bash
# Kill process on port 5000
npx kill-port 5000
# Or use different port
npm run dev -- -p 3000
```

**Styling not updating**:
```bash
# Clear Next.js cache
rm -rf .next
npm run dev
```

### Build Errors

**Module not found**:
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## 📄 License

© 2025 AcronIQ Research. All rights reserved.

## 🤝 Support

For questions or support:
- Email: info@acroniq.co.uk
- Website: [acroniq.co.uk](https://acroniq.co.uk)

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS
