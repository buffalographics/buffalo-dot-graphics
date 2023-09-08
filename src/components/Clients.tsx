import Image from 'next/image'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import logoBrucknersLight from '@/images/clients/bruckners/logo-light.svg'
const clients: [string, string?][] = [
  ["Bruckner's Truck & Equipment", logoBrucknersLight],
  ['Custom Vehicle Solutions'],
  ['Rush Enterprises'],
  ["Nelson Brother's Ready Mix"],
  ['Raptor Ready Mix'],
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
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client} className="font-medium text-white">
                <FadeIn>{client}</FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}
