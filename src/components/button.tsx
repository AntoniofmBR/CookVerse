import { motion, MotionProps } from "framer-motion"

import { ReactNode } from 'react';

interface ButtonProps extends MotionProps {
  title: string
  icon?: ReactNode
  className?: string
  onClick?: () => void
}

export function Button ({ title, icon, className, onClick, ...props }: ButtonProps) {
  return (
    <motion.button
      className={`flex items-center justify-center mr-7 bg-blues-blue_900 text-whites-white_200 p-3 rounded-full gap-2 ${className}`}
      whileHover={{ scale: 1.10 }}
      onClick={ onClick }
      { ...props }
    >
      <h1 className='lg:text-xl md:text-base sm:text-sm text-whites-white_200 font-semibold ' >
        { title }
      </h1>

      { icon }
    </motion.button>
  )
}