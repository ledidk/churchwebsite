# Sanity CMS Setup & Content Migration Guide

## ✅ COMPLETED STEPS

### Phase 10: Dependencies Installation ✅
- [x] Main project dependencies installed (1382 packages)
- [x] Sanity Studio dependencies installing...

### Phase 11: Sanity Configuration ✅
- [x] Created `.env` file with your Sanity credentials:
  - Project ID: `l3n3axbk`
  - Dataset: `production`
- [x] Created `sanity/.env` file for Sanity Studio
- [x] Sanity Studio dependencies installing...

---

## 📋 NEXT STEPS

### Phase 12: Content Migration & Setup

Once the Sanity Studio installation completes, follow these steps:

#### Step 1: Start Sanity Studio

```bash
npm run sanity
```

This will start Sanity Studio at `http://localhost:3333`

#### Step 2: Access Sanity Studio

1. Open your browser to `http://localhost:3333`
2. Log in with your Sanity account
3. You should see the Sanity Studio interface

#### Step 3: Configure Site Settings

In Sanity Studio, create your **Site Settings** (this is a singleton document):

1. Click on "Site Settings" in the left sidebar
2. Fill in the following:

**Church Information:**
- Church Name (French): `Église de Gatineau`
- Church Name (English): `Gatineau Church`
- Logo: Upload your church logo (optional)

**Navigation Links:**
Add these navigation items:
- Home: `/` (enabled)
- About: `/about` (enabled)
- Services: `/services` (enabled)
- Events: `/events` (enabled)
- Ministries: `/ministries` (enabled)
- Contact: `/contact` (enabled)
- Donate: `/donate` (enabled, mark as "Donate Button")

**Contact Information:**
- Address (FR): `123 Rue Principale, Gatineau, QC J8X 1A1`
- Address (EN): `123 Main Street, Gatineau, QC J8X 1A1`
- Phone: `(819) 555-0123`
- Email: `info@eglisegatineau.ca`

**Social Media Links:**
- Facebook: Your Facebook URL
- Instagram: Your Instagram URL
- YouTube: Your YouTube URL

**Theme Colors:**
- Primary Blue: `#1e3a8a`
- Primary Blue Dark: `#1e40af`
- Secondary Gold: `#f59e0b`
- Neutral colors: Use defaults

**Footer Content:**
- Copyright Text (FR): `© 2024 Église de Gatineau. Tous droits réservés.`
- Copyright Text (EN): `© 2024 Gatineau Church. All rights reserved.`

#### Step 4: Create Page Documents

You need to create page documents for each of your existing pages. Here's what to create:

##### 1. HOME PAGE
- **Title (FR):** `Accueil`
- **Title (EN):** `Home`
- **Slug:** `home` or `index`
- **Sections:** Add sections based on your current home page content

##### 2. ABOUT PAGE
- **Title (FR):** `À Propos`
- **Title (EN):** `About`
- **Slug:** `about`
- **Sections:** 
  - Hero Section: "À Propos de Notre Église" / "About Our Church"
  - Text Section: History content
  - Text Section: Values (Love, Community, Service)
  - Text Section: Pastoral Team
  - Text Section: Vision

##### 3. SERVICES PAGE
- **Title (FR):** `Services`
- **Title (EN):** `Services`
- **Slug:** `services`
- **Sections:**
  - Hero Section
  - Services Grid Section (will pull from Services documents)

##### 4. EVENTS PAGE
- **Title (FR):** `Événements`
- **Title (EN):** `Events`
- **Slug:** `events`
- **Sections:**
  - Hero Section
  - Events Teaser Section (will pull from Events documents)

##### 5. MINISTRIES PAGE
- **Title (FR):** `Ministères`
- **Title (EN):** `Ministries`
- **Slug:** `ministries`
- **Sections:**
  - Hero Section
  - Ministries Grid Section (will pull from Ministries documents)

##### 6. CONTACT PAGE
- **Title (FR):** `Contact`
- **Title (EN):** `Contact`
- **Slug:** `contact`
- **Sections:**
  - Hero Section
  - Contact Section (will pull from Site Settings)

##### 7. DONATE PAGE
- **Title (FR):** `Faire un Don`
- **Title (EN):** `Donate`
- **Slug:** `donate`
- **Sections:**
  - Hero Section
  - Donorbox Section (configure your Donorbox iframe URL in Site Settings)

#### Step 5: Create Service Documents

Create service documents for your church services:

1. **Sunday Morning Service**
   - Title (FR): `Service Dominical`
   - Title (EN): `Sunday Service`
   - Day: `Sunday`
   - Time: `9:00 AM & 11:00 AM`
   - Description (FR): `Culte traditionnel avec musique, prédication et communion.`
   - Description (EN): `Traditional worship with music, preaching, and communion.`
   - Order: 1

2. **Sunday Evening Service**
   - Title (FR): `Service du Soir`
   - Title (EN): `Evening Service`
   - Day: `Sunday`
   - Time: `6:00 PM`
   - Description (FR): `Service plus intime avec temps de prière et étude biblique.`
   - Description (EN): `Intimate service with prayer time and Bible study.`
   - Order: 2

