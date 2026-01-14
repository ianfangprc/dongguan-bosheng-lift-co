import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Icons } from '../components/Icon';
import SEO from '../components/SEO';
import { NewsItem } from '../types';
import { ALL_NEWS_DATA, COMPANY_NAME } from '../constants';

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    // Search in the combined data source
    const foundNews = ALL_NEWS_DATA.find(n => n.id === id);
    if (foundNews) {
      setNews(foundNews);
    } else {
      // If news not found, user might be looking for something else or URL is wrong
    }
  }, [id]);

  if (!news) {
    return (
      <div className="pt-32 min-h-screen bg-industrial-900 text-center flex flex-col items-center justify-center">
        <Icons.FileText size={48} className="text-gray-600 mb-4" />
        <h1 className="text-2xl text-white mb-4 font-bold">文章未找到</h1>
        <p className="text-gray-400 mb-8">您访问的资讯可能已被移除或链接不正确。</p>
        <button onClick={() => navigate('/news')} className="px-6 py-2 bg-industrial-accent text-white rounded-lg hover:bg-industrial-accentHover transition-colors font-bold flex items-center gap-2">
          <Icons.ArrowLeft size={16} /> 返回资讯列表
        </button>
      </div>
    );
  }

  // SEO Schema for NewsArticle
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": news.title,
    "image": news.imageUrl ? [window.location.origin + news.imageUrl] : [],
    "datePublished": news.date,
    "dateModified": news.date, 
    "author": [{
      "@type": "Organization",
      "name": news.source || COMPANY_NAME
    }],
    "publisher": {
      "@type": "Organization",
      "name": COMPANY_NAME,
      "logo": {
        "@type": "ImageObject",
        "url": window.location.origin + "/logo.png" 
      }
    },
    "description": news.summary
  };

  return (
    <div className="pt-24 min-h-screen bg-industrial-900 text-slate-50">
      <SEO 
        title={news.title} 
        description={news.summary}
        type="article"
        image={news.imageUrl}
        schema={articleSchema}
      />

      {/* Breadcrumb / Nav */}
      <div className="max-w-4xl mx-auto px-4 mb-8">
        <Link to="/news" className="inline-flex items-center gap-2 text-gray-400 hover:text-industrial-accent transition-colors mb-6 text-sm">
          <Icons.ChevronLeft size={16} /> 返回资讯列表
        </Link>
      </div>

      <article className="max-w-4xl mx-auto px-4 pb-20">
        {/* Header */}
        <header className="mb-10 text-center border-b border-industrial-800 pb-10">
          <div className={`inline-block px-3 py-1 text-xs font-bold rounded mb-4 ${
             news.category === 'company' ? 'bg-industrial-accent text-white' : 'bg-industrial-800 text-gray-300 border border-industrial-700'
          }`}>
             {news.source}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            {news.title}
          </h1>
          <div className="flex items-center justify-center gap-6 text-sm text-gray-400">
             <span className="flex items-center gap-1"><Icons.Clock size={14} /> {news.date}</span>
             <span className="flex items-center gap-1"><Icons.PenTool size={14} /> 编辑: 博升宣传部</span>
          </div>
        </header>

        {/* Video Player (If videoUrl exists) */}
        {news.videoUrl && (
           <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-industrial-800 bg-black aspect-video relative group">
              <video 
                 controls 
                 className="w-full h-full object-contain"
                 poster={news.imageUrl} // Use the article image as poster
              >
                 <source src={news.videoUrl} type="video/mp4" />
                 您的浏览器不支持视频播放。
              </video>
           </div>
        )}

        {/* Featured Image (Only show if no video, or if we want both. 
            Strategy: If video exists, hide featured image to avoid redundancy, 
            unless it's purely decorative. Let's hide if video exists to prioritize video.) 
        */}
        {news.imageUrl && !news.videoUrl && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-industrial-800">
            <img src={news.imageUrl} alt={news.title} className="w-full h-auto object-cover" />
          </div>
        )}

        {/* Content Body */}
        <div 
          className="prose prose-invert prose-lg max-w-none 
          prose-headings:text-white prose-p:text-gray-300 prose-p:leading-loose prose-p:text-justify
          prose-strong:text-white prose-strong:font-bold
          prose-img:rounded-xl prose-img:shadow-lg prose-a:text-industrial-accent hover:prose-a:text-white
          prose-ul:marker:text-industrial-accent
          prose-blockquote:border-l-4 prose-blockquote:border-industrial-accent prose-blockquote:bg-industrial-800/30 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:text-gray-200 prose-blockquote:not-italic prose-blockquote:font-light"
          dangerouslySetInnerHTML={{ __html: news.content || `<p>${news.summary}</p>` }} 
        >
        </div>

        {/* Footer Actions */}
        <div className="mt-16 pt-10 border-t border-industrial-800 flex justify-between items-center">
            <div className="text-sm text-gray-500">
               本文仅代表作者观点，转载请注明出处。
            </div>
            <div className="flex gap-4">
               {/* Share buttons simulated */}
               <button className="p-2 bg-industrial-800 rounded-full text-gray-400 hover:text-white hover:bg-green-600 transition-colors" title="分享到微信">
                  <Icons.MessageSquare size={18} />
               </button>
               <button className="p-2 bg-industrial-800 rounded-full text-gray-400 hover:text-white hover:bg-blue-600 transition-colors" title="复制链接" onClick={() => {
                  navigator.clipboard.writeText(window.location.href);
                  alert('链接已复制');
               }}>
                  <Icons.ExternalLink size={18} />
               </button>
            </div>
        </div>
      </article>

    </div>
  );
};

export default NewsDetail;