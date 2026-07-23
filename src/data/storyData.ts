import { MemoryPhoto, StoryChapterData, TeamWishNote, ProjectTeam, LeadershipNode, MemberProfile } from '../types';

export const LEADERSHIP_NODES: LeadershipNode[] = [
  {
    name: 'Daya Nand',
    title: 'Manager',
    role: 'Engineering Management & Strategic Direction',
    avatarUrl: '/team_photos/Daya_Nand.jpg'
  },
  {
    name: 'Umakanta Senapati',
    title: 'Lead Architect',
    role: 'Db2 Technical Architecture & Vision',
    avatarUrl: '/team_photos/Umakanta.jpg'
  },
  {
    name: 'Anant Vikram Singh',
    title: 'Junior Architect / Team Lead',
    role: 'Db2 Dev Extension & AI Ecosystems',
    avatarUrl: '/team_photos/Anant.jpg'
  }
];

export const PROJECT_TEAMS: ProjectTeam[] = [
  {
    id: 'db2-dev-extension',
    title: 'IBM Db2 Dev Extension',
    leaders: [],
    description: 'GAed VS Code extension with Text-to-SQL, 2 security patch releases & Genius Hub integration.',
    members: [
      'Ayush Rastogi',
      'Dhruv Chaturvedi',
      'Saurabh Srivastava',
      'Sakshi Srivastava',
      'Kunal Gola',
      'Snehal Vishwakarma',
      'Rishu Raj',
      'Ravi Prakash'
    ]
  },
  {
    id: 'db2-linux-arm',
    title: 'Db2 Linux ARM Team',
    leaders: ['Mohit Pandey', 'Ayush Rastogi'],
    description: 'ARM64 Linux support pre-build completed; native Db2 build currently in progress.',
    members: [
      'Sadiq Shaik',
      'Aarchi Choudhury',
      'Kunal Gola',
      'Pawan Thakur'
    ]
  },
  {
    id: 'db2-vector-support',
    title: 'Db2 Vector Support',
    leaders: ['Priyanshu Krishnan'],
    description: 'Vector Index integration, AI query capabilities, and high-performance search support.',
    members: [
      'Keshav Maheshwari',
      'Mohit Pandey',
      'Khushi Tyagi',
      'Jahanvi Sharma'
    ]
  },
  {
    id: 'db2-ai-ecosystem',
    title: 'DB2 AI Ecosystem Enablement',
    leaders: ['Priyanshu Krishnan'],
    description: 'Community collaborations & framework drivers for generative AI workflows.',
    members: ['Priyanshu Krishnan', 'Dhruv Chaturvedi', 'Pawan Thakur', 'Geetika Chugh'],
    subProjects: [
      {
        name: 'Langflow Integration',
        members: ['Priyanshu Krishnan', 'Dhruv Chaturvedi']
      },
      {
        name: 'Haystack Integration',
        members: ['Priyanshu Krishnan', 'Dhruv Chaturvedi', 'Geetika Chugh']
      },
      {
        name: 'CrewAI Framework',
        members: ['Priyanshu Krishnan', 'Dhruv Chaturvedi', 'Geetika Chugh', 'Pawan Thakur']
      },
      {
        name: 'n8n Workflow Connector',
        members: ['Priyanshu Krishnan', 'Dhruv Chaturvedi', 'Geetika Chugh']
      },
      {
        name: 'Microsoft Agent Framework',
        members: ['Priyanshu Krishnan', 'Dhruv Chaturvedi']
      }
    ]
  },
  {
    id: 'cae-team',
    title: 'CAE Team',
    leaders: ['Urvashi'],
    description: 'Managed 22 active engagements & DIC to Genius Hub migration.',
    members: [
      'Urvashi'
    ]
  },
  {
    id: 'ai-foundry',
    title: 'IBM AI Foundry Team',
    leaders: ['Geetika Chugh'],
    description: 'Selected for elite IBM AI foundation model team.',
    members: [
      'Geetika Chugh'
    ]
  }
];

export const HIGHLIGHT_KEYNOTE = {
  quote: "Even though the team mostly consists of freshers, we performed up to the mark and exceeded performance benchmarks through collective synergy and AI-assisted velocity.",
  badge: "Key Leadership Highlight"
};

