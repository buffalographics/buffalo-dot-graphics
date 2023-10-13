// 'use client'

import { galleryPageImages, loadGallerySection } from '@/lib/utils'

import { quality } from '@cloudinary/url-gen/actions/delivery'
import { auto } from '@cloudinary/url-gen/qualifiers/quality'
import { accessibility } from '@cloudinary/react'
import { FC, useEffect, useState } from 'react'
import GalleryImage from './Gallery'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { Container } from '@/components/Container'

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
      <code>{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}</code>
    </div>
  )
}

export default async function Portfolio() {
  return (
    <Container>
      <PorfolioSection
        title="Vehicle Graphics"
        expression="tags = vehicle-graphics"
        max={20}
      />
      <PorfolioSection title="Mixers" expression="tags = mixer" />
      <PorfolioSection
        title="Vehicle Graphics"
        expression={`folder:buffalo-graphics-img/raptor-ready-mix`}
      />
      <code>{/* <pre>{JSON.stringify(idk, null, 2)}</pre> */}</code>
    </Container>
  )
}
