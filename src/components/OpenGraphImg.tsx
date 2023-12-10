import { ImageResponse } from 'next/server'
import { size } from '../app/opengraph-image'

// Image generation

export default async function OpenGraphImg({ title, description }: any) {
  // Font
  const interSemiBold = fetch(
    new URL('../fonts/Montserrat-Black.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer())

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          color: 'white',
        }}
      >
        <div>{title}</div>
        <div>{title}</div>
        <img src="http://localhost:3000/logo.svg" height={150} />
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Inter',
          data: await interSemiBold,
          style: 'normal',
          weight: 400,
        },
      ],
    },
  )
}
