import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { FacebookIcon } from '@/components/icons/FacebookIcon'
import { type Metadata } from 'next'

export const siteData = {
  copywrite: `© Buffalo Graphics Company ${new Date().getFullYear()}`,
  emails: [
    ['Office', 'office@buffalo.graphics'],
    ['Sacha Sannon', 'sashad@buffalo.graphics'],
  ],
}

type PageLink = {
  title: string
  href: string
}

type PageLinkName = 'home' | 'contact' | 'about' | 'order' | 'portfolio'

export const pageLinks: Record<PageLinkName, PageLink> = {
  home: {
    title: 'home',
    href: '/',
  },
  contact: {
    title: 'contact',
    href: '/contact',
  },
  about: {
    title: 'about',
    href: '/about',
  },
  order: {
    title: 'process',
    href: '/process',
  },
  portfolio: {
    title: 'portfolio',
    href: '/portfolio',
  },
}

export const navLinks: PageLink[] = [
  pageLinks.contact,
  pageLinks.order,
  pageLinks.portfolio,
  pageLinks.about,
]

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export const socialMediaProfiles = [
  {
    title: 'Facebook',
    href: 'https://www.facebook.com/buffalographicsco',
    icon: FacebookIcon,
  },
  {
    title: 'Instagram',
    href: 'https://instagram.com',
    icon: InstagramIcon,
  },
]

export const services = [
  [
    'Graphic Design Excellence',
    `Our talented designers will work closely with you to craft stunning visuals that capture your brand's essence and leave a lasting impression. everywhere.`,
  ],
  [
    'Vehicle Graphics',
    `Transform your vehicles into rolling billboards that grab attention wherever you go. From full wraps to decals, we'll make your message mobile.`,
  ],
  [
    'Custom Shirts',
    `Create unique, personalized apparel that tells your story. Whether
  it's for your team, an event, or your brand, we've got you
  covered.`,
  ],
  [
    'Sign Solutions',
    `Make your business stand out with eye-catching signs. From storefront signage to banners, we'll help you attract customers and leave a lasting impression.`,
  ],
  [
    'Stickers for Every Occasion',
    `From fun and quirky to professional and branded, our stickers can be tailored to your needs. They're perfect for promotional giveaways or personal expression.`,
  ],
]
