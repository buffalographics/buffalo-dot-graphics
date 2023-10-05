import { Container } from '@/components/Container'
import { PageIntro } from '@/components/PageIntro'
import { ContactDetails } from '@/components/ContactForm'
import { FadeIn } from '@/components/FadeIn'

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Contact us" title="Let’s work together">
        <p>We can’t wait to hear from you.</p>
      </PageIntro>
      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactDetails />
          <FadeIn className="lg:order-last">
            <iframe
              src="https://app.shopmonkey.io/quote-request/ccbbaa4329cadeffb4e12e7a947f32c8?noExternalScripts=1"
              width="100%"
              height="1000"
              style={{
                backgroundColor: 'none',
              }}
            />
          </FadeIn>
          {/* <ContactForm /> */}
        </div>
      </Container>
    </>
  )
}