export const DEFAULT_MEMBER_PROFILES: Record<string, MemberProfile> = {
  'Anant Vikram Singh': {
    name: 'Anant Vikram Singh',
    title: 'Junior Architect / Team Lead',
    role: 'Db2 Dev Extension & AI Ecosystems',
    bio: 'Engineer for IBM Db2 Dev Extension with Text-to-SQL and Genius Hub integration. Drives AI ecosystem connectors across Langflow, Haystack, CrewAI, and n8n.',
    avatarUrl: '/team_photos/Anant.jpg',
    projects: ['IBM Db2 Dev Extension', 'Langflow Connector', 'Haystack Integration', 'CrewAI Framework', 'n8n Workflow Connector', 'Microsoft Agent Framework'],
    skills: ['Db2 Architecture', 'VS Code Extension', 'AI Frameworks', 'System Design']
  },
  'Ayush Rastogi': {
    name: 'Ayush Rastogi',
    title: 'Software Engineer',
    role: 'Db2 Dev Extension & Linux ARM Team',
    bio: 'Core developer for Db2 Dev Extension and contributor to Db2 Linux ARM64 native build and platform pre-builds.',
    avatarUrl: '/team_photos/Ayush.jpg',
    isExMember: true,
    exTag: 'Past Team Member',
    projects: ['IBM Db2 Dev Extension', 'Db2 Linux ARM Team'],
    skills: ['ARM64 Linux', 'VS Code Extension', 'C++', 'TypeScript']
  },
  'Dhruv Chaturvedi': {
    name: 'Dhruv Chaturvedi',
    title: 'Software Engineer',
    role: 'Multi-Project Contributor & Review Platform Creator',
    bio: 'Core engineer involved across 6+ key initiatives: IBM Db2 Dev Extension VS Code GA product, Text-to-SQL AI integrations, AI Ecosystem connectors (Langflow 30k+ downloads, Haystack, CrewAI, n8n), IP.com Defensive Publication co-author, and featured on official IBM Life at IBM social media pages. Designer & Developer of this Executive Review Platform.',
    avatarUrl: '/team_photos/Dhruv_chaturvedi.jpg',
    isExMember: true,
    exTag: 'Past Team Member',
    projects: ['IBM Db2 Dev Extension', 'Langflow Connector (30k+ downloads)', 'Haystack Integration', 'CrewAI Framework', 'n8n Workflow Connector', 'IP.com Defensive Publication', 'Life at IBM Spotlight'],
    skills: ['React', 'TypeScript', 'Db2', 'Text-to-SQL', 'AI Agents', 'Langflow', 'Haystack', 'IP.com Author']
  },
  'Priyanshu Krishnan': {
    name: 'Priyanshu Krishnan',
    title: 'Software Engineer',
    role: 'Vector Support & AI Ecosystem Enablement',
    bio: 'Drives Db2 Vector Index integration and AI ecosystem enablement across Langflow, Haystack, CrewAI, n8n, and Microsoft Agent Framework.',
    avatarUrl: '/team_photos/Priyanshu.jpg',
    projects: ['Db2 Vector Support', 'Langflow Connector', 'Haystack Integration', 'CrewAI Framework', 'n8n Connector', 'Microsoft Agent Framework'],
    skills: ['Vector Indexing', 'RAG Pipelines', 'AI Ecosystems', 'Db2 Search']
  },
  'Geetika Chugh': {
    name: 'Geetika Chugh',
    title: 'Software Engineer',
    role: 'IBM AI Foundry Team & AI Ecosystems',
    bio: 'Selected from Db2 Lucknow for the prestigious IBM AI Foundry team! Co-author of IP.com technical publication on Self-Healing Transaction Agents and contributor to Haystack, CrewAI, and n8n connectors.',
    avatarUrl: '/team_photos/Geetika_Chugh.jpg',
    projects: ['IBM AI Foundry Team', 'Haystack Integration', 'CrewAI Framework', 'n8n Workflow Connector', 'IP.com Technical Publication'],
    skills: ['AI Foundry', 'n8n Automation', 'Haystack RAG', 'TypeScript', 'Db2 Integration', 'IP.com Author']
  },
  'Khushi Tyagi': {
    name: 'Khushi Tyagi',
    title: 'Software Engineer',
    role: 'Vector Support & IP.com Technical Publication Author',
    bio: 'Co-author of IP.com technical publication on Self-Healing Transaction Agents. Contributes to Db2 Vector index embeddings and similarity search.',
    avatarUrl: '/team_photos/Khushi_Tyagi.jpg',
    projects: ['Db2 Vector Support', 'IP.com Technical Publication'],
    skills: ['Embeddings', 'Vector Search', 'C++', 'IP.com Author']
  },
  'Daya Nand': {
    name: 'Daya Nand',
    title: 'Engineering Manager',
    role: 'IBM Db2 Lucknow Manager & IP.com Author',
    bio: 'Oversees the IBM Db2 Lucknow engineering team, driving strategic direction, fresher talent development, product delivery, and executive alignment. Co-author of IP.com technical publication on Self-Healing Transaction Agents.',
    avatarUrl: '/team_photos/Daya_Nand.jpg',
    projects: ['Db2 Lucknow Engineering Leadership', 'IP.com Technical Publication', 'Strategic Alignment'],
    skills: ['Engineering Management', 'Team Leadership', 'Strategic Planning']
  },
  'Umakanta Senapati': {
    name: 'Umakanta Senapati',
    title: 'Lead Architect',
    role: 'Db2 Technical Architecture & Vision',
    bio: 'Architectural direction for Db2 core components, platform extensions, ARM64 porting, and next-gen database capabilities.',
    avatarUrl: '/team_photos/Umakanta.jpg',
    projects: ['Db2 Architecture', 'Linux ARM64 Porting', 'Sovereign Core'],
    skills: ['Database Kernel', 'High Performance Systems', 'System Architecture']
  },
  'Mohit Pandey': {
    name: 'Mohit Pandey',
    title: 'Software Engineer',
    role: 'Db2 Linux ARM Team & Vector Support',
    bio: 'Software engineer for Db2 Linux ARM porting and vector index query engine integrations.',
    avatarUrl: '/team_photos/Mohit.jpg',
    projects: ['Db2 Linux ARM Team', 'Db2 Vector Support'],
    skills: ['Linux Kernel', 'ARM64', 'Vector Index', 'Db2 Core']
  },
  'Kunal Gola': {
    name: 'Kunal Gola',
    title: 'Software Engineer',
    role: 'Db2 Dev Extension & ARM Porting',
    bio: 'Contributes to both Db2 Dev Extension features and ARM64 platform pre-build validation.',
    avatarUrl: '/team_photos/Kunal_Gola.jpg',
    isExMember: true,
    exTag: 'Past Team Member',
    projects: ['IBM Db2 Dev Extension', 'Db2 Linux ARM Team'],
    skills: ['ARM64 Linux', 'Dev Tools', 'Automation']
  },
  'Pawan Thakur': {
    name: 'Pawan Thakur',
    title: 'Software Engineer',
    role: 'CrewAI Framework & Db2 AI Ecosystem',
    bio: 'Drives CrewAI framework integration and agentic workflow orchestration for IBM Db2 database workflows.',
    avatarUrl: '/team_photos/Pawan.jpg',
    projects: ['CrewAI Framework', 'DB2 AI Ecosystem Enablement'],
    skills: ['CrewAI', 'Agent Workflows', 'Python/TypeScript', 'Db2']
  },
  'Urvashi': {
    name: 'Urvashi',
    title: 'Software Engineer',
    role: 'CAE Team',
    bio: 'Managed 22 active customer engagements and led the Db2 Intelligence Center (DIC) to Genius Hub migration, conducting live demos and publishing technical blogs.',
    avatarUrl: '/team_photos/Urvashi.jpg',
    projects: ['CAE Team'],
    skills: ['Customer Engineering', 'Live Demos', 'Genius Hub', 'Enablement']
  },
  'Saurabh Srivastava': {
    name: 'Saurabh Srivastava',
    title: 'Software Engineer',
    role: 'Db2 Dev Extension & Security',
    bio: 'Drives security patches, schema tooling, and feature enhancements for IBM Db2 Dev Extension.',
    avatarUrl: '/team_photos/Saurabh.jpg',
    projects: ['IBM Db2 Dev Extension'],
    skills: ['Security Auditing', 'TypeScript', 'Db2 Engine']
  },
  'Sakshi Srivastava': {
    name: 'Sakshi Srivastava',
    title: 'Software Engineer',
    role: 'Db2 Dev Extension & User Experience',
    bio: 'Builds intuitive developer interfaces and query tools for the Db2 VS Code extension.',
    avatarUrl: '/team_photos/Sakshi.jpg',
    projects: ['IBM Db2 Dev Extension'],
    skills: ['UI/UX', 'React', 'VS Code API']
  },
  'Snehal Vishwakarma': {
    name: 'Snehal Vishwakarma',
    title: 'Software Engineer',
    role: 'Db2 Dev Extension',
    bio: 'Focuses on query optimization tools, testing automation, and release quality for Dev Extension.',
    avatarUrl: '/team_photos/Snehal.jpeg',
    projects: ['IBM Db2 Dev Extension'],
    skills: ['Testing Automation', 'Db2 Queries', 'JavaScript']
  },
  'Rishu Raj': {
    name: 'Rishu Raj',
    title: 'Software Engineer',
    role: 'Db2 Dev Extension',
    bio: 'Core contributor to database connection manager and schema browser in Dev Extension.',
    avatarUrl: '/team_photos/rishu.jpeg',
    projects: ['IBM Db2 Dev Extension'],
    skills: ['Extension API', 'Db2 Drivers', 'TypeScript']
  },
  'Ravi Prakash': {
    name: 'Ravi Prakash',
    title: 'Software Engineer',
    role: 'Db2 Dev Extension',
    bio: 'Enhances sql execution engine, error formatting, and user experience in VS Code.',
    avatarUrl: '/team_photos/Ravi.jpeg',
    projects: ['IBM Db2 Dev Extension'],
    skills: ['SQL Parsing', 'VS Code extension', 'Node.js']
  },
  'Sadiq Shaik': {
    name: 'Sadiq Shaik',
    title: 'Software Engineer',
    role: 'Db2 Linux ARM Team',
    bio: 'Focuses on cross-compilation toolchains and Linux ARM64 system libraries for Db2.',
    avatarUrl: '/team_photos/Sadiq.jpg',
    projects: ['Db2 Linux ARM Team'],
    skills: ['Linux Systems', 'C/C++', 'ARM Architecture']
  },
  'Aarchi Choudhury': {
    name: 'Aarchi Choudhury',
    title: 'Software Engineer',
    role: 'Db2 Linux ARM Team',
    bio: 'Validates Db2 build artifacts and runtime performance on native ARM64 servers.',
    avatarUrl: '/team_photos/aarchi.jpg',
    projects: ['Db2 Linux ARM Team'],
    skills: ['ARM Benchmarks', 'Linux Scripting', 'Db2 Testing']
  },
  'Keshav Maheshwari': {
    name: 'Keshav Maheshwari',
    title: 'Software Engineer',
    role: 'Db2 Vector Support',
    bio: 'Builds vector distance search algorithms and indexing pipelines for Db2 AI queries.',
    avatarUrl: '/team_photos/Keshav.jpg',
    projects: ['Db2 Vector Support'],
    skills: ['Vector Math', 'Index Optimizations', 'Db2 Engine']
  },
  'Jahanvi Sharma': {
    name: 'Jahanvi Sharma',
    title: 'Software Engineer',
    role: 'Db2 Vector Support',
    bio: 'Focuses on AI framework integration and vector index query testing.',
    avatarUrl: '/team_photos/Jhanvi.jpg',
    projects: ['Db2 Vector Support'],
    skills: ['Vector DB', 'Python', 'AI Integration']
  }
};

