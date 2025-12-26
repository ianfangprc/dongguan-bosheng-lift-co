
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PROJECTS, HERO_SLIDES } from '../constants';
import { Icons, DynamicIcon } from '../components/Icon';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <SEO 
        title="首页 - 专业电梯维保与销售" 
        description="东莞博升电梯提供专业的电梯维修、保养、销售及安装服务。我们拥有资深技术团队，提供24小时紧急救援，是您值得信赖的垂直交通管家。"
        keywords={['电梯维修', '电梯保养', '整梯销售', '电梯安装', '东莞电梯公司']}
      />
      
      {/* ====================================================================================
          HERO SECTION
      ==================================================================================== */}
      <section className="relative h-[700px] flex items-center justify-center overflow-hidden bg-industrial-900 group">
        
        {/* Carousel Images */}
        {HERO_SLIDES.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.alt} 
              className="w-full h-full object-cover opacity-40 transform scale-105 transition-transform duration-[10000ms] ease-linear"
              style={{ transform: index === currentSlide ? 'scale(1.1)' : 'scale(1.0)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-industrial-900/90 via-industrial-900/50 to-industrial-900"></div>
          </div>
        ))}

        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/5 hover:bg-industrial-accent text-white rounded-full transition-all duration-300 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 hover:scale-110"
        >
          <Icons.ChevronLeft size={32} />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 p-3 bg-white/5 hover:bg-industrial-accent text-white rounded-full transition-all duration-300 backdrop-blur-md border border-white/10 opacity-0 group-hover:opacity-100 hover:scale-110"
        >
          <Icons.ChevronRight size={32} />
        </button>

        {/* Indicators */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {HERO_SLIDES.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide ? 'bg-industrial-accent w-12' : 'bg-white/20 w-3 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {/* Hero Content - Standardized Typography */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-[-40px]">
          <div className="inline-block border border-industrial-accent/50 text-industrial-accent px-5 py-1.5 rounded-full text-sm font-bold tracking-[0.2em] mb-8 uppercase backdrop-blur-sm bg-industrial-900/50 shadow-[0_0_20px_rgba(245,158,11,0.2)]">
            国家电梯安装维修 · 认证企业
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.1] drop-shadow-2xl transition-all duration-500">
            {HERO_SLIDES[currentSlide].title}
          </h1>
          
          <p className="text-lg md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed font-light drop-shadow-lg min-h-[3.5rem]">
             {HERO_SLIDES[currentSlide].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link to="/contact#online-message" className="bg-industrial-accent text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-industrial-accentHover transition-all shadow-lg shadow-orange-500/20 hover:-translate-y-1 flex items-center justify-center gap-2">
              立即咨询 <Icons.ArrowRight size={20} />
            </Link>
            <Link to="/services" className="bg-white/5 border border-white/20 text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-industrial-900 transition-all backdrop-blur-sm hover:-translate-y-1">
              了解服务
            </Link>
          </div>
        </div>
      </section>

      {/* ====================================================================================
          SERVICES PREVIEW
      ==================================================================================== */}
      <section className="py-24 bg-industrial-800/30 border-y border-industrial-800 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">我们的核心业务</h2>
            <div className="w-20 h-1.5 bg-industrial-accent mx-auto rounded-full shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.slice(0, 3).map((service) => (
              <div key={service.id} className="bg-industrial-900/60 p-10 rounded-2xl border border-industrial-700/60 hover:border-industrial-accent transition-all duration-300 group backdrop-blur-sm shadow-xl hover:-translate-y-1">
                <div className="w-16 h-16 bg-industrial-800 rounded-xl flex items-center justify-center mb-8 text-industrial-accent group-hover:bg-industrial-accent group-hover:text-white transition-all shadow-inner border border-industrial-700">
                  <DynamicIcon name={service.icon} size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 tracking-wide">{service.title}</h3>
                <p className="text-gray-400 mb-8 leading-relaxed font-light text-justify">{service.description}</p>
                <Link to="/services" className="text-industrial-accent font-bold tracking-wide flex items-center gap-2 group-hover:translate-x-2 transition-all">
                  查看详情 <Icons.ChevronRight size={18} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================================================================================
          STATISTICS BAR
      ==================================================================================== */}
      <section className="py-16 bg-industrial-accent relative overflow-hidden">
        {/* Texture */}
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjZmZmIi8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiLz4KPC9zdmc+')]"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            { val: '500+', label: '在保台量' },
            { val: '24h', label: '全天候待命' },
            { val: '30min', label: '极速响应' },
            { val: '100%', label: '持证上岗' }
          ].map((stat, i) => (
            <div key={i} className="group cursor-default">
              <div className="text-5xl md:text-6xl font-black text-white mb-2 tracking-tighter group-hover:scale-110 transition-transform duration-300">{stat.val}</div>
              <div className="text-industrial-900 font-bold text-sm md:text-base uppercase tracking-[0.1em]">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ====================================================================================
          PROJECTS PREVIEW
      ==================================================================================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="text-center md:text-left w-full md:w-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">近期工程案例</h2>
              <div className="w-20 h-1.5 bg-industrial-accent rounded-full mx-auto md:mx-0 shadow-[0_0_10px_rgba(245,158,11,0.5)]"></div>
            </div>
            <Link to="/projects" className="hidden md:flex items-center gap-3 text-gray-400 hover:text-white transition-colors group px-6 py-2 border border-industrial-700 rounded-full hover:border-industrial-accent hover:bg-industrial-800">
              <span className="text-sm font-medium tracking-wide">更多案例</span>
              <Icons.ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PROJECTS.slice(0, 3).map((project) => (
              <div key={project.id} className="relative group overflow-hidden rounded-2xl aspect-[4/3] border border-industrial-800 shadow-2xl bg-industrial-900">
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-industrial-900/40 to-transparent opacity-90 transition-opacity duration-300"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block px-2 py-1 bg-industrial-accent/90 text-white text-[10px] font-bold uppercase tracking-widest rounded mb-3 backdrop-blur-sm">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-2 tracking-wide">{project.title}</h3>
                  <p className="text-gray-300 text-sm flex items-center gap-2 font-light">
                    <Icons.MapPin size={14} className="text-industrial-accent" /> {project.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
           
           <div className="mt-12 text-center md:hidden">
            <Link to="/projects" className="inline-flex items-center gap-2 text-industrial-accent border border-industrial-accent/50 px-8 py-3 rounded-full hover:bg-industrial-accent hover:text-white transition-colors font-bold">
              查看更多案例 <Icons.ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
