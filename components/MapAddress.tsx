import React, { useState } from 'react';
import { ADDRESS } from '../constants';
import { Icons } from './Icon';

interface MapAddressProps {
  className?: string;
}

const MapAddress: React.FC<MapAddressProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMap = (type: 'gaode' | 'baidu') => {
    // Encode the address for URL safety
    const query = encodeURIComponent(ADDRESS);
    let url = '';
    
    if (type === 'gaode') {
      // Amap (High German Map) Search URL
      url = `https://www.amap.com/search?query=${query}`;
    } else {
      // Baidu Map Search URL
      url = `https://map.baidu.com/search/${query}`;
    }
    
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <>
      <span
        onClick={() => setIsOpen(true)}
        className={`cursor-pointer hover:text-industrial-accent hover:underline decoration-dashed underline-offset-4 transition-all ${className}`}
        title="点击查看地图导航"
      >
        {ADDRESS}
      </span>

      {/* Modal Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200" 
          onClick={() => setIsOpen(false)}
        >
          {/* Modal Content */}
          <div 
            className="bg-industrial-800 border border-industrial-700 rounded-xl shadow-2xl w-full max-w-sm overflow-hidden transform transition-all scale-100" 
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 border-b border-industrial-700 flex justify-between items-center bg-industrial-900/50">
              <h3 className="text-white font-bold flex items-center gap-2">
                <Icons.MapPin size={18} className="text-industrial-accent" />
                导航到博升电梯
              </h3>
              <button 
                onClick={() => setIsOpen(false)} 
                className="text-gray-400 hover:text-white transition-colors bg-industrial-800 hover:bg-industrial-700 p-1 rounded-full"
              >
                <Icons.X size={20} />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-6 space-y-3">
              <p className="text-xs text-gray-400 mb-2">请选择您常用的地图服务：</p>
              
              <button
                onClick={() => openMap('gaode')}
                className="w-full flex items-center justify-between p-4 bg-industrial-900 hover:bg-industrial-700 border border-industrial-700 hover:border-industrial-accent/50 rounded-lg group transition-all"
              >
                <span className="text-gray-200 group-hover:text-white font-medium">高德地图 (Amap)</span>
                <Icons.ExternalLink size={16} className="text-gray-500 group-hover:text-industrial-accent transition-colors" />
              </button>
              
              <button
                onClick={() => openMap('baidu')}
                className="w-full flex items-center justify-between p-4 bg-industrial-900 hover:bg-industrial-700 border border-industrial-700 hover:border-industrial-accent/50 rounded-lg group transition-all"
              >
                <span className="text-gray-200 group-hover:text-white font-medium">百度地图 (Baidu)</span>
                <Icons.ExternalLink size={16} className="text-gray-500 group-hover:text-industrial-accent transition-colors" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MapAddress;