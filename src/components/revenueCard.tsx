import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Button } from './button';

interface RevenueCardProps {
  id: number
  title: string
  summary: string
  url: string
  category: string
}

export function RevenueCard ({ id, title, summary, url, category }: RevenueCardProps) {
  const navigate = useNavigate()

  function handleNavigateToRevenuePage(id: number) {
    navigate(`/categories/${category}/${id}`)
  }

  return (
    <motion.div
      whileHover={{ scale: 1.07 }}
      className='lg:h-96 lg:w-10/12 md:h-80 md:w-9/12 sm:h-auto sm:w-full flex flex-col gap-2 justify-between items-center bg-gradient-to-r from-white to-grays-gray_300 rounded-2xl shadow-blacks-black_100 shadow-md'
    >
      <img
        src={ url }
        alt="icon"
        className='lg:h-48 md:h-40 sm:h-30 w-full self-center rounded-t-2xl'
      />

      <h1 className='lg:text-2xl md:text-xl sm:text-xl lg:text-left md:text-left sm:text-center w-full font-semibold text-blues-blue_700 pl-2 pr-2' >
        { title }
      </h1>

      <p className='lg:text-base md:text-xs sm:text-base lg:text-left md:text-left sm:text-center font-regular text-blues-blue_700 pl-2 pr-2' >
        { summary }
      </p>

      <Button
        title='Preparar'
        className='bg-blues-blue_700 w-3/4 lg:self-center md:self-center sm:self-end mb-3'
        onClick={ () => handleNavigateToRevenuePage(id) }
      />
    </motion.div>
  )
}