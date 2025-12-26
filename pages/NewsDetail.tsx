
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Icons } from '../components/Icon';
import SEO from '../components/SEO';
import { NewsItem } from '../types';

const COMPANY_NEWS_DATA: NewsItem[] = [];

const NewsDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [news, setNews] = useState<NewsItem | null>(null);

  useEffect(() => {
    const foundNews = COMPANY_NEWS_DATA.find(n => n.id === id);
    if (foundNews) {
      setNews(foundNews);
    } else {
      // If news not found, redirect to news list or show 404
      // For now, let's just show a not found state
    }
  }, [id]);

  if (!news) {
    return (
      <div className="pt-32 min-h-screen bg-industrial-900 text-center">
        <h1 className="text-2xl text-white mb-4">文章未找到</h1>
        <button onClick={() => navigate('/news')} className="text-industrial-accent hover:underline">
          返回资讯列表
        </button>
      </div>
    );
  }

  return (
    <div className="pt-24 min-h-screen bg-industrial-900 text-slate-50">
      <SEO 
        title={news.title} 
        description={news.summary}
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
          <div className="inline-block px-3 py-1 bg-industrial-accent text-white text-xs font-bold rounded mb-4">
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

        {/* Featured Image */}
        {news.imageUrl && (
          <div className="mb-12 rounded-2xl overflow-hidden shadow-2xl border border-industrial-800">
            <img src={news.imageUrl} alt={news.title} className="w-full h-auto object-cover" />
          </div>
        )}

        {/* Content Body */}
        <div 
          className="prose prose-invert prose-lg max-w-none 
          prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-strong:font-bold
          prose-img:rounded-xl prose-img:shadow-lg prose-a:text-industrial-accent hover:prose-a:text-white"
          dangerouslySetInnerHTML={{ __html: news.content || '' }}
        >
        </div>

        {/* Footer Actions */}
        <div className="mt-16 pt-10 border-t border-industrial-800 flex justify-between items-center">
            <div className="text-sm text-gray-500">
               本文仅代表作者观点，转载请注明出处。
            </div>
            <div className="flex gap-4">
               {/* Share buttons simulated */}
               <button className="p-2 bg-industrial-800 rounded-full text-gray-400 hover:text-white hover:bg-green-600 transition-colors">
                  <Icons.MessageSquare size={18} />
               </button>
            </div>
        </div>
      </article>

    </div>
  );
};

export default NewsDetail;