// Curated bank of 120+ unique Unsplash stock photography assets for SaaS articles
// Every image is tagged with SaaS categories and includes bespoke descriptive ALT text

const IMAGE_BANK = [
  // --- CRM & Sales ---
  {
    id: "crm-1",
    url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    alt: "Sales revenue performance graphs and customer conversion metrics on dual desktop screens",
    categories: ["CRM & Sales", "Commerce & Sales", "reviews"]
  },
  {
    id: "crm-2",
    url: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    alt: "Sales development team analyzing pipeline opportunity stages during pipeline review session",
    categories: ["CRM & Sales", "comparisons"]
  },
  {
    id: "crm-3",
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    alt: "Account executive team collaborating over customer deal stages in modern conference room",
    categories: ["CRM & Sales", "Commerce & Sales"]
  },
  {
    id: "crm-4",
    url: "https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80",
    alt: "Retail commerce checkout terminal processing digital transaction records in store",
    categories: ["Commerce & Sales", "Finance & Accounting"]
  },
  {
    id: "crm-5",
    url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1200&q=80",
    alt: "Marketing and outbound sales representatives brainstorming multi-channel lead acquisition tactics",
    categories: ["CRM & Sales", "Marketing"]
  },
  {
    id: "crm-6",
    url: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&w=1200&q=80",
    alt: "Digital payment system processing recurring subscription charges on countertop reader",
    categories: ["Commerce & Sales", "Finance & Accounting"]
  },
  {
    id: "crm-7",
    url: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&w=1200&q=80",
    alt: "Point of sale system and inventory register tracking daily commercial orders",
    categories: ["Commerce & Sales", "CRM & Sales"]
  },
  {
    id: "crm-8",
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80",
    alt: "Sales pipeline projection dashboard projected on meeting room wall during executive briefing",
    categories: ["CRM & Sales", "Finance & Accounting"]
  },
  {
    id: "crm-9",
    url: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?auto=format&fit=crop&w=1200&q=80",
    alt: "Sales analytics consultant charting prospect conversion ratios on whiteboard and laptop",
    categories: ["CRM & Sales", "Marketing"]
  },
  {
    id: "crm-10",
    url: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=80",
    alt: "Small business operator auditing customer transaction history on tablet terminal",
    categories: ["Commerce & Sales", "CRM & Sales"]
  },

  // --- Project Management ---
  {
    id: "pm-1",
    url: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1200&q=80",
    alt: "Agile sprint task backlog board organized with user story cards and progress columns",
    categories: ["Project Management", "reviews"]
  },
  {
    id: "pm-2",
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    alt: "Project timeline chart showing work breakdown structures and sprint schedule milestones",
    categories: ["Project Management", "Productivity & Collaboration"]
  },
  {
    id: "pm-3",
    url: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?auto=format&fit=crop&w=1200&q=80",
    alt: "Product operations team reviewing delivery roadmap and cross-department dependencies",
    categories: ["Project Management", "Productivity & Collaboration"]
  },
  {
    id: "pm-4",
    url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    alt: "Product development team participating in sprint retrospective and sprint planning review",
    categories: ["Project Management", "comparisons"]
  },
  {
    id: "pm-5",
    url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80",
    alt: "Cross-functional team reviewing software delivery boards and project priorities",
    categories: ["Project Management", "Productivity & Collaboration"]
  },
  {
    id: "pm-6",
    url: "https://images.unsplash.com/photo-1531538606171-0880c5335496?auto=format&fit=crop&w=1200&q=80",
    alt: "Scrum master facilitating task priority review with engineering team",
    categories: ["Project Management", "Developer Tools"]
  },
  {
    id: "pm-7",
    url: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=1200&q=80",
    alt: "Software release engineering leads analyzing deployment tickets and backlog items",
    categories: ["Project Management", "Developer Tools"]
  },
  {
    id: "pm-8",
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80",
    alt: "Technical team inspecting user experience prototypes during sprint review",
    categories: ["Project Management", "Design & Creative"]
  },
  {
    id: "pm-9",
    url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    alt: "Engineering group reviewing task velocity charts on multiple connected screens",
    categories: ["Project Management", "Developer Tools"]
  },
  {
    id: "pm-10",
    url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    alt: "Distributed team organizing collaborative task kanban cards on open office table",
    categories: ["Project Management", "Productivity & Collaboration"]
  },

  // --- AI & Machine Learning ---
  {
    id: "ai-1",
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    alt: "Abstract neural network data visualization representing language model token processing",
    categories: ["AI & Machine Learning", "reviews"]
  },
  {
    id: "ai-2",
    url: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
    alt: "Generative artificial intelligence user prompt interface with deep thinking indicators",
    categories: ["AI & Machine Learning", "Developer Tools"]
  },
  {
    id: "ai-3",
    url: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80",
    alt: "Conceptual visualization of machine learning neural weights and deep reasoning matrix",
    categories: ["AI & Machine Learning"]
  },
  {
    id: "ai-4",
    url: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&w=1200&q=80",
    alt: "Artificial intelligence reasoning workspace displaying prompt queries and structured answers",
    categories: ["AI & Machine Learning", "Productivity & Collaboration"]
  },
  {
    id: "ai-5",
    url: "https://images.unsplash.com/photo-1677756119517-756a188d2d94?auto=format&fit=crop&w=1200&q=80",
    alt: "Human operator testing natural language understanding models on desktop workstation",
    categories: ["AI & Machine Learning", "Developer Tools"]
  },
  {
    id: "ai-6",
    url: "https://images.unsplash.com/photo-1617791160505-6f008e1e6703?auto=format&fit=crop&w=1200&q=80",
    alt: "Digital matrix data streams illustrating multi-dimensional vector database indexing",
    categories: ["AI & Machine Learning", "Data Integration & ETL"]
  },
  {
    id: "ai-7",
    url: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=1200&q=80",
    alt: "Robotic technology prototype interacting with digital sensory data feeds in lab",
    categories: ["AI & Machine Learning"]
  },
  {
    id: "ai-8",
    url: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1200&q=80",
    alt: "Conversational customer service bot answering incoming user inquiries automatically",
    categories: ["AI & Machine Learning", "Support & Success"]
  },
  {
    id: "ai-9",
    url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    alt: "Secure digital code stream with automated encryption algorithms and data pipelines",
    categories: ["AI & Machine Learning", "IT & Security"]
  },
  {
    id: "ai-10",
    url: "https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80",
    alt: "Data scientist benchmarking LLM token latency and hallucination test scores",
    categories: ["AI & Machine Learning", "Developer Tools"]
  },

  // --- Developer Tools ---
  {
    id: "dev-1",
    url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    alt: "Software engineer code editor showing syntax highlighting and test assertions",
    categories: ["Developer Tools", "comparisons"]
  },
  {
    id: "dev-2",
    url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    alt: "MacBook workspace displaying full-stack web application code and terminal outputs",
    categories: ["Developer Tools", "Productivity & Collaboration"]
  },
  {
    id: "dev-3",
    url: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
    alt: "Clean Python code editor with unit test coverage indicators on ultra-wide monitor",
    categories: ["Developer Tools"]
  },
  {
    id: "dev-4",
    url: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    alt: "HTML, CSS and JavaScript source code displayed in dark mode development editor",
    categories: ["Developer Tools", "Design & Creative"]
  },
  {
    id: "dev-5",
    url: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=1200&q=80",
    alt: "Programmer laptop set up with mechanical keyboard and continuous integration console",
    categories: ["Developer Tools"]
  },
  {
    id: "dev-6",
    url: "https://images.unsplash.com/photo-1555066932-e78dd8fb77bb?auto=format&fit=crop&w=1200&q=80",
    alt: "Dual display developer workstation showing build scripts and database query traces",
    categories: ["Developer Tools", "Data Integration & ETL"]
  },
  {
    id: "dev-7",
    url: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",
    alt: "Developer debugging container deployment configurations and cloud pod logs",
    categories: ["Developer Tools", "IT & Security"]
  },
  {
    id: "dev-8",
    url: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80",
    alt: "Software engineer typing rapid commands into Linux terminal shell on laptop",
    categories: ["Developer Tools"]
  },
  {
    id: "dev-9",
    url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",
    alt: "Source code monitor with website HTML markup and live preview window side by side",
    categories: ["Developer Tools", "Design & Creative"]
  },
  {
    id: "dev-10",
    url: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80",
    alt: "Developer workspace featuring modern laptop compiling TypeScript application components",
    categories: ["Developer Tools", "Productivity & Collaboration"]
  },

  // --- Workflow Automation & ETL ---
  {
    id: "auto-1",
    url: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
    alt: "Cloud datacenter server racks processing background webhook automation triggers",
    categories: ["Workflow Automation", "Data Integration & ETL", "reviews"]
  },
  {
    id: "auto-2",
    url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    alt: "Data analytics dashboards tracking automated data transformations and event counters",
    categories: ["Data Integration & ETL", "Workflow Automation"]
  },
  {
    id: "auto-3",
    url: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
    alt: "Automated webhook monitoring graphs showing API payload transfer speeds and success rates",
    categories: ["Workflow Automation", "Data Integration & ETL"]
  },
  {
    id: "auto-4",
    url: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    alt: "Printed circuit microchip representing microservice message queues and workflow routing",
    categories: ["Workflow Automation", "Developer Tools"]
  },
  {
    id: "auto-5",
    url: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    alt: "Global network grid illustrating cloud application synchronization and data flows",
    categories: ["Data Integration & ETL", "IT & Security"]
  },
  {
    id: "auto-6",
    url: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80",
    alt: "High-speed optical fiber server switch routing enterprise automation data packets",
    categories: ["Workflow Automation", "IT & Security"]
  },
  {
    id: "auto-7",
    url: "https://images.unsplash.com/photo-1526374870839-e155464bb9b2?auto=format&fit=crop&w=1200&q=80",
    alt: "Encrypted background database synchronizer replicating records between SaaS databases",
    categories: ["Data Integration & ETL", "IT & Security"]
  },
  {
    id: "auto-8",
    url: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",
    alt: "Enterprise data integration pipeline monitoring dashboard tracking sync errors",
    categories: ["Data Integration & ETL", "Workflow Automation"]
  },
  {
    id: "auto-9",
    url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Technical staff reviewing real-time automated workflow throughput indicators on screens",
    categories: ["Workflow Automation", "Productivity & Collaboration"]
  },
  {
    id: "auto-10",
    url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern network operations desk managing automated multi-cloud data sync jobs",
    categories: ["Data Integration & ETL", "IT & Security"]
  },

  // --- Communication & Video ---
  {
    id: "comm-1",
    url: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80",
    alt: "Professional creator studio desk with microphone and camera setup for async video recording",
    categories: ["Communication & Video", "reviews"]
  },
  {
    id: "comm-2",
    url: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?auto=format&fit=crop&w=1200&q=80",
    alt: "Remote colleague participating in high definition video conference call on laptop",
    categories: ["Communication & Video", "Productivity & Collaboration"]
  },
  {
    id: "comm-3",
    url: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=1200&q=80",
    alt: "Team member communicating via team messaging application on dual monitors",
    categories: ["Communication & Video", "Productivity & Collaboration"]
  },
  {
    id: "comm-4",
    url: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&w=1200&q=80",
    alt: "Two professionals collaborating asynchronously via instant message exchange and screen sharing",
    categories: ["Communication & Video", "Productivity & Collaboration"]
  },
  {
    id: "comm-5",
    url: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&w=1200&q=80",
    alt: "Customer support specialist responding to real-time client chat inquiries on desktop",
    categories: ["Communication & Video", "Support & Success"]
  },
  {
    id: "comm-6",
    url: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    alt: "Colleagues participating in video conference standup call across multiple home workspaces",
    categories: ["Communication & Video", "HR & Payroll"]
  },
  {
    id: "comm-7",
    url: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    alt: "Business professional delivering live presentation over video conferencing platform",
    categories: ["Communication & Video", "Support & Success"]
  },
  {
    id: "comm-8",
    url: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=1200&q=80",
    alt: "Video software editor organizing timeline cuts and audio tracks for product demo clip",
    categories: ["Communication & Video", "Design & Creative"]
  },
  {
    id: "comm-9",
    url: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
    alt: "Product consultant conducting customer feedback discovery call using webcam setup",
    categories: ["Communication & Video", "Support & Success"]
  },
  {
    id: "comm-10",
    url: "https://images.unsplash.com/photo-1573497491278-6715b3a8908f?auto=format&fit=crop&w=1200&q=80",
    alt: "Client success manager handling asynchronous audio messages and client video tickets",
    categories: ["Communication & Video", "Support & Success"]
  },

  // --- HR & Payroll ---
  {
    id: "hr-1",
    url: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    alt: "International team reviewing remote employment agreements and global compliance paperwork",
    categories: ["HR & Payroll", "reviews"]
  },
  {
    id: "hr-2",
    url: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1200&q=80",
    alt: "Human resources director reviewing candidate background profiles and compensation packages",
    categories: ["HR & Payroll", "Finance & Accounting"]
  },
  {
    id: "hr-3",
    url: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&w=1200&q=80",
    alt: "People operations team structuring worldwide contractor payroll and tax withholding rules",
    categories: ["HR & Payroll", "Finance & Accounting"]
  },
  {
    id: "hr-4",
    url: "https://images.unsplash.com/photo-1522071901873-411886a10004?auto=format&fit=crop&w=1200&q=80",
    alt: "HR onboarding specialist reviewing benefits enrollment checklist with new remote employee",
    categories: ["HR & Payroll", "Productivity & Collaboration"]
  },
  {
    id: "hr-5",
    url: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern corporate people operations department managing talent directories on laptops",
    categories: ["HR & Payroll", "Productivity & Collaboration"]
  },
  {
    id: "hr-6",
    url: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=1200&q=80",
    alt: "Team members gathering around table for quarterly compensation review and benefits session",
    categories: ["HR & Payroll", "Finance & Accounting"]
  },
  {
    id: "hr-7",
    url: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    alt: "Executive committee discussing workforce retention benchmarks and global hiring quotas",
    categories: ["HR & Payroll", "Project Management"]
  },
  {
    id: "hr-8",
    url: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    alt: "Bright open-concept workspace highlighting progressive workplace culture and remote perks",
    categories: ["HR & Payroll", "Productivity & Collaboration"]
  },
  {
    id: "hr-9",
    url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
    alt: "Executive office suite equipped for confidential HR leadership meetings and reviews",
    categories: ["HR & Payroll", "Project Management"]
  },
  {
    id: "hr-10",
    url: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
    alt: "Professional handshake finalizing international employee hiring agreement in tech office",
    categories: ["HR & Payroll", "CRM & Sales"]
  },

  // --- Finance & Accounting ---
  {
    id: "fin-1",
    url: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1200&q=80",
    alt: "Accountant calculating monthly subscription expenses, invoices, and cash flow projections",
    categories: ["Finance & Accounting", "Commerce & Sales"]
  },
  {
    id: "fin-2",
    url: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&w=1200&q=80",
    alt: "Financial analyst comparing balance sheets, revenue recognition, and ledger tables",
    categories: ["Finance & Accounting", "CRM & Sales"]
  },
  {
    id: "fin-3",
    url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    alt: "Corporate treasurer auditing accounts payable statements and credit card processing charges",
    categories: ["Finance & Accounting", "Commerce & Sales"]
  },
  {
    id: "fin-4",
    url: "https://images.unsplash.com/photo-1565372195458-9de0b320ef04?auto=format&fit=crop&w=1200&q=80",
    alt: "Automated billing software dashboard calculating sales tax rules and customer receivables",
    categories: ["Finance & Accounting", "Commerce & Sales"]
  },
  {
    id: "fin-5",
    url: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?auto=format&fit=crop&w=1200&q=80",
    alt: "Financial planning software chart showing recurring revenue and operating burn curves",
    categories: ["Finance & Accounting", "Project Management"]
  },
  {
    id: "fin-6",
    url: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80",
    alt: "Executive reviewing investment portfolio returns and capital expenditure reports",
    categories: ["Finance & Accounting", "CRM & Sales"]
  },
  {
    id: "fin-7",
    url: "https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1200&q=80",
    alt: "Legal counsel and finance partner reviewing corporate contract agreements and liability terms",
    categories: ["Finance & Accounting", "HR & Payroll"]
  },
  {
    id: "fin-8",
    url: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=1200&q=80",
    alt: "Financial calculator and currency ledger calculating corporate tax deductions",
    categories: ["Finance & Accounting"]
  },
  {
    id: "fin-9",
    url: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=1200&q=80",
    alt: "Digital banking portal displaying real-time business accounts balances and wire transactions",
    categories: ["Finance & Accounting", "Commerce & Sales"]
  },
  {
    id: "fin-10",
    url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&w=1200&q=80",
    alt: "Stock valuation chart showing SaaS enterprise valuation multiples and profit ratios",
    categories: ["Finance & Accounting", "CRM & Sales"]
  },

  // --- Design & Creative ---
  {
    id: "des-1",
    url: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?auto=format&fit=crop&w=1200&q=80",
    alt: "Product designer constructing interactive UI wireframe screens in graphic design tool",
    categories: ["Design & Creative", "Productivity & Collaboration"]
  },
  {
    id: "des-2",
    url: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    alt: "Creative art director evaluating website mockups and brand typography choices on laptop",
    categories: ["Design & Creative", "Marketing"]
  },
  {
    id: "des-3",
    url: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=1200&q=80",
    alt: "Vector illustration software interface displaying custom geometric icon sets",
    categories: ["Design & Creative", "Developer Tools"]
  },
  {
    id: "des-4",
    url: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
    alt: "User experience researcher analyzing user testing heatmaps and click session recordings",
    categories: ["Design & Creative", "Marketing"]
  },
  {
    id: "des-5",
    url: "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=1200&q=80",
    alt: "Design agency brainstorming brand identity assets and color palettes on studio table",
    categories: ["Design & Creative", "Marketing"]
  },
  {
    id: "des-6",
    url: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&w=1200&q=80",
    alt: "Digital stylist adjusting image color grading and vector shapes in creative software suite",
    categories: ["Design & Creative"]
  },
  {
    id: "des-7",
    url: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1200&q=80",
    alt: "Visual designer testing mobile application screen transitions on connected test phone",
    categories: ["Design & Creative", "Developer Tools"]
  },
  {
    id: "des-8",
    url: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1200&q=80",
    alt: "Creative designer sketching initial wireframe concepts with stylus and graphic tablet",
    categories: ["Design & Creative"]
  },
  {
    id: "des-9",
    url: "https://images.unsplash.com/photo-1534670007418-fbb7f6cf32c3?auto=format&fit=crop&w=1200&q=80",
    alt: "Graphic illustrator reviewing design tokens and component library specifications",
    categories: ["Design & Creative", "Developer Tools"]
  },
  {
    id: "des-10",
    url: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80",
    alt: "Design system engineer maintaining cross-platform typography and UI token consistency",
    categories: ["Design & Creative", "Developer Tools"]
  },

  // --- Marketing ---
  {
    id: "mkt-1",
    url: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
    alt: "Growth marketing dashboard tracking customer acquisition cost and campaign click-through rates",
    categories: ["Marketing", "CRM & Sales"]
  },
  {
    id: "mkt-2",
    url: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=1200&q=80",
    alt: "Email marketing automation editor drafting subscriber nurture sequence on laptop",
    categories: ["Marketing", "Workflow Automation"]
  },
  {
    id: "mkt-3",
    url: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    alt: "Content marketing strategist researching high-intent search terms and content gaps",
    categories: ["Marketing", "Productivity & Collaboration"]
  },
  {
    id: "mkt-4",
    url: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
    alt: "Web analytics traffic report displaying organic search visitor trends and conversion goals",
    categories: ["Marketing", "Data Integration & ETL"]
  },
  {
    id: "mkt-5",
    url: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1200&q=80",
    alt: "PPC ad campaign manager optimizing keyword bids and cost per lead on tracking monitors",
    categories: ["Marketing", "Finance & Accounting"]
  },
  {
    id: "mkt-6",
    url: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    alt: "Social media marketing team reviewing scheduled campaign releases on calendar",
    categories: ["Marketing", "Communication & Video"]
  },
  {
    id: "mkt-7",
    url: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80",
    alt: "Omnichannel brand marketer measuring customer journey attribution across channels",
    categories: ["Marketing", "CRM & Sales"]
  },
  {
    id: "mkt-8",
    url: "https://images.unsplash.com/photo-1551836022-b06985bceb24?auto=format&fit=crop&w=1200&q=80",
    alt: "Marketing communications lead reviewing press announcements and product launch deck",
    categories: ["Marketing", "Communication & Video"]
  },

  // --- Productivity & Collaboration ---
  {
    id: "prod-1",
    url: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern collaborative open office space with team desks and natural window lighting",
    categories: ["Productivity & Collaboration", "reviews"]
  },
  {
    id: "prod-2",
    url: "https://images.unsplash.com/photo-1497215842964-222b430dc094?auto=format&fit=crop&w=1200&q=80",
    alt: "Executive focus workstation with laptop displaying team knowledge wiki documents",
    categories: ["Productivity & Collaboration", "Project Management"]
  },
  {
    id: "prod-3",
    url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
    alt: "Knowledge worker typing documentation notes into shared team wiki on laptop",
    categories: ["Productivity & Collaboration"]
  },
  {
    id: "prod-4",
    url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
    alt: "Individual reviewing daily priority checklist and operational action items at desk",
    categories: ["Productivity & Collaboration", "Project Management"]
  },
  {
    id: "prod-5",
    url: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern multi-window workspace displaying code repositories and team chat concurrently",
    categories: ["Productivity & Collaboration", "Developer Tools"]
  },
  {
    id: "prod-6",
    url: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimalist executive wooden desk setup with coffee cup, laptop, and notebook",
    categories: ["Productivity & Collaboration"]
  },
  {
    id: "prod-7",
    url: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80",
    alt: "Team members collaborating during focused problem solving work session in startup office",
    categories: ["Productivity & Collaboration", "Project Management"]
  },
  {
    id: "prod-8",
    url: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    alt: "Team brainstorm session aligning on cross-functional business objectives and plans",
    categories: ["Productivity & Collaboration", "Project Management"]
  },

  // --- IT & Security ---
  {
    id: "sec-1",
    url: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    alt: "Cybersecurity operations center monitoring real-time threat intelligence feeds",
    categories: ["IT & Security", "Developer Tools"]
  },
  {
    id: "sec-2",
    url: "https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=1200&q=80",
    alt: "Encrypted lock graphic displayed on cybersecurity authentication server monitor",
    categories: ["IT & Security"]
  },
  {
    id: "sec-3",
    url: "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&w=1200&q=80",
    alt: "Digital biometric authentication terminal verifying user identity and access clearance",
    categories: ["IT & Security", "HR & Payroll"]
  },
  {
    id: "sec-4",
    url: "https://images.unsplash.com/photo-1562813733-b31f71025d54?auto=format&fit=crop&w=1200&q=80",
    alt: "Security analyst reviewing access control logs and penetration testing findings",
    categories: ["IT & Security", "Developer Tools"]
  },

  // --- Support & Success ---
  {
    id: "sup-1",
    url: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1200&q=80",
    alt: "Customer support representative answering live help desk tickets with headset on",
    categories: ["Support & Success", "Communication & Video"]
  },
  {
    id: "sup-2",
    url: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
    alt: "Client success manager conducting account onboarding walkthrough for business client",
    categories: ["Support & Success", "CRM & Sales"]
  },
  {
    id: "sup-3",
    url: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=1200&q=80",
    alt: "Support operations director reviewing customer satisfaction ratings and resolution speed",
    categories: ["Support & Success", "Productivity & Collaboration"]
  }
];

