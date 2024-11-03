import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import { Header } from '../components/header';
import { RevenueCard } from '../components/revenueCard';

import revenues from '../data/revenues/drinksRevenues.json'

export function DrinksPage () {
  const navigate = useNavigate()

  function handleBackToCategoriesPage() {
    navigate('/categories')
  }

  return (
    <main className='min-h-screen bg-blues-blue_500 flex flex-col' >
      <Header />

      <div className='flex w-full justify-between items-center mt-10' >
        <motion.button
          whileHover={{ scale: 1.07 }}
          onClick={ handleBackToCategoriesPage }
          className='bg-whites-white_200 rounded-full p-2 shadow-md ml-2'
        >
          <ArrowLeft className='text-blues-blue_500' size={42} />
        </motion.button>

        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl font-extrabold text-whites-white_200 text-center' >
          Bebidas que elevam o seu dia para um novo nível de sabor
        </h1>

        <div />
      </div>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 self-center w-full pr-20 pl-20 mt-10 mb-10' >
          { revenues.drinksRevenues.map((revenue) => {
            return (
              <RevenueCard
                id={ revenue.id }
                key={ revenue.id }
                title={ revenue.title }
                summary={ revenue.summary }
                url={ revenue.url }
                category={ revenue.category }
              />
            )
          }) }
      </div>
    </main>
  )
}