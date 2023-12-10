import OpenGraphImg from '@/components/OpenGraphImg'
import { ImageResponse } from 'next/server'

// Route segment config
export const runtime = 'edge'

// Image metadata
export const alt = 'Buffalo Graphics'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

// Image generation
export default async function Image() {
  // Font
  console.log('props: ', import.meta)
  const interSemiBold = fetch(
    new URL('../fonts/Montserrat-Black.ttf', import.meta.url),
  ).then((res) => res.arrayBuffer())

  return await OpenGraphImg({ title: 'Home' })
}
