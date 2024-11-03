import { motion } from 'framer-motion'

interface BestRevenueCardProps {
  title: string
  src: string
  alt: string
}

export function BestRevenueCard ({ title, src, alt }: BestRevenueCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className='lg:h-96 md:h-80 sm:-h-72 bg-transparent rounded-2xl p-7 flex flex-col gap-2 items-center justify-center'
    >
      <img
        src={src}
        alt={alt}
        className='lg:h-96 lg:w-96 md:h-80 md:w-80 sm:h-72 sm:w-72'
      />

      <h1 className='text-2xl font-semibold text-whites-white_200 ' >
        {title}
      </h1>

    </motion.div>
  )
}