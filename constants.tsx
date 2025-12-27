
import type { ServiceItem, ProjectItem, NewsItem } from './types';
import { IMAGES } from './images';

// ==============================================================================
// 🟢 网站维护指南 (给零基础管理人员)
// ==============================================================================
// 1. 本文件 (constants.tsx) 包含网站的文字内容配置。
// 2. 图片资源现在统一管理在 'images.ts' 文件中。
//    如需修改图片，请前往 images.ts 修改对应的链接。
// ==============================================================================

// ==============================================================================
// 🎬 宣传视频配置 (Video Configuration)
// ==============================================================================
// 
// [给零基础人员的操作指南]:
// 网站计划部署在 Flarepage (静态托管)，为了保证网站打开速度，强烈建议：
// 
// 方案 A (推荐 - 最佳性能): 
//   将视频上传到优酷、Bilibili、阿里云 OSS 或腾讯云 COS。
//   获取视频的直连地址 (.mp4 结尾) 填入下方的链接中。
//
// 方案 B (本地文件 - 仅限小视频):
//   1. 将 .mp4 视频文件(建议小于 20MB) 放入项目根目录的 'public/assets/video/' 文件夹中。
//      (如果没有 video 文件夹，请新建一个)
//   2. 将文件名改为 'promo.mp4'。
//   3. 将下方的链接修改为: '/assets/video/promo.mp4'
// 
// 注意：如果视频文件过大，会导致网站打开非常慢，甚至在部署时报错。
// ==============================================================================

// 这里使用一个演示用的 MP4 链接。请替换为您公司的真实视频链接。
// export const COMPANY_VIDEO = "https://cdn.coverr.co/videos/coverr-elevator-going-down-2651/1080p.mp4"; 
// 如果您按照方案 B 操作，请取消下面这行的注释，并注释掉上面那行：
export const COMPANY_VIDEO = "/assets/video/promo.mp4";

// ==============================================================================
// 📄 下载中心配置 (Downloads Configuration)
// ==============================================================================
// [操作指南]:
// 1. 请准备好您的公司宣传册 PDF 文件。
// 2. 将文件重命名为 'brochure.pdf'。
// 3. 将文件放入项目根目录的 'public/assets/' 文件夹中。
//    (最终路径应为: public/assets/brochure.pdf)
// ==============================================================================
export const BROCHURE_LINK = "/assets/brochure.pdf";

export const COMPANY_NAME = "东莞博升电梯有限公司";
export const COMPANY_NAME_EN = "Dongguan Bosheng Lift Co., Ltd";
export const COMPANY_TAGLINE = "您的安全，就是我们的使命！";
export const PHONE_NUMBER = "133-6067-2276";
export const ADDRESS = "广东省东莞市东城街道主山社区松毛岭街30号3楼";
export const EMAIL = "boshenglift@qq.com";

// 社交媒体二维码
export const WECHAT_QR_IMAGE = IMAGES.QR_WECHAT; 
export const DOUYIN_QR_IMAGE = IMAGES.QR_DOUYIN;

export const NAV_LINKS = [
  { id: 'home', label: '首页', path: '/' },
  { id: 'services', label: '核心业务', path: '/services' },
  { id: 'projects', label: '工程案例', path: '/projects' },
  { id: 'news', label: '行业资讯', path: '/news' }, 
  { id: 'about', label: '关于博升', path: '/about' },
  { id: 'contact', label: '联系我们', path: '/contact' },
];

// ==============================================================================
// 🖼️ 首页轮播图配置
// ==============================================================================
export const HERO_SLIDES = [
  {
    id: 1,
    image: IMAGES.HERO_SLIDE_1,
    alt: 'Modern Industrial Elevator',
    title: '让技术被尊重，让服务有价值',
    subtitle: '集电梯控制系统研发、电梯销售、电梯维保、旧梯改造更新及技术培训于一体的综合性电梯企业'
  },
  {
    id: 2,
    image: IMAGES.HERO_SLIDE_2,
    alt: 'One-stop Elevator Service',
    title: '客户至上 安全高效',
    subtitle: '电梯销售、电梯维保或改造更新一站式服务商'
  },
  {
    id: 3,
    image: IMAGES.HERO_SLIDE_3,
    alt: 'Circuit Board Repair',
    title: '打造广东省专业度第一维保商',
    subtitle: '专业电梯电路板维修'
  },
  {
    id: 4,
    image: IMAGES.HERO_SLIDE_4,
    alt: 'Technical Training',
    title: '电梯行业人才摇篮 成就梦想',
    subtitle: '校企合作 电梯技术培训'
  },
  {
    id: 5,
    image: IMAGES.HERO_SLIDE_5,
    alt: 'Technician Maintenance',
    title: '您的安全，就是我们的使命！',
    subtitle: '专业团队 24小时极速响应'
  }
];

// ==============================================================================
// 🖼️ 关于我们页面图片配置
// ==============================================================================
export const ABOUT_IMAGES = {
  heroBackground: IMAGES.BG_ABOUT,
  introFeature: IMAGES.ABOUT_TECHNICIAN,
  videoPoster: IMAGES.VIDEO_POSTER // 新增视频封面
};

