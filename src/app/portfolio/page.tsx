import Image from 'next/image'

import cteTruck from '@/images/bg-portfolios-2025/cte-truck.jpg'
import cyclonePump from '@/images/bg-portfolios-2025/cyclone-pump.jpg'
import dashboardRoofing from '@/images/bg-portfolios-2025/dashboard-roofing.jpg'
import dashboardRoofing2 from '@/images/bg-portfolios-2025/dashboard-roofing-rear.jpg'
import driftSchool from '@/images/bg-portfolios-2025/drift-school.jpg'
import legacyAir from '@/images/bg-portfolios-2025/legacy-air.jpg'
import nbrSilo from '@/images/bg-portfolios-2025/nbr-silo.jpg'
import peterbuiltTruck from '@/images/bg-portfolios-2025/peterbuilt-truck.jpg'
import primeBatch from '@/images/bg-portfolios-2025/prime-batch-silo.jpg'
import rapidMixer from '@/images/bg-portfolios-2025/rapid-mixer.jpg'
import rapidFleet from '@/images/bg-portfolios-2025/rapid-fleet.jpg'
import raptorMixer from '@/images/bg-portfolios-2025/raptor-mixer.jpg'
import raptorFleet from '@/images/bg-portfolios-2025/raptor-fleet.jpg'
import rushCar from '@/images/bg-portfolios-2025/rush-car.jpg'
import sunocoMiata from '@/images/bg-portfolios-2025/sunoco-miata.jpg'
import sunocoRush from '@/images/bg-portfolios-2025/sunoco-rush.jpg'
import wltTruck from '@/images/bg-portfolios-2025/wlt-truck.jpg'
import zbPools from '@/images/bg-portfolios-2025/zb-pools.jpg'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'

export const metadata = {
  title: 'Portfolio',
  description:
    'Explore our portfolio of custom vehicle graphics, wraps, and more.',
  keywords: ['portfolio', 'vehicle graphics', 'wraps', 'custom designs'],
}

const galleryData = [
  {
    title: 'Dashboard Roofing',
    description: 'Custom vehicle graphics for Dashboard Roofing.',
    image: [dashboardRoofing, dashboardRoofing2],
  },
  {
    title: 'Cyclone Truck',
    description: 'Custom vehicle graphics for Cyclone Truck.',
    image: cyclonePump,
  },
  {
    title: 'CTE Truck',
    description: 'Custom vehicle graphics for CTE Truck.',
    image: cteTruck,
  },
  {
    title: 'Drift School',
    description: 'Custom vehicle graphics for Drift School.',
    image: driftSchool,
  },
  {
    title: 'Legacy Air',
    description: 'Custom vehicle graphics for Legacy Air.',
    image: legacyAir,
  },
  {
    title: 'Nbr Silo',
    description: 'Custom silo graphics for NBR.',
    image: nbrSilo,
  },
  {
    title: 'Peterbuilt Truck',
    description: 'Custom vehicle graphics for Peterbuilt Truck.',
    image: peterbuiltTruck,
  },
  {
    title: 'Prime Batch Silo',
    description: 'Custom silo graphics for Prime Batch.',
    image: primeBatch,
  },
  {
    title: 'Rapid Mixer',
    description: 'Custom mixer graphics for Rapid Mixer.',
    image: [rapidMixer, rapidFleet],
  },

  {
    title: 'Raptor Mixer',
    description: 'Custom mixer graphics for Raptor Mixer.',
    image: [raptorMixer, raptorFleet],
  },
  {
    title: 'Rush Car',
    description: 'Custom vehicle graphics for Rush Car.',
    image: rushCar,
  },
  {
    title: 'Sunoco Miata',
    description: 'Custom vehicle graphics for Sunoco Miata.',
    image: sunocoMiata,
  },
  {
    title: 'Sunoco Rush',
    description:
      'Custom vehicle graphics for Sunoco Rush, showcasing vibrant designs.',
    image: sunocoRush,
  },
  {
    title: 'WLT Truck',
    description:
      'Custom vehicle graphics for WLT Truck, featuring bold branding and design.',
    image: wltTruck,
  },
  {
    title: 'ZB Pools',
    description:
      'Custom vehicle graphics for ZB Pools, highlighting their services and branding.',
    image: zbPools,
  }
]

export default async function Portfolio() {
  return (
    <section className='mt-24 sm:mt-32 lg:mt-40'>
      <FadeInStagger>
        {galleryData.map((item, index) => (
          <FadeIn className="relative" key={index}>
            {Array.isArray(item.image) ? (
              item.image.map((img, imgIndex) => (
                <Image
                  key={imgIndex}
                  src={img}
                  alt={item.title}
                  className="h-auto w-full object-cover"
                  width={1200}
                  height={800}
                  title={item.title}
      
                />
              ))
            ) : (
              <Image
                src={item.image}
                alt={item.title}
                className="h-auto w-full object-cover"
                width={1200}
                height={800}
      
              />
            )}
            {/* <span className="absolute top-5 left-5 text-3xl font-bold text-white opacity-75">
              {item.title}
            </span> */}
          </FadeIn>
        ))}
      </FadeInStagger>
    </section>
  )
}
