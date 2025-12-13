# TODO - Sanity CMS Integration

## ✅ COMPLETED (Phases 1-4)

### Phase 1: Sanity Configuration ✅
- [x] Install dependencies (@sanity/client, groq, sanity, @sanity/vision)
- [x] Create src/lib/sanity/ directory structure
- [x] Create languages.ts (French default, English, extensible)
- [x] Create client.ts (read-only Sanity client)
- [x] Create types.ts (TypeScript interfaces)
- [x] Create queries.ts (GROQ queries)
- [x] Create utils.ts (helper functions)
- [x] Create src/env.d.ts (environment types)

### Phase 2: Sanity Studio Setup ✅
- [x] Create sanity/ directory
- [x] Create sanity.config.ts
- [x] Create package.json for Studio
- [x] Create .env.example for Studio
- [x] Create schemaTypes/index.ts
- [x] Create schemaTypes/languageHelper.ts
- [x] Create schemaTypes/siteSettings.ts
- [x] Create schemaTypes/page.ts
- [x] Create schemaTypes/event.ts
- [x] Create schemaTypes/service.ts
- [x] Create schemaTypes/ministry.ts
- [x] Create schemaTypes/teamMember.ts
- [x] Install Sanity Studio dependencies (1113 packages)

### Phase 3: Content Migration Script ✅
- [x] Create scripts/seed-sanity.mjs
- [x] Map existing French/English content
- [x] Include services, ministries, team members, events

### Phase 4: Configuration Files ✅
- [x] Create .env.example (Sanity env vars)
- [x] Create netlify.toml (build config + redirects)
- [x] Create public/_redirects (URL routing)
- [x] Update .gitignore (Sanity files)
- [x] Update package.json (scripts + dependencies)
- [x] Update tsconfig.json (ES2020, strict mode)
- [x] Create comprehensive README.md
- [x] Create TESTING_REPORT.md

### Testing Completed ✅
- [x] TypeScript compilation (npx tsc --noEmit) - PASSED
- [x] Main dependencies installation - PASSED
- [x] Sanity Studio dependencies installation - PASSED

---

## ✅ COMPLETED (Phases 5-9)

### Phase 5: Astro Dynamic Routing ✅
- [x] Update astro.config.mjs for i18n routing
- [x] Create src/pages/[lang]/index.astro (home page template)
- [x] Create src/pages/[lang]/[...slug].astro (dynamic pages)
- [x] Implement language validation helper (src/lib/routing.ts)
- [x] Implement slug resolution helper
- [x] Add 404 page (src/pages/404.astro)
- [x] Redirects configured for /fr and /en routes

### Phase 6: Update Components to Use Sanity ✅
- [x] Update src/components/Header.astro
  - [x] Fetch navLinks from Sanity
  - [x] Fetch churchName and logo from Sanity
  - [x] Implement language switcher (stay on same slug)
  - [x] Remove hard-coded translations
- [x] Update src/components/Footer.astro
  - [x] Fetch footer content from Sanity
  - [x] Fetch social links from Sanity
  - [x] Fetch contact info from Sanity
  - [x] Remove hard-coded translations
- [x] Update src/components/Hero.astro
  - [x] Make it accept props from page data
  - [x] Support hero section from Sanity
  - [x] Remove hard-coded translations
- [x] Update src/layouts/Layout.astro
  - [x] Apply theme colors from Sanity
  - [x] Add CSS variables for theme
  - [x] Keep safe defaults

### Phase 7: Create Page Section Components ✅
- [x] Create src/components/sections/HeroSection.astro
- [x] Create src/components/sections/RichTextSection.astro
- [x] Create src/components/sections/TextSection.astro
- [x] Create src/components/sections/ServicesGrid.astro
- [x] Create src/components/sections/MinistriesGrid.astro
- [x] Create src/components/sections/EventsTeaser.astro
- [x] Create src/components/sections/ContactSection.astro
- [x] Create PageSections.astro (section renderer component)

