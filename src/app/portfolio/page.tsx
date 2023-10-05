import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { loadImages } from '@/lib/utils'
import Image from 'next/image'

export default async function Work() {
  const { resources } = await loadImages(32)

  return (
    <>
      <Container>
        <FadeInStagger
          faster
          className="grid grid-cols-1 content-center gap-4 md:grid-cols-3"
        >
          {resources.map((r, i) => (
            <FadeIn key={`image-${i}`} className="row">
              <Image
                alt={r.filename}
                height={100}
                width={100}
                src={r.url}
                className="justify-center rounded-lg"
              />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}
