'use client'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/16/solid'
import {
  AnimatePresence,
  MotionConfig,
  motion,
  useMotionTemplate,
  useSpring,
} from 'framer-motion'
import { HeroGradient } from './gradient'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button } from './button'
import { FadeIn } from './fadein'
import { Navbar } from './navbar'
import { Container } from './container'

let heroSlides = [
  {
    subheading: 'Slide 1',
    heading:
      'BioSync helps you sell more by revealing sensitive information about your customers.',
    description:
      'At BioSync Laboratory, we provide cutting-edge testing solutions with a focus on innovation for accurate results. Our expert team is ready to help.',

    buttons: [
      { text: 'Get started', href: '#' },
      { text: 'Learn more', href: '/faq' },
    ],
    mainImage: {
      src: 'https://cdn.prod.website-files.com/65f2336b52907db4a54ee400/65f3d49b0d6285bff9ec1684_dannerlabs8.png',
      alt: 'Placeholder Image',
      height: 1080,
      width: 1920,
    },
  },
  {
    subheading: 'Slide 2',
    heading: 'Precision Testing for Accurate Results',
    description:
      'BioSync helps by assisting you in making informed decisions about your customers.',
    buttons: [
      { text: 'Get started', href: '#' },
      { text: 'Learn more', href: '/faq' },
    ],
    mainImage: {
      src: 'https://cdn.prod.website-files.com/65f2336b52907db4a54ee400/660ba60148eaa4dd22a41b4b_Header_Image_of_Adult_Female_Medical_Professional.png',
      alt: 'Placeholder Image',
      height: 1080,
      width: 1920,
    },
  },
  {
    subheading: 'Slide 3',
    heading: 'Slide 3 Heading',
    description:
      'BioSync helps by assisting you in making informed decisions about your customers.',
    buttons: [
      { text: 'Get started', href: '#' },
      { text: 'Learn more', href: '/faq' },
    ],
    mainImage: {
      src: 'https://cdn.prod.website-files.com/65f2336b52907db4a54ee400/660ba60148eaa4dd22a41b4b_Header_Image_of_Adult_Female_Medical_Professional.png',
      alt: 'Placeholder Image',
      height: 1080,
      width: 1920,
    },
  },
]

function HeroImage({ slideImage, ...props }) {
  return (
    <motion.div
      className="size-full"
      initial={{ scale: 1.05 }}
      animate={{ scale: 1 }}
      transition={{ duration: 4.5, ease: 'easeOut' }}
      {...props}
    >
      <Image
        src={slideImage.src}
        className="z-30 size-full object-cover opacity-60"
        alt="Placeholder Image"
        height={slideImage.height}
        width={slideImage.width}
      />
    </motion.div>
  )
}

export function HeroCarousel() {
  let [index, setIndex] = useState(0)
  let x = index * -100
  let xSpring = useSpring(x, { stiffness: 300, damping: 30 })
  let xPercentage = useMotionTemplate`${xSpring}%`

  useEffect(() => {
    xSpring.set(x)
  }, [x, xSpring])

  useEffect(() => {
    function handleKeyPress(e) {
      if (e.key === 'ArrowLeft') {
        if (index > 0) {
          setIndex(index - 1)
        }
      } else if (e.key === 'ArrowRight') {
        if (index < heroSlides.length - 1) {
          setIndex(index + 1)
        }
      }
    }

    document.addEventListener('keydown', handleKeyPress)

    return () => {
      document.removeEventListener('keydown', handleKeyPress)
    }
  }, [index])

  return (
    <MotionConfig transition={{ type: 'spring', bounce: 0 }}>
      <div className="relative flex h-full flex-col justify-between">
        <div className="relative overflow-hidden">
          <motion.div style={{ x: xPercentage }} className="flex h-full">
            {heroSlides.map((slide, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 1 }}
                animate={{
                  opacity: i === index ? 1 : 0,
                  transition: {
                    opacity: { duration: 0.5 },
                  },
                }}
                className="relative flex h-full w-full flex-shrink-0 items-center object-cover"
              >
                <Container className="w-full pb-24 pt-16 sm:pb-32 sm:pt-24 md:pb-28 md:pt-36">
                  <FadeIn className="relative z-20">
                    <h1 className="font-display mb-10 max-w-xl text-3xl font-medium tracking-tight text-white md:text-7xl">
                      {slide.heading}
                    </h1>
                    <p className="mb-16 max-w-lg text-xl font-medium text-blue-200 sm:text-2xl">
                      {slide.description}
                    </p>
                    <div className="flex flex-col gap-x-6 gap-y-4 sm:flex-row">
                      <Button href="#">Get started</Button>
                      <Button variant="secondary" href="/faq">
                        Learn more
                      </Button>
                    </div>
                  </FadeIn>
                </Container>

                <motion.div className="absolute inset-0 -z-10 overflow-hidden">
                  <motion.img
                    key={slide.mainImage.src}
                    src={slide.mainImage.src}
                    initial={{ scale: 1.15 }}
                    animate={{ scale: i === index ? 1 : 1.15 }}
                    transition={{ duration: 2.5 }}
                    className="size-full object-cover"
                  />
                </motion.div>
                <HeroGradient className="absolute inset-0 z-10 size-full" />
              </motion.div>
            ))}
          </motion.div>
          <AnimatePresence initial={false}>
            {index > 0 && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0, pointerEvents: 'none' }}
                whileHover={{ opacity: 1 }}
                className="absolute left-2 top-1/2 z-20 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white"
                onClick={() => setIndex(index - 1)}
              >
                <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
              </motion.button>
            )}
          </AnimatePresence>
          <AnimatePresence initial={false}>
            {index + 1 < heroSlides.length && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                exit={{ opacity: 0, pointerEvents: 'none' }}
                whileHover={{ opacity: 1 }}
                className="absolute right-2 top-1/2 z-20 -mt-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/80"
                onClick={() => setIndex(index + 1)}
              >
                <ChevronRightIcon className="h-5 w-5 text-gray-500" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  )
}
