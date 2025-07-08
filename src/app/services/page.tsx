import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import { Team } from '@/components/Team'
import bottleOpener from '@/images/services/bottle_opener.png'
import { Metadata } from 'next'
import Image, { ImageProps } from 'next/image'
import { services } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Services',
  description:
    'Custom Graphic Design, Large Format Printing, Vehicle Graphics, Fleet Services, Custom Stickers, and more.',
  keywords: services.map((s) => s[0]),
}

export default function Services() {
  return (
    <>
      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        {services.map((s, index) => (
          // Replace this with your actual component for each service
          <Section key={s[0]} title={s[0]}>
            <div className="space-y-6 text-base text-neutral-600">
              <p>
                {s[1]}
              </p>
            </div>

      
          </Section>
        ))}

        <Team />
      </div>

      <ContactSection />
    </>
  )
}

interface SectionProps {
  title: string
  image?: ImageProps
  children: React.ReactNode
}

function Section({ title, image, children }: SectionProps) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function GraphicDesign() {
  return (
    <Section title="Graphic Design">
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Our in-house design team works with a wide range of clients, each with
          different needs and audiences.
          <strong className="font-semibold text-neutral-950">
            These are just a few of our favorites.
          </strong>
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        We can turn the idea in your head into something to brag about for
        practially any application
      </h3>
    </Section>
  )
}

function LargeFormat() {
  return (
    <Section title="Large Format Printing">
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Printed Graphics{' '}
          <strong className="font-semibold text-neutral-950">
            that stick around
          </strong>
        </p>
        <p>
          Printed graphics are one of the best investments you can make in your
          brand because of their low cost and high return. We can set you up
          with stickers, labels, banners, wall graphics, signs or vehicle wraps
          to put your logo in front of the eyes it needs to be.
        </p>
      </div>

      <TagList className="mt-4">
        <TagListItem>Vehicle Graphics</TagListItem>
        <TagListItem>Stickers</TagListItem>
        <TagListItem>Banners</TagListItem>
        <TagListItem>Signs</TagListItem>
      </TagList>
    </Section>
  )
}

const ScreenPrinting = () => (
  <Section title="Screen Printed Apparel">
    <GridList>
      <GridListItem title="REQUEST A QUOTE">
        The first step to awesome screen printed garments is reaching out to us.
        We want to know all about your project or business. Shoot us an email or
        give us a call!
      </GridListItem>
      <GridListItem title="PICK YOUR GARMENTS">
        We’re able to source virtually any garment you could want, and
        what&apos;s more, we have the experience and know how to recommend the
        best option for your needs be it tees, hoodies or totes.
      </GridListItem>
      <GridListItem title="DESIGN TIME">
        Whether our awesome in-house design team is creating something for you,
        or we&apos;re getting your existing logo ready for print, we&apos;re
        here to translate your vision into reality.
      </GridListItem>

      <GridListItem title="TAKE IT TO PRESS">
        This is where the magic happens. We combine your artwork, garment
        choice, and our knowledge of inks and processes to create garments that
        we know you&apos;re going to love to wear.
      </GridListItem>
    </GridList>

    {/*  <div className="space-y-6 text-base text-neutral-600">
      <p>
        Custom Screen Printing
        <strong className="font-semibold text-neutral-950">
          We don&apos;t just sell custom shirts, we help you create apparel
          people actually want to wear
        </strong>
      </p>
    </div>

     */}
  </Section>
)
