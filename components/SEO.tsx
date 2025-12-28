import React from 'react';
import { Helmet } from 'react-helmet-async';
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
  const currentUrl = window.location.origin + location.pathname;
  
  // Default values
  const defaultDesc = "东莞博升电梯有限公司专注于电梯销售、安装、维修、保养及老旧梯改造服务。24小时紧急救援，持证上岗，守护您的垂直出行安全。";
  const finalDesc = description || defaultDesc;
  const ogImage = image || `${window.location.origin}/logo.png`;
  
  // Default keywords if none provided
  const defaultKeywords = ['东莞电梯', '电梯维保', '电梯维修', '电梯公司', '博升电梯', '特种设备'];
  const combinedKeywords = keywords ? [...keywords, ...defaultKeywords] : defaultKeywords;
  const keywordsString = Array.from(new Set(combinedKeywords)).join(', ');

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={finalDesc} />
      <meta name="keywords" content={keywordsString} />

      {/* Open Graph / Facebook / WeChat Shared Links */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={COMPANY_NAME} />

      {/* Canonical Link */}
      <link rel="canonical" href={currentUrl} />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;