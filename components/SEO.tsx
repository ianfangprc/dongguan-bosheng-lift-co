import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { COMPANY_NAME } from '../constants';

interface SEOProps {
  title: string;
  description?: string;
  keywords?: string[];
}

const SEO: React.FC<SEOProps> = ({ title, description, keywords }) => {
  const location = useLocation();

  useEffect(() => {
    // 1. Update Title
    // pattern: Page Name | Company Name
    document.title = `${title} | ${COMPANY_NAME}`;

    // 2. Update Meta Description
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    // Default description if none provided
    const defaultDesc = "东莞博升电梯有限公司专注于电梯销售、安装、维修、保养及老旧梯改造服务。24小时紧急救援，持证上岗，守护您的垂直出行安全。";
    metaDesc.setAttribute('content', description || defaultDesc);

    // 3. Update Meta Keywords (Important for Baidu/domestic SEO)
    let metaKeywords = document.querySelector("meta[name='keywords']");
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    const defaultKeywords = ['东莞电梯', '电梯维保', '电梯维修', '电梯公司', '博升电梯'];
    const combinedKeywords = keywords ? [...keywords, ...defaultKeywords] : defaultKeywords;
    // Deduplicate and join
    metaKeywords.setAttribute('content', Array.from(new Set(combinedKeywords)).join(', '));

    // 4. Update Canonical Link (Helps prevent duplicate content issues)
    let linkCanonical = document.querySelector("link[rel='canonical']");
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.setAttribute('rel', 'canonical');
      document.head.appendChild(linkCanonical);
    }
    // Assuming the site is hosted at the root or hash path
    const url = window.location.href.split('#')[0] + '#' + location.pathname;
    linkCanonical.setAttribute('href', url);

  }, [title, description, keywords, location]);

  return null;
};

export default SEO;