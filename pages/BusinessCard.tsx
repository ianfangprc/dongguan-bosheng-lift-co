
import React from 'react';
import { COMPANY_NAME, COMPANY_NAME_EN, ADDRESS, EMAIL, WECHAT_QR_IMAGE } from '../constants';
import { Icons } from '../components/Icon';
import { Logo } from '../components/Logo';
import SEO from '../components/SEO';

const BusinessCard: React.FC = () => {
  const PERSON = {
    name: '房国勤',
    nameEn: 'Fang Guoqin',
    phone: '133-6067-2276',
    website: 'www.boshenglift.com',
    email: EMAIL
  };

  const SLOGAN = "让技术被尊重，让服务有价值";

  const handlePrint = () => {
    window.print();
  };

  // --- Final Chosen Style: Black Oxide (Matte Black Coated) ---
  const cardStyle = {
    backgroundColor: '#09090b',
    // Subtle radial gradient to simulate a premium matte coating lighting effect
    backgroundImage: `radial-gradient(circle at 100% 0%, #27272a 0%, #09090b 50%)`,
    color: '#e4e4e7',
    fontFamily: '"Inter", "Noto Sans SC", sans-serif'
  };

  return (
    <div className="min-h-screen bg-neutral-100 flex flex-col items-center justify-center p-8 font-sans pb-32">
      <SEO title="电子名片 - 房国勤" />
      
      {/* Control Panel (Hidden when printing) */}
      <div className="mb-12 text-center space-y-4 print:hidden">
        <h1 className="text-3xl font-bold text-slate-800 tracking-tight">名片设计定稿</h1>
        <p className="text-slate-500 text-sm max-w-xl mx-auto">
          设计风格：<span className="font-bold text-slate-900">极夜氧化 (Oxide Black)</span><br/>
          工艺建议：推荐使用<span className="text-amber-600">触感纸</span>或<span className="text-amber-600">黑卡纸</span>印刷，Logo部分可采用<span className="text-amber-600">烫银</span>或<span className="text-amber-600">UV工艺</span>。
        </p>
        <button 
          onClick={handlePrint}
          className="bg-slate-900 hover:bg-black text-white px-8 py-3 rounded shadow-xl flex items-center gap-2 mx-auto transition-all font-bold tracking-wide"
        >
          <Icons.Download size={18} />
          打印 / 导出 PDF
        </button>
      </div>

      {/* Card Container */}
      <div className="flex flex-col gap-10 print:gap-4 print:block print:w-full">
        
        {/* =================================================================================
             FRONT SIDE
           ================================================================================= */}
        <div className="relative w-[90mm] h-[54mm] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] print:shadow-none text-white ring-1 ring-white/10 mx-auto print:mx-0 print:mb-8 print:break-inside-avoid" style={cardStyle}>
           
           {/* Decorative Geometric Element (Right Side) */}
           <div className="absolute top-0 right-0 w-[40mm] h-[54mm] bg-[#121214] skew-x-12 translate-x-[10mm] border-l border-white/5"></div>

           <div className="relative z-10 h-full p-[7mm] flex justify-between">
              {/* Left: Info Area */}
              <div className="flex flex-col justify-center h-full z-20">
                 {/* Name Block */}
                 <div className="mb-[6mm]">
                    <h1 className="text-[7.5mm] font-light text-white tracking-[0.1em] leading-none">{PERSON.name}</h1>
                    <p className="text-[2mm] text-gray-500 uppercase tracking-widest mt-[1.5mm] font-medium">{PERSON.nameEn}</p>
                 </div>

                 {/* Contact Details */}
                 <div className="space-y-[1.8mm] text-[2mm] text-gray-400 font-light leading-none">
                    <div className="flex items-center gap-3 group">
                        <span className="w-1 h-1 bg-amber-600 rounded-full group-hover:scale-150 transition-transform"></span> 
                        <span className="font-mono tracking-wide text-gray-300">{PERSON.phone}</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <span className="w-1 h-1 bg-gray-700 rounded-full group-hover:bg-amber-600 transition-colors"></span> 
                        <span className="font-sans tracking-wide">{PERSON.email}</span>
                    </div>
                    <div className="flex items-center gap-3 group">
                        <span className="w-1 h-1 bg-gray-700 rounded-full group-hover:bg-amber-600 transition-colors"></span> 
                        <span className="font-sans tracking-wide">{PERSON.website}</span>
                    </div>
                    <div className="flex items-start gap-3 group">
                       <span className="w-1 h-1 bg-gray-700 rounded-full mt-[1.2mm] shrink-0 group-hover:bg-amber-600 transition-colors"></span> 
                       <span className="w-[38mm] leading-[1.3] opacity-80">{ADDRESS.replace('广东省东莞市', '')}</span>
                    </div>
                 </div>
              </div>

              {/* Right: Brand & QR Area */}
              <div className="flex flex-col items-end justify-between h-full relative z-20">
                 {/* Top Right: Logo & Company */}
                 <div className="flex flex-col items-end">
                    <div className="w-[6mm] h-[6mm] text-white/90 mb-[2mm] drop-shadow-md"><Logo /></div>
                    <div className="text-[1.8mm] font-bold text-gray-500 tracking-wider text-right">{COMPANY_NAME}</div>
                 </div>

                 {/* Bottom Right: QR Code */}
                 <div className="text-center">
                    <div className="bg-white p-[0.8mm] rounded-sm opacity-95 shadow-lg">
                       <img src={WECHAT_QR_IMAGE} alt="QR" className="w-[13mm] h-[13mm] block mix-blend-multiply" />
                    </div>
                    <div className="text-[1.5mm] text-gray-600 mt-[1.5mm] tracking-tight scale-90 origin-top">微信扫码</div>
                 </div>
              </div>
           </div>
        </div>

        {/* =================================================================================
             BACK SIDE
           ================================================================================= */}
        <div className="relative w-[90mm] h-[54mm] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] print:shadow-none flex flex-col items-center justify-center ring-1 ring-white/10 mx-auto print:mx-0 print:break-inside-avoid" style={cardStyle}>
           
           {/* Background Watermark Logo */}
           <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <div className="w-[50mm] h-[50mm] rotate-12"><Logo /></div>
           </div>
           
           {/* Center Slogan */}
           <div className="relative z-10 text-center w-full px-4">
              <h2 className="text-[3.8mm] font-light text-white tracking-[0.3em] mb-[4mm] drop-shadow-lg">{SLOGAN}</h2>
              {/* Accent Line */}
              <div className="w-[8mm] h-[1px] bg-amber-600 mx-auto shadow-[0_0_8px_rgba(245,158,11,0.8)]"></div>
           </div>
           
           {/* Bottom Brand Strip */}
           <div className="absolute bottom-0 w-full h-[8mm] bg-[#121214] flex items-center justify-between px-[6mm] border-t border-white/5">
              <span className="text-[1.6mm] text-gray-500 tracking-[0.15em] font-medium uppercase">{COMPANY_NAME_EN}</span>
              <div className="w-[3mm] h-[3mm] text-gray-600 opacity-80"><Logo /></div>
           </div>
        </div>

      </div>

      <style>{`
        @media print {
          @page {
            size: A4;
            margin: 10mm; 
          }
          body {
            background: white;
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
            height: auto;
            overflow: visible;
          }
          .print\\:hidden { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default BusinessCard;
