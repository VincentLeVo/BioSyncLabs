import Image from 'next/image'

import { BentoCard } from '@/components/bento-card'
import { BentoCardSmall } from '@/components/bento-card-small'
import { Button } from '@/components/button'
import { Container } from '@/components/container'
import { FadeIn, FadeInStagger } from '@/components/fadein'
import { FeatureSection } from '@/components/featuresection'
import { Footer } from '@/components/footer'
import { HeroGradient } from '@/components/gradient'
import { HeroImage } from '@/components/hero-image'
import { HeroCarousel } from '@/components/hero'
import { LogoCloud } from '@/components/logo-cloud'
import { Navbar } from '@/components/navbar'
import { Heading, Subheading } from '@/components/text'
import {
  CheckBadgeIcon,
  HeartIcon,
  UserGroupIcon,
  HandRaisedIcon,
} from '@heroicons/react/16/solid'

export const metadata = {
  description:
    'BioSync helps with your health, Perfectly Synced with Precision Diagnostics',
}

function Hero() {
  return (
    <div className="dark relative">
      <Container className="relative h-[110svh] md:h-[60rem]">
        <div className="absolute inset-0 z-0 h-full overflow-hidden">
          <HeroCarousel />
        </div>
        <Navbar className="relative z-50" />
      </Container>
    </div>
  )
}

function BentoSection() {
  return (
    <Container>
      <Subheading>About Us</Subheading>
      <Heading>
        Our mission is to provide accurate and timely testing solutions.
      </Heading>

      <FadeInStagger className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-5 lg:grid-rows-3">
        <BentoCard
          dark
          title="The Lab That You Can Trust"
          description="Welcome to Danner Laboratory, your trusted partner for laboratory testing and outsourcing solutions. We understand the importance of accurate and timely diagnostic testing in healthcare, which is why we are dedicated to providing high-quality services tailored to meet your lab-testing needs."
          graphic={
            <div className="size-full overflow-hidden">
              <img
                className="size-full object-cover object-center"
                alt="Company"
                src="/company/1.jpg"
              />
            </div>
          }
          fade={['bottom']}
          className="max-lg:rounded-t-4xl lg:col-span-3 lg:row-span-3 lg:rounded-l-4xl"
        />
        <BentoCardSmall
          title="Precision in Operations"
          description="Commitment to Excellence: Our operations prioritize quality and precision at every step, ensuring dependable results and satisfied clients."
          fade={['bottom']}
          graphic={
            <div className="size-7 text-blue-500/50">
              <CheckBadgeIcon />
            </div>
          }
          className="justify-items-end lg:col-span-2 lg:rounded-tr-4xl"
        />
        <BentoCardSmall
          title="Dedicated to Quality"
          description="Tailored Services: We deliver high-quality, accurate, and timely diagnostic testing customized to meet specific lab-testing requirements."
          fade={['bottom']}
          graphic={
            <div className="size-7 text-blue-500/50">
              <CheckBadgeIcon />
            </div>
          }
          className="justify-items-end lg:col-span-2"
        />{' '}
        <BentoCardSmall
          title="30+ Years of Experience"
          description="Trusted Legacy: Our dedicated team with over 30 years of experience is equipped to give patients the best lab testing experience."
          fade={['bottom']}
          graphic={
            <div className="size-7 text-blue-500/50">
              <CheckBadgeIcon />
            </div>
          }
          className="justify-items-end lg:col-span-2 lg:rounded-br-4xl"
        />
      </FadeInStagger>
    </Container>
  )
}

function CoreValues() {
  let coreValues = [
    {
      heading: 'Innovation',
      description:
        'We are committed to innovation and continuous improvement in our services.',
      icon: <HeartIcon />,
    },
    {
      heading: 'Integrity',
      description:
        'We are dedicated to providing accurate and reliable testing solutions.',
      icon: <HeartIcon />,
    },
    {
      heading: 'Quality',
      description:
        'We prioritize quality and precision at every step of our operations.',
      icon: <HeartIcon />,
    },
    {
      heading: 'Customer Focus',
      description:
        'We are dedicated to providing high-quality services tailored to meet your lab-testing needs.',
      icon: <HeartIcon />,
    },
    {
      heading: 'Teamwork',
      description:
        'We value teamwork and collaboration to achieve our common goals.',
      icon: <HeartIcon />,
    },
  ]

  return (
    <Container className="bg-neutral-100 py-24">
      <Subheading>Core Values</Subheading>
      <Heading>Our core values are the foundation of our company.</Heading>
      <FadeInStagger className="mt-10 grid grid-cols-1 gap-8 sm:mt-16 lg:grid-cols-3">
        {coreValues.map((coreValue, index) => (
          <FadeIn
            key={index}
            className="flex flex-col justify-center rounded-lg bg-neutral-50 p-6 shadow-md ring-1 ring-black/5"
          >
            <div>
              {coreValue.icon && (
                <div className="mb-6 size-9 text-blue-200">
                  {coreValue.icon}
                </div>
              )}
              <h2 className="mb-4 text-2xl font-medium tracking-tight text-blue-800 group-data-[dark]:text-white">
                {coreValue.heading}
              </h2>
              <p className="max-w-[600px] text-base/6 text-gray-600 group-data-[dark]:text-gray-400">
                {coreValue.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </FadeInStagger>
    </Container>
  )
}

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <main>
        <Container className="mt-10">
          <LogoCloud />
        </Container>
        <div className="bg-gradient-to-b from-transparent from-50% to-gray-100 py-32">
          <FeatureSection />
          <BentoSection />\
        </div>
        <CoreValues />
      </main>
      <Footer />
    </div>
  )
}
