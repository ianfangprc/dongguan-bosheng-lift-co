
// ==============================================================================
// 🖼️ 资源管理中心 (Asset Management Center)
// ==============================================================================
// 此文件集中管理全站所有的图片资源链接。
// 
// [本地化指南 / Localization Guide]:
// 1. 在项目根目录的 public 文件夹下新建 'assets' 文件夹。
// 2. 按照下方各个模块的注释建议，建立子文件夹（如 hero, projects, services 等）。
// 3. 将您的图片下载并重命名后放入对应文件夹。
// 4. 将下方的 URL 字符串修改为本地路径 (例如: '/assets/hero/slide1.jpg')。
// ==============================================================================

export const IMAGES = {
  // ----------------------------------------------------------------------------
  // 品牌与通用 (Brand & Common)
  // 建议路径: /assets/common/
  // ----------------------------------------------------------------------------
  QR_WECHAT:  '/assets/common/qr_wechat.jpg', // 建议本地化: '/assets/common/qr_wechat.jpg'
  QR_DOUYIN:  '/assets/common/qr_douyin.jpg', // 建议本地化: '/assets/common/qr_douyin.jpg'

  // ----------------------------------------------------------------------------
  // 首页轮播图 (Home Hero Slides)
  // 建议路径: /assets/hero/
  // ----------------------------------------------------------------------------
  HERO_SLIDE_1: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  HERO_SLIDE_2: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  HERO_SLIDE_3: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  HERO_SLIDE_4: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  HERO_SLIDE_5: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',

  // ----------------------------------------------------------------------------
  // 页面顶部背景图 (Page Headers)
  // 建议路径: /assets/headers/
  // ----------------------------------------------------------------------------
  BG_SERVICES: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80',
  BG_PROJECTS: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&q=80',
  BG_NEWS:     'https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80',
  BG_ABOUT:    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80',
  BG_CONTACT:  'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',

  // ----------------------------------------------------------------------------
  // 关于我们页面配图 (About Page)
  // 建议路径: /assets/about/
  // ----------------------------------------------------------------------------
  ABOUT_TECHNICIAN: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
  
  // 资质证书 (Certificates)
  // 建议路径: /assets/certificates/
  CERT_LICENSE:      '/assets/certificates/yyzz.jpg',// 营业执照占位
  CERT_PRODUCTION:   '/assets/certificates/scxk.jpg', // 生产许可证占位
  CERT_CONTROL:      '/assets/certificates/xssy.jpg', // 型式试验占位
  CERT_INSPECTOR:    '/assets/certificates/jyy.jpg', // 检验员证占位

  // ----------------------------------------------------------------------------
  // 核心业务/整梯销售 (Services / Sales Categories)
  // 建议路径: /assets/services/
  // ----------------------------------------------------------------------------
  SALES_PASSENGER: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&q=80&w=800',
  SALES_CARGO:     'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800',
  SALES_ESCALATOR: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=800',
  SALES_LIFT:      'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&q=80&w=800',

  // ----------------------------------------------------------------------------
  // 工程案例 (Projects)
  // 建议路径: /assets/projects/
  // ----------------------------------------------------------------------------
  PROJECT_1: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  PROJECT_2: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  PROJECT_3: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  PROJECT_4: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  PROJECT_5: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  PROJECT_6: 'https://images.unsplash.com/photo-1605283176568-9b41fde3672e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  PROJECT_7: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?auto=format&fit=crop&w=800&q=80',
  PROJECT_8: 'https://images.unsplash.com/photo-1555636222-cae831e670b3?auto=format&fit=crop&w=800&q=80',

  // ----------------------------------------------------------------------------
  // 新闻资讯 (News)
  // 建议路径: /assets/news/
  // ----------------------------------------------------------------------------
  NEWS_1: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80',
  NEWS_2: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80',
  NEWS_3: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80',
  NEWS_4: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=600&q=80',
  NEWS_5: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80',
  NEWS_6: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=600&q=80',
};
