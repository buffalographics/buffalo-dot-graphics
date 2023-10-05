import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { SectionIntro } from '@/components/SectionIntro'
import { Resource, loadImages } from '@/lib/utils'
import Image from 'next/image'
const dirs = [
  'true-grit',
  'raptor-ready-mix',
  'nelson-brothers',
  'dream-mix',
  'charlies-concrete',
]

const ClientImgs = async (props: { dir: string }) => {
  const { resources } = await loadImages(`${props.dir}/*`, 3)
  const name = props.dir.split('-').join(' ')
  return (
    <div>
      <h3 className="block font-display text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
        {name}
      </h3>
      <FadeInStagger
        faster
        className="grid grid-cols-1 content-center gap-4 md:grid-cols-3"
      >
        {resources.map((r, i) => (
          <FadeIn key={`image-${i}`} className="row">
            <Image
              alt={r.filename}
              height={250}
              width={250}
              src={r.url}
              className="justify-center rounded-lg"
            />
          </FadeIn>
        ))}
      </FadeInStagger>
    </div>
  )
}
export default async function Work() {
  const { resources } = await loadImages('*', 100)

  return (
    <>
      <div className="mt-24  py-24 sm:mt-32 lg:mt-40 lg:py-32">
        <SectionIntro
          eyebrow="Some of our work"
          title="Some of our work"
        ></SectionIntro>
        <Container className="mt-16">
          <GridList>
            <GridListItem title="Loyalty" invert>
              Our team has been with us since the beginning because none of them
              are allowed to have LinkedIn profiles.
            </GridListItem>
            <GridListItem title="Trust" invert>
              We don’t care when our team works just as long as they are working
              every waking second.
            </GridListItem>
            <GridListItem title="Compassion" invert>
              You never know what someone is going through at home and we make
              sure to never find out.
            </GridListItem>
          </GridList>
          {dirs.map((dir) => (
            <ClientImgs key={dir} dir={dir} />
          ))}
        </Container>
      </div>
    </>
  )
}
