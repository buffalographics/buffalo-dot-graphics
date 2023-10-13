import clsx from 'clsx'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Offices } from '@/components/Offices'
import { siteData } from '@/lib/data'
import { FC } from 'react'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Tell us about your project
            </h2>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Message
              </Button>
            </div>
            <div className="mt-10 border-t border-white/10 pt-10">
              <h3 className="font-display text-base font-semibold text-white">
                Get in touch{' '}
              </h3>
              {/* <Offices
                invert
                className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2"
              /> */}
              <ContactLinks invert />
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}

export const ContactLinks: FC<{ invert?: boolean }> = ({ invert = false }) => {
  return (
    <div>
      <ul role="list" className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
        <li>
          <Address name="Phone Number" invert={invert}>
            <a href={`tel:${siteData.phone}`} className="hover:underline">
              {siteData.phone}
            </a>
          </Address>
        </li>

        <li className="md:col-start-1">
          <Address name="Email" invert={invert}>
            <a
              href={`mailto:${siteData.emails[0][0]}`}
              target="_blank"
              className="hover:underline"
            >
              {siteData.emails[0][1]}
            </a>
          </Address>
        </li>
        <li className="md:col-start-2 md:row-start-1">
          <Address name={'Sanger'} invert={invert}>
            <a
              href={siteData.address.googleMaps}
              target="_blank"
              className="hover:underline"
            >
              {siteData.address.street}
              <br />
              {siteData.address.street_two}
              <br />
              {`${siteData.address.city}, ${siteData.address.state} ${siteData.address.postalCode}`}
            </a>
          </Address>
        </li>
      </ul>

      <ul className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
        {siteData.socialMedia.map((prof) => (
          <li
            key={prof.title}
            className={clsx(
              'text-sm not-italic',
              invert ? 'text-neutral-300' : 'text-neutral-600',
            )}
          >
            <a href={prof.title} className="hover:underline">
              <strong>{prof.title}</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
function Address({
  name,
  children,
  invert = false,
}: {
  name: string
  children: React.ReactNode
  invert?: boolean
}) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}
