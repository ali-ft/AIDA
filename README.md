# پروژه AIDA - آموزش هوش مصنوعی

این یک پروژه React + TypeScript + Vite برای وب‌سایت آموزش هوش مصنوعی است.

## پیش‌نیازها

⚠️ **مهم**: این پروژه به Node.js نسخه **18 یا بالاتر** نیاز دارد.

برای بررسی نسخه Node.js خود:
```bash
node --version
```

اگر نسخه Node.js شما قدیمی است، می‌توانید از [nvm](https://github.com/nvm-sh/nvm) برای نصب نسخه جدید استفاده کنید:
```bash
nvm install 18
nvm use 18
```

- npm یا pnpm یا yarn

## نصب وابستگی‌ها

```bash
npm install
# یا
pnpm install
# یا
yarn install
```

## اجرای پروژه در حالت توسعه

```bash
npm run dev
# یا
pnpm dev
# یا
yarn dev
```

پس از اجرا، پروژه در آدرس `http://localhost:5173` در دسترس خواهد بود.

## ساخت نسخه Production

```bash
npm run build
# یا
pnpm build
# یا
yarn build
```

فایل‌های ساخته شده در پوشه `dist` قرار می‌گیرند.

## پیش‌نمایش نسخه Production

```bash
npm run preview
# یا
pnpm preview
# یا
yarn preview
```

## نکات مهم

### تصاویر Figma

این پروژه از assetهای Figma استفاده می‌کند. برای اجرای صحیح پروژه، باید تصاویر زیر را در پوشه `public/assets` قرار دهید:

- `3af554a36bafc4ceccaab5764d511d4748d7dd8c.png` - تصویر Hero
- `443853629c7abcb2010de3cdc327eb4d36d43b0e.png` - لوگو
- `c141912995381c315b691576bd3aa351ab3f89d5.png` - لوگوی Leiden
- `aec424cdf43e71558b5f42a2cfb884bc1ad5e7c5.png` - لوگوی Birmingham
- `da9036b94cc997a7ca2c9204f489fbebe8adc753.png` - لوگوی Maastricht

می‌توانید این تصاویر را از Figma export کنید و در پوشه `public/assets` قرار دهید.

## ساختار پروژه

```
AIDA/
├── src/
│   ├── app/
│   │   ├── components/     # کامپوننت‌های React
│   │   └── pages/          # صفحات اصلی
│   ├── styles/             # فایل‌های CSS و Tailwind
│   └── main.tsx            # نقطه ورود برنامه
├── public/                 # فایل‌های استاتیک
├── index.html              # فایل HTML اصلی
├── vite.config.ts          # تنظیمات Vite
└── package.json            # وابستگی‌های پروژه
```

## تکنولوژی‌های استفاده شده

- **React 18** - کتابخانه UI
- **TypeScript** - زبان برنامه‌نویسی
- **Vite** - ابزار build و dev server
- **Tailwind CSS** - فریمورک CSS
- **React Router** - مدیریت routing
- **Radix UI** - کامپوننت‌های UI
- **Motion** - انیمیشن‌ها

## دیپلوی

این پروژه را می‌توانید روی هر سرویس hosting استاتیک دیپلوی کنید:

- **Vercel**: `vercel deploy`
- **Netlify**: `netlify deploy`
- **GitHub Pages**: بعد از build، محتویات پوشه `dist` را آپلود کنید

