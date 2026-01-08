export type Image = {
    src: string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
    subLinks?: Link[];
};

export type HighlightProps = {
    tagText?: string;
    title: string;
    description: string;
    /** Optional image path shown at the top of the card */
    imageSrc?: string;
    /** Optional alt text for the image (falls back to title) */
    imageAlt?: string;
    /** Optional link; if provided, the card becomes clickable */
    href?: string;
  };

export type SocialLink = Link & {
    icon: 'codepen' | 'dev' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'medium' | 'x-twitter' | 'substack' | 'googleScholar';
};

export type CTALinks = Link;

export type Hero = {
    title?: string;
    text?: string;
    avatar?: Image;
    backgroundImage?: Image;
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    primaryNavLinks?: Link[];
    secondaryNavLinks?: Link[];
    socialLinks?: SocialLink[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    ctaLinks?: CTALinks[];
};

export type TimelineImage = {
    src: string;
    alt?: string;
  };

  export type TimelineItem = {
    period: string;
    title: string;
    subtitle?: string;
    location?: string;
    content?: string;
    bullets?: string[];
    images?: { src: string; alt?: string }[];
    href?: string;
    sortYear?: number;
  };

// Academic

export const timelineAcademic: TimelineItem[] = [
  {
    period: "2021 – Present",
    title: "Associate Professor (tenured)",
    subtitle: "Faculty of Business and Social Science, Department of Law, University of Southern Denmark",
    location: "Odense, Denmark",
    content: "Academic position. Full-time faculty role focusing on debt collection regulation, energy law, and consumer finance.",
    bullets: [
      "Research in regulatory examinations and critical thinking; Teaching international and comparative law courses"
    ],
  },
  {
    period: "2024 – 2025",
    title: "Visiting Researcher",
    subtitle: "Centre for Banking and Finance Law, National University of Singapore",
    location: "Singapore / Remote",
    content: "Academic visiting position. Conducted research on informal debt collection regulation in Southeast Asia and Australia.",
  },
  {
    period: "2024",
    title: "Senior Visiting Scholar",
    subtitle: "Max Planck Institute for Comparative and Private International Law",
    location: "Hamburg, Germany",
    content: "Academic visiting position. Research stay funded by the Carlsberg Foundation.",
  },
  {
    period: "2023",
    title: "Visiting Senior Researcher",
    subtitle: "European University Institute, Department of Law",
    location: "Florence, Italy",
    content: "Academic visiting position. Research on regulation of informal debt collection practices.",
  },
  {
    period: "2019 – 2021",
    title: "Marie Curie Fellow",
    subtitle: "University of Copenhagen, Faculty of Law, Centre for Market and Economic Law",
    location: "Copenhagen, Denmark",
    content: "Academic fellowship. EU-funded research on consumer law and debt collection.",
  },
  {
    period: "2016 – 2019",
    title: "Postdoctoral Researcher",
    subtitle: "University of Copenhagen, Faculty of Law, Centre for Enterprise Liability",
    location: "Copenhagen, Denmark",
    content: "Academic position. Research on energy contracts and liability in debt collection practices.",
    bullets: ["Teaching International Energy Law, EU Consumer Protection Law, Comparative Corporate Governance, Arbitration"],
  },
  {
    period: "2019",
    title: "Visiting Senior Researcher",
    subtitle: "Centre for Energy, Petroleum and Mineral Law and Policy, University of Dundee",
    location: "Dundee, Scotland",
    content: "Academic visiting position. Research on petroleum agreements and environmental liability.",
  },
  {
    period: "2019",
    title: "Visiting Research Fellow",
    subtitle: "Faculty of Law, Babeș-Bolyai University",
    location: "Cluj-Napoca, Romania",
    content: "Academic visiting position. Private Law Department, research in consumer and energy law.",
  },
  {
    period: "2013",
    title: "Visiting Doctoral Researcher",
    subtitle: "Queen Mary University of London, CCLS & IALS",
    location: "London, United Kingdom",
    content: "Academic visiting position. Research in commercial and insolvency law.",
  },
  {
    period: "2013",
    title: "Visiting Doctoral Researcher",
    subtitle: "Max Planck Institute for Comparative and Private International Law",
    location: "Hamburg, Germany",
    content: "Academic visiting position. Research in private international law.",
  },
  {
    period: "2017 – Present",
    title: "Visiting Professor",
    subtitle: "Faculty of Law, Babeș-Bolyai University",
    location: "Cluj-Napoca, Romania",
    content: "Academic visiting position. Teaching Introduction to Energy Law and Sustainability.",
  },
  {
    period: "2016 – Present",
    title: "Visiting Professor",
    subtitle: "Faculty of Law and Political Science, University of Szeged",
    location: "Szeged, Hungary",
    content: "Academic visiting position. Teaching Atypical Contracts (LL.M. and doctoral level).",
  },
  {
    period: "2023",
    title: "Visiting Lecturer",
    subtitle: "Faculty of Law, University of Poznań",
    location: "Poznań, Poland",
    content: "Academic visiting position. Lectured on legal issues concerning virtual property.",
  },
  {
    period: "2022",
    title: "Visiting Lecturer",
    subtitle: "North Sea Energy Law Master Program (University Consortium), University of Oslo, Faculty of Law",
    location: "Oslo, Norway",
    content: "Academic visiting position. Comparative aspects of decommissioning oil and gas installations.",
  },
  {
    period: "2021 – 2023",
    title: "External Lecturer",
    subtitle: "Faculty of Law, University of Copenhagen",
    location: "Copenhagen, Denmark",
    content: "Academic position. Created and taught the course 'Introduction to Digital Law'.",
  },
  {
    period: "2020 – 2022",
    title: "Visiting Associate Professor (suspended due to COVID-19)",
    subtitle: "Southwest University of Political Science and Law, School of Artificial Intelligence and Law",
    location: "Chongqing, China",
    content: "Academic visiting position. Planned teaching in digital law.",
  },
  {
    period: "2019",
    title: "Visiting Lecturer",
    subtitle: "North Sea Energy Law Master Program (University Consortium), University of Oslo, Faculty of Law",
    location: "Oslo, Norway",
    content: "Academic visiting position. Comparative aspects of decommissioning oil and gas installations.",
  },
  {
    period: "2018",
    title: "Visiting Lecturer",
    subtitle: "Academy of Economic Studies, Faculty of Marketing & Faculty of Cybernetics",
    location: "Bucharest, Romania",
    content: "Academic visiting position. Lectured on EU Consumer Law.",
  },
];

//Legal
export const timelineLegal: TimelineItem[] = [
    {
      period: "2016 – Present",
      title: "Of Counsel",
      subtitle: "LegalHUB Romania",
      location: "Bucharest, Romania (Remote)",
      content: "Non-academic legal practice. Project-based legal advice in debt collection, contracts, energy, and insolvency law.",
    },
    {
      period: "2013 – 2016",
      title: "Senior Associate Attorney",
      subtitle: "Bordianu and Associates",
      location: "Bucharest, Romania (Hybrid)",
      content: "Non-academic legal practice. Civil, commercial, and energy law practice.",
    },
    {
      period: "2012 – 2013",
      title: "Expert Coordinator for Legal Affairs and Licensing",
      subtitle: "NIS Petrol SRL (Gazprom Group)",
      location: "Bucharest & Timișoara, Romania",
      content: "Non-academic legal practice. Coordinated legal affairs and licensing in the petroleum industry.",
    },
    {
      period: "2009 – 2012",
      title: "Attorney at Law",
      subtitle: "Stanescu Catalin-Gabriel Law Office",
      location: "Ploiești, Romania",
      content: "Non-academic legal practice. Private law litigation and consultancy.",
    },
    {
      period: "2009",
      title: "In-house Lawyer",
      subtitle: "SC OMV Petrom SA",
      location: "Ploiești, Romania",
      content: "Non-academic legal practice. Provided legal services for Exploration & Production division.",
    },
    {
      period: "2007 – 2009",
      title: "Managing Partner",
      subtitle: "Stanescu and Dumitrescu Associated Law Offices",
      location: "Ploiești, Romania",
      content: "Non-academic legal practice. Litigation and legal representation in civil, administrative, labour, and commercial law.",
    },
    {
      period: "2006 – 2007",
      title: "Attorney at Law",
      subtitle: "Stanescu Catalin-Gabriel Law Office",
      location: "Ploiești, Romania",
      content: "Non-academic legal practice. Litigation and consultancy in private law.",
    },
  ];

//Public service
export const timelinePublic: TimelineItem[] = [
    {
      period: "2004 – 2006",
      title: "Legal Advisor (Public Servant Status)",
      subtitle: "Ploiești City Hall",
      location: "Ploiești, Romania",
      content: "Public service. Drafting legal memos, providing legal advice, and conducting litigation in civil and administrative law.",
    },
  ];

//Grants
export const timelineGrants: TimelineItem[] = [
    // Scholarships & Grants
    {
      period: "2025",
      title: "Conference Organisation Sponsorship Grant (10,700 EUR)",
      subtitle: "The Carlsberg Foundation",
      location: "Copenhagen, Denmark",
      content: "Scholarship/Grant. Funding to organize an international conference.",
    },
    {
      period: "2024",
      title: "Visiting Research Fellowship (7,230 EUR)",
      subtitle: "The Carlsberg Foundation",
      location: "Copenhagen, Denmark",
      content: "Scholarship/Grant. Support for visiting research fellowship.",
    },
    {
      period: "2023",
      title: "Research Scholarship (9,000 EUR)",
      subtitle: "Max Planck Institute for Comparative and Private International Law",
      location: "Hamburg, Germany",
      content: "Scholarship/Grant. Research funding during senior visiting scholarship.",
    },
    {
      period: "2023",
      title: "Visiting Research Fellowship (78,700 EUR)",
      subtitle: "National University of Singapore",
      location: "Singapore",
      content: "Scholarship/Grant. Funded visiting research at NUS.",
    },
    {
      period: "2022",
      title: "Visiting Research Fellowship (Competitive)",
      subtitle: "European University Institute",
      location: "Florence, Italy",
      content: "Scholarship/Grant. Competitive visiting fellowship award.",
    },
    {
      period: "2022",
      title: "Talent Track Program (34,500 EUR)",
      subtitle: "University of Southern Denmark",
      location: "Odense, Denmark",
      content: "Scholarship/Grant. Talent Track research funding.",
    },
    {
      period: "2021",
      title: "Conference Organisation Sponsorship Grant (7,500 EUR)",
      subtitle: "The Carlsberg Foundation",
      location: "Copenhagen, Denmark",
      content: "Scholarship/Grant. Conference organization funding.",
    },
    {
      period: "2019",
      title: "Mobility Grant for Young Researchers Located Abroad (1,200 EUR)",
      subtitle: "Romanian Ministry of Research and Youth",
      location: "Bucharest, Romania",
      content: "Scholarship/Grant. Mobility support.",
    },
    {
      period: "2019",
      title: "Conference Organisation Sponsorship Grant (7,000 EUR)",
      subtitle: "Dreyers Fond",
      location: "Copenhagen, Denmark",
      content: "Scholarship/Grant. Conference organization funding.",
    },
    {
      period: "2018",
      title: "Conference Sponsorship Grant (6,800 EUR)",
      subtitle: "The Carlsberg Foundation",
      location: "Copenhagen, Denmark",
      content: "Scholarship/Grant. Conference participation/organization support.",
    },
    {
      period: "2018",
      title: "Research Abroad Grant (14,000 EUR)",
      subtitle: "Independent Research Fund Denmark",
      location: "Copenhagen, Denmark",
      content: "Scholarship/Grant. Research stay abroad.",
    },
    {
      period: "2018",
      title: "Marie Curie Individual Fellowship (220,000 EUR)",
      subtitle: "European Commission",
      location: "Brussels, Belgium",
      content: "Scholarship/Grant. EU-funded individual research fellowship.",
    },
    {
      period: "2018",
      title: "Conference Organisation Sponsorship Grant (3,500 EUR)",
      subtitle: "Dreyers Fond",
      location: "Copenhagen, Denmark",
      content: "Scholarship/Grant. Conference organization funding.",
    },
    {
      period: "2017",
      title: "Conference Sponsorship Grant (5,500 EUR)",
      subtitle: "The Carlsberg Foundation",
      location: "Copenhagen, Denmark",
      content: "Scholarship/Grant. Conference support.",
    },
    {
      period: "2013",
      title: "Research and Study Tuition Waiver (1,500 EUR)",
      subtitle: "Queen Mary School of Law, University of London",
      location: "London, United Kingdom",
      content: "Scholarship/Grant. Tuition waiver for research/study.",
    },
    {
      period: "2013",
      title: "Research Grant (3,800 EUR)",
      subtitle: "Central European University",
      location: "Budapest, Hungary",
      content: "Scholarship/Grant. Research funding.",
    },
    {
      period: "2013",
      title: "Research Grant (800 EUR)",
      subtitle: "Central European University",
      location: "Budapest, Hungary",
      content: "Scholarship/Grant. Research funding.",
    },
  
    // Awards
    {
      period: "2014",
      title: "Award for Advanced Doctoral Students",
      subtitle: "Central European University",
      location: "Budapest, Hungary",
      content: "Award. Recognition for advanced doctoral research.",
    },
    {
      period: "2011",
      title: "Upgraded Fellowship for Outstanding Results",
      subtitle: "Central European University",
      location: "Budapest, Hungary",
      content: "Award. Fellowship upgrade for outstanding performance.",
    },
    {
      period: "2004 – 2006",
      title: "Financial Grant for Outstanding Results",
      subtitle: "National School for Political and Administrative Studies",
      location: "Bucharest, Romania",
      content: "Award. Merit-based financial grant during MA studies.",
    },
  ];

//Talks and conferences
export const timelineTalks: TimelineItem[] = [
    // Invited talks / keynotes
    {
      period: "2025",
      title: "The Triumph of Technological Populism: Musk, Trump and the Challenges of Digital Governance",
      subtitle: "International Conference ‘Go Digital in Law’ (8th ed.), Al. I. Cuza University of Iași",
      location: "Iași, Romania",
      content: "Invited talk. Digital governance challenges in contemporary politics.",
    },
    {
      period: "2024",
      title: "An empirical evaluation of informal debt collection regulation in South East Asia and Australia",
      subtitle: "Conference ‘Coerced Debt, Identity Theft, and Financial Exploitation’, Rutgers Law School",
      location: "United States",
      content: "Invited talk. Comparative study of informal debt collection regulation.",
    },
    {
      period: "2023",
      title: "Contracts and Consumers",
      subtitle: "Workshop ‘Research Methods in Contract Law’, Inland Norway University of Applied Sciences",
      location: "Norway",
      content: "Invited talk. Methods in contract law research.",
    },
    {
      period: "2022",
      title: "Sustainable (and) Justice for All?",
      subtitle: "International Workshop on Renewable Energy and Sustainability, University of Southern Denmark",
      location: "Denmark",
      content: "Keynote address. Sustainability and justice themes.",
    },
    {
      period: "2022",
      title: "The Role of the Constitutional Court in Transforming Consumer Financial Protection Laws in Romania",
      subtitle: "International Conference ‘Transformation of Consumer Law’, University of Warwick",
      location: "United Kingdom",
      content: "Invited talk. Constitutional court’s impact on consumer law.",
    },
    {
      period: "2020",
      title: "Face Off: Digital Debt Collection Meets the FDCPA: Challenges, Risks, Opportunities",
      subtitle: "Legal Tech & Innovation Conference ‘Legal Accelerators’",
      location: "Romania (Online)",
      content: "Invited talk. Digital debt collection and FDCPA.",
    },
    {
      period: "2019",
      title: "Environmental Liability Arising from Termination of Petroleum Operations",
      subtitle: "International Conference and Workshop, Ministry for Energy and Mines",
      location: "Peru",
      content: "Invited talk. Environmental liability in petroleum operations.",
    },
    {
      period: "2019",
      title: "Environmental Liability in Multi-Tier Petroleum Contracts",
      subtitle: "3rd Dundee Energy Forum, University of Dundee",
      location: "United Kingdom",
      content: "Invited talk. Liability in petroleum contracts.",
    },
    {
      period: "2018",
      title: "Considerații privind eșecurile României în soluționarea practicilor abuzive de colectare a creanțelor",
      subtitle: "Romanian–Danish Symposium, Al. I. Cuza University of Iași",
      location: "Romania",
      content: "Keynote. Challenges of unfair debt collection in Romania.",
    },
    {
      period: "2018",
      title: "A Study In Gold: Gabriel Resources v Romania",
      subtitle: "Jean Monnet Chair Workshop, Queen Mary University of London – CCLS",
      location: "United Kingdom",
      content: "Invited talk. Investment agreement impacts under BITs.",
    },
    {
      period: "2018",
      title: "Energy and the Sea",
      subtitle: "II TRAMEREN International Conference, University of Copenhagen",
      location: "Denmark",
      content: "Invited talk. Energy law and maritime issues.",
    },
    {
      period: "2016",
      title: "Search for Harmonization: Why the EU Needs to Regulate Unfair Debt Collection Practices",
      subtitle: "Hungarian Academy of Sciences",
      location: "Hungary",
      content: "Invited talk. EU-level regulation on debt collection.",
    },
    {
      period: "2015",
      title: "A Critical Look at the Romanian Post-Communist Secured Transactions Law",
      subtitle: "Chinese–EU Law Conference, Central European University",
      location: "Hungary",
      content: "Invited talk. Comparative secured transactions law.",
    },
    {
      period: "2015",
      title: "Does the EU Need a Fair Debt Collection Practices Regulation?",
      subtitle: "National Conference ‘Valori juridice…’, Al. I. Cuza University of Iași",
      location: "Romania",
      content: "Keynote. Need for EU-level fair debt collection regulation.",
    },
    {
      period: "2014",
      title: "Farm Out Agreements in Upstream Oil & Gas Contracts",
      subtitle: "Energy Policy Research Group, CEU",
      location: "Hungary",
      content: "Invited talk. Upstream oil & gas contracts.",
    },
  
    // Conferences organized
    {
      period: "2025",
      title: "The Responsible Consumer in the Digital Age 2 – Evolving Perspectives on Consumer Protection, Sustainability, and AI – the Nordics and Beyond",
      subtitle: "University of Southern Denmark & University of Utrecht",
      location: "Copenhagen, Denmark",
      content: "Conference organization. Co-organized international conference.",
    },
    {
      period: "2021",
      title: "Regulation of Abusive Informal Debt Collection Practices – Could the Scandinavian Model Serve as a Model for EU Regulation?",
      subtitle: "University of Copenhagen, Faculty of Law",
      location: "Copenhagen, Denmark",
      content: "Conference organization. Organized international conference.",
    },
    {
      period: "2019",
      title: "Fair and Non-Discriminatory Access to Financial Services",
      subtitle: "University of Copenhagen, Faculty of Law",
      location: "Copenhagen, Denmark",
      content: "Conference organization. Organized thematic conference.",
    },
    {
      period: "2019",
      title: "‘In Memoriam Anita Rønne’ – The North Sea and Beyond: The Challenges of Oil and Gas Installations",
      subtitle: "University of Copenhagen, Faculty of Law",
      location: "Copenhagen, Denmark",
      content: "Conference organization. Organized memorial/thematic conference.",
    },
    {
      period: "2018",
      title: "The Responsible Consumer in the Digital Age – International and Nordic Perspectives on Consumer Financial Protection",
      subtitle: "University of Copenhagen, Faculty of Law",
      location: "Copenhagen, Denmark",
      content: "Conference organization. Organized international conference.",
    },
  
    // Conference presentations
    {
      period: "2025",
      title: "Algorithmic Indebtedness: Vulnerability, Platform Credit, and the Infrastructural Politics of Consumer Finance",
      subtitle: "The Responsible Consumer in the Digital Age 2",
      location: "Denmark",
      content: "Conference presentation. Consumer finance and platforms.",
    },
    {
      period: "2024",
      title: "The Making of the Debtor Society",
      subtitle: "‘Social Justice, Private Law and Europe 2004–2044’, University of Amsterdam",
      location: "Netherlands",
      content: "Conference presentation. Private law and social justice.",
    },
    {
      period: "2024",
      title: "The Role of Industry Codes of Conducts in Tackling Abusive Debt Collection. Evidence from FENCA Members",
      subtitle: "‘Global Challenges for Consumer Law and Policy in Contemporary Europe’, Cambridge",
      location: "United Kingdom",
      content: "Conference presentation. Codes of conduct and debt collection.",
    },
    {
      period: "2022",
      title: "The Enforcement of Consumer Financial Protection Rules in Romania",
      subtitle: "‘Enforcing EU Consumer and Market Law – 10 Years of EuCML’",
      location: "Online",
      content: "Conference presentation. Enforcement of consumer protection rules.",
    },
    {
      period: "2022",
      title: "The Communist Legacy of Romanian Consumer Credit Laws",
      subtitle: "SASE 33rd Annual Conference, University of Amsterdam",
      location: "Netherlands",
      content: "Conference presentation. Historical legacy in credit law.",
    },
    {
      period: "2021",
      title: "Harmonization of Legal Framework Concerning Abusive Informal Debt Collection Practices in the EU",
      subtitle: "International Conference on EU Debt Collection Regulation, University of Copenhagen",
      location: "Denmark",
      content: "Conference presentation. Harmonization of debt collection.",
    },
    {
      period: "2021",
      title: "Harmonization of Legal Framework Concerning Abusive Informal Debt Collection Practices in the EU",
      subtitle: "The 2021 Global Forum for Financial Consumers",
      location: "South Korea",
      content: "Conference presentation. International perspective on harmonization.",
    },
    {
      period: "2020",
      title: "A Critical Assessment of the Current Legal Framework Concerning Abusive Debt Collection Practices in the EU",
      subtitle: "International Scientific Conference ‘The Protection of the Collective Interests of Consumers’, Union University School of Law",
      location: "Serbia",
      content: "Conference presentation. EU debt collection framework.",
    },
    {
      period: "2020",
      title: "A Critical Assessment of the Current Legal Framework Concerning Abusive Debt Collection Practices in the EU",
      subtitle: "IACL International Seminars Series, University of Sydney",
      location: "Australia (Online)",
      content: "Conference presentation. International seminars series.",
    },
    {
      period: "2020",
      title: "A Critical Assessment of the Current Legal Framework Concerning Abusive Debt Collection Practices in the EU",
      subtitle: "4th Bi-Annual International Consumer Law Conference, University of Pretoria",
      location: "South Africa (Online)",
      content: "Conference presentation. Consumer law conference.",
    },
    {
      period: "2020",
      title: "A Critical Assessment of the Current Legal Framework Concerning Abusive Debt Collection Practices in the EU",
      subtitle: "SASE’s 32nd Annual Conference",
      location: "Online",
      content: "Conference presentation. Annual conference presentation.",
    },
    {
      period: "2020",
      title: "Face Off: Digital Debt Collection Meets the FDCPA – Challenges, Risks, Opportunities",
      subtitle: "SASE’s 32nd Annual Conference",
      location: "Online",
      content: "Conference presentation. Digital debt collection and FDCPA.",
    },
    {
      period: "2020",
      title: "The Triumph of Stability in Energy Agreements: A Show of Strength?",
      subtitle: "Energy Transitions 2020 Conference, University of Eastern Finland Law School",
      location: "Finland",
      content: "Conference presentation. Stability in energy agreements.",
    },
    {
      period: "2019",
      title: "Face-Off: Digital Debt Collection Meets the FDCPA – Risks, Challenges, Opportunities",
      subtitle: "SURPASS IRN International Conference ‘Fair and Non-Discriminatory Access to Financial Services’, University of Copenhagen",
      location: "Denmark",
      content: "Conference presentation. FDCPA and digital collection.",
    },
    {
      period: "2019",
      title: "Regulatory Arbitrage and Non-Judicial Debt Collection in Central and Eastern Europe – Tax Avoidance and Money Laundering",
      subtitle: "SASE’s 31st Annual Conference, Columbia University",
      location: "United States",
      content: "Conference presentation. Arbitrage, tax, and AML in CEE.",
    },
    {
      period: "2019",
      title: "Comparative Aspects Concerning Oil and Gas Decommissioning in Denmark and Romania",
      subtitle: "‘In Memoriam Anita Rønne’ – The North Sea and Beyond, University of Copenhagen",
      location: "Denmark",
      content: "Conference presentation. Decommissioning in O&G.",
    },
    {
      period: "2018",
      title: "Perpetual Legal Reform and Hollowing of Consumer Rights",
      subtitle: "XIth International Conference 'Development of Russian Law', University of Helsinki",
      location: "Finland",
      content: "Conference presentation. Consumer-debtor protection in CEE.",
    },
    {
      period: "2018",
      title: "Methods of Promoting Skills-Based Legal Education. An Experiment in Student Article Writing",
      subtitle: "LERU Pedagogical Workshop, University of Lund",
      location: "Sweden",
      content: "Conference presentation. Legal education methods.",
    },
    {
      period: "2018",
      title: "The Responsible Consumer in the Digital Age. A Critique of the Information Paradigm",
      subtitle: "International conference ‘The Responsible Consumer in the Digital Age’, University of Copenhagen",
      location: "Denmark",
      content: "Conference presentation. Information paradigm critique.",
    },
    {
      period: "2018",
      title: "Stabilization Mechanisms for Nuclear Investments vs Electricity Market Liberalization",
      subtitle: "6th ISEFI Symposium (Environment & Energy Finance Issues)",
      location: "France",
      content: "Conference presentation. CfD and market liberalization.",
    },
    {
      period: "2018",
      title: "\"Hey, Alexa, Where's My Private Data?\"",
      subtitle: "6th International Conference of PhD Students and Young Researchers ‘Digitalization in Law’, University of Vilnius",
      location: "Lithuania",
      content: "Conference presentation. Privacy and digitalization.",
    },
    {
      period: "2017",
      title: "Datio in Solutum – A Viable Solution for More Sustainable Financial Services?",
      subtitle: "Law and Money 3rd Annual Conference: Law, Finance and Sustainability, University of Sheffield",
      location: "United Kingdom",
      content: "Conference presentation. Sustainable financial services.",
    },
    {
      period: "2017",
      title: "Dead End for Energy Concessions? – Effects of the Concession Directive on Investor Protection",
      subtitle: "5th Annual Energy Transitions Conference, University of Eastern Finland Law School",
      location: "Finland",
      content: "Conference presentation. Energy concessions and investor protection.",
    },
    {
      period: "2016",
      title: "Reluctance of Civil Law Countries in Adopting UCC 9 ‘Without Breach of Peace’ Standard",
      subtitle: "Italian Society of Law and Economics, University of Turin",
      location: "Italy",
      content: "Conference presentation. Secured transactions standards.",
    },
    {
      period: "2016",
      title: "TTIP – Transatlantic Trade: Investment or Plunder?",
      subtitle: "International Conference ‘Investment Arbitration and National Interest’, Central European University",
      location: "Hungary",
      content: "Conference presentation. Investment arbitration and TTIP.",
    },
    {
      period: "2014",
      title: "Are Abusive Debt Collection Practices Arbitrable?",
      subtitle: "‘Milestones of Law in Central Europe 2014’, Comenius University",
      location: "Slovakia",
      content: "Conference presentation. Arbitrability of debt collection practices.",
    },
    {
      period: "2013",
      title: "Fraudulent Conveyances under US, Czech and Romanian Law",
      subtitle: "‘Milestones of Law in Central Europe 2013’, Comenius University",
      location: "Slovakia",
      content: "Conference presentation. Fraudulent conveyances comparative.",
    },
    {
      period: "2012",
      title: "Piercing the Corporate Veil – American Lessons for Romania and Slovakia",
      subtitle: "‘Milestones of Law in Central Europe 2012’, Comenius University",
      location: "Slovakia",
      content: "Conference presentation. Corporate veil in comparative perspective.",
    },
    {
      period: "2011",
      title: "The Corporate Sector in Romania",
      subtitle: "International Conference ‘Economy and Democracy’, International University Center",
      location: "Croatia",
      content: "Conference presentation. Corporate sector overview.",
    },
    {
      period: "2011",
      title: "Self Help Repossession in Hungary, Romania and Slovakia",
      subtitle: "‘Milestones of Law in Central Europe 2011’, Comenius University",
      location: "Slovakia",
      content: "Conference presentation. Self-help repossession comparative.",
    },
  ];




const siteConfig: SiteConfig = {
    logo: {
        src: '/logo.svg',
        alt: 'Cătălin-Gabriel Stănescu'
    },
    title: 'Cătălin-Gabriel Stănescu',
    description: 'The personal website of Prof. Dr. Cătălin-Gabriel Stănescu; legal scholar, professor, and author. Discover his research, publications, and professional work.',
    image: {
        src: '/Catalin-Gabriel-Stanescu-main.JPEG',
        alt: 'Catalin Gabriel Stanescu'
    },
    primaryNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Research',
            href: '/research'
        },
        {
            text: 'Publications',
            href: '/publications'
        },
        {
            text: 'Teaching',
            href: '/teaching'
        },
        {
            text: 'Engagement',
            href: '/engagement',
            subLinks: [
                {
                    text: 'Conferences and talks',
                    href: '/engagement/conferences-and-talks'
                },
                {
                    text: 'Media and press',
                    href: '/engagement/media-and-press'
                }
            ]
        },
        {
            text: 'Consultancy',
            href: '/consultancy',
            subLinks: [
                {
                    text: 'Services',
                    href: '/consultancy/services'
                },
                {
                    text: 'Training',
                    href: '/consultancy/training'
                },
                {
                    text: 'Speaking',
                    href: '/consultancy/speaking'
                },
                {
                    text: 'Collaborative research',
                    href: '/consultancy/collaborative-research'
                },
                {
                    text: 'Past highlights',
                    href: '/consultancy/past-highlights'
                }
            ]
        },
        {
            text: 'Blog and news',
            href: '/blog'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
    ],
    ctaLinks: [
        { href: '/publications', text: 'Books' },
        { href: '/contact', text: 'Contact' },
        { href: '/blog', text: 'Blog' },
      ],
    secondaryNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        }
    ],
    socialLinks: [
        {
            text: 'Let\'s connect on Linkedin',
            href: 'https://www.linkedin.com/in/c%C4%83t%C4%83lin-gabriel-stanescu/',
            icon: 'linkedin'
        },
        {
            text: 'Follow me on Substack',
            href: 'https://substack.com/@catalinstanescu',
            icon: 'substack'
        },
        {
            text: 'Google Scholar',
            href: 'https://scholar.google.com/citations?user=Rhrc_iMAAAAJ&hl=en',
            icon: 'googleScholar'
        }
    ],
    hero: {
        title: 'Cătălin-Gabriel Stănescu',
        text: "Academic • Author • Lawyer • Debt Collection Expert",
        avatar: {
            src: '/avatar.jpg',
            alt: 'Cătălin-Gabriel Stănescu'
        },
        backgroundImage: {
            src: '/hero.webp'
        }
    },
    subscribe: {
        title: 'Subscribe for Research Updates & News',
        text: 'Join the mailing list to receive occasional updates on publications, academic events, and new blog posts from Prof. Dr. Cătălin-Gabriel Stănescu.',
        formUrl: '/'
      },
    postsPerPage: 5
};

export default siteConfig;
