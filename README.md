# Église de Gatineau - Website

A bilingual (French/English) church website built with Astro and Sanity CMS.

## Overview

This website serves the Église de Gatineau community with:
- Bilingual content (French as default, English secondary)
- Content management through Sanity Studio
- Static site generation with Astro
- Netlify deployment

## Technology Stack

- **Frontend**: Astro 5.x
- **CMS**: Sanity v3
- **Deployment**: Netlify
- **Languages**: TypeScript, JavaScript

## Project Structure

```
/
├── public/              # Static assets
│   ├── favicon.svg
│   └── _redirects      # Netlify redirects
├── sanity/             # Sanity Studio
│   ├── sanity.config.ts
│   └── schemaTypes/    # Content schemas
├── scripts/            # Utility scripts
│   └── seed-sanity.mjs # Content migration script
├── src/
│   ├── components/     # Astro components
│   ├── layouts/        # Page layouts
│   ├── lib/
│   │   └── sanity/    # Sanity client & utilities
│   └── pages/         # Page routes
├── astro.config.mjs
├── netlify.toml
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+ (recommended: Node 20+)
- npm 9.6.5+
- A Sanity account (free at https://sanity.io)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ledidk/churchwebsite.git
   cd churchwebsite
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Sanity**
   
   Create a Sanity project at https://sanity.io/manage
   
   Copy `.env.example` to `.env` and add your Sanity credentials:
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env`:
   ```
   PUBLIC_SANITY_PROJECT_ID=your-project-id
   PUBLIC_SANITY_DATASET=production
   PUBLIC_SANITY_API_VERSION=2024-01-01
   PUBLIC_SANITY_USE_CDN=true
   ```

4. **Set up Sanity Studio**
   ```bash
   cd sanity
   cp .env.example .env
   ```
   
   Edit `sanity/.env`:
   ```
   SANITY_STUDIO_PROJECT_ID=your-project-id
   SANITY_STUDIO_DATASET=production
   ```

5. **Install Sanity Studio dependencies**
   ```bash
   cd sanity
   npm install
   cd ..
   ```

### Development

1. **Run Astro development server**
   ```bash
   npm run dev
   ```
   Visit http://localhost:4321

2. **Run Sanity Studio** (in a separate terminal)
   ```bash
   npm run sanity
   ```
   Visit http://localhost:3333

### Content Migration

To migrate existing content into Sanity:

1. Get a write token from https://sanity.io/manage
2. Set the token as an environment variable:
   ```bash
   export SANITY_WRITE_TOKEN=your-write-token
   ```
3. Run the migration script:
   ```bash
   node scripts/seed-sanity.mjs
   ```

**Important**: Never commit the write token to git!

## Content Management

### Accessing Sanity Studio

Church administrators can edit content through Sanity Studio:

**Local Development**: http://localhost:3333
**Production**: Deploy Sanity Studio with `npm run sanity:deploy`

### Content Types

1. **Site Settings** (Singleton)
   - Church name, logo
   - Navigation links
   - Footer content
   - Social media links
   - Contact information
   - Theme colors
   - Donorbox configuration

2. **Pages**
   - Title, slug
   - Flexible content sections
   - SEO metadata

3. **Events**
   - Title, description
   - Date/time, location
   - Event type (upcoming, recurring, annual, camp)
   - Cost and registration info

4. **Services**
   - Service title and description
   - Day and time
   - Display order

5. **Ministries**
   - Ministry name and description
   - Optional image
   - Display order

6. **Team Members**
   - Name, role, bio
   - Photo
   - Display order

### Adding a New Language

To add support for a new language (e.g., Spanish):

1. **Update Astro language config**
   
   Edit `src/lib/sanity/languages.ts`:
   ```typescript
   export const languages: Language[] = [
     { id: 'fr', title: 'Français', isDefault: true },
     { id: 'en', title: 'English', isDefault: false },
     { id: 'es', title: 'Español', isDefault: false }  // Add this
   ];
   ```

2. **Update Sanity language config**
   
   Edit `sanity/schemaTypes/languageHelper.ts`:
   ```typescript
   export const languages = [
     { id: 'fr', title: 'Français', isDefault: true },
     { id: 'en', title: 'English', isDefault: false },
     { id: 'es', title: 'Español', isDefault: false }  // Add this
   ];
   ```

3. **Redeploy Sanity Studio**
   ```bash
   npm run sanity:deploy
   ```

4. **Add translations in Sanity Studio**
   
   Edit existing content and add Spanish translations in the new language fields.

## Deployment

### Netlify Deployment

1. **Connect your repository to Netlify**
   - Go to https://app.netlify.com
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository

2. **Configure build settings**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18 (set in netlify.toml)

3. **Set environment variables in Netlify**
   
   Go to Site settings → Environment variables and add:
   ```
   PUBLIC_SANITY_PROJECT_ID=your-project-id
   PUBLIC_SANITY_DATASET=production
   PUBLIC_SANITY_API_VERSION=2024-01-01
   PUBLIC_SANITY_USE_CDN=true
   ```

4. **Deploy**
   
   Push to your main branch, and Netlify will automatically build and deploy.

### Deploy Sanity Studio

```bash
npm run sanity:deploy
```

This will give you a URL like: `https://your-project.sanity.studio`

## Donation Management

### Donorbox Integration

The website uses Donorbox for donation processing:

1. **Set up Donorbox**
   - Create a campaign at https://donorbox.org
   - Get the iframe embed URL

2. **Configure in Sanity**
   - Go to Sanity Studio
   - Edit "Site Settings"
   - Add the Donorbox iframe URL in the "Donorbox Configuration" section

3. **Important**: 
   - NO payment processing logic is in the code
   - NO API keys are stored in the repository
   - The preacher/administrator manages Donorbox separately
   - Developers have NO access to donation data

## Role Separation

### Preacher/Church Administrator
- Manages Donorbox account and campaigns
- Has full access to donation data
- Controls financial aspects

### Content Administrators
- Edit website content through Sanity Studio
- Manage pages, events, services, ministries
- Update site settings and theme
- NO access to donation processing

### Developers
- Maintain website code
- Deploy updates
- NO access to Donorbox
- NO access to donation data
- Read-only access to Sanity (public content only)

## Troubleshooting

### Build Errors

If you encounter build errors:

1. **Clear cache and reinstall**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Check Node version**
   ```bash
   node --version  # Should be 18.20.8+ or 20.3.0+
   ```

3. **Verify environment variables**
   ```bash
   cat .env
   ```

### Sanity Connection Issues

1. **Verify project ID and dataset**
   - Check https://sanity.io/manage
   - Ensure `.env` matches your project

2. **Check API version**
   - Use `2024-01-01` or later

3. **CDN issues**
   - Set `PUBLIC_SANITY_USE_CDN=false` for development
   - Use `true` for production

## Support

For technical issues:
- Check the [Astro documentation](https://docs.astro.build)
- Check the [Sanity documentation](https://www.sanity.io/docs)
- Review [Netlify documentation](https://docs.netlify.com)

For content management questions:
- Refer to the Sanity Studio interface
- Contact your website administrator

## License

Private - Église de Gatineau

## Credits

Built with ❤️ for the Gatineau community
