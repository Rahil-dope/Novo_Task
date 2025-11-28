# NovaTasks Deployment Guide

## Quick Start (Local Development)

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Steps

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```
   This will start a local server (usually at `http://localhost:3000`)

3. **Open in Browser**
   Navigate to the URL shown in your terminal

## Deployment Options

### Option 1: Netlify (Recommended)

1. **Push to GitHub**
   - Create a new repository on GitHub
   - Push your code:
     ```bash
     git init
     git add .
     git commit -m "Initial commit"
     git remote add origin <your-repo-url>
     git push -u origin main
     ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your GitHub repository
   - Netlify will auto-detect the settings from `netlify.toml`
   - Click "Deploy"

3. **Environment Variables (Optional - for sync server)**
   If you want to use the sync server:
   - In Netlify dashboard, go to Site settings → Environment variables
   - Add:
     - `SUPABASE_URL`: Your Supabase project URL
     - `SUPABASE_SERVICE_ROLE`: Your Supabase service role key

### Option 2: Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```
   Follow the prompts to deploy

### Option 3: GitHub Pages

1. **Update Repository Settings**
   - Go to your GitHub repository
   - Settings → Pages
   - Source: Deploy from a branch
   - Branch: main, folder: / (root)

2. **Access Your Site**
   Your site will be available at `https://<username>.github.io/<repository-name>/`

### Option 4: Static File Hosting

Simply upload all files to any static hosting service:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- Any web hosting with static file support

## Optional: Sync Server Setup

The sync server is **optional**. The app works perfectly without it using localStorage.

If you want to enable cloud sync:

1. **Set up Supabase**
   - Create account at [supabase.com](https://supabase.com)
   - Create a new project
   - Create a `tasks` table with columns:
     - `id` (text, primary key)
     - `user_id` (uuid)
     - `title` (text)
     - `desc` (text)
     - `category` (text)
     - `priority` (text)
     - `status` (text)
     - `deadline` (timestamp)
     - `tags` (jsonb)
     - `created_at` (timestamp)
     - `order` (integer)
     - `color` (text)
     - `recurring` (jsonb)
     - `completed_at` (timestamp)

2. **Configure Environment Variables**
   Create `.env` file:
   ```
   SUPABASE_URL=your_supabase_url
   SUPABASE_SERVICE_ROLE=your_service_role_key
   PORT=3000
   ```

3. **Run Sync Server**
   ```bash
   npm start
   ```

4. **Deploy Sync Server**
   Deploy to:
   - Heroku
   - Railway
   - Render
   - Any Node.js hosting

## Configuration

### Custom Domain
- For Netlify: Site settings → Domain management
- For Vercel: Project settings → Domains
- For GitHub Pages: Repository settings → Pages → Custom domain

### Environment Variables
The app uses localStorage by default. No environment variables needed for basic usage.

## Troubleshooting

### Issue: Scripts not loading
- Check browser console for errors
- Ensure all files are uploaded
- Verify file paths are correct

### Issue: Sync not working
- Sync is optional - the app works without it
- Check if sync server is running
- Verify environment variables are set
- Check browser console for API errors

### Issue: Tasks not persisting
- Check if localStorage is enabled in browser
- Try clearing browser cache
- Check browser console for errors

## Performance Tips

1. **Enable Caching**
   - Most hosting providers do this automatically
   - Check your hosting provider's documentation

2. **Compress Assets**
   - Most modern hosts compress automatically
   - For custom hosting, enable gzip compression

3. **Use CDN**
   - Netlify and Vercel include CDN automatically
   - For other hosts, consider Cloudflare

## Security Notes

- The app stores data in localStorage (client-side only)
- No sensitive data is transmitted unless you enable sync
- If using sync server, ensure HTTPS is enabled
- Keep your Supabase credentials secure

## Support

For issues or questions:
- Check the README.md
- Review browser console for errors
- Ensure all dependencies are installed
