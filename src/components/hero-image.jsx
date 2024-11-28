'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export function HeroImage() {
  return (
    <motion.div
      className="size-full"
      initial={{ scale: 1.05 }}
      animate={{ scale: 1 }}
      transition={{ duration: 4.5, ease: 'easeOut' }}
    >
      <Image
        src="https://cdn.prod.website-files.com/65f2336b52907db4a54ee400/65f3d49b0d6285bff9ec1684_dannerlabs8.png"
        className="z-30 size-full object-cover opacity-60"
        alt="Placeholder Image"
        height={1080}
        width={1920}
      />
    </motion.div>
  )
}
