import { InstagramIcon } from '@/components/icons/InstagramIcon'
import { FacebookIcon } from '@/components/icons/FacebookIcon'
import { type Metadata } from 'next'
import fiveThreeThree from '@/images/clients/533-racing/logo-color.svg'
import { Cloudinary } from '@cloudinary/url-gen'
import logoBrucknersLight from '@/images/partners/bruckners/logo-color.svg'
import logoCvsWhite from '@/images/partners/cvs/cvs-logo-color.svg'
import logoNbrWhite from '@/images/partners/nbr-color.svg'
import logoRushWhite from '@/images/partners/rush/enterprise-color.svg'
import logoBayLynx from '@/images/bay-lynx-logo-color-black.svg'
import logoRaptorWhite from '@/images/partners/Raptor_official_logo.svg'

export const clients = [
  ['Rush Enterprises', logoRushWhite],
  ["Bruckner's Truck & Equipment", logoBrucknersLight],
  ['Custom Vehicle Solutions', logoCvsWhite],
  ["Nelson Brother's Ready Mix", logoNbrWhite],
  ['Raptor Ready Mix', logoRaptorWhite],
  ['Bay Lynx', logoBayLynx],
  // [`BrothersKeepers`,logoBkWhite ],
]
export const siteData = {
  fullName: 'Buffalo Graphics Company',
  shortName: 'Buffalo Graphics Co.',
  description: `Not Your Grandma's Print Shop`,
  keywords: [
    'Graphic Design',
    'Vehicle Graphics',
    'Signage',
    'Stickers',
    'Fleet Graphics',
    'Color Change Wraps',
  ],
  copywrite: `© Buffalo Graphics Company ${new Date().getFullYear()}`,
  emails: [
    ['Office', 'office@buffalo.graphics'],
    ['Sacha Sannon', 'sashad@buffalo.graphics'],
  ],
  phone: '940-205-1922',
  address: {
    street: '1220 Farm to Market 455 W',
    street_two: 'Suite E1',
    postalCode: '76266',
    state: 'TX',
    city: 'Sanger',
    text: '22 Rue du Grenier Saint-Lazare\n75003 Paris\nFrance',
    googleMaps: 'https://maps.app.goo.gl/1wkezYtj9AcnFMcF8',
    apple:
      'https://maps.apple.com/?address=1220%20FM-455,%20Unit%20E1,%20Sanger,%20TX%20%2076266,%20United%20States&auid=6660173887608003524&ll=33.374012,-97.128742&lsp=9902&q=Buffalo%20Graphics%20Company',
  },
  socialMedia: [
    {
      title: 'Facebook',
      user: '@buffalographicsco',
      href: 'https://www.facebook.com/buffalographicsco',
      icon: FacebookIcon,
    },
    {
      title: 'Instagram',
      user: '@buffalographicsco',
      href: 'https://instagram.com/buffalographicsco',
      icon: InstagramIcon,
    },
  ],
}
export const cld = new Cloudinary({
  cloud: {
    cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_SECRET,
  },
  url: {
    secure: true, // force https, set to false to force http
  },
})
/*
{
  "name": "Buffalo Graphics",
  "short_name": "BG",
  "description": "Welcome to Buffalo Graphics - Your Premier Sign and Vehicle Graphics Partner in Sanger, TX",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#fff",
  "theme_color": "#fff",
  "icons": [
    {
      "src": "/favicon.ico",
      "sizes": "any",
      "type": "image/x-icon"
    }
  ]
}
*/

export const defaultMetaData: Metadata = {
  // metadataBase: new URL('https://www.buffalo.graphics'),
  title: {
    template: '%s - BG',
    default: siteData.shortName,
  },
  applicationName: siteData.fullName,
  description: siteData.description,
  keywords: siteData.keywords,
  openGraph: {
    title: siteData.fullName,
    description: siteData.description,
    images: ['/opengraph-image.png'],
  },
  manifest: process.env.NODE_ENV === 'production' ? '' : '',
}

type PageLink = {
  title: string
  href: string
}

type PageLinkName = 'home' | 'contact' | 'about' | 'work' | 'portfolio'

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
    title: 'services',
    href: '/services',
  },
  work: {
    title: 'work',
    href: '/work',
  },
  portfolio: {
    title: 'portfolio',
    href: '/portfolio',
  },
}

export const navLinks: PageLink[] = [
  pageLinks.about,
  pageLinks.contact,
  pageLinks.portfolio,
  pageLinks.work,
]

export const socialMediaProfiles = siteData.socialMedia

export const services = [
  [
    'Graphic Design',
    `Our talented designers work closely with you to craft stunning visuals that capture your brand's essence and leave a lasting impression everywhere.`,
  ],
  [
    'Vehicle Graphics',
    `Transform your vehicles into rolling billboards that grab attention wherever you go. From full wraps to decals, we'll make your message mobile.`,
  ],
  [
    'Fleet Graphics',
    `Ensure your entire fleet stands out with consistent, high-quality graphics that represent your brand effectively across all vehicles.`,
  ],
  [
    'Color Change Vehicle Wraps',
    `Want to change the color of your vehicle without a permanent commitment? Our color change wraps offer a fresh look while protecting your original paint.`,
  ],
  [
    'Sign Solutions',
    `Make your business stand out with eye-catching signs. Be it storefront, office, or even banner signage, we'll help you attract customers and leave a lasting impression.`,
  ],
  [
    'Stickers for Every Occasion',
    `From fun and quirky to professional and branded, our stickers can be tailored to your needs. They're perfect for promotional giveaways or personal expression.`,
  ],
]

export const testimonials = {
  anderson: {
    name: '533 Racing',
    text: `I needed vinyl graphics designed, printed, laminated, and cut for a
  drift car. Garrett and Sacha took care of me with great communication
  and design collaboration. Turned out absolutely beautiful! Thank you so
  so much again Buffalo Graphics!`,
    logo: fiveThreeThree,
  },
}
