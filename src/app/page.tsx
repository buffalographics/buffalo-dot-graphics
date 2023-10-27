import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import bottleOpener from '@/images/opener.svg'
import vanImg from '@/images/van.png'
import vanImgW from '@/images/van.webp'
import shirtImg from '@/images/screenprint.svg'
import { defaultMetaData, services, testimonials } from '@/lib/data'
import { type Metadata } from 'next'
import Image from 'next/image'
import { Clients } from '../components/Clients'
export const metadata: Metadata = {
  ...defaultMetaData,
}

const imgs = [vanImg, vanImgW, shirtImg, bottleOpener]

function Services() {
  return (
    <>
      {/* <SectionIntro
        eyebrow="Services"
        title="We help you identify, explore and respond to new opportunities."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          As long as those opportunities involve giving us money to re-purpose
          old projects — we can come up with an endless number of those.
        </p>
      </SectionIntro> */}
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              {/* <div className="grid w-full grid-cols-1 gap-2">
                {imgs.map((r, imgIndex) => (
                  <div
                    key={imgIndex}
                    id={`image-${imgIndex}`}
                    className="max-h-44 overflow-hidden"
                  >
                    <Image
                      src={r}
                      className="max-h-30 h-full w-full  rounded-lg object-contain object-center"
                      height={1000}
                      width={1000}
                      loading="eager"
                      alt={imgIndex}
                    />
                  </div>
                ))}
              </div> */}
              {/* <StylizedImage
                src={vanImg}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center"
              /> */}
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
            If you&apos;re looking for poor quality and stock clipart, we might
            not be a great fit
          </p>
        </FadeIn>
      </Container>

      <Services />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{
          name: testimonials.anderson.name,
          logo: testimonials.anderson.logo,
        }}
      >
        {testimonials.anderson.text}
      </Testimonial>

      <Clients />

      <ContactSection />
    </>
  )
}
