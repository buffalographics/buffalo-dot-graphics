import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { ContactDetails } from '@/components/ContactForm'
import { FadeIn } from '@/components/FadeIn'
import { Metadata } from 'next'
import { defaultMetaData } from '@/lib/data'
import { ContactLinks, ContactSection } from '@/components/ContactSection'

export const metadata: Metadata = {
  ...defaultMetaData,
  title: 'Contact Us',
  description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
  return (
    <>
            <Container>
              <ContactLinks />
            </Container>
          
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <FadeIn className="lg:order-last">
            <iframe
              src="https://app.shopmonkey.cloud/public/quote-request/6496335861bf8b002448d11f?noExternalScripts=1"
              width="100%"
              height="1200"
              style={{ border: 0, backgroundColor: 'transparent' }}
            />
          </FadeIn>
          {/* <ContactForm /> */}
        </div>


    </>
  )
}
