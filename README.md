# AIDA - AI Training Project

A React + TypeScript + Vite project for an AI training website.

## Prerequisites

⚠️ **Important**: This project requires Node.js version **18 or higher**.

To check your Node.js version:
```bash
node --version
```

If your Node.js version is outdated, you can use [nvm](https://github.com/nvm-sh/nvm) to install a new version:
```bash
nvm install 18
nvm use 18
```

- npm, pnpm, or yarn

## Installation

```bash
npm install
# or
pnpm install
# or
yarn install
```

## Development

```bash
npm run dev
# or
pnpm dev
# or
yarn dev
```

After running, the project will be available at `http://localhost:5173`.

## Build

```bash
npm run build
# or
pnpm build
# or
yarn build
```

The built files will be in the `dist` folder.

## Preview Production Build

```bash
npm run preview
# or
pnpm preview
# or
yarn preview
```

## Important Notes

### Figma Assets

This project uses Figma assets. To run the project correctly, you need to place the following images in the `public/assets` folder:

- `3af554a36bafc4ceccaab5764d511d4748d7dd8c.png` - Hero image
- `443853629c7abcb2010de3cdc327eb4d36d43b0e.png` - Logo
- `c141912995381c315b691576bd3aa351ab3f89d5.png` - Leiden logo
- `aec424cdf43e71558b5f42a2cfb884bc1ad5e7c5.png` - Birmingham logo
- `da9036b94cc997a7ca2c9204f489fbebe8adc753.png` - Maastricht logo

You can export these images from Figma and place them in the `public/assets` folder.

## Project Structure

```
AIDA/
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   └── pages/          # Main pages
│   ├── styles/             # CSS and Tailwind files
│   └── main.tsx            # Application entry point
├── public/                 # Static files
├── index.html              # Main HTML file
├── vite.config.ts          # Vite configuration
└── package.json            # Project dependencies
```

## Technologies Used

- **React 18** - UI library
- **TypeScript** - Programming language
- **Vite** - Build tool and dev server
- **Tailwind CSS** - CSS framework
- **React Router** - Routing management
- **Radix UI** - UI components
- **Motion** - Animations

## Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages. When you push to the `main` branch, GitHub Actions will automatically build and deploy the project.

#### Initial Setup (REQUIRED - Do this first!):

**⚠️ CRITICAL**: You MUST enable GitHub Pages BEFORE running the workflow:

1. Go to: `https://github.com/[your-username]/AIDA/settings/pages`
2. Under "Source", select **"Deploy from a branch"**
3. Select branch: **`gh-pages`** (will be created automatically on first deploy)
4. Select folder: **`/ (root)`**
5. Click **"Save"**

**Note**: The workflow will automatically create the `gh-pages` branch on the first successful deployment.

**After enabling Pages:**
- Push your code to `main` branch
- The workflow will automatically build and deploy to `gh-pages` branch
- Your site will be live at: `https://[your-username].github.io/AIDA/`

#### Deployment URL:

After the first successful deployment, your site will be available at:
```
https://[your-username].github.io/[repository-name]/
```

For example, if your username is `johndoe` and repository name is `AIDA`:
```
https://johndoe.github.io/AIDA/
```

#### Custom Domain (Optional):

If you want to use a custom domain:

1. Add a `CNAME` file in the `public` folder with your domain name (e.g., `example.com`)
2. Update the workflow file (`.github/workflows/deploy.yml`) to set `VITE_BASE_PATH: /` instead of using the repository name
3. Configure your DNS settings to point to GitHub Pages

The site will be available at: `https://[your-domain.com]`

### Other Hosting Services

You can also deploy this project to any static hosting service:

- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy`
