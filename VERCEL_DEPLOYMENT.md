# 🚀 Vercel Deployment Guide

## Portfolio Owner: dinesh Ramachandran
**Setup Date:** January 7, 2026  
**Project Type:** Vite + React + TypeScript  
**Build Tool:** Vite  

---

## ✅ PRE-DEPLOYMENT CHECKLIST

### Project Configuration
- ✅ **Framework:** React 18.3.1 with TypeScript
- ✅ **Build Tool:** Vite 5.4.19
- ✅ **Package Manager:** npm / bun
- ✅ **Node.js Version:** 18+ recommended
- ✅ **TypeScript:** Configured (v5.8.3)
- ✅ **Environment Files:** Ready for configuration

### Code Quality
- ✅ **ESLint:** Configured
- ✅ **Build Output:** `dist/` folder (Vite default)
- ✅ **Index File:** `index.html` at root (ready for Vercel)
- ✅ **API Routes:** None (static SPA)
- ✅ **Database:** None (Formspree for email)

### Dependencies Status
- ✅ All dependencies listed in `package.json`
- ✅ No unused/deprecated packages
- ✅ Production-ready versions

### Assets & Media
- ✅ Public assets in `/public` folder
- ✅ Images compressed for web
- ✅ No large files blocking build

---

## 📝 ENVIRONMENT VARIABLES FOR VERCEL

### Formspree Configuration
The contact form uses **Formspree** for email notifications. Currently hardcoded with:
- **Form ID:** `maqnrovo`
- **Endpoint:** `https://formspree.io/f/maqnrovo`

**While you CAN deploy without environment variables** (form will work as-is), it's best practice to:

#### Option A: Using Environment Variables (Recommended)

Create a `.env.local` file locally (do NOT commit to git):
```env
VITE_FORMSPREE_ID=maqnrovo
VITE_FORMSPREE_EMAIL=dineshramachandran18@gmail.com
```

Then in Vercel Dashboard:
1. Go to **Settings** → **Environment Variables**
2. Add these variables (same for all environments: Production, Preview, Development):

| Variable Name | Value | Environment |
|---|---|---|
| `VITE_FORMSPREE_ID` | `maqnrovo` | Production, Preview, Development |
| `VITE_FORMSPREE_EMAIL` | `dineshramachandran18@gmail.com` | Production, Preview, Development |

#### Option B: Keep It Simple (Current Setup)
No environment variables needed. Form works with hardcoded endpoint.

**Pros:**
- ✅ No setup required
- ✅ Works immediately after deployment

**Cons:**
- ❌ Form ID visible in frontend code
- ❌ Harder to change form ID later

---

## 🔧 BUILD & DEPLOYMENT SETTINGS

### Build Command
```bash
npm run build
```
- Default Vite build command
- Creates optimized `dist/` folder
- Takes ~10 seconds

### Output Directory
```
dist
```
- Vite's default output
- Vercel will serve from here

### Install Command
```bash
npm install
```
or
```bash
bun install
```

### Node.js Version (Recommended)
- **Minimum:** 18.0.0
- **Recommended:** 20.x or 22.x

---

