import { motion } from 'framer-motion'

interface CardProps {
  title: string
  description: string
  src: string
  alt: string
}

export function Card ({ title, description, src, alt }: CardProps) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className='lg:h-96 md:h-80 sm:-h-72 bg-grays-gray_100 rounded-2xl p-7 flex flex-col gap-2 justify-center'
    >
      <img
        src={src}
        alt={alt}
        className='lg:h-24 lg:w-24 md:h-20 md:w-20 sm:h-16 sm:w-16'
      />

      <h1 className='lg:text-2xl md:text-xl sm:text-base font-semibold text-blacks-black_100 ' >
        {title}
      </h1>

      <p className='lg:text-xl md:text-base sm:text-sm text-blacks_black_100 font-regular ' >
        {description}
      </p>
    </motion.div>
  )
}