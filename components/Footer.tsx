
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { COMPANY_NAME, PHONE_NUMBER, EMAIL, WECHAT_QR_IMAGE, DOUYIN_QR_IMAGE } from '../constants';
import { Icons } from './Icon';
import { Logo } from './Logo';
import MapAddress from './MapAddress';

const Footer: React.FC = () => {
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  // Simple Copyright Footer for non-home pages
  if (!isHome) {
    return (
      <footer className="bg-industrial-900 border-t border-industrial-800 text-gray-500 py-8">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME} 版权所有.</p>
        </div>
      </footer>
    );
  }

  // Full Footer for Home page
  return (
    <footer className="bg-industrial-900/95 border-t border-industrial-700 pt-20 pb-10 text-gray-300 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Main Grid Layout - Adjusted for better spacing and balance */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-start">
          
          {/* Column 1: Brand Info (Spans 5 columns) */}
          <div className="lg:col-span-5 flex flex-col items-start space-y-6">
             <div className="flex items-center gap-3">
                <div className="w-12 h-12 text-industrial-accent">
                  <Logo className="w-full h-full" />
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl tracking-wide">{COMPANY_NAME}</h2>
                  <p className="text-xs text-industrial-metal tracking-wider">Dongguan Bosheng Lift Co., Ltd</p>
                </div>
             </div>
             <p className="text-sm text-gray-400 leading-relaxed max-w-md text-justify">
               公司坐落于广东省东莞市东城街道，是一家集电梯控制系统研发、电梯销售、电梯维保、旧梯改造更新及技术培训于一体的综合性电梯企业。
             </p>
             <Link to="/about" className="group inline-flex items-center gap-2 text-sm font-bold text-industrial-accent border border-industrial-accent/30 bg-industrial-accent/5 px-5 py-2.5 rounded hover:bg-industrial-accent hover:text-white hover:border-industrial-accent transition-all duration-300">
                了解更多 <Icons.ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
             </Link>
          </div>

          {/* Column 2: Navigation (Spans 3 columns) */}
          <div className="lg:col-span-3 lg:pl-8">
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              快速导航
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-industrial-accent rounded-full"></span>
            </h3>
            <ul className="space-y-4 text-sm">
              <li><Link to="/" className="group flex items-center gap-2 hover:text-white transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-industrial-700 group-hover:bg-industrial-accent transition-colors"></span> 网站首页</Link></li>
              <li><Link to="/services" className="group flex items-center gap-2 hover:text-white transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-industrial-700 group-hover:bg-industrial-accent transition-colors"></span> 核心业务体系</Link></li>
              <li><Link to="/projects" className="group flex items-center gap-2 hover:text-white transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-industrial-700 group-hover:bg-industrial-accent transition-colors"></span> 精选工程案例</Link></li>
              <li><Link to="/news" className="group flex items-center gap-2 hover:text-white transition-colors"><span className="w-1.5 h-1.5 rounded-full bg-industrial-700 group-hover:bg-industrial-accent transition-colors"></span> 行业资讯</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact & Social (Spans 4 columns) */}
          <div className="lg:col-span-4">
            <h3 className="text-white font-bold text-lg mb-6 relative inline-block">
              联系方式
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-industrial-accent rounded-full"></span>
            </h3>
            <ul className="space-y-5 text-sm mb-8">
              <li className="flex items-start gap-3 group">
                <div className="p-2 bg-industrial-800 rounded text-industrial-accent group-hover:text-white group-hover:bg-industrial-accent transition-colors shrink-0">
                  <Icons.MapPin size={18} />
                </div>
                {/* Use MapAddress component here */}
                <div className="mt-1 leading-relaxed text-gray-400 group-hover:text-gray-300 transition-colors">
                   <MapAddress />
                </div>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-industrial-800 rounded text-industrial-accent group-hover:text-white group-hover:bg-industrial-accent transition-colors shrink-0">
                  <Icons.Phone size={18} />
                </div>
                <span className="font-bold text-lg text-white font-mono tracking-wide">{PHONE_NUMBER}</span>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="p-2 bg-industrial-800 rounded text-industrial-accent group-hover:text-white group-hover:bg-industrial-accent transition-colors shrink-0">
                  <Icons.Mail size={18} />
                </div>
                <span className="text-gray-400 group-hover:text-gray-300 transition-colors">{EMAIL}</span>
              </li>
            </ul>

            {/* Social Media Row */}
            <div className="flex items-center gap-4 pt-6 border-t border-industrial-800">
               {/* WeChat */}
               <div className="relative group cursor-pointer">
                  <div className="flex items-center gap-2 px-3 py-2 bg-industrial-800 rounded-full border border-industrial-700 hover:border-green-500/50 hover:bg-industrial-800/80 transition-all">
                    <Icons.MessageSquare size={16} className="text-gray-400 group-hover:text-green-500 transition-colors" />
                    <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">加我微信</span>
                  </div>
                   {/* Popover */}
                   <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-36 p-2 bg-white rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0 z-50">
                      <img src={WECHAT_QR_IMAGE} alt="WeChat QR" className="w-full h-full rounded-sm" />
                      <div className="text-[10px] text-center text-gray-600 mt-1 font-bold">扫码添加好友</div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
                   </div>
               </div>

               {/* Douyin */}
               <div className="relative group cursor-pointer">
                  <div className="flex items-center gap-2 px-3 py-2 bg-industrial-800 rounded-full border border-industrial-700 hover:border-white/50 hover:bg-industrial-800/80 transition-all">
                    <Icons.Music size={16} className="text-gray-400 group-hover:text-white transition-colors" />
                    <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">抖音官方号</span>
                  </div>
                  {/* Popover */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-3 w-36 p-2 bg-white rounded-lg shadow-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none translate-y-2 group-hover:translate-y-0 z-50">
                      <img src={DOUYIN_QR_IMAGE} alt="Douyin QR" className="w-full h-full rounded-sm" />
                      <div className="text-[10px] text-center text-gray-600 mt-1 font-bold">扫码观看企业视频</div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white"></div>
                   </div>
               </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Bar */}
        <div className="border-t border-industrial-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 gap-4">
          <p>&copy; {new Date().getFullYear()} {COMPANY_NAME} 版权所有. 保留所有权利.</p>
          <div className="flex gap-6">
            <span className="hover:text-industrial-accent cursor-pointer transition-colors">隐私政策</span>
            <span className="hover:text-industrial-accent cursor-pointer transition-colors">服务条款</span>
            <span className="hover:text-industrial-accent cursor-pointer transition-colors">网站地图</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