3. **Wednesday Prayer Meeting**
   - Title (FR): `Réunion de Prière`
   - Title (EN): `Prayer Meeting`
   - Day: `Wednesday`
   - Time: `7:00 PM`
   - Description (FR): `Temps de prière communautaire.`
   - Description (EN): `Community prayer time.`
   - Order: 3

#### Step 6: Create Ministry Documents

Create ministry documents:

1. **Youth Ministry**
   - Name (FR): `Ministère Jeunesse`
   - Name (EN): `Youth Ministry`
   - Description (FR): `Activités et programmes pour les jeunes de 12 à 18 ans.`
   - Description (EN): `Activities and programs for youth ages 12-18.`
   - Order: 1

2. **Sunday School**
   - Name (FR): `École du Dimanche`
   - Name (EN): `Sunday School`
   - Description (FR): `Programmes éducatifs pour les enfants de tous âges.`
   - Description (EN): `Educational programs for children of all ages.`
   - Order: 2

3. **Family Ministry**
   - Name (FR): `Ministère Familial`
   - Name (EN): `Family Ministry`
   - Description (FR): `Support et counseling pour les familles.`
   - Description (EN): `Support and counseling for families.`
   - Order: 3

4. **Community Outreach**
   - Name (FR): `Aide Communautaire`
   - Name (EN): `Community Outreach`
   - Description (FR): `Programmes d'aide alimentaire et assistance aux familles.`
   - Description (EN): `Food assistance programs and family support.`
   - Order: 4

#### Step 7: Create Team Member Documents

Create team member documents for your pastoral staff:

1. **Pastor Jean Dubois**
   - Name: `Jean Dubois`
   - Role (FR): `Pasteur Principal`
   - Role (EN): `Senior Pastor`
   - Bio (FR): `Avec plus de 20 ans d'expérience ministérielle...`
   - Bio (EN): `With over 20 years of ministry experience...`
   - Photo: Upload photo
   - Order: 1

2. **Pastor Marie Tremblay**
   - Name: `Marie Tremblay`
   - Role (FR): `Pasteur Associé`
   - Role (EN): `Associate Pastor`
   - Bio (FR): `Spécialisée dans les ministères familiaux...`
   - Bio (EN): `Specialized in family ministries...`
   - Photo: Upload photo
   - Order: 2

#### Step 8: Create Event Documents

Create some sample events:

1. **Sunday Worship**
   - Title (FR): `Culte Dominical`
   - Title (EN): `Sunday Worship`
   - Date: Next Sunday
   - Time: `9:00 AM`
   - Location: `Église de Gatineau`
   - Event Type: `Recurring`
   - Description: Add description

---

## 🚀 TESTING YOUR SETUP

### Step 1: Test Sanity Studio
```bash
npm run sanity
```
Visit `http://localhost:3333` and verify you can:
- See all content types
- Create and edit documents
- Save changes successfully

### Step 2: Test Astro Development Server
```bash
npm run dev
```
Visit `http://localhost:4321` and verify:
- Site loads without errors
- Navigation works
- Content from Sanity appears (if you've created it)
- Language switcher works (FR/EN)

### Step 3: Test Build
```bash
npm run build
```
This should complete without errors.

---

## 🎯 IMPORTANT NOTES

### About Your Existing Pages

Your existing static pages in `src/pages/` will continue to work as fallbacks:
- They will display if no Sanity content exists
- Once you create content in Sanity, the dynamic pages will take over
- You can keep them as backup or remove them later

### Bilingual Content

For every field in Sanity:
- **French is required** (your default language)
- **English is optional** (but recommended)
- If English is not provided, French will be used as fallback

### Donorbox Integration

To set up donations:
1. Get your Donorbox iframe URL from your Donorbox account
2. Add it to Site Settings → Donorbox Configuration
3. The donate page will automatically display the form

---

## 🆘 TROUBLESHOOTING

### Issue: Sanity Studio won't start
**Solution:** Make sure the installation completed successfully:
```bash
cd sanity
npm install
cd ..
npm run sanity
```

### Issue: Can't see content on the website
**Solution:** 
1. Make sure you've created page documents in Sanity
2. Check that the slug matches (e.g., `about` for `/about` page)
3. Verify your `.env` file has the correct project ID

### Issue: Build fails
**Solution:**
1. Check for TypeScript errors: `npx tsc --noEmit`
2. Verify all environment variables are set
3. Make sure all dependencies are installed

---

## 📞 NEXT STEPS AFTER SETUP

1. **Deploy Sanity Studio:**
   ```bash
   npm run sanity:deploy
   ```
   This gives you a hosted URL like: `https://your-project.sanity.studio`

2. **Deploy to Netlify:**
   - Connect your GitHub repository to Netlify
   - Add environment variables in Netlify dashboard
   - Deploy!

3. **Train Content Editors:**
   - Show them how to access Sanity Studio
   - Demonstrate how to edit pages
   - Explain the bilingual system

---

## ✅ CHECKLIST

- [ ] Sanity Studio dependencies installed
- [ ] Sanity Studio starts successfully
- [ ] Site Settings configured
- [ ] All 7 page documents created
- [ ] Services created
- [ ] Ministries created
- [ ] Team members created
- [ ] Events created
- [ ] Astro dev server works
- [ ] Build succeeds
- [ ] Ready for deployment!