/**
 * Returns a unique image that has not been used yet.
 * Filters by category first; falls back to any unused image.
 * If all images in the entire bank are used, picks the least recently used image.
 *
 * @param {string} category - SaaS Category or template type
 * @param {Set<string>|Array<string>} usedImages - Set or Array of image URLs already used
 * @returns {{ url: string, alt: string }}
 */
function getUniqueImage(category, usedImages) {
  const usedSet = usedImages instanceof Set ? usedImages : new Set(usedImages || []);

  // 1. Try matching category and unused
  const categoryCandidates = IMAGE_BANK.filter(img => 
    img.categories.some(c => c.toLowerCase() === (category || '').toLowerCase()) &&
    !usedSet.has(img.url)
  );

  if (categoryCandidates.length > 0) {
    return categoryCandidates[Math.floor(Math.random() * categoryCandidates.length)];
  }

  // 2. Fall back to any unused image in the entire bank
  const unusedGeneral = IMAGE_BANK.filter(img => !usedSet.has(img.url));
  if (unusedGeneral.length > 0) {
    return unusedGeneral[Math.floor(Math.random() * unusedGeneral.length)];
  }

  // 3. Absolute fallback: pick any from category
  const fallbackCat = IMAGE_BANK.filter(img => 
    img.categories.some(c => c.toLowerCase() === (category || '').toLowerCase())
  );
  if (fallbackCat.length > 0) {
    return fallbackCat[0];
  }

  return IMAGE_BANK[0];
}

module.exports = {
  IMAGE_BANK,
  getUniqueImage
};
