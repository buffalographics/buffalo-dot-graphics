'use client'

import { cld } from '@/lib/data'
import { Resource } from '@/lib/utils'
// import { Resource } from '@/lib/utils'
import {
  AdvancedImage,
  lazyload,
  placeholder,
  responsive,
} from '@cloudinary/react'
import { ImgProps } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import { ReactEventHandler, useState } from 'react'

// Import plugins
// Use the image with public ID, 'docs/colored_pencils'.
export function GalleryImage(props: { publicId: string } & ImgProps) {
  const myImage = cld.image(props.publicId)
  return (
    <AdvancedImage
      cldImg={myImage}
      plugins={[lazyload(), responsive(), placeholder()]}
      {...props}
    />
  )
}

// Import plugins
// Use the image with public ID, 'docs/colored_pencils'.
export default function GalleryFeature(props: { resources: Resource[] }) {
  const [featured, setfeatured] = useState(0)

  const handleClick: ReactEventHandler = (e) => {
    const newFeature = Number(e.currentTarget.id.split('-')[1])
    console.log(newFeature)
    setfeatured(newFeature)
  }

  return (
    // <div className="grid gap-4 overflow-hidden">
    /* <div className="w-full">
        <Image
          className="max-h-80 w-full rounded-lg object-cover object-center"
          src={props.resources[featured].url}
          height={400}
          width={600}
          objectFit="fill"
          unoptimized
          alt={props.resources[featured].url}
        />
      </div> */
    /* grid-template-columns: repeat(6, calc(50% - 40px));
  grid-template-rows: minmax(150px, 1fr); */
    <div className="grid w-full grid-cols-2 gap-2 md:grid-cols-3">
      {props?.resources?.map((r, imgIndex) => (
        <div
          key={r.public_id}
          onClick={handleClick}
          id={`image-${imgIndex}`}
          className="max-h-44 overflow-hidden"
        >
          <Image
            src={r.url}
            className="max-h-30 h-full w-full  rounded-lg object-cover object-center"
            height={1000}
            width={1000}
            loading="eager"
            alt={r.filename}
          />
        </div>
      ))}
    </div>
  )
}