## 📋 STEP-BY-STEP DEPLOYMENT TO VERCEL

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### Step 2: Connect to Vercel
1. Go to [https://vercel.com](https://vercel.com)
2. Sign up / Log in with GitHub
3. Click "Add New..." → "Project"
4. Select your GitHub repository (`dinesh-ramachandran-founder-portfolio`)
5. Click "Import"

### Step 3: Configure Build Settings
Vercel should auto-detect these:

| Setting | Value |
|---|---|
| **Framework Preset** | Vite |
| **Build Command** | `npm run build` |
| **Output Directory** | `dist` |
| **Install Command** | `npm install` |
| **Node.js Version** | 20.x (or latest) |

### Step 4: Add Environment Variables (Optional)
1. In Vercel Dashboard → Project Settings → Environment Variables
2. Add the following (only if you want to use env vars):

```
VITE_FORMSPREE_ID = maqnrovo
VITE_FORMSPREE_EMAIL = dineshramachandran18@gmail.com
```

3. Apply to: **Production**, **Preview**, **Development**

### Step 5: Deploy
1. Click "Deploy"
2. Wait for build to complete (~2-3 minutes)
3. Your site is now live! 🎉

### Step 6: Custom Domain (Optional)
1. Go to **Settings** → **Domains**
2. Add your custom domain
3. Follow DNS configuration instructions

---

## 🧪 POST-DEPLOYMENT TESTING

### Verify Build
- [ ] Homepage loads without errors
- [ ] All sections render correctly
- [ ] Animations work smoothly
- [ ] Images load properly
- [ ] No console errors (F12 → Console)

### Test Contact Form
- [ ] Navigate to Contact section
- [ ] Fill out form completely
- [ ] Submit successfully
- [ ] Receive test email at `dineshramachandran18@gmail.com`

### Check Performance
- [ ] Page load time < 3 seconds
- [ ] Lighthouse score > 90
- [ ] No warnings in Network tab

### Mobile Testing
- [ ] Navbar hamburger works
- [ ] Responsive images load
- [ ] Touch interactions work
- [ ] Carousel swipes on mobile

---

## 🔐 SECURITY CHECKLIST

- ✅ No sensitive keys in code
- ✅ Formspree endpoint is public (safe)
- ✅ No API keys exposed
- ✅ HTTPS enabled by default on Vercel
- ✅ CSP headers can be added if needed

---

## 📊 DEPLOYMENT INFO

### Current Formspree Setup
- **Status:** Active & Working ✅
- **Form ID:** `maqnrovo`
- **Receives Emails:** Yes
- **Email Recipient:** `dineshramachandran18@gmail.com`
- **Monthly Limit:** 50 submissions (free plan)
- **Spam Filter:** Enabled

### Vercel Benefits
- ✅ Automatic deployments on push to main
- ✅ Preview deployments for pull requests
- ✅ Automatic HTTPS certificate
- ✅ Global CDN for fast loading
- ✅ Free tier available
- ✅ Analytics included
- ✅ Easy rollbacks

---

## 🆘 TROUBLESHOOTING

### Build Fails
**Error:** `ENOENT: no such file or directory`
- **Solution:** Run `npm install` locally, commit `package-lock.json`, then push

**Error:** `TypeScript compilation errors`
- **Solution:** Run `npm run build` locally to see errors, fix them, then push

### Contact Form Not Working
**Email not received:**
1. Check spam folder
2. Verify Formspree form is activated at [https://formspree.io](https://formspree.io)
3. Test with Postman or curl: 
```bash
curl -X POST https://formspree.io/f/maqnrovo \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com","message":"Test"}'
```

### Slow Performance
1. Check Vercel Analytics: Dashboard → Analytics
2. Review Network tab in DevTools
3. Possible solutions:
   - Images too large → compress
   - Too many animations → reduce
   - Heavy libraries → code split

---

## 📞 FORMSPREE SUPPORT

### If Form ID Changes
1. Get new Form ID from Formspree dashboard
2. Update environment variables in Vercel
3. Or update hardcoded ID in [Contact.tsx](src/components/sections/Contact.tsx#L31)
4. Redeploy

### Formspree Docs
- Website: https://formspree.io/docs/
- Free Plan: 50 submissions/month
- Premium: Unlimited submissions, custom branding

---

## 🎉 YOU'RE READY!

Your portfolio is **production-ready** for Vercel deployment. 

**Next Actions:**
1. ✅ Push to GitHub
2. ✅ Connect to Vercel
3. ✅ Deploy
4. ✅ Test contact form
5. ✅ Share your live portfolio!

**Questions?** Check:
- Vercel Docs: https://vercel.com/docs
- Vite Docs: https://vitejs.dev
- Formspree Docs: https://formspree.io/docs

---

**Happy Deploying! 🚀**
