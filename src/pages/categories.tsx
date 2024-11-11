import { Header } from '../components/header';

import { motion } from 'framer-motion';

import breakfastIcon from '../assets/svg/breakfast_icon.svg'
import lunchIcon from '../assets/svg/lunch_icon.svg'
import dinnerIcon from '../assets/svg/dinner_icon.svg'
import dessertIcon from '../assets/svg/dessert_icon.svg'
import veganIcon from '../assets/svg/vegan_icon.svg'
import drinksIcon from '../assets/svg/drinks_icon.svg'
import { useNavigate } from 'react-router-dom';


export function Categories () {
  const navigate = useNavigate()

  function handleNavigateToBreakfastPage() {
    navigate('/categories/breakfast')
  }

  function handleNavigateToLunchPage() {
    navigate('/categories/lunch')
  }

  function handleNavigateToDinnerPage() {
    navigate('/categories/dinner')
  }

  function handleNavigateToDessertPage() {
    navigate('/categories/dessert')
  }

  function handleNavigateToVeganPage() {
    navigate('/categories/vegan')
  }

  function handleNavigateToDrinksPage() {
    navigate('/categories/drinks')
  }

  return (
    <main className='min-h-screen bg-blues-blue_500 flex flex-col items-center' >
      <Header />

      <h1 className='lg:text-6xl md:text-5xl sm:text-3xl font-extrabold text-whites-white_200 mt-12 text-center' >
        A receita perfeita para qualquer ocasião
      </h1>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 sm:mb-12 mt-20 items-center justify-center w-3/4 gap-7' >
        <motion.button
          className='lg:h-40 md:h-32 sm:h-28 w-auto flex gap-2 items-center p-2 justify-center bg-yellows-yellow_100 rounded-3xl'
          whileHover={{ scale: 1.07 }}
          onClick={ handleNavigateToBreakfastPage }
        >
          <h1 className='lg:text-3xl md:text-2xl sm:text-3xl font-bold text-whites-white_200' >
            Café <br/> da manhã
          </h1>

          <img
            src={ breakfastIcon }
            alt='icon'
            className='lg:h-24 lg:w-24 md:h-20 md:w-20 sm:h-16 sm:w-16'
          />
        </motion.button>

        <motion.button
          className='lg:h-40 md:h-32 sm:h-28 w-auto flex gap-2 items-center p-2 justify-center bg-reds-red_100 rounded-3xl'
          whileHover={{ scale: 1.07 }}
          onClick={ handleNavigateToLunchPage }
        >
          <h1 className='lg:text-3xl md:text-2xl sm:text-3xl font-bold text-whites-white_200' >
            Almoço
          </h1>

          <img
            src={ lunchIcon }
            alt='icon'
            className='lg:h-24 lg:w-24 md:h-20 md:w-20 sm:h-16 sm:w-16'
          />
        </motion.button>

        <motion.button
          className='lg:h-40 md:h-32 sm:h-28 w-auto flex gap-2 items-center p-2 justify-center bg-greens-green_100 rounded-3xl'
          whileHover={{ scale: 1.07 }}
          onClick={ handleNavigateToDinnerPage }
        >
          <h1 className='lg:text-3xl md:text-2xl sm:text-3xl font-bold text-whites-white_200' >
            Janta
          </h1>

          <img
            src={ dinnerIcon }
            alt='icon'
            className='lg:h-24 lg:w-24 md:h-20 md:w-20 sm:h-16 sm:w-16'
          />
        </motion.button>

        <motion.button
          className='lg:h-40 md:h-32 sm:h-28 w-auto flex gap-2 items-center p-2 justify-center bg-blues-blue_200 rounded-3xl'
          whileHover={{ scale: 1.07 }}
          onClick={ handleNavigateToDessertPage }
        >
          <h1 className='lg:text-3xl md:text-2xl sm:text-3xl font-bold text-whites-white_200' >
            Sobremesas
          </h1>

          <img
            src={ dessertIcon }
            alt='icon'
            className='lg:h-24 lg:w-24 md:h-20 md:w-20 sm:h-16 sm:w-16'
          />
        </motion.button>

        <motion.button
          className='lg:h-40 md:h-32 sm:h-28 w-auto flex gap-2 items-center p-2 justify-center bg-purples-purple_100 rounded-3xl'
          whileHover={{ scale: 1.07 }}
          onClick={ handleNavigateToVeganPage }
        >
          <h1 className='lg:text-3xl md:text-2xl sm:text-3xl font-bold text-whites-white_200' >
            Vegano
          </h1>

          <img
            src={ veganIcon }
            alt='icon'
            className='lg:h-24 lg:w-24 md:h-20 md:w-20 sm:h-16 sm:w-16'
          />
        </motion.button>

        <motion.button
          className='lg:h-40 md:h-32 sm:h-28 w-auto flex gap-2 items-center p-2 justify-center bg-oranges-orange_100  rounded-3xl'
          whileHover={{ scale: 1.07 }}
          onClick={ handleNavigateToDrinksPage }
        >
          <h1 className='lg:text-3xl md:text-2xl sm:text-3xl font-bold text-whites-white_200' >
            Bebidas
          </h1>

          <img
            src={ drinksIcon }
            alt='icon'
            className='lg:h-24 lg:w-24 md:h-20 md:w-20 sm:h-16 sm:w-16'
          />
        </motion.button>

      </div>

    </main>
  )
}