import { loadGallerySection } from '@/lib/utils'
import { SectionIntro } from '@/components/SectionIntro'
import GalleryFeature from '../../components/Gallery'

const PorfolioSection = async (props: {
  title: string
  expression: string
  max?: number | 3
}) => {
  const data = await loadGallerySection({
    expression: props.expression,
    max: props.max || 3,
  })

  return (
    <div>
      <SectionIntro title={props.title}>
        <GalleryFeature resources={data.resources} />
      </SectionIntro>
    </div>
  )
}

/*
<div>
    <h2 className="block font-display text-base font-semibold text-neutral-950">
      {props.title}
    </h2>
    <FadeInStagger faster className="grid grid-cols-4 md:grid-cols-5">
      {data.resources.map((r) => (
        <FadeIn key={r.public_id}>
          <GalleryImage publicId={r.public_id} />
        </FadeIn>
      ))}
    </FadeInStagger>
    <code>{/* <pre>{JSON.stringify(data, null, 2)}</pre> </code>
  </div>
*/

const portfolioSections = [
  { title: 'Concrete Trucks & Equiptment', tag: 'cte-truck' },
  { title: 'Legacy Air Heating & Cooling', tag: 'legacy-air-truck' },
  { title: 'Dream-Mix Volumetric Mixer', tag: 'dream-mix-vm' },
  { title: 'Rapid Redi-Mix Concrete Mixer', tag: 'rapid-redi-mix-mixer' },
  { title: 'Charlies Concrete Mixer', tag: 'charlies-concrete-mixer' },
  { title: 'Raptor Ready Mix Concrete Truck', tag: 'raptor-ready-mix-mixer' },
]

export default async function Portfolio() {
  return (
    <>
      {portfolioSections.map((job) => (
        <PorfolioSection
          key={job.tag}
          title={job.title}
          expression={`tags = ${job.tag}`}
          max={20}
        />
      ))}
    </>
  )
}
