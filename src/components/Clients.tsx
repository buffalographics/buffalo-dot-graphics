import Image from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import logoBrucknersLight from '@/images/partners/bruckners/logo-light.svg'
import logoRushWhite from '@/images/partners/rush/rush-solid-white.svg'
import logoBkWhite from '@/images/partners/brotherskeepers/logo-white.svg'
import logoCvsWhite from '@/images/partners/cvs/cvs-logo-white.svg'
import logoNbrWhite from '@/images/partners/nbr.svg'

import logoNumo from '@/images/partners/numo-logo-white.svg'
import logoRaptorWhite from "@/images/partners/raptor-logo-white.svg"
import logoBayLynx from '@/images/partners/Bay-Lynx.svg'

const clients= [
  ['Rush Enterprises',logoRushWhite],
  ["Bruckner's Truck & Equipment", logoBrucknersLight],
  ['Custom Vehicle Solutions',logoCvsWhite],
  ['Numo Remanufacturing',logoNumo],
  ["Nelson Brother's Ready Mix",logoNbrWhite],
  ['Raptor Ready Mix',logoRaptorWhite],
  [`BrothersKeepers`,logoBkWhite ],
  ['Bay Lynx', logoBayLynx]
]

export function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We’ve worked with some pretty great companies
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-1 justify-center gap-x-8 gap-y-10 w-full lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn> <Image className="h-full" src={logo} alt={client} unoptimized /></FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}
