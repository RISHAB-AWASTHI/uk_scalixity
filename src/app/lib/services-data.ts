export interface Service {
  id: string;
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  heroImage: string;
  features: string[];
  technologies: string[];
  benefits: string[];
  keywords?: string[];
  pricing?: {
    starting: string;
    description: string;
  };
}

export const servicesData: Service[] = [
  {
    id: 'dashboards',
    slug: 'dashboards',
    title: 'Custom Dashboards & Analytics',
    description: 'Build real-time BI dashboards, KPI monitors, and operational dashboards with role-based access, drill-down analytics, and alerting capabilities. Seamlessly integrate with SQL/NoSQL databases, APIs, and CSV data sources.',
    shortDescription: 'Real-time BI dashboards with role-based access and drill-down analytics',
    image: '/icons/analytics.svg',
    heroImage: 'https://res.cloudinary.com/dxwspucxw/image/upload/v1755593092/UI_screen_iodnip.png',
    features: [
      'Real-time BI dashboards and KPI monitors',
      'Operational dashboards with role-based access',
      'Drill-down analytics and alerting systems',
      'SQL/NoSQL database integrations',
      'API and CSV data source connections',
      'Data model design and ETL/ELT pipelines',
      'Dashboard UI with filters, charts, and exports',
      'Authentication, RBAC, and audit logs'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Python', 'Flask', 'SQL', 'MongoDB'],
    benefits: [
      'Real-time business intelligence insights',
      'Role-based data access control',
      'Automated alerting and monitoring',
      'Multi-source data integration',
      'Comprehensive audit trails'
    ],
    keywords: ['BI dashboard', 'analytics', 'data visualization', 'KPI monitoring', 'real-time data'],
    pricing: {
      starting: '£2,500',
      description: 'Typical timeline: 2–4 weeks for a single-BU dashboard'
    }
  },
  {
    id: 'ecommerce',
    slug: 'ecommerce',
    title: 'Custom Ecommerce Stores',
    description: 'Build comprehensive ecommerce solutions including storefronts, product catalogs, carts/checkout, and order management systems. Complete with admin dashboards, discounts, inventory management, fulfillment, payments, analytics, and SEO optimization.',
    shortDescription: 'Complete ecommerce solutions with admin dashboards and fulfillment',
    image: '/icons/ecommerce.svg',
    heroImage: 'https://res.cloudinary.com/dxwspucxw/image/upload/v1757947314/eCommerce_y5srah.png',
    features: [
      'Custom storefronts and product catalogs',
      'Shopping carts and checkout systems',
      'Order management and fulfillment',
      'Admin dashboards and CMS',
      'Discount and inventory management',
      'Payment gateway integrations',
      'Analytics and basic automations',
      'SEO optimization and performance'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Node.js', 'NestJS', 'Express.js', 'SQL', 'MongoDB', 'Docker'],
    benefits: [
      'Complete ecommerce ecosystem',
      'Automated order processing',
      'Real-time inventory tracking',
      'Multi-payment gateway support',
      'SEO-optimized for visibility'
    ],
    keywords: ['ecommerce', 'online store', 'order management', 'payment processing', 'inventory'],
    pricing: {
      starting: '£5,000',
      description: 'Typical timeline: 4–10 weeks depending on scope'
    }
  },
  {
    id: 'webapps',
    slug: 'webapps',
    title: 'Web Apps / Websites',
    description: 'Create marketing sites, portals, internal tools, and SaaS MVPs with SEO-ready static and dynamic capabilities. From simple websites to complex applications, we deliver responsive, scalable solutions.',
    shortDescription: 'Marketing sites, portals, internal tools, and SaaS MVPs',
    image: '/icons/webapp.svg',
    heroImage: 'https://res.cloudinary.com/dxwspucxw/image/upload/v1757947314/traffic_analytics_aesfiz.png',
    features: [
      'Marketing sites and company portals',
      'Internal tools and SaaS MVPs',
      'SEO-ready static and dynamic sites',
      'Design system and responsive UI',
      'Forms, authentication, and analytics',
      'CI/CD pipeline setup',
      'Staging and production environments',
      'Performance optimization'
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Python', 'Flask', 'Node.js', 'SQL', 'MongoDB'],
    benefits: [
      'Professional web presence',
      'Scalable architecture',
      'SEO optimization',
      'Streamlined development workflow',
      'Multi-environment deployment'
    ],
    keywords: ['web development', 'SaaS MVP', 'marketing sites', 'internal tools', 'responsive design'],
    pricing: {
      starting: '£3,000',
      description: 'Simple sites: 1–2 weeks; Apps/MVPs: 3–8 weeks'
    }
  },
  {
    id: 'ai-chatbots',
    slug: 'ai-chatbots',
    title: 'AI Automation & AI Chatbots',
    description: 'Build support/sales chatbots, knowledge assistants, and workflow automations. Deploy RAG assistants grounded in your data with comprehensive integrations and intelligent handoff capabilities.',
    shortDescription: 'Support/sales chatbots and RAG assistants grounded in your data',
    image: '/icons/ai.svg',
    heroImage: 'https://res.cloudinary.com/dxwspucxw/image/upload/v1757947313/ChatBot_rso968.png',
    features: [
      'Support and sales chatbots',
      'Knowledge assistants and workflow automations',
      'RAG assistants grounded in your data',
      'Conversational flows and dialogue management',
      'CRM, helpdesk, and website connectors',
      'Guardrails and safety measures',
      'Evaluation and analytics dashboards',
      'Intelligent handoff-to-human systems'
    ],
    technologies: ['Python', 'LangChain', 'LangGraph', 'LLMs', 'RAG', 'ChromaDB', 'Vector Databases'],
    benefits: [
      'Automated customer support',
      'Intelligent workflow automation',
      'Data-grounded responses',
      'Seamless system integrations',
      'Scalable conversation handling'
    ],
    keywords: ['AI chatbot', 'RAG assistant', 'workflow automation', 'LangChain', 'conversational AI'],
    pricing: {
      starting: '£4,000',
      description: 'Fast-track deployments in weeks'
    }
  },
  {
    id: 'ml-nlp',
    slug: 'ml-nlp',
    title: 'Machine Learning / Deep Learning / NLP',
    description: 'Build classification, forecasting, recommendation, computer vision, and NLP pipelines. Complete ML lifecycle including training, fine-tuning, evaluation, and MLOps for production deployment.',
    shortDescription: 'ML/DL pipelines with training, fine-tuning, and MLOps',
    image: '/icons/ml.svg',
    heroImage: 'https://res.cloudinary.com/dxwspucxw/image/upload/v1755593092/UI_screen_iodnip.png',
    features: [
      'Classification and forecasting models',
      'Recommendation and computer vision systems',
      'NLP pipelines and language processing',
      'Model training and fine-tuning',
      'Model evaluation and validation',
      'MLOps and production deployment',
      'Data preprocessing and feature engineering',
      'Model monitoring and maintenance'
    ],
    technologies: ['Python', 'TensorFlow', 'PyTorch', 'scikit-learn', 'NLTK', 'spaCy', 'MLOps tools'],
    benefits: [
      'Automated decision making',
      'Predictive insights',
      'Computer vision capabilities',
      'Natural language understanding',
      'Production-ready ML systems'
    ],
    keywords: ['machine learning', 'deep learning', 'NLP', 'computer vision', 'MLOps'],
    pricing: {
      starting: '£6,000',
      description: 'Typical timeline: 3–12 weeks based on data readiness'
    }
  },
  {
    id: 'mobile-apps',
    slug: 'mobile-apps',
    title: 'Mobile App Development (Android/iOS)',
    description: 'Build consumer apps, e-commerce apps, internal tools, social/community apps, delivery & logistics apps, and fintech apps. Complete cross-platform solutions with admin panels and real-time capabilities.',
    shortDescription: 'Cross-platform mobile apps with admin panels and real-time sync',
    image: '/icons/mobile.svg',
    heroImage: 'https://res.cloudinary.com/dxwspucxw/image/upload/e_background_removal/b_rgb:F2E5DC/f_png/v1758084081/MobileApp_idtbrk.png',
    features: [
      'Consumer and e-commerce mobile apps',
      'Internal tools and social/community apps',
      'Delivery & logistics and fintech apps',
      'Cross-platform Android/iOS development',
      'Admin panels and management dashboards',
      'Push notifications and real-time sync',
      'Authentication and in-app payments',
      'App store deployments and optimization'
    ],
    technologies: ['React Native', 'Flutter', 'Node.js', 'Firebase', 'REST/GraphQL APIs', 'AWS/GCP', 'Push Notifications'],
    benefits: [
      'Cross-platform compatibility',
      'Real-time synchronization',
      'Comprehensive admin controls',
      'Scalable backend integration',
      'Professional app store presence'
    ],
    keywords: ['mobile app', 'cross-platform', 'React Native', 'Flutter', 'real-time sync'],
    pricing: {
      starting: '£7,500',
      description: 'MVP: 4–8 weeks; Feature-rich apps: 8–16 weeks'
    }
  }
];

export function getAllServiceSlugs(): string[] {
  return servicesData.map((service) => service.slug);
}

export function getServiceBySlug(slug: string): Service | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getAllServices(): Service[] {
  return servicesData;
}