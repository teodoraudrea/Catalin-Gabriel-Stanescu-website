export type Image = {
    src: string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
    subLinks?: Link[];
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

const siteConfig: SiteConfig = {
    logo: {
        src: '/logo.svg',
        alt: 'Cătălin-Gabriel Stănescu'
    },
    title: 'Cătălin-Gabriel Stănescu',
    description: 'Astro.js and Tailwind CSS theme for blogging by justgoodui.com',
    image: {
        src: '/ovidius-preview.jpg',
        alt: 'Ovidius - Astro.js and Tailwind CSS theme'
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
        title: 'Subscribe to Ovidius Newsletter',
        text: 'One update per week. All the latest news directly in your inbox.',
        formUrl: 'https://justgoodthemes.us3.list-manage.com/subscribe/post?u=78f1bab16028354caeb23aecd&amp;id=4a7330d117&amp;f_id=005c48e2f0'
    },
    postsPerPage: 5
};

export default siteConfig;