export const ACHIEVEMENTS_DATA = [
  {
    id: 'ach-conf-ayush',
    category: 'Customer Conference',
    title: 'ISA IBM Data & AI User Group Meeting — Db2 Modern Features',
    metric: 'IBM Technical Exchange',
    presenter: 'Ayush Rastogi',
    imageUrl: '/IBM DB2 TECH IMAGES/Db2_vs_code_Extension_release_ayush.jpeg',
    details: [
      'Ayush Rastogi presented IBM Db2 Modern Features alongside Deepak at the ISA IBM Data & AI User Group Meeting, sponsored by IBM Technical Exchange.',
      'Delivered a client-focused session showcasing Apache Iceberg integration, AI capabilities in Db2, Vector Search, and the Db2 Intelligence Center.',
      'Highlighted how these modern data platform enhancements enable intelligent, scalable, and AI-ready data management for enterprise customers.'
    ]
  },
  {
    id: 'ach-conf-dhruv',
    category: 'Customer Conference',
    title: 'Db2 Technical Advisory Board (TAB) — OSS Live Demo',
    metric: 'Customer Presentation',
    presenter: 'Dhruv Chaturvedi',
    imageUrl: '/IBM DB2 TECH IMAGES/Dhruv_webinar_for_oss.png',
    details: [
      'Dhruv Chaturvedi presented IBM Db2\'s open-source initiatives to customers through a live demonstration at the Db2 Technical Advisory Board (TAB) meeting.',
      'Showcased ongoing work across the OSS ecosystem, including integrations with leading AI frameworks, product capabilities, and engineering efforts to enhance developer experience.',
      'Walked customers through real-world use cases and live workflows, gathering valuable feedback and strengthening collaboration between the Db2 engineering team and the developer community.'
    ]
  },
  {
    id: 'ach-conf-anant',
    category: 'Customer Conference',
    title: 'Anant Presented IBM Db2 Developer Extension to Customers',
    metric: 'Customer Presentation',
    presenter: 'Anant Vikram Singh',
    imageUrl: '/IBM DB2 TECH IMAGES/Db2_vs_code_Extension_release.jpeg',
    details: [
      'Anant Vikram Singh attended a customer meeting and delivered a focused presentation on the IBM Db2 Developer Extension for VS Code.',
      'Demonstrated key features including Text-to-SQL, Genius Hub integration, connection manager, and schema browser to enterprise customers.',
      'Highlighted the developer experience improvements and AI-assisted capabilities that make Db2 development faster and more intuitive.'
    ]
  },
  {
    id: 'ach-ga',
    category: 'Product GA & Release',
    title: 'IBM Db2 Developer Extension — GA Released on VS Code Marketplace 🚀',
    metric: 'GA Product Released',
    details: [
      'Successfully shipped IBM Db2 Developer Extension to General Availability with 2 security patch releases.',
      'Extension is live on the VS Code Marketplace: https://marketplace.visualstudio.com/items?itemName=IBM.db2-for-luw',
      '95%+ code coverage · Zero security vulnerabilities · One-click local install for Db2 Community Edition.',
      'Growth target: Scale to 1M+ developers via blogs, demos & AI-powered Text-to-SQL + Genius Hub.',
      'Developer Productivity: Faster onboarding with IBM BOB — context-aware codebase understanding for quicker ramp-up & development.',
    ],
    backDetails: {
      customerIssues: {
        total: 12,
        bugs: { total: 5, fixed: 4, inProgress: 1 },
        enhancements: { total: 4, completed: 2, inProgress: 2 },
      },
      growthStrategy: [
        'Expand community adoption through blogs, demos, webinars, tutorials & developer advocacy.',
        'Build a rich connector ecosystem with Langflow, n8n, CrewAI & LangChain.',
        'Enhance AI-powered developer experience with Text-to-SQL & Genius Hub integration.',
        'Leverage telemetry-driven insights to optimize onboarding, retention & adoption.',
        'Organize developer hackathons using IBM Db2 + Developer Extension for hands-on adoption.',
      ],
    },
  },
  {
    id: 'ach-vector',
    category: 'Vector Index Team Achievement',
    title: 'Vector Index — DiskANN on Linux AMD64 & IBM AIX (POWER) 🧠',
    metric: 'Cross-Platform Delivery',
    details: [
      'DiskANN Support on Linux (AMD64): Integrated OpenBLAS as the linear algebra backend, replacing Intel MKL — reducing proprietary library dependency and improving portability.',
      'Simplified deployment across Linux AMD64 environments and established a foundation for broader platform support.',
      'Vector Index on IBM AIX (POWER): Successfully delivered DiskANN support on IBM AIX — enabling AI-powered vector search on IBM Power Systems.',
      'Addressed compiler compatibility and optimized library integration for enterprise POWER customers running RAG and AI workloads.',
    ],
    backDetails: {
      businessImpact: [
        '🚀 Expanded Vector Index availability across both Linux AMD64 and IBM AIX (POWER).',
        '🌐 Increased adoption of open-source technologies by transitioning from Intel MKL to OpenBLAS.',
        '🤖 Strengthened Db2\'s readiness for modern AI, semantic search, and vector database workloads.',
        '💼 Enhanced value for enterprise customers running mission-critical workloads on IBM Power Systems.',
        '📈 Positioned the Vector Index team to accelerate future performance improvements and platform expansion.',
      ],
    },
  },
  {
    id: 'ach-ipcom',
    category: 'Prior Art (IP.com) Publication',
    title: '1st Official Technical Publication from IBM Db2 Lucknow ⭐',
    metric: 'IP.com Defensive Publication',
    details: [
      'Defensive Publication: Self-Healing Transaction Agent for Autonomous Recovery of Database Failures.',
      'Published Link: https://priorart.ip.com/IPCOM/00278081D',
      'Authors: Daya Nand, Dhruv Chaturvedi, Khushi Tyagi, Geetika Chugh',
      'A self-healing transaction agent that autonomously detects, recovers, and optimizes database transaction failures in real time.'
    ]
  },
  {
    id: 'ach-social',
    category: 'IBM Global Media Spotlight',
    title: 'Dhruv Post is featured on Official Life at IBM Social Media Pages 🌟',
    metric: 'LinkedIn & Instagram Spotlight',
    details: [
      'Dhruv Chaturvedi & Db2 Lucknow team featured on official IBM "Life at IBM" global channels!',
      'LinkedIn Official Post: https://www.linkedin.com/feed/update/urn:li:ugcPost:7484842033162108928/',
      'Instagram Official Post: https://www.instagram.com/p/DbAP2xUDLHk/',
      'Global recognition for fresher synergy, engineering speed, and technical innovation.'
    ]
  },
  {
    id: 'ach-langflow',
    category: 'AI Ecosystem Production Release',
    title: 'Langflow Db2 Connector Delivered (30,000+ Downloads)',
    metric: '30,000+ Downloads',
    details: [
      'Official Langflow Db2 connector delivered and released live in production.',
      'Surpassed 30,000+ downloads for lfx-ibm package across PyPI & npm ecosystem.',
      'Live Download Stats:',
      'https://pepy.tech/projects/lfx-ibm?timeRange=threeMonths&category=version&includeCIDownloads=true&granularity=monthly&viewType=line&versions=Total%2C0.*'
    ]
  },
  {
    id: 'ach-haystack',
    category: 'AI Framework Integration',
    title: 'Haystack Integration Merged into Core Repo',
    metric: 'Merged into Core',
    details: [
      'Official Db2 connector merged directly into Haystack core framework repository.',
      'Enables enterprise developers globally to build RAG applications on Db2.',
      'Gained significant downloads post-merge; official IBM release is still pending.',
    ]
  },
  {
    id: 'ach-techxchange',
    category: 'Thought Leadership',
    title: 'Published Collective Technical Blogs on IBM TechXchange',
    metric: 'community.ibm.com',
    details: [
      'Authored and published multiple technical blogs collectively from the Db2 Lucknow team.',
      'Published on community.ibm.com TechXchange under official Db2 Group.'
    ]
  },
  {
    id: 'ach-sovereign',
    category: 'Sovereign Core Selection',
    title: 'Two Projects Selected for IBM Sovereign Core Program 🛡️',
    metric: 'Sovereign Core Selected',
    details: [
      'Sovereign AI Vectorless Document Intelligence: Selected for Sovereign Core — high-security vectorless document extraction and intelligence engine.',
      'Db2 Sovereign Vector RAG Service: Selected for Sovereign Core — air-gapped enterprise RAG service powered by Db2 vector search.',
      'Sovereign Core selection represents IBM\'s highest trust-tier for national and enterprise AI infrastructure projects.'
    ]
  },
  {
    id: 'ach-cae',
    category: 'Customer Engineering',
    title: 'CAE Customer Engagement & Migration (Urvashi)',
    metric: '22 Active Engagements',
    details: [
      'Urvashi managed 22 active customer engagements while driving DIC-to-Genius Hub migration.',
      'Delivered key Genius Hub product enhancements and community walkthroughs.'
    ]
  }
];

