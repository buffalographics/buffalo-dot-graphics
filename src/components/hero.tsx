'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import useDimensions from 'react-cool-dimensions'
import { Container } from './Container'
export function arrayCeil(arr: number[], number: number) {
  const sorted = arr.sort((a, b) => a - b)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > number) {
      return sorted[i]
    }
  }

  // If no index found return the last element
  return sorted[sorted.length - 1]
}

export const Hero = () => {
  const [heroImage, setHeroImage] = useState('hero-1920.webp')

  const imageSizes = [600, 1280, 1920]
  const { observe, unobserve, width, height, entry } = useDimensions({
    onResize: ({ observe, unobserve, width, height, entry }) => {
      setHeroImage(`hero-${arrayCeil(imageSizes, width)}.webp`)

      unobserve() // To stop observing the current target element
      observe() // To re-start observing the current target element
    },
  })
  return (
    <div
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-white"
      ref={observe}
    >
      <Image
        // src={heroImage}
        src="/hero.svg"
        unoptimized
        className="object-cover opacity-20"
        fill
      />
      <div style={{ zIndex: 100 }}>
        <Container>
          <h1 className="font-display text-7xl font-black tracking-tight text-neutral-950 [text-wrap:balance]">
            Buffalo Graphics Co.
          </h1>
          <h2>Not your grandma&apos;s print shop.</h2>
        </Container>
      </div>
    </div>
  )
}
