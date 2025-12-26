
import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES, PHONE_NUMBER } from '../constants';
import { IMAGES } from '../images';
import { DynamicIcon, Icons } from '../components/Icon';
import SEO from '../components/SEO';

const Services: React.FC = () => {
  const SALES_CATEGORIES = [
    { 
      title: '乘客电梯', 
      desc: '适用于住宅、商务楼、高端酒店，提供舒适平稳的乘梯体验。',
      image: IMAGES.SALES_PASSENGER, 
      icon: 'UserCheck'
    },
    { 
      title: '载货电梯', 
      desc: '专为工厂、仓库、物流中心设计，承载力强，坚固耐用。',
      image: IMAGES.SALES_CARGO, 
      icon: 'BarChart3'
    },
    { 
      title: '自动扶梯', 
      desc: '广泛应用于商场、车站、机场等公共场所，高效疏导人流。',
      image: IMAGES.SALES_ESCALATOR, 
      icon: 'MoveUp'
    },
    { 
      title: '升降平台', 
      desc: '用于特殊作业场景、无障碍通道及家庭简易升降需求。',
      image: IMAGES.SALES_LIFT, 
      icon: 'ArrowRight'
    },
  ];

  const SUPPORTED_BRANDS = [
    '三菱 (Mitsubishi)',
    '日立 (Hitachi)',
    '奥的斯 (Otis)',
    '迅达 (Schindler)',
    '通力 (Kone)',
    '蒂森 (Thyssen)',
    '富士达 (Fujitec)',
    '东芝 (Toshiba)',
    '广日电梯',
    '各类国产系统'
  ];

  return (
    <div className="pt-20 min-h-screen bg-industrial-900 text-slate-50 font-sans selection:bg-industrial-accent selection:text-white">
      <SEO 
        title="核心业务 - 维修/保养/销售/改造" 
        description="博升电梯提供全方位的电梯服务体系：包括定期巡检、隐患排查、老旧梯更新改造、整梯销售及技术培训。严格执行国标规范，确保每一台电梯安全运行。"
        keywords={['电梯年检', '电梯大修', '旧梯更新', '老房加装电梯', '电梯技术培训', '乘客电梯', '载货电梯']}
      />

      {/* ==============================================================================
          1. Hero Section: Unified Height and Typography
         ============================================================================== */}
      <div className="relative py-24 md:py-32 border-b border-industrial-700/50 overflow-hidden group">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.BG_SERVICES} 
            alt="Industrial Architecture" 
            className="w-full h-full object-cover transition-transform duration-[20s] ease-linear group-hover:scale-105 opacity-60"
          />
          <div className="absolute inset-0 bg-industrial-900/90"></div>
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px]"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 tracking-tight drop-shadow-lg">
            核心业务体系
          </h1>
          <div className="w-20 h-1.5 bg-industrial-accent mx-auto mb-8 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-light max-w-3xl mx-auto drop-shadow-md">
            博升电梯严格遵循国家安全技术规范，为客户提供全生命周期的电梯管家式服务。
            <br className="hidden md:block" />
            <span className="text-white font-medium mt-4 block tracking-wider">专业技术 · 极速响应 · 值得信赖</span>
          </p>
        </div>
      </div>

      {/* ==============================================================================
          2. Quick Navigation Grid: Standardized Cards
         ============================================================================== */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24 border-b border-industrial-800">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <div key={service.id} className="group flex flex-col p-10 bg-industrial-800 rounded-2xl border border-industrial-700/50 hover:border-industrial-accent transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full">
              <div className="flex items-center gap-5 mb-8">
                <div className="w-16 h-16 bg-industrial-900 rounded-xl flex items-center justify-center text-industrial-accent group-hover:scale-110 group-hover:bg-industrial-accent group-hover:text-white transition-all duration-300 shadow-inner ring-1 ring-white/5">
                  <DynamicIcon name={service.icon} size={30} />
                </div>
                <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-industrial-accent transition-colors">
                  {service.title}
                </h3>
              </div>
              <p className="text-base text-gray-400 leading-relaxed mb-6 flex-grow text-justify font-light">
                {service.description}
              </p>
              <div className="w-12 h-1 bg-industrial-700/50 group-hover:bg-industrial-accent group-hover:w-full transition-all duration-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>

      {/* ==============================================================================
          3. Maintenance Section
         ============================================================================== */}
      <section className="py-24 relative bg-industrial-900">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          
          <div className="text-center max-w-4xl mx-auto mb-20">
             <div className="inline-flex items-center justify-center p-4 bg-industrial-accent/10 rounded-2xl text-industrial-accent mb-6 shadow-lg shadow-orange-500/10 border border-industrial-accent/20">
                <Icons.Wrench size={36} />
             </div>
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
               专业电梯维保
             </h2>
             <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-light">
               我们拥有一支<span className="text-industrial-accent font-bold px-2">高素质、高效率、高能力</span>的专业团队<br className="hidden md:block"/>
               具备解决<span className="text-white font-semibold mx-1 border-b border-gray-600 pb-0.5">国内外一线品牌</span>电梯系统故障的能力
             </p>
          </div>

          <div className="mb-24">
             <div className="text-center mb-10 flex items-center justify-center gap-4">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-industrial-700"></div>
                <span className="text-xs text-gray-500 font-bold uppercase tracking-[0.3em] select-none">Supported Brands System</span>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-industrial-700"></div>
             </div>
             
             <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
               {SUPPORTED_BRANDS.map((brand) => (
                 <div key={brand} className="bg-industrial-800 border border-industrial-700/80 rounded-lg px-6 py-3 hover:border-industrial-accent hover:bg-industrial-700 transition-all duration-300 cursor-default group shadow-sm hover:shadow-industrial-accent/10">
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors tracking-wide text-sm md:text-base">
                      {brand}
                    </span>
                 </div>
               ))}
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
             {[
                { step: '01', title: '定期巡检', desc: '按半月/季度/年度计划严格执行，杜绝漏检。' },
                { step: '02', title: '隐患排查', desc: '利用专业仪器深度检测，诊断潜在风险。' },
                { step: '03', title: '维护保养', desc: '清洁润滑调整，保持设备最佳状态。' },
                { step: '04', title: '反馈报告', desc: '建立数字化档案，过程透明可追溯。' }
             ].map((item) => (
               <div key={item.step} className="bg-industrial-800/30 p-10 rounded-2xl border border-industrial-800 hover:bg-industrial-800 hover:border-industrial-accent/50 transition-all duration-300 group flex flex-col items-center text-center">
                  <span className="text-6xl font-black text-industrial-800 group-hover:text-industrial-700/50 transition-colors mb-6 block select-none font-mono">
                    {item.step}
                  </span>
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:text-industrial-accent transition-colors tracking-wide">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-light">
                    {item.desc}
                  </p>
               </div>
             ))}
          </div>

        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-industrial-800"></div></div>

      {/* ==============================================================================
          4. Modernization Section
         ============================================================================== */}
      <section className="py-24 bg-industrial-900/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-3 bg-industrial-accent/10 rounded-full text-industrial-accent">
                    <Icons.PenTool size={32} />
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">老旧梯改造更新</h2>
            </div>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
               拥有各类品牌及国产控制系统<span className="text-white font-bold mx-1 border-b-2 border-industrial-accent/50">维修测试平台</span>。我们不仅仅是更换零件，更是对电梯系统的全面焕新。
            </p>
          </div>

          <div className="relative mt-16">
             {/* Connector Line */}
             <div className="hidden lg:block absolute top-16 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-industrial-700 to-transparent z-0"></div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
                {[
                  { icon: 'MapPin', title: '现场勘探', desc: '专业工程师上门评估，全面检测井道与设备现状。' },
                  { icon: 'ClipboardCheck', title: '方案合同', desc: '定制高性价比方案，透明报价，签订正规施工合同。' },
                  { icon: 'Hammer', title: '改造更新', desc: '核心部件更换与系统升级，严格遵守施工安全规范。' },
                  { icon: 'CheckCircle', title: '验收使用', desc: '通过权威部门检测验收，交付使用并提供长期质保。' }
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center text-center group">
                     {/* Icon Circle */}
                     <div className="w-32 h-32 bg-industrial-900 rounded-full border-[6px] border-industrial-800 flex items-center justify-center text-gray-400 group-hover:text-white group-hover:bg-industrial-accent group-hover:border-industrial-accent/30 transition-all duration-500 mb-10 shadow-2xl relative z-10">
                        <DynamicIcon name={step.icon} size={40} />
                        <div className="absolute top-0 right-0 w-10 h-10 bg-industrial-700 text-white rounded-full flex items-center justify-center text-sm font-bold border-4 border-industrial-900 group-hover:bg-white group-hover:text-industrial-accent transition-colors">
                            {index + 1}
                        </div>
                     </div>
                     
                     <div className="bg-industrial-800/40 border border-industrial-800 p-8 rounded-xl w-full hover:border-industrial-700 transition-colors">
                        <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                        <p className="text-sm text-gray-400 leading-relaxed font-light">{step.desc}</p>
                     </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6"><div className="h-px bg-industrial-800"></div></div>

      {/* ==============================================================================
          5. Sales Section
         ============================================================================== */}
      <section className="py-24 bg-industrial-800/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
           <div className="flex flex-col items-center text-center mb-20">
              <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-industrial-accent/10 rounded-full text-industrial-accent">
                      <Icons.BarChart3 size={32} />
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">整梯销售服务</h2>
              </div>
              <p className="text-xl text-gray-300 max-w-3xl font-light leading-relaxed">
                代理国内外知名品牌，涵盖乘客电梯、载货电梯、自动扶梯及升降平台。
              </p>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SALES_CATEGORIES.map((item, idx) => (
                <div key={idx} className="group relative h-[32rem] rounded-2xl overflow-hidden shadow-2xl cursor-default border border-industrial-700/50">
                   <img 
                      src={item.image} 
                      alt={item.title} 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-industrial-900/60 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300"></div>
                   
                   <div className="absolute inset-0 p-8 flex flex-col justify-end">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                        <div className="w-14 h-14 bg-industrial-accent text-white rounded-xl flex items-center justify-center mb-6 shadow-lg scale-90 group-hover:scale-100 transition-transform">
                           <DynamicIcon name={item.icon} size={28} />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4 tracking-wide border-l-4 border-transparent group-hover:border-white pl-0 group-hover:pl-4 transition-all duration-300">
                            {item.title}
                        </h3>
                        <div className="h-px w-full bg-white/20 my-5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <p className="text-base text-gray-200 leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 translate-y-2 group-hover:translate-y-0 font-light">
                          {item.desc}
                        </p>
                      </div>
                   </div>
                </div>
              ))}
           </div>
           
           <div className="mt-20 text-center">
              <Link to="/contact" className="inline-flex items-center gap-4 bg-industrial-accent text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-industrial-accentHover transition-colors shadow-lg shadow-orange-500/20 hover:shadow-orange-500/40 hover:-translate-y-1 duration-300 group">
                 <Icons.Phone size={24} className="group-hover:animate-pulse" /> 
                 <span>获取详细报价：<span className="font-mono text-xl">{PHONE_NUMBER}</span></span>
              </Link>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Services;