export const IN_PROGRESS_DATA = [
  {
    title: 'Db2 Support on ARM64 Linux',
    status: 'Build in Progress',
    desc: 'The team is actively compiling and validating native Db2 binary execution for ARM64 Linux environments. The ARM64 pre-build phase has been completed successfully. The current focus is on resolving native build blockers and ensuring full test suite compatibility on 64-bit ARM servers. This opens Db2 to a new generation of cloud-native and edge infrastructure deployments.',
  },
  {
    title: 'PowerPC (PPC) Porting & Validation',
    status: 'In Progress',
    desc: 'Cross-compilation pipeline for IBM PowerPC architecture is actively being established. The team is working through platform-specific toolchain configuration, dependency resolution, and runtime library compatibility for Db2 on POWER systems. Successful completion will extend Db2 reach to IBM POWER infrastructure customers.',
  },
  {
    title: 'VS Code Extension Text-to-SQL & Feature Enhancements',
    status: 'In Progress',
    desc: 'Ongoing development of the IBM Db2 Developer Extension includes deeper Genius Hub Text-to-SQL integration, schema-aware query suggestions, and improved connection manager UX. The extension is already GA and live on the VS Code Marketplace. Active engineering is underway to ship the next feature release with enhanced AI-assisted developer workflows.',
  },
  {
    title: 'Db2 Vector Index Support in Langchain',
    status: 'In Progress',
    desc: 'Engineering work is underway to integrate Db2 Vector Index natively into the Langchain ecosystem. This enables enterprise Langchain users to use Db2 as a first-class vector store for Retrieval-Augmented Generation (RAG) pipelines. The integration covers index creation, similarity search, and hybrid queries directly through Db2\'s native vector engine.',
  },
  {
    title: 'AI Framework Connectors — Active Development',
    status: 'In Progress',
    desc: 'The team is actively building and shipping Db2 connectors for the leading AI orchestration frameworks. Current active development targets: Langflow Connector (production released, 30k+ downloads), Haystack Connector (merged into core repo), CrewAI Connector (agentic workflow orchestration with Db2), N8N Connector (no-code automation integration), and Microsoft Agent Framework Connector (enterprise AI agent integration). These connectors position Db2 as the enterprise-grade data backbone for generative AI applications.',
  }
];

