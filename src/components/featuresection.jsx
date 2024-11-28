'use client'

import { Container } from '@/components/container'
import { FadeIn } from '@/components/fadein'
import { Heading, Subheading } from '@/components/text'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export function FeatureSection() {
  let scrollRef = useRef(null)
  let { scrollYProgress } = useScroll({ target: scrollRef })
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  return (
    <div ref={scrollRef} className="overflow-hidden">
      <Container className="py-24">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative isolate overflow-hidden bg-slate-900 py-14 sm:rounded-3xl sm:py-20 lg:py-0">
              <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-center lg:gap-y-0">
                <div className="px-4 sm:px-10 lg:row-start-2 lg:max-w-md">
                  <Subheading dark>Features</Subheading>
                  <Heading dark> Innovative Testing Services.</Heading>
                  <p className="mt-6 text-lg leading-8 text-slate-200">
                    At our DAP ISO 15189 Accredited Facility, with our
                    laboratory being in close proximity to the cities within the
                    Greater Vancouver area, we are able to get you the results
                    swiftly and efficiently.
                  </p>
                </div>
                <motion.div
                  className="z-10 flex min-w-full origin-right justify-end overflow-hidden lg:row-span-3"
                  style={{ scale }}
                >
                  <img
                    alt="Testing Cell"
                    src="/screenshots/testing-cell.png"
                    width={1300}
                    height={700}
                    className="relative lg:h-[30rem] lg:w-auto lg:max-w-none"
                  />
                </motion.div>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-12 top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-3xl lg:bottom-[-12rem] lg:top-auto lg:translate-y-0 lg:transform-gpu"
              >
                <div
                  style={{
                    clipPath:
                      'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                  }}
                  className="aspect-[1155/678] w-[70rem] bg-gradient-to-tr from-indigo-400 to-cyan-300 opacity-55"
                />
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </div>
  )
}
