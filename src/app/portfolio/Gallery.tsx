'use client'

import { Container } from '@/components/Container'
import { Cloudinary } from '@cloudinary/url-gen'
import {
  AdvancedImage,
  lazyload,
  responsive,
  placeholder,
} from '@cloudinary/react'
import { cld } from '@/lib/data'

// Import plugins
// Use the image with public ID, 'docs/colored_pencils'.
export default function GalleryImage(props: { publicId: string }) {
  const myImage = cld.image(props.publicId)
  return (
    <AdvancedImage
      cldImg={myImage}
      width={300}
      plugins={[lazyload(), responsive(), placeholder()]}
      // className="rounded"
    />
  )
}