export const SOVEREIGN_INNOVATIONS = {
  sovereignProjects: [
    {
      title: 'Sovereign AI Vectorless Document Intelligence',
      badge: 'Sovereign Core',
      desc: 'Selected for Sovereign Core: High-security vectorless document extraction and intelligence engine.'
    },
    {
      title: 'Db2 Sovereign Vector RAG Service',
      badge: 'Sovereign Core',
      desc: 'Selected for Sovereign Core: Air-gapped enterprise RAG service powered by Db2 vector search.'
    }
  ],
  watsonx: {
    title: 'WatsonX Challenge Participation',
    desc: 'Team actively competed in the global WatsonX Challenge, building functional enterprise AI prototypes.'
  }
};

export const GLOBAL_COLLABORATIONS = [
  {
    domain: 'Db2 Core Engineering',
    leadNames: ['Mike Springgay', 'David Kalmuk', 'Matthew Emmerton', 'Cyrus NG', 'Nataliya Prokoshyna']
  },
  {
    domain: 'Vector Index Team',
    leadNames: ['Christian Garcia', 'Francis Wong']
  },
  {
    domain: 'Security Engineering',
    leadNames: ['Sridhar Billa', 'Abhishek Garai']
  },
  {
    domain: 'Genius Hub (GH) Team',
    leadNames: ['Sheshnarayan', 'Darshan', 'Krishna Guntuka']
  },
  {
    domain: 'Release Engineering',
    leadNames: ['Rajani', 'Mojgan', 'Aslam']
  },
  {
    domain: 'Infra & Build Team',
    leadNames: ['Mark Doyon', 'Jeremy McDonald', 'Junhao Wong']
  },
  {
    domain: 'AI Ecosystem Community',
    leadNames: ['Langflow', 'CrewAI', 'Haystack', 'n8n', 'Microsoft Agent Framework']
  },
  {
    domain: 'External Outreach Leaders',
    leadNames: ['Ashok', 'Shaikh Qadir', 'Greg', 'Satish Vyas']
  }
];

