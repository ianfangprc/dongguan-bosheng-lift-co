
import React, { useState, useRef } from 'react';
import { COMPANY_NAME, ABOUT_IMAGES, COMPANY_VIDEO } from '../constants';
import { IMAGES } from '../images';
import { Icons, DynamicIcon } from '../components/Icon';
import SEO from '../components/SEO';

const About: React.FC = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    // Use timeout to wait for the DOM update where video element is rendered
    setTimeout(() => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    }, 100);
  };

  const CERTIFICATES = [
    { 
      title: '企业营业执照', 
      icon: 'FileText',
      imageUrl: IMAGES.CERT_LICENSE
    },
    { 
      title: '特种设备生产许可证', 
      sub: '（含安装维修）',
      icon: 'ShieldCheck',
      imageUrl: IMAGES.CERT_PRODUCTION
    },
    { 
      title: '控制柜型式试验证书', 
      icon: 'Award',
      imageUrl: IMAGES.CERT_CONTROL
    },
    { 
      title: '特种设备检验员证', 
      icon: 'UserCheck', 
      imageUrl: IMAGES.CERT_INSPECTOR
    },
  ];

  return (
    <div className="pt-24 md:pt-28 min-h-screen bg-industrial-900 text-slate-50 pb-20 font-sans">
      <SEO 
        title="关于我们 - 公司简介与资质" 
        description="东莞博升电梯有限公司成立于2020年，总部位于东莞。我们秉承“让技术被尊重，让服务有价值”的理念，拥有高级工程师及专业技术团队，致力于打造广东省专业度第一的电梯维保公司。"
        keywords={['电梯资质', '东莞电梯公司', '博升电梯文化', '电梯工程师', '电梯研发']}
      />
      
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        
        {/* ====================================================================================
            TOP SECTION: Hero Card
            ==================================================================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-5 bg-industrial-800 rounded-3xl overflow-hidden border border-industrial-700 shadow-2xl mb-16 md:mb-24 relative group">
          
          {/* Left Column: Visual Banner */}
          <div className="lg:col-span-3 relative min-h-[350px] md:min-h-[400px] flex flex-col justify-center p-8 md:p-14 overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
               <img 
                src={ABOUT_IMAGES.heroBackground}
                alt="About Background" 
                className="w-full h-full object-cover opacity-30 transform transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-industrial-900/95 via-industrial-900/80 to-industrial-900/20"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-6 md:space-y-8">
              
              <div className="mt-2 md:mt-4">
                <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 md:mb-6">
                  关于博升
                </h1>
                {/* Updated: Added whitespace-nowrap to prevent wrapping on mobile */}
                <h2 className="text-lg sm:text-xl md:text-3xl text-gray-200 font-light tracking-wide border-l-4 border-industrial-accent pl-4 md:pl-6 py-2 whitespace-nowrap overflow-x-visible">
                  您的安全，就是我们的使命！
                </h2>
              </div>

              <div className="h-1.5 w-20 md:w-24 bg-industrial-700 rounded-full"></div>

              <p className="text-gray-300 max-w-xl leading-relaxed font-light text-lg md:text-xl">
                打造广东省专业度第一的电梯维保公司。<br className="hidden md:block"/>
                保持技术高精尖，保证电梯安全，保障客户满意度。
              </p>
            </div>
          </div>

          {/* Right Column: Core Stats */}
          <div className="lg:col-span-2 bg-industrial-800/80 border-t lg:border-t-0 lg:border-l border-industrial-700 p-8 md:p-14 flex flex-col justify-center backdrop-blur-sm">
             <div className="space-y-8 md:space-y-10">
                
                {/* Stat Item 1 */}
                <div className="flex items-center justify-between group/stat">
                   <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl md:text-5xl font-black text-white group-hover/stat:text-industrial-accent transition-colors duration-300">2020</span>
                        <span className="text-lg md:text-xl text-industrial-accent font-bold">年</span>
                      </div>
                      <div className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-widest mt-1 md:mt-2">公司成立时间</div>
                   </div>
                   <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-industrial-900 flex items-center justify-center text-industrial-metal group-hover/stat:text-white group-hover/stat:bg-industrial-700 transition-all border border-industrial-700/50">
                      <Icons.Clock size={20} className="md:w-6 md:h-6" />
                   </div>
                </div>

                <div className="h-px bg-industrial-700/50 w-full"></div>

                {/* Stat Item 2 */}
                <div className="flex items-center justify-between group/stat">
                   <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl md:text-5xl font-black text-white group-hover/stat:text-industrial-accent transition-colors duration-300">23</span>
                        <span className="text-lg md:text-xl text-industrial-accent font-bold">+</span>
                      </div>
                      <div className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-widest mt-1 md:mt-2">专业技术团队</div>
                   </div>
                   <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-industrial-900 flex items-center justify-center text-industrial-metal group-hover/stat:text-white group-hover/stat:bg-industrial-700 transition-all border border-industrial-700/50">
                      <Icons.HardHat size={20} className="md:w-6 md:h-6" />
                   </div>
                </div>

                <div className="h-px bg-industrial-700/50 w-full"></div>

                {/* Stat Item 3 */}
                <div className="flex items-center justify-between group/stat">
                   <div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-4xl md:text-5xl font-black text-white group-hover/stat:text-industrial-accent transition-colors duration-300">100</span>
                        <span className="text-lg md:text-xl text-industrial-accent font-bold">W+</span>
                      </div>
                      <div className="text-xs md:text-sm text-gray-400 font-bold uppercase tracking-widest mt-1 md:mt-2">年研发投入</div>
                   </div>
                   <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-industrial-900 flex items-center justify-center text-industrial-metal group-hover/stat:text-white group-hover/stat:bg-industrial-700 transition-all border border-industrial-700/50">
                      <Icons.BarChart3 size={20} className="md:w-6 md:h-6" />
                   </div>
                </div>

             </div>
          </div>
        </div>

        
        {/* ====================================================================================
            CONTENT MODULES
            ==================================================================================== */}
        
        {/* Module 1: Company Introduction & Philosophy */}
        <section className="mb-20 md:mb-24">
          <div className="flex items-end justify-between mb-8 md:mb-12 border-b border-industrial-800 pb-4 md:pb-6">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block tracking-tight">
                  公司概况
                  <span className="absolute -bottom-5 md:-bottom-7 left-0 w-16 md:w-20 h-1 md:h-1.5 bg-industrial-accent rounded-full"></span>
                </h2>
             </div>
             <span className="hidden md:block text-industrial-800 text-6xl font-black opacity-30 select-none tracking-tighter">OVERVIEW</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="space-y-6 md:space-y-8 text-base md:text-lg text-gray-300 leading-loose text-justify font-light">
              <p>
                <strong className="text-white font-bold">东莞博升电梯有限公司</strong> 成立于2020年07月，坐落于广东省东莞市东城街道，是一家集电梯控制系统研发、电梯销售、电梯维保、旧梯改造更新及技术培训于一体的综合性电梯企业。
              </p>
              
              <div className="bg-industrial-800/50 p-6 md:p-8 rounded-2xl border-l-4 border-industrial-accent space-y-4 md:space-y-6">
                 <div>
                    <h3 className="text-industrial-accent font-bold text-lg md:text-xl mb-2 flex items-center gap-2">
                       <Icons.Award size={20} /> 经营理念
                    </h3>
                    <p className="text-white text-lg md:text-xl italic font-serif">“让技术被尊重，让服务有价值”</p>
                 </div>
                 <p className="text-sm md:text-base text-gray-400 leading-relaxed">
                    我们以政策法规和行业标准为基准，建立了规范的电梯安装、维修及保养质量管理体系。
                 </p>
              </div>

              <div>
                  <h3 className="text-industrial-accent font-bold text-lg md:text-xl mb-3 flex items-center gap-2">
                     <Icons.ShieldCheck size={20} /> 服务宗旨
                  </h3>
                  <p>
                    坚持<span className="text-white font-bold px-1">“客户至上，安全高效”</span>的服务理念，致力于通过优质的产品和卓越的服务获得客户的高度认可。
                  </p>
              </div>
            </div>

            <div className="relative h-[300px] md:h-[400px] w-full bg-industrial-800 rounded-2xl overflow-hidden shadow-2xl border border-industrial-700 group mt-6 lg:mt-0">
              <img 
                src={ABOUT_IMAGES.introFeature}
                alt="Technician working" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-industrial-900/20 to-transparent opacity-90"></div>
              <div className="absolute bottom-0 left-0 p-8 md:p-10">
                 <div className="inline-block bg-industrial-accent text-white text-xs font-bold px-3 py-1.5 rounded mb-3 md:mb-4 uppercase tracking-wider">企业愿景</div>
                 <p className="text-white font-bold text-2xl md:text-3xl mb-2 tracking-tight">打造广东省专业度第一的电梯维保商</p>
                 <p className="text-gray-400 text-sm md:text-base font-medium">专业 · 安全 · 满意</p>
              </div>
            </div>
          </div>
        </section>

        {/* Module 1.5: Corporate Video */}
        <section className="mb-20 md:mb-32">
           <div className="bg-industrial-800 border border-industrial-700 rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl relative">
              {/* Decorative headers */}
              <div className="absolute top-4 left-4 md:top-6 md:left-8 z-20">
                 <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-white text-xs md:text-sm font-bold">
                    <Icons.Clapperboard size={14} className="text-industrial-accent md:w-4 md:h-4" />
                    企业宣传视频
                 </div>
              </div>

              <div className="relative w-full aspect-video bg-black group cursor-pointer">
                 {!isVideoPlaying ? (
                    /* Cover Image Mode */
                    <div className="absolute inset-0 w-full h-full" onClick={handlePlayVideo}>
                       <img 
                          src={ABOUT_IMAGES.videoPoster} 
                          alt="Video Cover" 
                          className="w-full h-full object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-300"
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-transparent to-transparent"></div>
                       
                       {/* Play Button */}
                       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                          <div className="w-16 h-16 md:w-20 md:h-20 bg-industrial-accent/90 rounded-full flex items-center justify-center pl-1 text-white shadow-[0_0_30px_rgba(245,158,11,0.6)] group-hover:scale-110 transition-transform duration-300 border-4 border-white/20">
                             <Icons.Play size={28} className="md:w-8 md:h-8" fill="currentColor" />
                          </div>
                          <p className="text-center text-white font-bold mt-4 tracking-wider drop-shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 text-sm md:text-base">点击播放</p>
                       </div>
                    </div>
                 ) : (
                    /* Video Player Mode */
                    <video 
                       ref={videoRef}
                       controls 
                       autoPlay
                       className="w-full h-full object-contain bg-black animate-in fade-in duration-500"
                    >
                       <source src={COMPANY_VIDEO} type="video/mp4" />
                       您的浏览器不支持视频播放，请升级浏览器。
                    </video>
                 )}
              </div>
           </div>
        </section>

        {/* Module 2: Talent & Technical Strength */}
        <section className="mb-20 md:mb-32">
           <div className="flex items-end justify-between mb-8 md:mb-12 border-b border-industrial-800 pb-4 md:pb-6">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block tracking-tight">
                  人才与技术
                  <span className="absolute -bottom-5 md:-bottom-7 left-0 w-16 md:w-20 h-1 md:h-1.5 bg-industrial-accent rounded-full"></span>
                </h2>
             </div>
             <span className="hidden md:block text-industrial-800 text-6xl font-black opacity-30 select-none tracking-tighter">EXPERTISE</span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 md:mb-16">
              {[
                { title: '高级工程师', count: '2', unit: '人', icon: 'GraduationCap' },
                { title: '检验工程师', count: '2', unit: '人', icon: 'ClipboardCheck' },
                { title: '电子维修工程师', count: '4', unit: '人', icon: 'PenTool' },
                { title: '专业技术员', count: '15', unit: '人', sub: '从业5年以上', icon: 'HardHat' },
              ].map((item, index) => (
                <div key={index} className="bg-industrial-800 border border-industrial-700 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:border-industrial-accent transition-all duration-300 group hover:-translate-y-1">
                   <div className="w-12 h-12 md:w-16 md:h-16 bg-industrial-900 rounded-full flex items-center justify-center text-industrial-accent mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-inner ring-1 ring-white/5">
                      <DynamicIcon name={item.icon} size={24} className="md:w-7 md:h-7" />
                   </div>
                   <div className="text-3xl md:text-4xl font-black text-white mb-1 md:mb-2 tracking-tight">
                      {item.count}<span className="text-xs md:text-sm text-gray-500 font-normal ml-1 align-baseline">{item.unit}</span>
                   </div>
                   <div className="text-sm md:text-base text-gray-300 font-medium">{item.title}</div>
                   {item.sub && <div className="text-[10px] md:text-xs text-industrial-accent mt-2 md:mt-3 bg-industrial-accent/10 px-2 py-0.5 md:px-3 md:py-1 rounded-full font-bold">{item.sub}</div>}
                </div>
              ))}
          </div>

          <div className="bg-industrial-800 border border-industrial-700 rounded-3xl p-8 md:p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-40 bg-industrial-accent/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>
             
             <div className="relative z-10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
                   <Icons.Wrench className="text-industrial-accent" size={24} /> 技术硬实力
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                   <div>
                      <p className="text-gray-300 leading-loose mb-6 text-base md:text-lg font-light">
                         公司每年投入研发费用不低于 <span className="text-white font-bold text-lg md:text-xl border-b-2 border-industrial-accent/50">100万元</span>。我们拥有各类国产及进口品牌的控制系统维修测试平台，能够安全、准确、高效地解决各类技术难题。
                      </p>
                      <ul className="space-y-4">
                         <li className="flex items-center gap-3 text-sm md:text-base text-gray-300">
                            <Icons.CheckCircle size={18} className="text-industrial-accent flex-shrink-0" />
                            <span>解决国内外一线品牌电梯技术难题</span>
                         </li>
                         <li className="flex items-center gap-3 text-sm md:text-base text-gray-300">
                            <Icons.CheckCircle size={18} className="text-industrial-accent flex-shrink-0" />
                            <span>拥有完善的电子板维修测试平台</span>
                         </li>
                      </ul>
                   </div>
                   <div className="bg-industrial-900/50 rounded-2xl p-6 md:p-8 border border-industrial-700/50">
                      <div className="text-xs text-gray-500 font-bold uppercase mb-4 md:mb-6 tracking-[0.2em]">支持品牌系统</div>
                      <div className="flex flex-wrap gap-2 md:gap-3">
                         {['三菱 (Mitsubishi)', '日立 (Hitachi)', '奥的斯 (Otis)', '迅达 (Schindler)', '通力 (Kone)', '蒂森 (Thyssen)', '富士达 (Fujitec)', '各类国产系统'].map(brand => (
                            <span key={brand} className="px-3 py-1.5 md:px-4 md:py-2 bg-industrial-800 text-gray-300 text-xs md:text-sm rounded-lg border border-industrial-700 hover:text-white hover:border-industrial-500 hover:bg-industrial-700 transition-colors cursor-default font-medium">
                               {brand}
                            </span>
                         ))}
                      </div>
                   </div>
                </div>
             </div>
          </div>
        </section>

        {/* Module 3: Qualifications */}
        <section>
          <div className="flex items-end justify-between mb-8 md:mb-12 border-b border-industrial-800 pb-4 md:pb-6">
             <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 relative inline-block tracking-tight">
                  资质荣誉
                  <span className="absolute -bottom-5 md:-bottom-7 left-0 w-16 md:w-20 h-1 md:h-1.5 bg-industrial-accent rounded-full"></span>
                </h2>
             </div>
             <span className="hidden md:block text-industrial-800 text-6xl font-black opacity-30 select-none tracking-tighter">QUALIFICATIONS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {CERTIFICATES.map((cert, index) => (
              <div key={index} className="bg-industrial-800/30 border border-industrial-700/50 p-6 md:p-8 rounded-2xl flex flex-col items-center justify-center text-center hover:bg-industrial-800 hover:border-industrial-600 transition-all duration-300 group cursor-pointer relative overflow-hidden shadow-lg hover:shadow-industrial-accent/5 hover:-translate-y-1 h-full min-h-[220px] md:min-h-[260px]">
                <div className="absolute top-0 right-0 w-12 h-12 md:w-16 md:h-16 bg-industrial-700/20 rounded-bl-full -mr-6 -mt-6 md:-mr-8 md:-mt-8 transition-all group-hover:bg-industrial-accent/20"></div>

                {(cert as any).imageUrl ? (
                   <div className="w-full h-32 md:h-40 mb-4 md:mb-6 bg-white p-2 rounded-lg shadow-inner">
                      <img src={(cert as any).imageUrl} alt={cert.title} className="w-full h-full object-contain" />
                   </div>
                ) : (
                   <div className="w-16 h-16 md:w-20 md:h-20 mb-4 md:mb-6 bg-industrial-900 rounded-full flex items-center justify-center border border-industrial-600 text-industrial-metal group-hover:text-industrial-accent group-hover:border-industrial-accent transition-all duration-300 shadow-inner">
                      <DynamicIcon name={cert.icon} size={32} className="md:w-9 md:h-9" />
                   </div>
                )}
                
                <h3 className="text-lg md:text-xl font-bold text-white mb-1 md:mb-2 group-hover:text-industrial-accent transition-colors tracking-wide">
                  {cert.title}
                </h3>
                {cert.sub && (
                  <p className="text-xs md:text-sm text-gray-400 font-light">{cert.sub}</p>
                )}
                
                {!(cert as any).imageUrl && (
                   <div className="mt-4 md:mt-6 text-[10px] text-gray-600 border border-dashed border-gray-700 px-3 py-1 rounded group-hover:border-gray-500 transition-colors uppercase tracking-wider">
                      证书展示位
                   </div>
                )}
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default About;