// ==============================================================================
// 🛠️ 核心业务数据
// ==============================================================================
export const SERVICES: ServiceItem[] = [
  {
    id: 'maintenance',
    title: '电梯维保',
    description: '拥有一支高素质、高效率、从业5年以上的专业团队，解决各类一线品牌技术难题。',
    icon: 'Wrench'
  },
  {
    id: 'modernization',
    title: '老旧梯改造',
    description: '拥有三菱、日立、奥的斯等全品牌控制系统维修测试平台，提供从勘探到交付的一站式方案。',
    icon: 'PenTool'
  },
  {
    id: 'sales',
    title: '整梯销售',
    description: '涵盖乘客电梯、载货电梯、自动扶梯及升降平台，代理知名品牌，品质有保障。',
    icon: 'BarChart3'
  },
  {
    id: 'installation',
    title: '安装调试',
    description: '严格执行国标安装规范，确保每一台电梯完美交付，安全运行。',
    icon: 'HardHat'
  },
  {
    id: 'training',
    title: '技术培训',
    description: '联合职业院校开展校企合作，建立实训基地，输出高素质电梯专业技术人才。',
    icon: 'GraduationCap'
  },
  {
    id: 'repair',
    title: '急修救援',
    description: '24/7 全天候待命，30分钟内抵达现场，快速排除故障，解救被困人员。',
    icon: 'Phone'
  }
];

// ==============================================================================
// 🏗️ 工程案例数据
// ==============================================================================
export const PROJECTS: ProjectItem[] = [
  {
    id: 'p1',
    title: '东莞浙商大厦',
    location: '东莞·南城',
    imageUrl: IMAGES.PROJECT_1,
    category: '维保驻场'
  },
  {
    id: 'p2',
    title: '南城明悦湾酒店',
    location: '东莞·南城',
    imageUrl: IMAGES.PROJECT_2,
    category: '酒店维保'
  },
  {
    id: 'p3',
    title: '虎门以纯工业园',
    location: '东莞·虎门',
    imageUrl: IMAGES.PROJECT_3,
    category: '货梯大修'
  },
  {
    id: 'p4',
    title: '虎门茂林电子',
    location: '东莞·虎门',
    imageUrl: IMAGES.PROJECT_4,
    category: '工业电梯'
  },
  {
    id: 'p5',
    title: '石排东苑花园',
    location: '东莞·石排',
    imageUrl: IMAGES.PROJECT_5,
    category: '整梯销售'
  },
  {
    id: 'p6',
    title: '塘厦莲湖新村',
    location: '东莞·塘厦',
    imageUrl: IMAGES.PROJECT_6,
    category: '旧梯改造'
  }
];

// ==============================================================================
// 📰 新闻资讯数据
// ==============================================================================

export const INDUSTRY_NEWS_DATA: NewsItem[] = [
  {
    id: 'ind-1',
    title: '2025年全国特种设备安全监察工作要点发布',
    summary: '市场监管总局发布最新工作要点，重点部署电梯安全筑底行动，推进老旧电梯更新改造。',
    date: '2025-01-15',
    source: '中国市场监管报',
    externalUrl: 'https://www.samr.gov.cn/',
    imageUrl: IMAGES.NEWS_1
  },
  {
    id: 'ind-2',
    title: '智慧电梯技术发展趋势：物联网与AI的深度融合',
    summary: '行业专家分析，未来5年智慧电梯市场将迎来爆发式增长，预测性维护成为行业标配。',
    date: '2024-12-28',
    source: '电梯行业协会',
    externalUrl: 'https://www.cea-net.org/',
    imageUrl: IMAGES.NEWS_2
  },
  {
    id: 'ind-3',
    title: '广东省开展电梯安全隐患排查整治专项行动',
    summary: '广东省市场监管局决定在全省范围内开展为期半年的电梯安全隐患排查整治专项行动。',
    date: '2024-11-10',
    source: '广东省市场监管局',
    externalUrl: 'http://amr.gd.gov.cn/',
    imageUrl: IMAGES.NEWS_3
  },
  {
    id: 'ind-4',
    title: '既有住宅加装电梯由“加”到“管”，建立长效管理机制',
    summary: '住房城乡建设部表示，将加快建立既有住宅加装电梯长效管理机制，解决后续维保难题。',
    date: '2024-10-22',
    source: '住建部',
    externalUrl: 'https://www.mohurd.gov.cn/',
    imageUrl: IMAGES.NEWS_4
  },
  {
    id: 'ind-5',
    title: '2024年全球电梯制造商10强榜单发布',
    summary: '最新发布的行业报告显示，中国电梯品牌市场份额持续扩大，技术创新能力显著提升。',
    date: '2024-09-15',
    source: 'ELEVATOR WORLD',
    externalUrl: 'https://elevatorworld.com/',
    imageUrl: IMAGES.NEWS_5
  },
  {
    id: 'ind-6',
    title: '特种设备安全法实施十周年：电梯万台事故率大幅下降',
    summary: '数据显示，过去十年我国电梯保有量翻倍增长，但万台事故率和死亡率均呈大幅下降趋势。',
    date: '2024-08-30',
    source: '新华网',
    externalUrl: 'http://www.news.cn/',
    imageUrl: IMAGES.NEWS_6
  }
];