export const CHALLENGES_PROCESS = [
  {
    id: 'ch-1',
    area: 'Product Management & PDLC Alignment',
    issue: '',
    points: [
      'Limited involvement from product management in the PDLC process.',
      'Git issues are not being created in a timely manner, creating gaps in sprint planning and traceability.',
      'Timely responses from the product team are not consistently received, leading to blockers on requirement clarifications and sign-offs.',
      'UI team alignment remains a challenge — key features like Text-to-SQL were integrated without prior UX input.',
    ]
  },
  {
    id: 'ch-2',
    area: 'AIX PR Bottleneck',
    issue: 'Single reviewer with no backup caused PR delays, leading to merge conflicts requiring AIX builds & validation reruns — ~3× turnaround delay.',
    points: [
      'No designated backup reviewer; full dependency on one person blocked the review cycle.',
      'Merge conflicts from delayed reviews required our team to rerun AIX builds & validation tests.',
      'Undefined target platform upfront — team shifted Power10 → Power8 → Power9, causing repeated rework.',
      'Clearer platform definition at project start would have eliminated unnecessary context switching.',
    ]
  },
  {
    id: 'ch-3',
    area: 'Release Process Predictability',
    issue: '',
    points: [
      'Release team introduces new steps at critical stages, impacting timeline predictability.',
      'Late-stage process changes increase risk and reduce delivery confidence.',
      'Earlier visibility into release requirements would improve planning accuracy.',
    ]
  },
  {
    id: 'ch-4',
    area: 'UX Expert Involvement',
    issue: '',
    points: [
      'UX experts have limited involvement in product development.',
      'Key features like Text-to-SQL were integrated without prior UX input.',
      'Earlier UX engagement would improve usability and reduce rework cycles.',
    ]
  }
];

export const AI_ADOPTION_METRICS = [
  {
    metric: '8-10x',
    label: 'Productivity Gain',
    desc: 'Achieved through AI-assisted code development and automated testing.'
  },
  {
    metric: 'IBM BOB Tool',
    label: 'Tech Exchange (Led by Dhruv)',
    desc: 'Led IBM BOB knowledge sharing session with the Kochi & Lucknow teams, presenting AI productivity tools.'
  },
  {
    metric: 'Market Footprint',
    label: 'AI Outreach',
    desc: 'AI-assisted external outreach programs expanding Db2 market awareness.'
  },
  {
    metric: '100% AI Native',
    label: '2026 End Goal',
    desc: 'Targeting 100% AI Native workflow across all engineering initiatives by end of 2026.'
  }
];

