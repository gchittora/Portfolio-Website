# Deployment Guide

This guide will help you deploy your portfolio website to Vercel (recommended) or other platforms.

## 🚀 Vercel Deployment (Recommended)

Vercel is the easiest and most reliable way to deploy your Next.js portfolio.

### Step 1: Prepare Your Repository

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio commit"
   ```

2. **Push to GitHub**:
   - Create a new repository on GitHub
   - Add the remote origin:
     ```bash
     git remote add origin https://github.com/yourusername/portfolio.git
     git push -u origin main
     ```

### Step 2: Deploy to Vercel

1. **Visit Vercel**: Go to [vercel.com](https://vercel.com)
2. **Sign up/Login** with your GitHub account
3. **Import Project**: Click "New Project" and select your portfolio repository
4. **Configure**: 
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
5. **Deploy**: Click "Deploy" and wait for the build to complete

### Step 3: Custom Domain (Optional)

1. **Buy a domain** from any registrar (Namecheap, GoDaddy, etc.)
2. **Add domain in Vercel**:
   - Go to your project dashboard
   - Navigate to "Domains"
   - Add your custom domain
   - Follow the DNS configuration instructions

## 🔧 Environment Variables

Set up environment variables in Vercel dashboard:

1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add the following variables:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
CONTACT_EMAIL=your.email@example.com
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id (optional)
```

## 📱 Alternative Deployment Options

### Netlify

1. **Connect Repository**: Link your GitHub repo to Netlify
2. **Build Settings**:
   - Build command: `npm run build`
   - Publish directory: `out`
3. **Add to next.config.js**:
   ```javascript
   const nextConfig = {
     output: 'export',
     trailingSlash: true,
     images: {
       unoptimized: true
     }
   }
   ```

### GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Update package.json**:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d out"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

## 🔄 Automatic Deployment

Your portfolio is set up for automatic deployment:

- **Every push to main branch** triggers a new deployment
- **Preview deployments** for pull requests
- **Instant rollbacks** if needed

## 📊 Analytics Setup

### Google Analytics

1. **Get tracking ID** from Google Analytics
2. **Add to environment variables**:
   ```env
   NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
   ```

3. **Add tracking code** to `app/layout.tsx`:
   ```tsx
   import Script from 'next/script'
   
   // Add inside the component
   {process.env.NEXT_PUBLIC_GA_ID && (
     <>
       <Script
         src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
         strategy="afterInteractive"
       />
       <Script id="google-analytics" strategy="afterInteractive">
         {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
           gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
         `}
       </Script>
     </>
   )}
   ```

## 🛠️ Performance Optimization

### Image Optimization

1. **Add images to `/public` folder**
2. **Use Next.js Image component**:
   ```tsx
   import Image from 'next/image'
   
   <Image
     src="/profile.jpg"
     alt="Profile"
     width={400}
     height={400}
     priority
   />
   ```

### SEO Optimization

Your portfolio includes:
- ✅ Meta tags for social sharing
- ✅ Structured data
- ✅ Sitemap generation
- ✅ Robots.txt

## 🔐 Security Headers

Add security headers in `next.config.js`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ]
  },
}
```

## 📈 Monitoring

### Vercel Analytics

1. **Enable in Vercel dashboard**
2. **Add to your project**:
   ```bash
   npm install @vercel/analytics
   ```

3. **Add to layout**:
   ```tsx
   import { Analytics } from '@vercel/analytics/react'
   
   // Add before closing </body>
   <Analytics />
   ```

## 🚨 Troubleshooting

### Common Issues

1. **Build Failures**:
   - Check console for errors
   - Ensure all dependencies are installed
   - Verify TypeScript errors

2. **Images Not Loading**:
   - Check image paths are correct
   - Ensure images are in `/public` folder
   - Verify Next.js Image component usage

3. **Styling Issues**:
   - Clear browser cache
   - Check Tailwind CSS build process
   - Verify custom CSS imports

### Build Commands

```bash
# Clean build
rm -rf .next && npm run build

# Test production build locally
npm run build && npm start

# Check for TypeScript errors
npx tsc --noEmit
```

## 🎯 Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify mobile responsiveness
- [ ] Check contact form submission
- [ ] Test resume download link
- [ ] Validate SEO meta tags
- [ ] Confirm analytics tracking
- [ ] Test performance with Lighthouse
- [ ] Check accessibility compliance

## 🔄 Maintenance

### Regular Updates

1. **Weekly**: Update blog content
2. **Monthly**: Review and update project information
3. **Quarterly**: Update resume and skills
4. **Annually**: Review design and add new features

### Content Updates

To update content:
1. Edit the relevant page files
2. Commit and push changes
3. Vercel automatically deploys updates

Your portfolio is now live and ready to showcase your work! 🎉

---

**Need Help?** 
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
- [Contact for support](mailto:garvit.chittora@example.com)
