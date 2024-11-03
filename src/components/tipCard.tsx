import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface TipCardProps {
  id: number
  title: string
  summary: string
  url: string
}

export function TipCard ({ id, title, summary, url }: TipCardProps) {
  const navigate = useNavigate()

  function handleNavigateToTipPage(id: number) {
    navigate(`/kitchen-tips/${id}`)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      className='lg:h-96 lg:w-10/12 md:h-80 md:w-9/12 sm:h-80 sm:w-9/12 flex flex-col gap-2 align-center bg-gradient-to-r from-white to-grays-gray_300 p-8 rounded-2xl shadow-blacks-black_100 shadow-md'
      onClick={ () => handleNavigateToTipPage(id) }
    >

      <h1 className='lg:text-2xl md:text-xl sm:text-xl font-semibold text-blacks-black_100 text-center' >
        { title }
      </h1>

      <p className='lg:text-base md:text-xs sm:text-base font-regular text-blacks-black_100 text-center' >
        { summary }
      </p>

      <img
        src={ url }
        alt="icon"
        className='lg:h-44 lg:w-48 md:h-40 md:w-36 sm:h-30 sm:w-32 self-center'
      />
    </motion.div>
  )
}