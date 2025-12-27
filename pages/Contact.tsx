
import React, { useState } from 'react';
import { PHONE_NUMBER, EMAIL, WECHAT_QR_IMAGE, DOUYIN_QR_IMAGE } from '../constants';
import { IMAGES } from '../images';
import { Icons } from '../components/Icon';
import MapAddress from '../components/MapAddress';
import emailjs from '@emailjs/browser';
import SEO from '../components/SEO';

const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_2itdwi8',
  TEMPLATE_ID: 'template_zy9z2am',
  PUBLIC_KEY: 'spJYxyCuu96DzIt9C' 
};

interface FormData {
  name: string;
  phone: string;
  type: string;
  message: string;
}

interface FormErrors {
  name?: string;
  phone?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    type: '维保报价',
    message: ''
  });
  
  const [errors, setErrors] = useState<FormErrors>({});
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = '请输入您的称呼';
    if (!formData.phone.trim()) {
      newErrors.phone = '请输入联系电话';
    } else if (!/^[0-9\-\+]{7,15}$/.test(formData.phone)) {
      newErrors.phone = '请输入有效的电话号码';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsConfirmOpen(true);
    }
  };

  const handleFinalSubmit = async () => {
    setIsConfirmOpen(false);
    setIsSubmitting(true);

    if (EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
        alert("系统配置错误：请联系管理员配置邮件服务 (Missing EmailJS Keys)。");
        setIsSubmitting(false);
        return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_phone: formData.phone,
        type: formData.type,
        message: formData.message || '（无详细内容）',
        to_name: '博升电梯管理员',
      };

      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        templateParams,
        EMAILJS_CONFIG.PUBLIC_KEY
      );
      
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: '', phone: '', type: '维保报价', message: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      console.error("EmailJS Submission error", error);
      setIsSubmitting(false);
      alert("网络繁忙，提交失败。请直接拨打我们的 24小时热线: " + PHONE_NUMBER);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-industrial-900 text-slate-50 font-sans">
      <SEO 
        title="联系我们 - 24小时救援热线" 
        description="博升电梯提供7x24小时全天候紧急救援服务。获取电梯维保报价、新梯安装咨询，请拨打我们的服务热线或在线留言。"
        keywords={['电梯报修', '电梯救援电话', '电梯维保价格', '东莞电梯电话', '博升联系方式']}
      />

      {/* Hero Header */}
      <div className="relative py-24 md:py-32 border-b border-industrial-800 bg-industrial-900 overflow-hidden">
         {/* Background Image Layer */}
         <div className="absolute inset-0 z-0">
           <img
             src={IMAGES.BG_CONTACT}
             alt="Contact Background"
             className="w-full h-full object-cover opacity-60"
           />
           {/* Overlays for readability */}
           <div className="absolute inset-0 bg-industrial-900/90 mix-blend-multiply"></div>
           <div className="absolute inset-0 bg-gradient-to-t from-industrial-900 via-transparent to-industrial-900/50"></div>
         </div>

         {/* Pattern Layer */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff33_1px,transparent_1px)] [background-size:20px_20px] z-0"></div>
         
         <div className="relative max-w-7xl mx-auto px-6 text-center z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 md:mb-8 tracking-tight drop-shadow-xl">联系我们</h1>
          <div className="w-16 md:w-20 h-1.5 bg-industrial-accent mx-auto mb-6 md:mb-8 rounded-full shadow-[0_0_15px_rgba(245,158,11,0.5)]"></div>
          <p className="text-lg md:text-2xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
             有任何疑问或需要维保报价？请随时与我们取得联系。
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
          
          {/* Contact Info Card */}
          <div className="bg-industrial-800 p-8 md:p-10 rounded-2xl border-l-4 border-industrial-accent flex flex-col justify-between h-fit shadow-2xl">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-10 tracking-tight">联系方式</h2>
              
              <div className="space-y-8 md:space-y-10">
                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-industrial-900 rounded-xl flex items-center justify-center text-industrial-accent flex-shrink-0 shadow-inner">
                    <Icons.Phone size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1 text-base md:text-lg">24小时服务热线</h3>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-2xl md:text-3xl text-industrial-accent font-mono font-bold tracking-tight hover:text-white transition-colors block w-fit">{PHONE_NUMBER}</a>
                    <p className="text-xs md:text-sm text-gray-500 mt-2 font-medium">紧急救援 / 业务咨询 / 投诉建议</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-industrial-900 rounded-xl flex items-center justify-center text-industrial-accent flex-shrink-0 shadow-inner">
                    <Icons.MapPin size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-2 text-base md:text-lg">公司地址</h3>
                    <MapAddress className="text-gray-300 text-base md:text-lg leading-relaxed block hover:text-white transition-colors" />
                  </div>
                </div>

                <div className="flex items-start gap-4 md:gap-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-industrial-900 rounded-xl flex items-center justify-center text-industrial-accent flex-shrink-0 shadow-inner">
                    <Icons.Mail size={24} className="md:w-7 md:h-7" />
                  </div>
                  <div>
                    <h3 className="text-white font-bold mb-1 text-base md:text-lg">电子邮箱</h3>
                    <p className="text-gray-300 text-base md:text-lg break-all">{EMAIL}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 md:mt-16 pt-8 md:pt-10 border-t border-industrial-700">
              <h3 className="text-white font-bold mb-6 md:mb-8 flex items-center gap-3 text-sm md:text-base">
                关注官方账号 <span className="text-[10px] md:text-xs font-normal text-gray-400 px-2 py-1 bg-industrial-900 rounded border border-industrial-700">获取最新资讯</span>
              </h3>
              <div className="flex flex-row gap-6 md:gap-8">
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="p-2 bg-white rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <img src={WECHAT_QR_IMAGE} alt="微信公众号" className="w-20 h-20 md:w-28 md:h-28" />
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400 group-hover:text-green-500 transition-colors font-bold">
                    <Icons.MessageSquare className="w-3 h-3 md:w-4 md:h-4" />
                    <span>加我微信</span>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-3 group cursor-pointer">
                  <div className="p-2 bg-white rounded-xl shadow-lg group-hover:scale-105 transition-transform duration-300">
                    <img src={DOUYIN_QR_IMAGE} alt="抖音官方号" className="w-20 h-20 md:w-28 md:h-28" />
                  </div>
                  <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400 group-hover:text-white transition-colors font-bold">
                    <Icons.Music className="w-3 h-3 md:w-4 md:h-4" />
                    <span>抖音扫码</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="online-message" className="bg-industrial-800 p-8 md:p-10 rounded-2xl border border-industrial-700 relative overflow-hidden scroll-mt-24 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 md:mb-8 tracking-tight">在线留言</h2>
            
            {isSuccess ? (
              <div className="absolute inset-0 z-10 bg-industrial-800 flex flex-col items-center justify-center p-10 text-center animate-in fade-in zoom-in duration-300">
                <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center text-green-500 mb-8 border border-green-500/20">
                  <Icons.CheckCircle size={56} />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">提交成功！</h3>
                <p className="text-gray-400 mb-10 text-lg font-light">感谢您的留言。我们的工作人员将在24小时内与您联系。</p>
                <button 
                  onClick={() => setIsSuccess(false)}
                  className="px-10 py-4 bg-industrial-700 hover:bg-industrial-600 text-white rounded-lg font-bold transition-colors"
                >
                  继续留言
                </button>
              </div>
            ) : (
              <form className="space-y-6 md:space-y-8" onSubmit={handleInitialSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-gray-400 mb-2 md:mb-3 uppercase tracking-wider">
                      您的称呼 <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full bg-industrial-900 border rounded-lg p-3 md:p-4 text-white focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all text-base md:text-lg ${
                        errors.name 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-industrial-700 focus:border-industrial-accent focus:ring-industrial-accent/20'
                      }`}
                      placeholder="先生/女士" 
                    />
                    {errors.name && <p className="mt-2 text-xs text-red-500 flex items-center gap-1 font-bold"><Icons.AlertTriangle size={12} /> {errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-xs md:text-sm font-bold text-gray-400 mb-2 md:mb-3 uppercase tracking-wider">
                      联系电话 <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full bg-industrial-900 border rounded-lg p-3 md:p-4 text-white focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all text-base md:text-lg ${
                        errors.phone 
                          ? 'border-red-500 focus:border-red-500 focus:ring-red-500/20' 
                          : 'border-industrial-700 focus:border-industrial-accent focus:ring-industrial-accent/20'
                      }`}
                      placeholder="138xxxx..." 
                    />
                    {errors.phone && <p className="mt-2 text-xs text-red-500 flex items-center gap-1 font-bold"><Icons.AlertTriangle size={12} /> {errors.phone}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-xs md:text-sm font-bold text-gray-400 mb-2 md:mb-3 uppercase tracking-wider">需求类型</label>
                  <div className="relative">
                    <select 
                      name="type"
                      value={formData.type}
                      onChange={handleInputChange}
                      className="w-full bg-industrial-900 border border-industrial-700 rounded-lg p-3 md:p-4 text-white focus:outline-none focus:border-industrial-accent focus:ring-2 focus:ring-industrial-accent/20 text-base md:text-lg appearance-none cursor-pointer"
                    >
                      <option>维保报价</option>
                      <option>改造报价</option>
                      <option>购买新梯</option>
                      <option>其他咨询</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <Icons.ChevronLeft className="-rotate-90" size={16} />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs md:text-sm font-bold text-gray-400 mb-2 md:mb-3 uppercase tracking-wider">详细内容</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5} 
                    className="w-full bg-industrial-900 border border-industrial-700 rounded-lg p-3 md:p-4 text-white focus:outline-none focus:border-industrial-accent focus:ring-2 focus:ring-industrial-accent/20 text-base md:text-lg leading-relaxed" 
                    placeholder="请简要描述您的需求或电梯情况..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-industrial-accent hover:bg-industrial-accentHover disabled:bg-industrial-700 disabled:cursor-not-allowed text-white font-bold py-4 md:py-5 rounded-lg transition-colors uppercase tracking-widest text-base md:text-lg flex items-center justify-center gap-3 shadow-lg hover:shadow-orange-500/20"
                >
                  {isSubmitting ? <><Icons.Loader2 className="animate-spin" /> 正在提交...</> : '提交留言'}
                </button>
                <p className="text-xs text-center text-gray-500 font-medium">
                  我们将在1个工作日内与您联系，紧急情况请直接拨打电话。
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {isConfirmOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-industrial-800 border border-industrial-600 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
            <div className="p-6 border-b border-industrial-700 bg-industrial-900/50">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Icons.ShieldCheck className="text-industrial-accent" /> 确认提交信息
              </h3>
            </div>
            
            <div className="p-6 md:p-8 space-y-4 md:space-y-6">
              <p className="text-base text-gray-300">请核对您填写的信息，确认无误后提交：</p>
              
              <div className="bg-industrial-900 rounded-xl p-5 md:p-6 space-y-3 md:space-y-4 text-sm md:text-base border border-industrial-700">
                <div className="flex justify-between border-b border-industrial-800 pb-2">
                  <span className="text-gray-500">您的称呼</span>
                  <span className="text-white font-bold">{formData.name}</span>
                </div>
                <div className="flex justify-between border-b border-industrial-800 pb-2">
                  <span className="text-gray-500">联系电话</span>
                  <span className="text-white font-bold font-mono">{formData.phone}</span>
                </div>
                <div className="flex justify-between pb-2">
                  <span className="text-gray-500">需求类型</span>
                  <span className="text-industrial-accent font-bold">{formData.type}</span>
                </div>
                {formData.message && (
                  <div className="pt-2 border-t border-industrial-800 mt-2">
                    <span className="block text-gray-500 mb-2 text-xs md:text-sm">详细内容</span>
                    <span className="text-gray-300 block bg-industrial-800/50 p-3 rounded-lg text-xs md:text-sm">{formData.message}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 border-t border-industrial-700 bg-industrial-900/30 flex gap-4">
              <button 
                onClick={() => setIsConfirmOpen(false)}
                className="flex-1 px-4 py-3 bg-transparent border border-industrial-600 text-gray-300 hover:text-white hover:border-industrial-500 rounded-lg font-bold transition-colors"
              >
                返回修改
              </button>
              <button 
                onClick={handleFinalSubmit}
                className="flex-1 px-4 py-3 bg-industrial-accent hover:bg-industrial-accentHover text-white rounded-lg font-bold transition-colors shadow-lg shadow-orange-500/20"
              >
                确认提交
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
