

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
// [操作指南]:
// 1. 将您的宣传视频文件重命名为 'promo.mp4'。
// 2. 将文件放入项目根目录的 'public/assets/video/' 文件夹中。
// 3. 确保文件大小适中（建议 20MB 以内），否则加载会很慢。
// ==============================================================================

export const COMPANY_VIDEO = "/assets/video/promo.mp4";

// 广州电视台采访视频
export const INTERVIEW_VIDEO = "/assets/video/interview_gz_tv.mp4";

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

const INDUSTRY_NEWS: NewsItem[] = [
  {
    id: 'ind-1',
    title: '2025年全国特种设备安全监察工作要点发布',
    summary: '市场监管总局发布最新工作要点，重点部署电梯安全筑底行动，推进老旧电梯更新改造。',
    date: '2025-01-15',
    source: '中国市场监管报',
    externalUrl: 'https://www.samr.gov.cn/',
    imageUrl: IMAGES.NEWS_1,
    category: 'industry'
  },
  {
    id: 'ind-2',
    title: '智慧电梯技术发展趋势：物联网与AI的深度融合',
    summary: '行业专家分析，未来5年智慧电梯市场将迎来爆发式增长，预测性维护成为行业标配。',
    date: '2024-12-28',
    source: '电梯行业协会',
    externalUrl: 'https://www.cea-net.org/',
    imageUrl: IMAGES.NEWS_2,
    category: 'industry'
  },
  {
    id: 'ind-3',
    title: '广东省开展电梯安全隐患排查整治专项行动',
    summary: '广东省市场监管局决定在全省范围内开展为期半年的电梯安全隐患排查整治专项行动。',
    date: '2024-11-10',
    source: '广东省市场监管局',
    externalUrl: 'http://amr.gd.gov.cn/',
    imageUrl: IMAGES.NEWS_3,
    category: 'industry'
  },
  {
    id: 'ind-4',
    title: '既有住宅加装电梯由“加”到“管”，建立长效管理机制',
    summary: '住房城乡建设部表示，将加快建立既有住宅加装电梯长效管理机制，解决后续维保难题。',
    date: '2024-10-22',
    source: '住建部',
    externalUrl: 'https://www.mohurd.gov.cn/',
    imageUrl: IMAGES.NEWS_4,
    category: 'industry'
  },
  {
    id: 'ind-5',
    title: '2024年全球电梯制造商10强榜单发布',
    summary: '最新发布的行业报告显示，中国电梯品牌市场份额持续扩大，技术创新能力显著提升。',
    date: '2024-09-15',
    source: 'ELEVATOR WORLD',
    externalUrl: 'https://elevatorworld.com/',
    imageUrl: IMAGES.NEWS_5,
    category: 'industry'
  },
  {
    id: 'ind-6',
    title: '特种设备安全法实施十周年：电梯万台事故率大幅下降',
    summary: '数据显示，过去十年我国电梯保有量翻倍增长，但万台事故率和死亡率均呈大幅下降趋势。',
    date: '2024-08-30',
    source: '新华网',
    externalUrl: 'http://www.news.cn/',
    imageUrl: IMAGES.NEWS_6,
    category: 'industry'
  }
];

