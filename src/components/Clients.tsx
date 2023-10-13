import Image from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import logoBrucknersLight from '@/images/partners/bruckners/logo-color.svg'
import logoRushWhite from '@/images/partners/rush/enterprise-color.svg'
import logoBkWhite from '@/images/partners/brotherskeepers/logo-white.svg'
import logoCvsWhite from '@/images/partners/cvs/cvs-logo-color.svg'
import logoNbrWhite from '@/images/partners/nbr-color.svg'

import logoNumo from '@/images/partners/numo-logo-white.svg'
import logoRaptorWhite from '@/images/partners/Raptor_official_logo.svg'
import logoBayLynx from '@/images/bay-lynx-logo-color-black.svg'
import { GridList, GridListItem } from './GridList'

const clients = [
  ['Rush Enterprises', logoRushWhite],
  ["Bruckner's Truck & Equipment", logoBrucknersLight],
  ['Custom Vehicle Solutions', logoCvsWhite],
  ["Nelson Brother's Ready Mix", logoNbrWhite],
  ['Raptor Ready Mix', logoRaptorWhite],
  ['Bay Lynx', logoBayLynx],
  // [`BrothersKeepers`,logoBkWhite ],
]

export const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-gray-50 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      {' '}
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider sm:text-left">
            We’ve worked with some pretty great companies, such as:
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger
          faster
          className="grid grid-cols-1 content-center gap-4 md:grid-cols-3"
        >
          {clients.map(([name, img], i) => (
            <FadeIn className="row" key={`image-${i}`}>
              <Image
                alt={name}
                height={250}
                unoptimized
                width={250}
                src={img}
                className="h-full"
              />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

