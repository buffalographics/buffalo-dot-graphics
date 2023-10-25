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
    <div className="hide-scroll-bar flex overflow-x-scroll pb-10">
      <div className="ml-10 flex flex-nowrap md:ml-20 lg:ml-40 ">
        {clients.map(([name, img]) => (
          <div className="inline-block px-3">
            <div className="flex h-64 w-64 max-w-xs overflow-hidden">
              <Image
                alt={name}
                height={75}
                src={img}
                // className="max-h-30 p-2"
              />
            </div>
          </div>
        ))}
      </div>
    </div>

    /* <div className="mt-24 rounded-4xl bg-gray-50 py-20 sm:mt-32 sm:py-32 lg:mt-56">
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
          className="grid grid-cols-2 content-center items-center justify-center  gap-4 md:grid-cols-3"
        >
          {clients.map(([name, img], i) => (
            <FadeIn key={`image-${i}`}>
              <Image
                alt={name}
                height={250}
                src={img}
                className="max-h-30 p-2"
              />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div> */
  )
}