export const DEFAULT_MEMORIES: MemoryPhoto[] = [
  {
    id: 'mem-vscode-1',
    title: 'IBM Db2 Developer Extension — VS Code GA Release 🚀',
    caption: 'Celebrating the General Availability launch of IBM Db2 Developer Extension on the VS Code Marketplace — a major milestone for the Lucknow engineering team.',
    category: 'tech',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/Db2_vs_code_Extension_release.jpeg',
    tags: ['VS Code', 'GA Release', 'IBM Db2', 'Extension'],
    location: 'IBM Lucknow',
    highlight: true,
  },
  {
    id: 'mem-vscode-2',
    title: 'Db2 Developer Extension Launch — Team Moment',
    caption: 'The engineering team marks the successful GA delivery of IBM Db2 Developer Extension with Text-to-SQL and Genius Hub integration.',
    category: 'tech',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/Db2_vs_code_Extension_release_2.jpeg',
    tags: ['VS Code', 'GA Release', 'IBM Db2', 'Celebration'],
    location: 'IBM Lucknow',
    highlight: true,
  },
  {
    id: 'mem-vscode-3',
    title: 'Db2 Extension Release — Ayush & Team',
    caption: 'Ayush Rastogi and the team at the Db2 Developer Extension release milestone — shipped with quality, speed, and AI-assisted velocity.',
    category: 'tech',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/Db2_vs_code_Extension_release_ayush.jpeg',
    tags: ['VS Code', 'Release', 'IBM Db2', 'Ayush'],
    location: 'IBM Lucknow',
    highlight: true,
  },
  {
    id: 'mem-sovereign-1',
    title: 'IBM Sovereign Core — Grand Finale 🛡️',
    caption: 'IBM Db2 Lucknow team at the Sovereign Core Grand Finale — two of our projects selected for IBM\'s highest-trust AI infrastructure programme.',
    category: 'tech',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/Grandfinale_soverign.jpeg',
    tags: ['Sovereign Core', 'IBM', 'AI', 'Grand Finale'],
    location: 'IBM Sovereign Summit',
    highlight: true,
  },
  {
    id: 'mem-sovereign-2',
    title: 'Sovereign Core Grand Finale Stage',
    caption: 'On stage at the IBM Sovereign Core Grand Finale, representing Db2 Lucknow in the national AI infrastructure spotlight.',
    category: 'tech',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/sovereign_grandfinale.jpeg',
    tags: ['Sovereign', 'Grand Finale', 'IBM', 'Stage'],
    location: 'IBM Sovereign Summit',
    highlight: true,
  },
  {
    id: 'mem-sovereign-3',
    title: 'IBM Sovereign Core Catalogathon',
    caption: 'Participating in the IBM Sovereign Core Catalogathon — building enterprise AI solutions that meet the highest security and compliance standards.',
    category: 'tech',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/IBM_sovereign_core_Cateaglogathon.jpeg',
    tags: ['Sovereign', 'Catalogathon', 'IBM', 'AI'],
    location: 'IBM Campus',
    highlight: true,
  },
  {
    id: 'mem-sovereign-4',
    title: 'Sovereign Core Catalogathon — Team Session',
    caption: 'Deep-dive collaborative session during the IBM Sovereign Core Catalogathon, aligning on AI product strategy and sovereign architecture.',
    category: 'tech',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/IBM_sovereign_core_Cateaglogathon_2.jpeg',
    tags: ['Sovereign', 'Catalogathon', 'Team', 'Strategy'],
    location: 'IBM Campus',
    highlight: false,
  },
  {
    id: 'mem-isa-1',
    title: 'ISA IBM Data & AI User Group Meeting',
    caption: 'IBM Technical Exchange event — presenting Db2 AI capabilities and ecosystem integrations to the ISA IBM Data & AI User Group community.',
    category: 'tech',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/ISA_IBM_Data_&_AI_User_Group_Meeting_sponsored_by_IBM_Technical Exchange.jpeg',
    tags: ['ISA', 'IBM TechExchange', 'Data & AI', 'Community'],
    location: 'IBM Technical Exchange',
    highlight: true,
  },
  {
    id: 'mem-isa-2',
    title: 'ISA Data & AI Event — Deepak Session',
    caption: 'Engaging knowledge-sharing session at the ISA IBM Data & AI User Group Meeting, sponsored by IBM Technical Exchange.',
    category: 'tech',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/ISA_IBM_Data_&_AI_User_Group_Meeting_sponsored_by_IBM_Technical Exchange_deepak.jpeg',
    tags: ['ISA', 'IBM TechExchange', 'Knowledge Sharing', 'AI'],
    location: 'IBM Technical Exchange',
    highlight: false,
  },
  {
    id: 'mem-isa-3',
    title: 'ISA Data & AI Event — Group Photo',
    caption: 'Full group photo at the ISA IBM Data & AI User Group Meeting — a proud moment for the Db2 Lucknow team on the global stage.',
    category: 'tech',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/ISA_IBM_Data_&_AI_User_Group_Meeting_sponsored_by_IBM_Technical Exchange_groupimage.jpeg',
    tags: ['ISA', 'IBM TechExchange', 'Group Photo', 'Community'],
    location: 'IBM Technical Exchange',
    highlight: true,
  },
  {
    id: 'mem-nainital-1',
    title: 'Nainital Team Trip 2026 🏔️',
    caption: 'The IBM Db2 Lucknow team hits the hills — bonding, laughter, and memories made on the Nainital team outing 2026.',
    category: 'outings',
    date: '2026',
    imageUrl: '/IBM DB2 TECH IMAGES/nainital2026.jpeg',
    tags: ['Nainital', 'Team Outing', 'Travel', '2026'],
    location: 'Nainital, Uttarakhand',
    highlight: true,
  },
  {
    id: 'mem-nainital-2',
    title: 'Nainital Trip — Team Adventures',
    caption: 'Mountains, fresh air, and the whole squad — celebrating another year of great work with an unforgettable Nainital escape.',
    category: 'outings',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/Nainital_trip.jpeg',
    tags: ['Nainital', 'Team Trip', 'Adventure', 'Hills'],
    location: 'Nainital, Uttarakhand',
    highlight: false,
  },
  {
    id: 'mem-outing-1',
    title: 'Team Outing & Group Bonding',
    caption: 'Stepping away from screens — the team enjoys a well-deserved outing, strengthening bonds that make us more than colleagues.',
    category: 'outings',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/team_outing.jpeg',
    tags: ['Outing', 'Team Building', 'Fun', 'Bonds'],
    location: 'Lucknow Outskirts',
    highlight: true,
  },
  {
    id: 'mem-outing-2',
    title: 'Team Outing — Candid Moments',
    caption: 'Candid shots from our team outing — pure laughter, zero work talk, and memories that last a lifetime.',
    category: 'outings',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/team_outing_image.jpeg',
    tags: ['Outing', 'Candid', 'Fun', 'Team'],
    location: 'Lucknow Outskirts',
    highlight: false,
  },
  {
    id: 'mem-outing-3',
    title: 'Trip Fun & Team Energy',
    caption: 'High energy, big smiles — the IBM Db2 Lucknow team letting loose on a fun-filled group trip.',
    category: 'outings',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/trip_fun.jpeg',
    tags: ['Trip', 'Fun', 'Energy', 'Team'],
    location: 'On the Road',
    highlight: false,
  },
  {
    id: 'mem-outing-4',
    title: 'Team Outing Day Out',
    caption: 'A day away from deadlines — the team exploring, laughing, and creating memories together.',
    category: 'outings',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/teamouting.jpeg',
    tags: ['Outing', 'Day Out', 'Team', 'Memories'],
    location: 'Lucknow',
    highlight: false,
  },
  {
    id: 'mem-engagement-1',
    title: 'Saurabh\'s Engagement Celebration 💍',
    caption: 'Celebrating a beautiful milestone — congratulating Saurabh Srivastava on his engagement! The whole team came together to share in the joy.',
    category: 'celebrations',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/Saurabh_engagement.jpeg',
    tags: ['Engagement', 'Saurabh', 'Celebration', 'Milestone'],
    location: 'Lucknow',
    highlight: true,
  },
  {
    id: 'mem-engagement-2',
    title: 'Saurabh Engagement — Enagegement Snapshot',
    caption: 'Another beautiful frame from Saurabh\'s engagement celebration — the team dressed up and full of joy.',
    category: 'celebrations',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/Saurabh_enagegement.jpeg',
    tags: ['Engagement', 'Saurabh', 'Team', 'Joy'],
    location: 'Lucknow',
    highlight: false,
  },
  {
    id: 'mem-engagement-3',
    title: 'Saurabh Engagement — Group Celebration',
    caption: 'The whole squad gathered to celebrate Saurabh\'s big day — smiles, warmth, and team family vibes all around.',
    category: 'celebrations',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/saurabh_engagement_group.jpeg',
    tags: ['Engagement', 'Group Photo', 'Saurabh', 'Celebration'],
    location: 'Lucknow',
    highlight: true,
  },
  {
    id: 'mem-birthday-1',
    title: 'Sadiq\'s Birthday Party 🎂',
    caption: 'Surprise birthday celebration for Sadiq — cake, laughter, and the Db2 Lucknow team showing up big!',
    category: 'celebrations',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/Birthday_sadiq.jpeg',
    tags: ['Birthday', 'Sadiq', 'Celebration', 'Surprise'],
    location: 'IBM Office Lucknow',
    highlight: true,
  },
  {
    id: 'mem-birthday-2',
    title: 'Birthday Party — Team Traditions',
    caption: 'Every birthday is an office celebration — the IBM Db2 Lucknow team lives by the motto: no birthday goes uncelebrated!',
    category: 'celebrations',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/birthday.jpeg',
    tags: ['Birthday', 'Celebration', 'Traditions', 'Team'],
    location: 'IBM Office Lucknow',
    highlight: false,
  },
  {
    id: 'mem-birthday-3',
    title: 'Birthday Bash — Everyone Together',
    caption: 'Cake smashes, heartfelt wishes, and the whole crew gathered for another memorable birthday celebration.',
    category: 'celebrations',
    date: 'Ongoing',
    imageUrl: '/IBM DB2 TECH IMAGES/Birthdayparty.jpeg',
    tags: ['Birthday', 'Party', 'Team', 'Together'],
    location: 'IBM Office Lucknow',
    highlight: false,
  },
  {
    id: 'mem-cafeteria-1',
    title: 'Cafeteria Group Photo',
    caption: 'Lunch breaks that feel like family time — the IBM Db2 Lucknow team gathers at the cafeteria for a group shot.',
    category: 'celebrations',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/Cafeteria_group_photo.jpeg',
    tags: ['Cafeteria', 'Group Photo', 'Family', 'Lunch'],
    location: 'IBM Lucknow Cafeteria',
    highlight: false,
  },
  {
    id: 'mem-team-photo',
    title: 'The IBM Db2 Lucknow Team',
    caption: 'One united family — the full IBM Db2 engineering team, Lucknow. Together we build, learn, ship, and celebrate.',
    category: 'tech',
    date: '2025',
    imageUrl: '/IBM DB2 TECH IMAGES/team_photo.jpeg',
    tags: ['Team Photo', 'IBM Db2', 'Lucknow', 'United'],
    location: 'IBM Lucknow',
    highlight: true,
  }
];

