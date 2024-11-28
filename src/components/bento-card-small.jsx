'use client'

import { clsx } from 'clsx'
import { motion } from 'framer-motion'
import { Subheading } from './text'
import { FadeIn } from './fadein'

export function BentoCardSmall({
  dark = false,
  className = '',
  eyebrow,
  title,
  description,
  graphic,
  fade = [],
  smallerGraphic = false,
}) {
  return (
    <FadeIn
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        'group flex gap-x-4 overflow-hidden rounded-lg p-8',
        'bg-white shadow-sm ring-1 ring-black/5',
        'data-[dark]:bg-gray-800 data-[dark]:ring-white/15',
        className,
      )}
    >
      {graphic && (
        <div className="relative">
          {graphic}
          {fade.includes('top') && (
            <div className="absolute inset-0 bg-gradient-to-b from-white to-50% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%]" />
          )}
          {fade.includes('bottom') && (
            <div className="absolute inset-0 bg-gradient-to-t from-white to-50% group-data-[dark]:from-gray-800 group-data-[dark]:from-[-25%]" />
          )}
        </div>
      )}
      <div className="relative">
        <Subheading as="h3" dark={dark}>
          {eyebrow}
        </Subheading>
        <p className="text-2xl font-medium tracking-tight text-gray-950 group-data-[dark]:text-white">
          {title}
        </p>
        <p className="mt-2 max-w-[600px] text-sm/6 text-gray-600 group-data-[dark]:text-gray-400">
          {description}
        </p>
      </div>
    </FadeIn>
  )
}
