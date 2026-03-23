export type ProjectBadge = "Colaborativo" | "Autoral";

export type ProjectCategory =
    | "Todos"
    | "SaaS"
    | "Landing Page"
    | "Institucional"
    | "Portfólio"
    | "E-commerce"
    | "Página de vendas"
    | "Acadêmico";

export interface PortfolioProject {
    title: string;
    category: Exclude<ProjectCategory, "Todos">;
    badge: ProjectBadge;
    projectType: string;
    description: string;
    role: string;
    stack: string[];
    websiteURL: string;
    codeURL?: string;
    thumbnail?: string;
    previewImage?: string;
    thumbLabel: string;
    accent: [string, string];
}

export const projectCategories: ProjectCategory[] = [
    "Todos",
    "SaaS",
    "Landing Page",
    "Institucional",
    "Portfólio",
    "E-commerce",
    "Página de vendas",
    "Acadêmico",
];

export const portfolioProjects: PortfolioProject[] = [
    {
        title: "PetCare",
        category: "Landing Page",
        badge: "Autoral",
        projectType: "Clínica & Agendamento",
        description:
            "Landing page premium para agendamento online, com experiência clara, fluxo de escolha de serviço e confirmação.",
        role: "Autoria própria: design + implementação da interface e integrações.",
        stack: ["React", "Next.js"],
        websiteURL: "https://projetos-ten-teal.vercel.app/",
        previewImage:
            "https://image.thum.io/get/width/1200/crop/700/noanimate/https://projetos-ten-teal.vercel.app/",
        thumbLabel: "petcare.vercel.app",
        accent: ["#0f766e", "#0b1220"],
    },
    {
        title: "FP selection",
        category: "Acadêmico",
        badge: "Autoral",
        projectType: "Acadêmico",
        description:
            "Projeto acadêmico com navegação simples, seções organizadas e apresentação de carros em layout responsivo.",
        role: "Autoria própria: desenvolvimento do layout e conteúdo com foco em clareza.",
        stack: ["HTML", "CSS", "JavaScript"],
        websiteURL: "https://projetos-j1f2.vercel.app/",
        previewImage:
            "https://image.thum.io/get/width/1200/crop/700/noanimate/https://projetos-j1f2.vercel.app/",
        thumbLabel: "fpselection",
        accent: ["#7c3aed", "#0f172a"],
    },
    {
        title: "Links Daniel Canaud",
        category: "Landing Page",
        badge: "Autoral",
        projectType: "Linktree",
        description:
            "Página de links centralizada com ícones de redes sociais e layout limpo para navegação rápida.",
        role: "Autoria própria: estrutura da página e integração dos links.",
        stack: ["React", "Vercel"],
        websiteURL: "https://projetos-zd44.vercel.app/",
        previewImage:
            "https://image.thum.io/get/width/1200/crop/700/noanimate/https://projetos-zd44.vercel.app/",
        thumbLabel: "danielcanaud.links",
        accent: ["#ec4899", "#3b0764"],
    },
    {
        title: "julygarciafc",
        category: "Landing Page",
        badge: "Autoral",
        projectType: "Landing",
        description: "Landing criada para apresentação e navegação direta, com design moderno e responsivo.",
        role: "Autoria própria: desenvolvimento do layout e publicação no Vercel.",
        stack: ["React", "Vercel"],
        websiteURL: "https://julygarciafc.vercel.app/",
        previewImage:
            "https://image.thum.io/get/width/1200/crop/700/noanimate/https://julygarciafc.vercel.app/",
        thumbLabel: "julygarciafc",
        accent: ["#06b6d4", "#0f172a"],
    },
    {
        title: "Fernanda Chaves",
        category: "Landing Page",
        badge: "Autoral",
        projectType: "Aulas de piano",
        description:
            "Site/landing para divulgação de aulas de música, com experiência rica em conteúdo e seções bem estruturadas.",
        role: "Autoria própria: criação e implementação do front-end da experiência.",
        stack: ["React", "Vercel"],
        websiteURL: "https://v0-fernandacanaud.vercel.app/",
        previewImage:
            "https://image.thum.io/get/width/1200/crop/700/noanimate/https://v0-fernandacanaud.vercel.app/",
        thumbLabel: "v0-fernandacanaud",
        accent: ["#f97316", "#431407"],
    },
    {
        title: "ClickROI",
        category: "SaaS",
        badge: "Colaborativo",
        projectType: "SaaS",
        description: "Plataforma SaaS com foco em operação digital e presença orientada a produto.",
        role: "Atuação como desenvolvedor colaborador no projeto, contribuindo com desenvolvimento e evolução da interface.",
        stack: ["Next.js", "React"],
        websiteURL: "https://www.clickroi.app",
        thumbLabel: "clickroi.app",
        accent: ["#2563eb", "#0f172a"],
    },
    {
        title: "LWTecnologia",
        category: "Institucional",
        badge: "Colaborativo",
        projectType: "Institucional B2B",
        description: "Site institucional B2B voltado à apresentação da empresa e dos seus serviços.",
        role: "Participação como desenvolvedor colaborador na implementação e manutenção do projeto institucional.",
        stack: ["Next.js"],
        websiteURL: "https://www.lwtecnologia.com.br",
        previewImage: "https://public.lwtecnologia.com.br/public/LOGO_Fundo-Azul.PNG",
        thumbLabel: "lwtecnologia.com.br",
        accent: ["#0f766e", "#082f49"],
    },
    {
        title: "Prime AC",
        category: "Institucional",
        badge: "Colaborativo",
        projectType: "Institucional",
        description: "Presença institucional focada em comunicação clara, serviços e credibilidade da marca.",
        role: "Participação como desenvolvedor colaborador na evolução do site e na entrega da experiência web.",
        stack: ["Next.js", "React", "Vercel"],
        websiteURL: "https://www.primeac.com.br",
        thumbLabel: "primeac.com.br",
        accent: ["#7c3aed", "#111827"],
    },
    {
        title: "Portfólio Maryane",
        category: "Portfólio",
        badge: "Colaborativo",
        projectType: "Portfólio / Landing Page",
        description: "Projeto de apresentação pessoal com estrutura de landing page e foco em posicionamento visual.",
        role: "Atuação como desenvolvedor colaborador na construção e ajustes da experiência da página.",
        stack: ["Next.js", "React", "Vercel"],
        websiteURL: "https://maryane.vercel.app/",
        thumbLabel: "maryane.vercel.app",
        accent: ["#ec4899", "#3b0764"],
    },
    {
        title: "Agência de Viagem",
        category: "Landing Page",
        badge: "Colaborativo",
        projectType: "Landing Page",
        description: "Página para agência de viagem com foco em apresentação comercial e conversão.",
        role: "Participação como desenvolvedor colaborador no desenvolvimento da landing page.",
        stack: ["Next.js", "Vercel"],
        websiteURL: "https://agencia-de-viagem-lovat.vercel.app/new-page",
        thumbLabel: "agencia-de-viagem",
        accent: ["#06b6d4", "#0f172a"],
    },
    {
        title: "Otimizare",
        category: "Landing Page",
        badge: "Colaborativo",
        projectType: "Marketing / Tráfego Pago",
        description: "Projeto de presença digital para marketing e tráfego pago, com comunicação orientada a serviços.",
        role: "Atuação como desenvolvedor colaborador no site e nos ajustes de interface da entrega.",
        stack: ["Next.js", "Vercel"],
        websiteURL: "https://www.otimizare.com.br",
        thumbLabel: "otimizare.com.br",
        accent: ["#22c55e", "#14532d"],
    },
    {
        title: "VSL Ketty Sato Fit",
        category: "Página de vendas",
        badge: "Colaborativo",
        projectType: "VSL / Página de vendas",
        description: "Página de vendas em formato VSL pensada para apoio à estratégia comercial.",
        role: "Participação como desenvolvedor colaborador na implementação da página e da experiência de navegação.",
        stack: ["ConverteAi", "Firebase", "Vercel"],
        websiteURL: "https://vsl.kettysatofit.com",
        previewImage: "https://firebasestorage.googleapis.com/v0/b/dei-de-presente-software.appspot.com/o/banner1.png?alt=media&token=b096cb62-c18d-437f-88c2-d06e88cc2756",
        thumbLabel: "vsl.kettysatofit.com",
        accent: ["#f97316", "#431407"],
    },
    {
        title: "Clark",
        category: "Landing Page",
        badge: "Colaborativo",
        projectType: "Landing Page",
        description: "Landing page com foco em posicionamento, clareza da proposta e captação de atenção.",
        role: "Atuação como desenvolvedor colaborador na entrega da interface e do desenvolvimento da página.",
        stack: ["Next.js", "ConverteAi", "Vercel"],
        websiteURL: "https://clark-nu.vercel.app",
        thumbLabel: "clark-nu.vercel.app",
        accent: ["#f43f5e", "#4c0519"],
    },
    {
        title: "Imuno Pump",
        category: "Landing Page",
        badge: "Colaborativo",
        projectType: "Saúde / Suplementos",
        description: "Projeto digital para nicho de saúde e suplementos com foco em apresentação comercial.",
        role: "Participação como desenvolvedor colaborador no desenvolvimento da página e nos ajustes da entrega.",
        stack: ["Next.js", "Firebase", "Vercel"],
        websiteURL: "https://imuno-pump.vercel.app",
        thumbLabel: "imuno-pump.vercel.app",
        accent: ["#84cc16", "#1a2e05"],
    },
    {
        title: "Livny",
        category: "E-commerce",
        badge: "Colaborativo",
        projectType: "E-commerce",
        description: "Loja online de moda feminina com navegação por categorias, catálogo e operação comercial.",
        role: "Atuação como desenvolvedor colaborador na evolução da experiência web e da entrega digital da loja.",
        stack: ["ASP.NET", "IIS"],
        websiteURL: "https://www.livny.com.br",
        previewImage: "https://cdn2.toplojas.com.br/loja/WAssets/603/Imagens/M_b47c445e0d29dccfba75a5d1b32a61965c11c544b3ee47b.jpg",
        thumbLabel: "livny.com.br",
        accent: ["#eab308", "#422006"],
    },
    {
        title: "6ix Company",
        category: "E-commerce",
        badge: "Colaborativo",
        projectType: "E-commerce Shopify",
        description: "Loja virtual construída em Shopify para operação comercial online.",
        role: "Participação como desenvolvedor colaborador em uma entrega de e-commerce baseada em Shopify.",
        stack: ["Shopify"],
        websiteURL: "https://6ixcompany.com.br",
        previewImage: "http://6ixcompany.com.br/cdn/shop/files/Sem_Titulo-515_c1552144-0d83-4f4a-80a1-8c136f428982.png?v=1700381669",
        thumbLabel: "6ixcompany.com.br",
        accent: ["#10b981", "#022c22"],
    },
];

export const serviceHighlights = [
    {
        title: 'Performance',
        description: 'Entregas rápidas e otimizadas para web moderna.'
    },
    {
        title: 'Design',
        description: 'Foco em estética e experiência do usuário.'
    },
    {
        title: 'Backend',
        description: 'APIs e integrações para suporte das aplicações.'
    }
];

export const skillGroups = [
    { title: 'Frontend', items: ['React', 'TypeScript', 'CSS', 'Next.js'] },
    { title: 'Backend', items: ['Node.js', 'Express', 'API', 'PostgreSQL', 'MongoDB', 'MySQL'] },
    { title: 'Outras tecnologias', items: ['Shopify', 'Vercel', 'Netlify', 'Docker'] },
];
