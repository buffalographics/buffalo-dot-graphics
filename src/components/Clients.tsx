'use client'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

import clsx from 'clsx'
import Image from 'next/image'
import { useCarousel } from 'use-carousel-hook'

import { useState } from 'react'
import { clients } from '@/lib/data'

export const Clients = () => {
  return (
    <div className="mt-24 rounded-4xl bg-gray-50 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      {' '}
      <Container>
        <FadeIn className="mb-5 flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider sm:text-left">
            We’ve worked with some pretty great companies, such as:
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger
          faster
          className="grid grid-cols-2 content-center items-center justify-center  gap-4 md:grid-cols-3"
        >
          {clients.map(([name, img], i) => (
            <FadeIn key={`image-${i}`} className="flex place-content-center">
              <Image
                alt={name}
                width={150}
                // height="auto"
                src={img}
                className="max-w-lg"
              />
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </div>
  )
}

// export const Clients = ({ clients }) => {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const handleNext = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex + 1 === clients.length ? 0 : prevIndex + 1,
//     )
//   }
//   const handlePrevious = () => {
//     setCurrentIndex((prevIndex) =>
//       prevIndex - 1 < 0 ? clients.length - 1 : prevIndex - 1,
//     )
//   }
//   const handleDotClick = (index) => {
//     setCurrentIndex(index)
//   }
//   const { ref, previous, next, setCurrent, reset, current } =
//     useCarousel<HTMLDivElement>(clients)
//   console.log('current: ', current)
//   console.log('ref: ', ref)
//   return (
//     <div className="relative w-full" data-carousel="static">
//       {/* Carousel wrapper */}
//       <ul ref={ref} className="carousel__list ">
//         {/* Item 1 */}
//         {clients.map(([name, img], i) => (
//           <li
//             data-carousel-item
//             key={i}
//             // id={`carousel-item-${i}`}
//             className="carousel__item duration-700 ease-in-out"
//           >
//             <Image
//               alt={name}
//               height={250}
//               src={img}
//               className={clsx(
//                 'absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2',
//                 currentIndex !== i ? 'hidden' : '',
//               )}
//             />
//           </li>
//         ))}
//       </ul>
//       {/* Slider indicators */}
//       <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3">
//         <button
//           id="carousel-indicator-1"
//           type="button"
//           className="h-3 w-3 rounded-full"
//           aria-current="true"
//           aria-label="Slide 1"
//         />
//         <button
//           id="carousel-indicator-2"
//           type="button"
//           className="h-3 w-3 rounded-full"
//           aria-current="false"
//           aria-label="Slide 2"
//         />
//         <button
//           id="carousel-indicator-3"
//           type="button"
//           className="h-3 w-3 rounded-full"
//           aria-current="false"
//           aria-label="Slide 3"
//         />
//         <button
//           id="carousel-indicator-4"
//           type="button"
//           className="h-3 w-3 rounded-full"
//           aria-current="false"
//           aria-label="Slide 4"
//         />
//       </div>
//       {/* Slider controls */}
//       <button
//         id="data-carousel-prev"
//         type="button"
//         className="group absolute left-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
//         onClick={() => previous(1)}
//       >
//         <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
//           <svg
//             className="h-4 w-4 text-white dark:text-gray-800"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M5 1 1 5l4 4"
//             />
//           </svg>
//           <span className="hidden">Previous</span>
//         </span>
//       </button>
//       <button
//         id="data-carousel-next"
//         type="button"
//         className="group absolute right-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
//         onClick={handleNext}
//       >
//         <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
//           <svg
//             className="h-4 w-4 text-white dark:text-gray-800"
//             aria-hidden="true"
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 6 10"
//           >
//             <path
//               stroke="currentColor"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="m1 9 4-4-4-4"
//             />
//           </svg>
//           <span className="hidden">Next</span>
//         </span>
//       </button>
//     </div>
//   )
// }
