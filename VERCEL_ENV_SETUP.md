# Vercel Environment Variables Setup

## Quick Fix for Build Error

Your Vercel deployment is failing because environment variables are missing.

### Step-by-Step Instructions:

1. **Go to Vercel Dashboard**
   - Visit: https://vercel.com/dashboard
   - Select your **AcronIQWeb** project
   - Click **Settings** → **Environment Variables**

2. **Add These Variables** (copy-paste exactly):

```
Variable Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://zmfqwiyqgglznkpvusgp.supabase.co
Environments: ✓ Production ✓ Preview ✓ Development
```

```
Variable Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptZnF3aXlxZ2dsem5rcHZ1c2dwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTk4MjYwNzQsImV4cCI6MjA3NTQwMjA3NH0.zz-41uvYbN8gWpxd5AILMzDl_DpyToDErkknSKiVLmE
Environments: ✓ Production ✓ Preview ✓ Development
```

```
Variable Name: SUPABASE_SERVICE_ROLE_KEY
Value: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InptZnF3aXlxZ2dsem5rcHZ1c2dwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1OTgyNjA3NCwiZXhwIjoyMDc1NDAyMDc0fQ.S2uRH3LpeUV17JTRjh1lB2OXstXlHnU3XSMx03wTHYs
Environments: ✓ Production ✓ Preview ✓ Development
```

```
Variable Name: RESEND_API_KEY
Value: re_31x9a1Tb_PfA8tWnfuvLqxyqbCcwq9dRV
Environments: ✓ Production ✓ Preview ✓ Development
```

```
Variable Name: CONTACT_EMAIL
Value: info@acroniq.co.uk
Environments: ✓ Production ✓ Preview ✓ Development
```

3. **Redeploy**
   - Go to **Deployments** tab
   - Click the **...** menu on the latest deployment
   - Click **Redeploy**
   - OR just wait for the automatic deployment from the latest git push

### What This Fixes:

- ✅ Build will complete successfully
- ✅ CMS API routes will work
- ✅ Supabase connection will be established
- ✅ Email functionality will work
- ✅ Pricing page and all features will be live

### Why This Happened:

- Your local `.env.local` file has these variables → works locally
- Vercel doesn't have access to your local files → needs them added manually
- During build, Next.js tries to connect to Supabase → fails without env vars

### Security Note:

The `NEXT_PUBLIC_*` variables are safe to expose (they're public).
The `SUPABASE_SERVICE_ROLE_KEY` should ONLY be used server-side (API routes).

---

**After adding these variables, your site will deploy successfully!**