const COMPANY_NEWS: NewsItem[] = [
  {
    id: 'comp-3',
    title: '房国勤的创业故事：给老旧电梯换颗“新心脏”',
    summary: '从17岁南下东莞做学徒，到洞察行业痛点自主研发，博升电梯总经理房国勤用技术为老旧电梯注入新活力，解决小区电梯故障难题。',
    date: '2024-05-24',
    source: '东莞+',
    imageUrl: IMAGES.NEWS_COMPANY_STORY,
    category: 'company',
    content: `
      <p class="lead text-xl text-gray-200 font-light mb-8">
        走进东莞博升电梯有限公司总经理房国勤的第一个公司，墙壁上密密麻麻挂着的绿色电路板瞬间抓住了眼球。“这就是我们主营的项目，和你想象中的电梯公司不一样吧？”房国勤笑着打趣道。
      </p>

      <h3>一、“是东莞收留了我”</h3>

      <div class="my-8 rounded-xl overflow-hidden shadow-2xl border border-industrial-700/50 group">
         <img src="${IMAGES.NEWS_STORY_1}" alt="东莞城市剪影" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
         <div class="bg-industrial-900/80 p-3 text-center text-sm text-gray-400 italic">
            2012年，怀揣梦想初抵东莞
         </div>
      </div>

      <p>
        2012年，年仅17岁9个月的房国勤带着一本职校机电一体化专业的毕业证南下。“虽然不知道自己能做什么，但心目中的第一站并不是东莞。”现实很快向房国勤展示了它“骨感”的一面，当房国勤去到他心目中第一站后，他在那座城市兜兜转转了许久，一直都没找到一个落脚点。
      </p>
      <p>
        “也不能怪别人，谁叫咱起点低呢。”当时的房国勤将原因归结于自己的起点，然而他并不知道不远处的东莞，即将给予他巨大的平台和空间。“在朋友的建议下来到了东莞看看，有了在上一座城市的碰壁经历后，我把自己的姿态放得很低，只要有企业能收留我就可以了。”房国勤回忆说。
      </p>
      <p>
        来到东莞的第一场招聘会，超出了房国勤的预期，他怎么也想不到，在一线大城市兜兜转转2个多月一岗难求的他，一到东莞就有企业愿意收留，他毫不犹豫地答应了东莞一家电梯公司的邀请。房国勤清晰地记得，当时的他差3天就成年了。
      </p>

      <h3>二、在成长中学会洞察</h3>

      <div class="my-8 rounded-xl overflow-hidden shadow-2xl border border-industrial-700/50 group">
         <img src="${IMAGES.NEWS_STORY_2}" alt="技术钻研" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
         <div class="bg-industrial-900/80 p-3 text-center text-sm text-gray-400 italic">
            深耕一线，钻研电路板维修技术
         </div>
      </div>

      <p>
        入职东莞某电梯公司后，房国勤似乎找到了属于自己的那片汪洋。3年的青葱岁月里，他从学徒开始，到电梯清洁、故障维修、控制系统研发等等，几乎将公司的一线技术岗位干了个遍。
      </p>
      <blockquote>
        “学会的不只是技术，还有眼界和思考。比如说，当时的主流大品牌电梯，电路板出现故障只换不修，换一下就要1万多元，但你又不得不换，因为技术都被国外几家大品牌给垄断了呀。电路板真的不能修吗？并不是，这就是我和搭档洞察到的突破点。”
      </blockquote>
      <p>
        2015年，房国勤和搭档摘掉了“打工仔”的身份，成立了一家工作室，正式开始创业，一头钻进了电梯电路板的维修这一当时行业细分类的空白领域，很快就挖到了自己的“第一桶金”，工作室正式转变为他们的第一家公司。
      </p>
      <p>
        随着技术的不断更新和在行业领域的不断深入，房国勤和搭档的“技能树”也在不断扩张生长。从当初的那块电路板，逐渐延伸到了老旧电梯的电梯控制系统研发上。
      </p>

      <h3>三、给老旧电梯换颗“新心脏”</h3>

      <div class="my-8 rounded-xl overflow-hidden shadow-2xl border border-industrial-700/50 group">
         <img src="${IMAGES.NEWS_STORY_3}" alt="电梯控制系统更新" class="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
         <div class="bg-industrial-900/80 p-3 text-center text-sm text-gray-400 italic">
            自主研发控制系统，为老旧电梯注入新活力
         </div>
      </div>

      <p>
        “想必你也知道几年前掀起的那阵老旧小区加装电梯或电梯维护潮吧？我们研发的一套控制系统刚好赶上了这波机遇。”谈及技术研发话题，技术男房国勤开启了滔滔不绝模式。
      </p>
      <p>
        在采访中，房国勤表达了一个核心观点：许多大品牌的老旧电梯得益与精密的机械配置并没有老，老旧电梯真正老旧、容易导致电梯故障的就是控制系统。
      </p>
      
      <div class="bg-industrial-800 p-6 rounded-lg border-l-4 border-industrial-accent my-8">
        <p class="text-white text-lg font-bold italic mb-0">
          “这就好比人的心脏，心脏出问题了，胳膊腿脚再好也不行呀。若我们给它换颗更好的心脏，好胳膊好腿不就又能发挥作用了吗？”
        </p>
      </div>

      <p>
        解答完记者的困惑后，房国勤又兴奋地解析着他和搭档最新研发的电梯控制系统。就当记者有点疲倦之时，房国勤的一句话让记者找到了这次采访所欠缺的最后一块拼图。
      </p>
      <p>
        “星期六，天使投资人就会过来与我们进行最后一轮股份配比商谈，幸好去年在初创班专攻了一年的股权融资与项目估值知识。”房国勤胸有成竹地说。
      </p>

      <p class="text-xs text-gray-500 mt-8 pt-4 border-t border-gray-700 text-right">
        文字：王子玺 | 图片：王子玺 | 编辑：符德明 | 来源：东莞+
      </p>
    `
  },
  {
    id: 'comp-2',
    title: '政策解读 | 东莞住宅专项维修资金申请指南：老旧电梯更新改造的“及时雨”',
    summary: '深度解读东莞市住建局最新政策，博升电梯手把手教您如何合法、高效申请住宅专项维修资金，解决小区电梯老化无钱修的难题，让“沉睡”的资金活起来。',
    date: '2025-02-14',
    source: '博升政策研究室',
    imageUrl: IMAGES.NEWS_MAINTENANCE_FUND,
    category: 'company',
    content: `
      <p class="lead text-xl text-gray-200 font-light mb-8">
        电梯作为高频使用的特种设备，随着使用年限的增长，不可避免地会面临零部件老化、故障频发等问题。然而，动辄数万甚至数十万的维修改造费用，往往让物业和业主犯难。其实，每一位业主都有一笔“房屋养老金”——<strong>住宅专项维修资金</strong>。
      </p>

      <h3>一、什么是住宅专项维修资金？</h3>
      <p>
        住宅专项维修资金，是指专项用于住宅共用部位、共用设施设备保修期满后的维修和更新、改造的资金。根据《东莞市住宅专项维修资金管理办法》，电梯作为小区最重要的共用设施设备之一，完全符合申请条件。
      </p>
      
      <h3>二、什么样的电梯可以申请？</h3>
      <p>
        根据东莞市住建局相关指引，当小区电梯满足以下条件时，可启动维修资金申请程序：
      </p>
      <ul>
        <li><strong>保修期满：</strong>电梯已过原厂质保期（通常为交付使用后2年）。</li>
        <li><strong>存在安全隐患：</strong>经特种设备检验机构检测，存在严重事故隐患或主要部件损坏严重。</li>
        <li><strong>需更新改造：</strong>电梯使用年限较长（一般超过15年），维修成本过高，建议进行现代化更新改造。</li>
      </ul>

      <h3>三、申请流程繁琐？博升助您“一站式”通关</h3>
      <p>
        许多业主委员会和物业公司因为不熟悉流程，导致资金申请周期长、通过率低。申请的核心难点通常在于<strong>“双三分之二”</strong>规则（即需经专有部分占建筑物总面积2/3以上的业主且占总人数2/3以上的业主表决同意）。
      </p>
      
      <blockquote>
        “政策红利不应被繁琐流程阻挡。博升电梯成立了专门的行政服务小组，协助客户处理从方案制定到资金拨付的全过程。”
      </blockquote>

      <p><strong>东莞博升电梯为您提供如下全流程协助：</strong></p>
      <ol>
        <li><strong>现场勘测与方案制定：</strong>我们的高级工程师免费上门勘测，出具科学、经济的《电梯更新改造技术方案》及详细预算。</li>
        <li><strong>协助业主表决：</strong>协助业委会或物业起草表决书，提供政策宣讲，帮助业主理解改造必要性，促成表决通过。</li>
        <li><strong>申报材料整理：</strong>代办向镇街房管所、市住建局提交的各类申请表格、技术鉴定报告及公示材料。</li>
        <li><strong>施工与验收：</strong>严格按照国标施工，确保一次性通过特检院验收，顺利完成资金结算。</li>
      </ol>

      <h3>四、成功案例：让老梯焕新生</h3>
      <p>
        近期，在博升电梯的协助下，东莞南城某老旧小区成功申请使用了维修资金，对使用了18年的6台老旧电梯进行了控制系统和门机系统的全面升级。改造后，电梯故障率降低了95%，运行平稳度大幅提升，且全程未让业主额外集资，赢得了小区居民的一致好评。
      </p>

      <p class="text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
        如果您的小区电梯也面临“老龄化”困扰，欢迎联系博升电梯（电话：133-6067-2276），我们将为您提供专业的维修资金申请咨询服务。
      </p>
    `
  },
  {
    id: 'comp-1',
    title: '博升电梯接受广州电视台采访 谈老旧电梯一站式改造',
    summary: '针对广东地区老旧小区电梯故障频发难题，东莞博升电梯受邀接受广州电视台专访，深入解析“检测+方案+施工+基金申请”的一站式改造模式。',
    date: '2025-02-10',
    source: '博升企业动态',
    imageUrl: IMAGES.NEWS_COMPANY_INTERVIEW,
    category: 'company',
    videoUrl: INTERVIEW_VIDEO,
    content: `
      <p class="lead text-xl text-gray-200 font-light mb-8">
        近日，随着广东地区众多早期商品房小区电梯步入“老龄化”阶段，高频故障、停梯困人等问题日益凸显，成为社会关注的民生痛点。东莞博升电梯有限公司作为大湾区专业的电梯服务商，受邀接受了广州电视台的专题采访。
      </p>
      
      <h3>老旧电梯：隐形的安全隐患</h3>
      <p>
        在采访中，博升电梯负责人指出，许多投入使用超过15年的电梯，其控制系统老化、机械部件磨损严重，导致故障率直线上升。然而，面对这一问题，许多小区业委会和物业却面临着“维修难、资金难、审批难”的三重困境。特别是申请住宅专项维修基金的流程繁琐，往往让改造计划搁浅。
      </p>
      
      <h3>博升方案：一站式解决“痛点”</h3>
      <p>
        针对上述行业痛点，博升电梯推出了<strong>“老旧电梯一站式改造服务”</strong>。这一服务模式不再局限于单一的零部件更换，而是提供全流程的解决方案：
      </p>
      
      <ul>
        <li><strong>专业评估：</strong>派遣高级工程师对电梯进行全面“体检”，出具详尽的风险评估报告。</li>
        <li><strong>定制方案：</strong>根据评估结果，提供“保留部件升级”或“整机更换”等多种性价比方案，杜绝过度维修。</li>
        <li><strong>基金协助：</strong>这是博升服务的一大亮点。我们拥有专业的行政团队，协助业主准备维修基金申请所需的各类检测报告、工程预算及审批材料，大大缩短审批周期。</li>
        <li><strong>施工交付：</strong>严格按照国标进行施工，确保改造后的电梯焕然一新，并通过特检院验收。</li>
      </ul>

      <blockquote>
        “让技术被尊重，让服务有价值。参与老旧小区电梯改造不仅是商业行为，更是企业承担社会责任的体现。”
        <br/><cite>—— 东莞博升电梯负责人</cite>
      </blockquote>
      
      <h3>社会责任：守护垂直出行安全</h3>
      <p>
        通过此次采访，博升电梯希望向公众传递正确的电梯安全理念，并承诺将继续深耕大湾区，用专业技术守护每一位居民的上下楼安全。我们不仅是电梯的维修者，更是社区安全的守护者。
      </p>
      
      <p class="text-gray-400 text-sm mt-8 border-t border-gray-700 pt-4">
        （点击上方视频可观看完整的采访报道）
      </p>
    `
  }
];

export const INDUSTRY_NEWS_DATA = INDUSTRY_NEWS; // Backward compatibility if needed
export const COMPANY_NEWS_DATA = COMPANY_NEWS;

// Combined export for detail pages
export const ALL_NEWS_DATA = [...COMPANY_NEWS, ...INDUSTRY_NEWS];
