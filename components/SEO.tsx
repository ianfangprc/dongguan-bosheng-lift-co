import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_NAME } from '../constants';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
  image?: string; // For Open Graph Image
  type?: 'website' | 'article';
  schema?: object; // JSON-LD Structured Data
}

const SEO: React.FC<SEOProps> = ({ 
  title, 
  description, 
  keywords, 
  image, 
  type = 'website',
  schema 
}) => {
  const location = useLocation();

  useEffect(() => {
    // ----------------------------------------------------------------
    // 1. Basic Meta Tags
    // ----------------------------------------------------------------
    const fullTitle = `${title} | ${COMPANY_NAME}`;
    document.title = fullTitle;

    const defaultDesc = "东莞博升电梯有限公司专注于电梯销售、安装、维修、保养及老旧梯改造服务。24小时紧急救援，持证上岗，守护您的垂直出行安全。";
    const finalDesc = description || defaultDesc;

    // Helper to update or create meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      let element = document.querySelector(`meta[${isProperty ? 'property' : 'name'}='${name}']`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(isProperty ? 'property' : 'name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    setMetaTag('description', finalDesc);

    // Keywords
    const defaultKeywords = ['东莞电梯', '电梯维保', '电梯维修', '电梯公司', '博升电梯', '特种设备'];
    const combinedKeywords = keywords ? [...keywords, ...defaultKeywords] : defaultKeywords;
    setMetaTag('keywords', Array.from(new Set(combinedKeywords)).join(', '));

    // ----------------------------------------------------------------
    // 2. Open Graph / Social Sharing (Advanced SEO)
    // ----------------------------------------------------------------
    // Use the current full URL (Browser Router friendly)
    const currentUrl = window.location.origin + location.pathname;
    const ogImage = image || "https://www.boshenglift.com/logo.png"; // Fallback to logo or default hero

    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', finalDesc, true);
    setMetaTag('og:url', currentUrl, true);
    setMetaTag('og:type', type, true);
    setMetaTag('og:image', ogImage, true);
    setMetaTag('og:site_name', COMPANY_NAME, true);

    // ----------------------------------------------------------------
    // 3. Canonical Link (Prevents duplicate content issues)
    // ----------------------------------------------------------------
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', currentUrl);

    // ----------------------------------------------------------------
    // 4. JSON-LD Structured Data (Schema.org)
    // ----------------------------------------------------------------
    // Remove old schema scripts to prevent duplicates on route change
    const oldSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    oldSchemas.forEach(el => {
        // Only remove dynamic ones we added (optional strategy, but safer to clean up)
        if (el.getAttribute('data-dynamic') === 'true') {
            el.remove();
        }
    });

    if (schema) {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.setAttribute('data-dynamic', 'true');
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
    }

  }, [title, description, keywords, image, type, schema, location]);

  return null;
};

export default SEO;