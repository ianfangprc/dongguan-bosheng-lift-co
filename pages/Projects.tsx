
import React from 'react';
import { PROJECTS } from '../constants';
import { IMAGES } from '../images';
import { Icons } from '../components/Icon';
import SEO from '../components/SEO';

const Projects: React.FC = () => {
  return (
    <div className="pt-20 min-h-screen bg-industrial-900 text-slate-50 font-sans">
      <SEO 
        title="工程案例 - 成功项目展示" 
        description="博升电梯在东莞及周边地区拥有丰富的项目经验，服务客户涵盖大型商业中心、高端住宅小区、工业园区等。查看我们的维保与安装案例。"
        keywords={['电梯工程', '电梯安装案例', '东莞国贸中心电梯', '松山湖电梯维保', '小区电梯改造案例']}
      />

      {/* Hero Section */}
      <div className="relative py-24 md:py-32 border-b border-industrial-700 overflow-hidden">
        <div className="absolute inset-0 z-0">
           <img 
             src={IMAGES.BG_PROJECTS}
             alt="City Architecture Background"
             className="w-full h-full object-cover opacity-60"
           />
           <div className="absolute inset-0 bg-industrial-900/80 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-transparent to-industrial-900/50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight drop-shadow-xl">
            工程案例
          </h1>
          <div className="w-20 h-1.5 bg-industrial-accent mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            见证品质，铸就经典。我们在东莞及周边地区拥有丰富的项目经验。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {PROJECTS.map((project) => (
            <div key={project.id} className="group relative bg-industrial-900 rounded-2xl overflow-hidden border border-industrial-700 hover:border-industrial-accent transition-all duration-300 shadow-xl hover:-translate-y-1">
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-industrial-900/40 to-transparent opacity-90"></div>
                
                {/* Badge Overlay */}
                <div className="absolute top-4 right-4">
                  <span className="inline-block px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-bold uppercase tracking-wider rounded-lg">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="mb-4">
                  <div className="text-industrial-metal inline-flex items-center gap-2 text-sm bg-industrial-900/80 px-3 py-1 rounded-full backdrop-blur-md border border-industrial-700 mb-3">
                    <Icons.MapPin size={14} className="text-industrial-accent" /> {project.location}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-industrial-accent transition-colors tracking-wide">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-400 text-sm md:text-base line-clamp-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 font-light leading-relaxed border-t border-industrial-700 pt-4 mt-4">
                  该项目包含电梯设备的日常维护、安全巡检以及应急响应服务，确保了场所垂直交通的绝对安全。
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
