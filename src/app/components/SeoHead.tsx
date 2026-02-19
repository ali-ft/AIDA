import { useEffect } from 'react';

const SITE_URL = 'https://www.aidaedu.ae';
const DEFAULT_IMAGE = '/assets/aida-logo.png';

export interface SeoHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
  noindex?: boolean;
  article?: {
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    section?: string;
    tags?: string[];
  };
}

function getAbsoluteUrl(path: string): string {
  const fullPath = path.startsWith('/') ? path : `/${path}`;
  return `${SITE_URL}${fullPath}`;
}

function getImageUrl(image?: string): string {
  if (!image) return getAbsoluteUrl(DEFAULT_IMAGE);
  return image.startsWith('http') ? image : getAbsoluteUrl(image.startsWith('/') ? image.slice(1) : image);
}

const truncateDescription = (text: string, maxLength = 160): string => {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength - 3).trim() + '...';
};

export function SeoHead({
  title = 'AIDA - International AI Training Center',
  description = 'AIDA Training Center: Premier destination for comprehensive AI education. Empower your C-levels, managers, and employees with robust AI skills for sustainable growth.',
  keywords = 'AI training, artificial intelligence, machine learning, enterprise AI, AI education, Dubai AI training, UAE AI courses, C-level AI training, workforce AI skills',
  image,
  url,
  type = 'website',
  noindex = false,
  article,
}: SeoHeadProps) {
  useEffect(() => {
    const metaDescription = truncateDescription(description);
    const fullUrl = url ? getAbsoluteUrl(url) : SITE_URL;
    const imageUrl = getImageUrl(image);

    const tags: { name: string; content: string; property?: string }[] = [
      { name: 'description', content: metaDescription },
      { name: 'keywords', content: keywords },
      { name: 'og:title', property: 'og:title', content: title },
      { name: 'og:description', property: 'og:description', content: metaDescription },
      { name: 'og:image', property: 'og:image', content: imageUrl },
      { name: 'og:url', property: 'og:url', content: fullUrl },
      { name: 'og:type', property: 'og:type', content: type },
      { name: 'og:site_name', property: 'og:site_name', content: 'AIDA AI Training Center' },
      { name: 'og:locale', property: 'og:locale', content: 'en_US' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: metaDescription },
      { name: 'twitter:image', content: imageUrl },
    ];

    if (noindex) {
      tags.push({ name: 'robots', content: 'noindex, nofollow' });
    } else {
      tags.push({ name: 'robots', content: 'index, follow' });
    }

    if (type === 'article' && article) {
      if (article.publishedTime) tags.push({ name: 'article:published_time', property: 'article:published_time', content: article.publishedTime });
      if (article.modifiedTime) tags.push({ name: 'article:modified_time', property: 'article:modified_time', content: article.modifiedTime });
      if (article.author) tags.push({ name: 'article:author', property: 'article:author', content: article.author });
      if (article.section) tags.push({ name: 'article:section', property: 'article:section', content: article.section });
      article.tags?.forEach((tag) => tags.push({ name: 'article:tag', property: 'article:tag', content: tag }));
    }
    document.title = title;

    const existingMeta = document.querySelectorAll('meta[data-seo]');
    existingMeta.forEach((el) => el.remove());

    tags.forEach((tag) => {
      const meta = document.createElement('meta');
      if (tag.property) {
        meta.setAttribute('property', tag.property);
      } else {
        meta.setAttribute('name', tag.name);
      }
      meta.setAttribute('content', tag.content);
      meta.setAttribute('data-seo', 'true');
      document.head.appendChild(meta);
    });

    const linkCanonical = document.querySelector('link[rel="canonical"]');
    if (linkCanonical) linkCanonical.remove();
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = fullUrl;
    document.head.appendChild(canonical);

    return () => {
      document.querySelectorAll('meta[data-seo]').forEach((el) => el.remove());
      const canonicalEl = document.querySelector('link[rel="canonical"]');
      if (canonicalEl) canonicalEl.remove();
    };
  }, [title, description, keywords, image, url, type, noindex, article]);

  return null;
}

