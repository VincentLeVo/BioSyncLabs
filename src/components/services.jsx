'use client'

import { image } from '@/sanity/image'
import { getServicesByCategory } from '@/sanity/queries'
import * as Headless from '@headlessui/react'
import { ArrowLongRightIcon } from '@heroicons/react/20/solid'
import { clsx } from 'clsx'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import useMeasure from 'react-use-measure'
import { Button } from './button'
import { Container } from './container'
import { Heading, Subheading } from './text'
import { Link } from '@/components/link'

function ServiceCard({
  title,
  img,
  children,
  bounds,
  scrollX,
  slug,
  ...props
}) {
  let ref = useRef(null)

  return (
    <motion.div
      ref={ref}
      {...props}
      className="relative flex aspect-[9/16] w-72 shrink-0 snap-start scroll-ml-[var(--scroll-padding)] flex-col justify-end overflow-hidden rounded-3xl sm:aspect-[3/4] sm:w-[30rem]"
    >
      <img
        alt=""
        src={img}
        className="absolute inset-x-0 top-0 aspect-square w-full object-cover"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-3xl bg-gradient-to-t from-white from-[47%] to-transparent ring-1 ring-inset ring-gray-950/10 sm:from-[28%] sm:to-[56%]"
      />

      <div className="relative p-8">
        <div className="mt-10 border-b border-slate-200/90 pb-6">
          <Link href={`/services/${slug}`}>
            <span className="absolute inset-0" />
            <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-3xl font-medium text-transparent">
              {title}
            </span>{' '}
          </Link>
        </div>
        <div>
          <p className="relative mt-3 line-clamp-3 text-lg text-gray-500">
            {children}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function Services({ category, title }) {
  const [services, setServices] = useState([])
  let scrollRef = useRef(null)
  let { scrollX } = useScroll({ container: scrollRef })
  let [setReferenceWindowRef, bounds] = useMeasure()
  let [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    async function fetchServices() {
      let servicesData = await getServicesByCategory(category)
      setServices(servicesData)
    }
    fetchServices()
  }, [category])

  useMotionValueEvent(scrollX, 'change', (x) => {
    setActiveIndex(Math.floor(x / scrollRef.current.children[0].clientWidth))
  })

  function scrollTo(index) {
    let gap = 20
    let width = scrollRef.current.children[0].offsetWidth
    scrollRef.current.scrollTo({ left: (width + gap) * index })
  }

  return (
    <div className="overflow-hidden py-24">
      {console.log(services)}
      <Container>
        <div ref={setReferenceWindowRef}>
          <Subheading>{title}</Subheading>
        </div>
      </Container>
      <div
        ref={scrollRef}
        className={clsx([
          'mt-12 flex gap-10 px-[var(--scroll-padding)]',
          '[scrollbar-width:none] [&::-webkit-scrollbar]:hidden',
          'snap-x snap-mandatory overflow-x-auto overscroll-x-contain scroll-smooth',
          '[--scroll-padding:max(theme(spacing.6),calc((100vw-theme(maxWidth.2xl))/2))] lg:[--scroll-padding:max(theme(spacing.8),calc((100vw-theme(maxWidth.7xl))/2))]',
        ])}
      >
        {services.map(({ mainImage, title, excerpt, slug }, servicesIndex) => (
          <ServiceCard
            key={servicesIndex}
            title={title}
            img={image(mainImage).url()}
            bounds={bounds}
            slug={slug}
            scrollX={scrollX}
            onClick={() => scrollTo(servicesIndex)}
          >
            {excerpt}
          </ServiceCard>
        ))}
        <div className="w-[42rem] shrink-0 sm:w-[54rem]" />
      </div>
      <Container className="mt-16">
        <div className="flex justify-end">
          <div className="hidden sm:flex sm:gap-2">
            {services.map(({ name }, servicesIndex) => (
              <Headless.Button
                key={servicesIndex}
                onClick={() => scrollTo(servicesIndex)}
                data-active={activeIndex === servicesIndex ? true : undefined}
                aria-label={`Scroll to testimonial from ${name}`}
                className={clsx(
                  'size-2.5 rounded-full border border-transparent bg-gray-300 transition',
                  'data-[active]:bg-gray-400 data-[hover]:bg-gray-400',
                  'forced-colors:data-[active]:bg-[Highlight] forced-colors:data-[focus]:outline-offset-4',
                )}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  )
}
