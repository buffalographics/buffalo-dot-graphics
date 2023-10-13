import { defaultMetaData, siteData } from '@/lib/data'
import { MetadataRoute } from 'next'
import { defaultConfig } from 'next/dist/server/config-shared'
import icon512 from '@/images/icons/icon-512x512.png'
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteData.fullName,
    short_name: siteData.shortName,
    description: siteData.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icons/icon-512x512.png',
        sizes: 'any',
      },
      {
        src: '/icons/icon.svg',
        sizes: 'any',
      },
    ],
  }
}
/*

"icons": [
  {
    "src": "icon/lowres.webp",
    "sizes": "48x48",
    "type": "image/webp"
  },
  {
    "src": "icon/lowres",
    "sizes": "48x48"
  },
  {
    "src": "icon/hd_hi.ico",
    "sizes": "72x72 96x96 128x128 256x256"
  },
  {
    "src": "icon/hd_hi.svg",
    "sizes": "any"
  }
]

*/
