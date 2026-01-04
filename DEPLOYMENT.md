# Deployment Guide - GitHub Pages

## Step-by-Step Deployment Instructions

### Step 1: Enable GitHub Pages (REQUIRED - Do this FIRST!)

**This is the most important step. The workflow will fail without this.**

1. Go to your repository on GitHub: `https://github.com/[your-username]/AIDA/settings/pages`
2. Click on **Settings** (top menu)
3. Click on **Pages** (left sidebar)
4. Under **"Source"**, select **"Deploy from a branch"**
5. Select branch: **`gh-pages`** (this will be created automatically)
6. Select folder: **`/ (root)`**
7. Click **"Save"**

**Note**: The workflow will automatically create the `gh-pages` branch on first run. After the first successful deployment, your site will be live!

### Step 2: Push Your Code

```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 3: Check Deployment

1. Go to **Actions** tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually 2-5 minutes)
4. Once it shows a green checkmark ✅, your site is live!

### Step 4: Access Your Site

Your site will be available at:
```
https://[your-username].github.io/AIDA/
```

For example, if your username is `ali-ft`:
```
https://ali-ft.github.io/AIDA/
```

## Troubleshooting

### Error: "Not Found" or "Pages not enabled"

**Solution**: Make sure you completed Step 1 above. Pages MUST be enabled in Settings before the workflow runs.

### Error: "Cannot find module @rollup/rollup-linux-x64-gnu"

**Solution**: This should be fixed in the workflow. If it still happens, the workflow will retry automatically.

### Site shows 404 after deployment

**Solution**: 
- Wait 1-2 minutes for DNS propagation
- Clear your browser cache
- Try accessing the site in incognito mode
- Make sure the URL ends with `/` (e.g., `https://username.github.io/AIDA/`)

## Custom Domain Setup (Optional)

If you want to use a custom domain (e.g., `example.com`):

1. Create a file `public/CNAME` with your domain:
   ```
   example.com
   ```

2. Update `.github/workflows/deploy.yml` line 40:
   ```yaml
   VITE_BASE_PATH: /
   ```
   (Change from `/AIDA/` to `/`)

3. Configure your DNS:
   - Add a CNAME record pointing to `[username].github.io`
   - Or add A records pointing to GitHub Pages IPs

4. Push and wait for DNS propagation (can take up to 24 hours)

