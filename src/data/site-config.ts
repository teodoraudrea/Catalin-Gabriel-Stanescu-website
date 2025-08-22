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
    /** e.g. "2024–2025", "Jan 2023 – Present", "2019" */
    period: string;
    title: string;
    subtitle?: string;
    location?: string;
    /** Optional paragraph content. You can also use bullets and/or images. */
    content?: string;
    bullets?: string[];
    images?: TimelineImage[];
    /** Optional link for the block (title becomes clickable). */
    href?: string;
    /**
     * Optional manual override for sorting (e.g., 2025 = higher priority than 2024).
     * If omitted, we'll derive a year from the `period` string.
     */
    sortYear?: number;
};


export const timelineItems: TimelineItem[] = [
  {
    period: "Sep 2021 – Present",
    title: "Associate Professor",
    subtitle: "Syddansk Universitet – University of Southern Denmark",
    location: "Odense, Denmark",
    content: "Full-time faculty role focusing on debt collection regulation, energy law, and consumer finance.",
    bullets: [
      "Research in regulatory examinations and critical thinking",
      "Teaching international and comparative law courses"
    ],
  },
  {
    period: "Jan 2024 – Jan 2025",
    title: "Senior Visiting Research Fellow & Associate Researcher",
    subtitle: "National University of Singapore",
    location: "Singapore / Remote",
    content: "Research projects in consumer law, international business law, and data analysis.",
    bullets: [
      "4-month onsite fellowship at NUS (Jan–Apr 2024)",
      "Followed by 10 months as Associate Researcher (remote)"
    ],
  },
  {
    period: "Feb 2023 – Jun 2023",
    title: "Visiting Research Fellow",
    subtitle: "European University Institute",
    location: "Florence, Italy",
    content: "Research into the regulation of informal debt collection practices, financed by SDU’s Talent Track.",
  },
  {
    period: "Sep 2022 – Jun 2023",
    title: "External Lecturer",
    subtitle: "University of Copenhagen, Faculty of Law",
    location: "Copenhagen, Denmark",
    content: "Created and taught the course 'Introduction to Digital Law'.",
  },
  {
    period: "Sep 2019 – Sep 2021",
    title: "Assistant Professor & Marie Curie Fellow",
    subtitle: "University of Copenhagen, Faculty of Law",
    location: "Copenhagen, Denmark",
    content: "Teaching and research in consumer finance, energy law, and digital law.",
  },
  {
    period: "Oct 2016 – Aug 2019",
    title: "Postdoctoral Researcher",
    subtitle: "University of Copenhagen, Faculty of Law",
    location: "Copenhagen, Denmark",
    content: "Research on energy contracts and liability in debt collection practices.",
    bullets: [
      "Taught International Energy Law and Sustainability",
      "Taught EU Consumer Protection Law",
      "Guest lecturing across comparative corporate governance and arbitration"
    ],
  },
  {
    period: "Sep 2016 – Present",
    title: "Of Counsel",
    subtitle: "LegalHUB Romania",
    location: "Bucharest, Romania",
    content: "Project-based legal advice in debt-collection, contract, energy and insolvency law.",
  },
  {
    period: "Mar 2016 – Present",
    title: "Visiting Lecturer",
    subtitle: "University of Szeged",
    location: "Szeged, Hungary",
    content: "Lecturing on contracts, public procurement, and investment law (LL.M. and doctoral level).",
  },
  {
    period: "Nov 2017 – Present",
    title: "Visiting Lecturer in Energy Law",
    subtitle: "Babeș-Bolyai University",
    location: "Cluj-Napoca, Romania",
    content: "Teaching Energy Law for International and Comparative Business Law LL.M. Program (English).",
  },
  {
    period: "Apr 2019 – Jul 2019",
    title: "Visiting Research Fellow",
    subtitle: "Centre for Energy, Petroleum and Mineral Law and Policy",
    location: "Dundee, Scotland",
  },
  {
    period: "Apr 2016 – Sep 2016",
    title: "Attorney at Law",
    subtitle: "Stanescu Catalin Gabriel Law Office",
    location: "Bucharest, Romania",
    content: "Litigation and consultancy in private law.",
  },
  {
    period: "Mar 2013 – Apr 2016",
    title: "Attorney at Law",
    subtitle: "SCPA Bordianu and Associates",
    location: "Bucharest, Romania",
    content: "Civil, Commercial and Energy Law practice.",
  },
  {
    period: "Nov 2014 – Jan 2016",
    title: "Rapporteur for Romania",
    subtitle: "University of Leeds (EC-funded project)",
    location: "Budapest & Bucharest",
    content: "Research on national insolvency laws for undertakings and natural persons.",
  },
  {
    period: "Oct 2012 – Mar 2013",
    title: "Legal Advisor",
    subtitle: "NIS Gazprom Neft",
    location: "Timișoara, Romania",
    content: "Coordinator for legal affairs and licensing.",
  },
  {
    period: "Jun 2009 – Oct 2012",
    title: "Attorney",
    subtitle: "Stanescu Catalin Gabriel Law Office",
    location: "Ploiești, Romania",
    content: "Private law litigation and consultancy.",
  },
  {
    period: "Feb 2007 – May 2009",
    title: "Managing Attorney",
    subtitle: "Stanescu and Dumitrescu Associated Law Offices",
    location: "Ploiești, Romania",
    content: "Litigation and legal representation in civil, administrative, labour and commercial law.",
  },
  {
    period: "2009",
    title: "In-house Lawyer",
    subtitle: "SC OMV Petrom SA",
    location: "Ploiești, Romania",
    content: "Legal services for Exploration & Production division.",
  },
  {
    period: "Jan 2006 – Feb 2007",
    title: "Attorney",
    subtitle: "Stanescu Catalin Gabriel Law Office",
    location: "Ploiești, Romania",
  },
  {
    period: "Aug 2004 – Jan 2006",
    title: "Legal Advisor",
    subtitle: "Ploiești City Hall",
    location: "Ploiești, Romania",
    content: "Drafting legal memos, advice, litigation in civil and administrative law.",
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
        title: 'Prof Dr Cătălin-Gabriel Stănescu',
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
