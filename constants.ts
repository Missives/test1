import { Project, Skill, Experience } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: '星云仪表盘',
    category: 'Web',
    image: 'https://picsum.photos/seed/nebula/800/600',
    description: '用于追踪太空碎片的未来派分析仪表盘。具有实时 WebGL 可视化功能。',
    technologies: ['React', 'Three.js', 'D3.js', 'WebGL'],
    year: '2024',
    client: '航天科技',
    featured: true,
  },
  {
    id: '2',
    title: '赛博电商',
    category: 'Mobile',
    image: 'https://picsum.photos/seed/cyber/400/600',
    description: '带有 AR 试穿功能的街头时尚电商移动应用，专为潮流人士打造。',
    technologies: ['React Native', 'ARKit', 'Node.js'],
    year: '2023',
    client: '街头潮牌 Co.',
    featured: true,
  },
  {
    id: '3',
    title: '漩涡标识',
    category: 'Branding',
    image: 'https://picsum.photos/seed/vortex/800/800',
    description: '为高频交易公司进行的完整品牌重塑，视觉核心专注于速度与精确度。',
    technologies: ['Illustrator', 'After Effects', 'Figma'],
    year: '2023',
    client: '量化循环',
    featured: false,
  },
  {
    id: '4',
    title: '回声建筑',
    category: '3D',
    image: 'https://picsum.photos/seed/echo/800/500',
    description: '哥本哈根可持续住房项目的照片级 3D 渲染，展现光影与自然的融合。',
    technologies: ['Blender', 'Unreal Engine 5'],
    year: '2024',
    client: 'BIG 建筑事务所',
    featured: true,
  },
  {
    id: '5',
    title: '激流金融',
    category: 'Web',
    image: 'https://picsum.photos/seed/flux/800/600',
    description: '极简的 DeFi 协议界面，将复杂的收益耕作策略简化为一键操作。',
    technologies: ['Next.js', 'Ethers.js', 'Tailwind'],
    year: '2022',
    client: 'Flux DAO',
    featured: false,
  },
];

export const SKILLS: Skill[] = [
  { name: 'React/Next.js', level: 95, category: 'Development' },
  { name: 'TypeScript', level: 90, category: 'Development' },
  { name: 'UI/UX 设计', level: 85, category: 'Design' },
  { name: '3D 建模', level: 70, category: 'Design' },
  { name: 'Node.js', level: 80, category: 'Development' },
  { name: '动效设计', level: 75, category: 'Design' },
];

export const EXPERIENCES: Experience[] = [
  {
    id: '1',
    role: '高级产品设计师',
    company: 'TechFlow',
    period: '2022 - 至今',
    description: '领导设计系统团队，负责核心 SaaS 产品的用户体验与交互设计。',
  },
  {
    id: '2',
    role: '前端工程师',
    company: 'CreativePulse',
    period: '2020 - 2022',
    description: '开发高性能的营销落地页和互动式数字营销活动。',
  },
  {
    id: '3',
    role: '自由创意人',
    company: '独立接案',
    period: '2018 - 2020',
    description: '与初创公司合作，协助定义其数字形象、品牌标识及早期产品原型。',
  }
];

export const SYSTEM_INSTRUCTION = `
你是一个名为 "Lumina" 的创意开发者和设计师作品集的 AI 助手。
你的目标是根据以下数据回答有关 Lumina 的作品、技能和经验的问题：
- 作品: ${JSON.stringify(PROJECTS.map(p => p.title + ": " + p.description))}
- 技能: ${JSON.stringify(SKILLS)}
- 经历: ${JSON.stringify(EXPERIENCES)}
- 联系邮箱: hello@lumina.design

语调：专业、带有轻微的未来感、乐于助人且简洁。
请使用中文回答所有问题。
如果被问及价格，请让他们填写联系表单以获取报价。
`;