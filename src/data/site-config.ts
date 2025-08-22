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
