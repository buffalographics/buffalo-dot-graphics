import { loadImages } from '@/lib/utils'
import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Blockquote } from '@/components/Blockquote'
import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import logoBrightPath from '@/images/clients/bright-path/logo-dark.svg'
import logoFamilyFund from '@/images/clients/family-fund/logo-dark.svg'
import logoGreenLife from '@/images/clients/green-life/logo-dark.svg'
import logoHomeWork from '@/images/clients/home-work/logo-dark.svg'
import logoMailSmirk from '@/images/clients/mail-smirk/logo-dark.svg'
import logoNorthAdventures from '@/images/clients/north-adventures/logo-dark.svg'
import logoPhobia from '@/images/clients/phobia/logo-dark.svg'
import logoUnseal from '@/images/clients/unseal/logo-dark.svg'
import { formatDate } from '@/lib/formatDate'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { chunk } from 'lodash'

export default async function Work() {
  const images = await loadImages()
  const chunks = chunk(images, 4)
  console.log('chunks: ', chunks.length)
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {chunks.map((arr, imgChunkIdx) => (
        <div key={imgChunkIdx} className="grid gap-4">
          {arr.map((obj, chunkIdx) => (
            <div key={`chunk-${chunkIdx}`}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={obj.url}
                alt=""
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
