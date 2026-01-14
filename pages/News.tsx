
import React, { useState } from 'react';
import { ALL_NEWS_DATA } from '../constants';
import { IMAGES } from '../images';
import { Icons } from '../components/Icon';
import SEO from '../components/SEO';
import { NewsItem } from '../types';

const News: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'industry' | 'company'>('company');

  const displayedNews = ALL_NEWS_DATA.filter(item => {
    // If item doesn't have a category, assume it's industry (for backward compatibility)
    const category = item.category || 'industry';
    return category === activeTab;
  });

  return (
    <div className="pt-20 min-h-screen bg-industrial-900 text-slate-50 font-sans">
      <SEO 
        title="电梯行业资讯 - 特种设备法规_电梯安全知识_博升动态" 
        description="关注电梯行业最新动态，提供行业法规解读、技术趋势分析及安全知识科普。博升电梯为您实时汇编最有价值的行业信息，助您了解电梯安全。"
        keywords={['电梯行业新闻', '特种设备法规', '电梯安全知识', '电梯技术动态', '加装电梯政策', '博升电梯新闻']}
      />

      {/* Hero Section */}
      <div className="relative py-24 md:py-32 border-b border-industrial-700/50 overflow-hidden">
         <div className="absolute inset-0 z-0">
            <img 
              src={IMAGES.BG_NEWS}
              alt="Industry News Background"
              className="w-full h-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-industrial-900/90"></div>
            <div className="absolute inset-0 opacity-10 bg-[linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000),linear-gradient(45deg,#000_25%,transparent_25%,transparent_75%,#000_75%,#000)] [background-size:20px_20px] [background-position:0_0,10px_10px]"></div>
         </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight drop-shadow-xl">
            资讯中心
          </h1>
          <div className="w-20 h-1.5 bg-industrial-accent mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            洞察行业趋势，聚焦政策法规，分享博升动态。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 space-y-12">
        
        {/* Tabs Control */}
        <div className="flex justify-center mb-12">
           <div className="inline-flex bg-industrial-800 p-1 rounded-xl border border-industrial-700">
              <button 
                 onClick={() => setActiveTab('company')}
                 className={`px-6 py-3 rounded-lg text-sm md:text-base font-bold transition-all duration-300 flex items-center gap-2 ${
                    activeTab === 'company' 
                    ? 'bg-industrial-accent text-white shadow-lg' 
                    : 'text-gray-400 hover:text-white'
                  }`}
              >
                 <Icons.Building2 size={18} /> 公司资讯
              </button>
              <button 
                onClick={() => setActiveTab('industry')}
                className={`px-6 py-3 rounded-lg text-sm md:text-base font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeTab === 'industry' 
                  ? 'bg-industrial-accent text-white shadow-lg' 
                  : 'text-gray-400 hover:text-white'
                }`}
              >
                 <Icons.Globe size={18} /> 行业新闻
              </button>
           </div>
        </div>

        <section className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-center gap-4 mb-10">
            <div className="p-3 bg-industrial-accent/10 rounded-xl text-industrial-accent border border-industrial-accent/20">
               {activeTab === 'industry' ? <Icons.ExternalLink size={28} /> : <Icons.Clapperboard size={28} />}
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                {activeTab === 'industry' ? '行业新闻' : '博升动态'}
              </h2>
              <p className="text-gray-400 text-sm mt-1">
                 {activeTab === 'industry' ? '实时汇编最有价值的行业动态' : '记录博升成长的每一个脚印'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             {displayedNews.map((item) => (
               <NewsCard key={item.id} item={item} />
             ))}
             {displayedNews.length === 0 && (
                <div className="col-span-full py-20 text-center text-gray-500 bg-industrial-800/30 rounded-2xl border border-dashed border-industrial-700">
                   暂无相关资讯
                </div>
             )}
          </div>
        </section>

      </div>
    </div>
  );
};

// Extracted Card Component for cleaner code
const NewsCard: React.FC<{ item: NewsItem }> = ({ item }) => {
  // Determine if it's an external link or internal route
  const isExternal = !!item.externalUrl;
  const linkProps = isExternal 
    ? { href: item.externalUrl, target: "_blank", rel: "noopener noreferrer" }
    : { href: `/news/${item.id}` }; // Using href for simple routing or use Link component if creating wrapper

  const CardContent = (
    <>
        <div className="h-56 overflow-hidden relative shrink-0">
          <img 
            src={item.imageUrl} 
            alt={item.title} 
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 transform group-hover:scale-110" 
          />
          {/* Badge for Video */}
          {item.videoUrl && (
             <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-transparent transition-all">
                <div className="w-12 h-12 rounded-full bg-industrial-accent/90 flex items-center justify-center text-white shadow-lg backdrop-blur-sm border-2 border-white/20">
                   <Icons.Play size={20} fill="currentColor" className="ml-1" />
                </div>
             </div>
          )}
          
          <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-lg text-xs font-bold text-white flex items-center gap-1.5 border border-white/10">
              {isExternal ? <Icons.ExternalLink size={12} /> : <Icons.FileText size={12} />} 
              {item.source}
          </div>
        </div>
        <div className="p-8 flex flex-col flex-grow">
            <div className="text-xs text-industrial-accent mb-4 font-mono font-bold flex items-center gap-2 tracking-wide uppercase">
              <Icons.Clock size={14} />
              {item.date}
            </div>
            <h3 className="text-xl font-bold text-white mb-4 group-hover:text-industrial-accent transition-colors line-clamp-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-base text-gray-400 line-clamp-3 leading-relaxed font-light flex-grow">
              {item.summary}
            </p>
            
            <div className="mt-6 pt-6 border-t border-industrial-700/50 flex items-center text-sm font-bold text-gray-500 group-hover:text-white transition-colors">
              阅读全文 <Icons.ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </div>
        </div>
    </>
  );

  return isExternal ? (
    <a {...linkProps} className="group flex flex-col bg-industrial-800 rounded-2xl overflow-hidden border border-industrial-700 hover:border-industrial-accent transition-all duration-300 hover:-translate-y-1 block shadow-lg h-full">
      {CardContent}
    </a>
  ) : (
    <a href={`/news/${item.id}`} className="group flex flex-col bg-industrial-800 rounded-2xl overflow-hidden border border-industrial-700 hover:border-industrial-accent transition-all duration-300 hover:-translate-y-1 block shadow-lg h-full">
      {CardContent}
    </a>
  );
};

export default News;