export const STORY_CHAPTERS: StoryChapterData[] = [
  {
    id: 'chapter-united-family',
    number: '01',
    title: 'One Family, One Shared Goal',
    subtitle: 'THE IBM Db2 LUCKNOW SPIRIT',
    description: 'We are a united family. From morning standups to late-night releases, every project is driven by mutual trust, fresh enthusiasm, and camaraderie.',
    quote: '"We learn together, grow together, and celebrate every milestone as one united team."',
    badge: 'Core Identity',
    gradient: 'from-blue-600 via-cyan-500 to-indigo-600',
    category: 'all',
    highlights: [
      { title: 'United Culture', desc: 'Standing by each other in work, learning, and life.', icon: 'Users' },
      { title: 'Shared Vision', desc: 'Building world-class Db2 technology.', icon: 'Target' },
      { title: 'Heartfelt Bonding', desc: 'Cherishing everyday moments together.', icon: 'Heart' }
    ],
    featuredPhotos: [DEFAULT_MEMORIES[0], DEFAULT_MEMORIES[3]]
  }
];

export const DEFAULT_WISHE_NOTES: TeamWishNote[] = [
  {
    id: 'note-1',
    author: 'Daya Nand',
    role: 'Manager',
    message: 'Proud of our team! Moving mountains together with incredible energy, quality deliverables, and strong mutual support.',
    color: 'from-blue-50 to-indigo-50 border-blue-200 text-blue-900',
    timestamp: 'Just now'
  },
  {
    id: 'note-2',
    author: 'Umakanta Senapati',
    role: 'Lead Architect',
    message: 'Technically sharp, deeply collaborative, and always innovating. All achievements belong to the collective team effort!',
    color: 'from-purple-50 to-pink-50 border-purple-200 text-purple-900',
    timestamp: '2 hrs ago'
  },
  {
    id: 'note-3',
    author: 'Urvashi',
    role: 'CAE Team',
    message: 'Managing 22 active customer engagements and Genius Hub migration has been an amazing journey with team support!',
    color: 'from-emerald-50 to-teal-50 border-emerald-200 text-emerald-900',
    timestamp: '3 hrs ago'
  },
  {
    id: 'note-4',
    author: 'Priyanshu Krishnan',
    role: 'Vector & AI Lead',
    message: 'Bringing Db2 into Langflow, Haystack, CrewAI, and n8n with this passionate team is pure joy!',
    color: 'from-amber-50 to-orange-50 border-amber-200 text-amber-900',
    timestamp: '5 hrs ago'
  }
];

export const IBM_VALUE_THOUGHTS = [
  {
    category: "IBM Core Value",
    thought: "Dedication to every client's success—delivering enterprise resilience, speed, and trust with IBM Db2.",
    author: "IBM Enterprise Philosophy"
  },
  {
    category: "IBM Core Value",
    thought: "Innovation that matters—for our company and for the world. Driving AI native databases and vector intelligence.",
    author: "IBM Values & Heritage"
  },
  {
    category: "IBM Core Value",
    thought: "Trust and personal responsibility in all relationships. Fostering transparency and excellence across global pods.",
    author: "IBM Leadership Charter"
  },
  {
    category: "Freshers Synergy",
    thought: "Even though the team mostly consists of freshers, we performed up to the mark and exceeded performance benchmarks through collective synergy and AI-assisted velocity.",
    author: "Lucknow Executive Review Keynote"
  },
  {
    category: "AI Productivity",
    thought: "Unlocking 8-10x productivity gains using IBM Granite, Copilot, and custom Text-to-SQL AI workflows.",
    author: "Db2 Dev Extension Team"
  },
  {
    category: "Global Collaboration",
    thought: "Seamlessly aligning Db2 Core Kernel, Security, Release Engineering, and ARM64 Linux porting across global hubs.",
    author: "Db2 Lucknow Pods"
  },
  {
    category: "Platform Creation",
    thought: "Made with ❤️ by Pawan Thakur & Dhruv Chaturvedi for the IBM Db2 Lucknow Engineering Executive Review Showcase.",
    author: "Dashboard Credits"
  }
];


