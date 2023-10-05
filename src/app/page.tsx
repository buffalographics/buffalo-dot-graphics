import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import wipeTruck from '@/images/truck-wipe.webp'
import { services } from '@/lib/data'
import { Clients } from '../components/Clients'

export const metadata: Metadata = {
  title: {
    template: '%s - BG',
    default: 'Buffalo Graphics',
  },
  description: `Not Your Grandma's Print Shop.`,
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={wipeTruck}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            {services.map(([title, txt]) => (
              <ListItem key={title.toLowerCase()} title={title}>
                {txt}
              </ListItem>
            ))}
          </List>
        </div>
      </Container>
    </>
  )
}

export default async function Home() {
  // let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Not Your Grandma&apos;s Print Shop.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            At Buffalo Graphics, we&#39;re more than just a print company.
            We&#39;re your creative partner in bringing your ideas to life.
            Whether you&#39;re looking to make a bold statement with vehicle
            graphics, promote your brand with eye-catching signs, create custom
            shirts that stand out, or add a touch of personalization with
            stickers, our team of experts is here to turn your vision into
            reality.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Anderson See' }}
      >
        Needed vinyl graphics designed, printed, laminated, and cut for a drift
        car. Garrett and Sacha took care of me with great communication and
        design collaboration. Turned out absolutely beautiful! Thank you so so
        much again Buffalo Graphics!
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