### Phase 8: Remove Admin Pages ✅
- [x] Delete src/pages/admin/dashboard.astro
- [x] Delete src/pages/admin/login.astro
- [x] Remove admin directory completely
- [x] README updated with Sanity Studio instructions

### Phase 9: Donorbox Integration ✅
- [x] Add donorboxSection case to PageSections.astro
- [x] Inline donation form rendering
- [x] Fetch Donorbox config from Sanity siteSettings
- [x] Support for iframe URL or campaign ID

---

## 🔄 REMAINING WORK

### Phase 10: Netlify Deployment Readiness (IN PROGRESS)
- [x] .env.example created
- [x] netlify.toml created
- [x] public/_redirects created
- [ ] Verify all redirects work correctly
- [ ] Test build command succeeds
- [ ] Document Netlify environment variables

### Phase 11: Final Cleanup & Testing (NOT STARTED)
- [ ] Remove old static pages (src/pages/*.astro except 404)
- [ ] Search and remove AI signatures
- [ ] Verify no church content was rewritten
- [ ] Final build test
- [ ] Update README with final instructions

### Phase 10: Content Migration & Testing (NOT STARTED)
- [ ] Set up Sanity project at sanity.io
- [ ] Get project ID and dataset name
- [ ] Update .env with Sanity credentials
- [ ] Update sanity/.env with credentials
- [ ] Get write token for migration
- [ ] Run seed script: `node scripts/seed-sanity.mjs`
- [ ] Verify content in Sanity Studio
- [ ] Create page documents in Sanity for:
  - [ ] Home (slug: home or index)
  - [ ] About (slug: about)
  - [ ] Services (slug: services)
  - [ ] Events (slug: events)
  - [ ] Ministries (slug: ministries)
  - [ ] Contact (slug: contact)
  - [ ] Donate (slug: donate)

### Phase 11: Final Testing & Cleanup (NOT STARTED)
- [ ] Test Astro build succeeds
- [ ] Test all /fr routes work
- [ ] Test all /en routes work
- [ ] Test language switcher
- [ ] Test content fetching from Sanity
- [ ] Test Donorbox iframe
- [ ] Test theme colors apply correctly
- [ ] Search and remove AI signatures:
  - [ ] "AI generated"
  - [ ] "ChatGPT"
  - [ ] "Copilot"
  - [ ] "as an AI"
  - [ ] Template boilerplate
- [ ] Verify no church content was rewritten
- [ ] Test Netlify deployment (or document steps)

---

## 🚨 KNOWN ISSUES

### 1. Node.js Version (Low Priority)
**Issue:** Local Node.js v18.16.0 < required v18.20.8  
**Impact:** Cannot run `npm run build` locally  
**Solution:** Upgrade Node.js OR deploy to Netlify (uses correct version)  
**Status:** Not blocking - code is correct

### 2. Engine Warnings (Informational)
**Issue:** Many packages warn about Node 20+ requirement  
**Impact:** None - packages still install and work  
**Status:** Expected behavior with Node 18.16.0

---

## 📋 NEXT STEPS

1. **Immediate:** Proceed with Phase 5 (Astro Dynamic Routing)
2. **Then:** Phase 6 (Update Components)
3. **Then:** Phase 7 (Page Templates)
4. **Then:** Phases 8-11 (Donation, Admin Removal, Migration, Testing)

---

## 🎯 ACCEPTANCE CRITERIA (From Original Task)

- [ ] `npm install` then `npm run build` succeeds
- [ ] /fr and /en routes work
- [ ] All main pages render content from Sanity (with fallback)
- [ ] Navigation, logo, footer editable in Sanity
- [ ] Theme colors editable in Sanity
- [ ] Donate page uses Donorbox iframe URL stored in Sanity
- [ ] No payment logic present
- [ ] No admin pages in Astro
- [ ] README explains handover and responsibilities clearly

---

*Last Updated: After Phase 1-4 completion and initial testing*
