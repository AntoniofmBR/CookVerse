import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

import { Header } from '../components/header';
import { NotFoundPage } from './notFound';

import breakfastRevenues from '../data/revenues/breakfastRevenues.json'
import lunchRevenues from '../data/revenues/lunchRevenues.json'
import dinnerRevenues from '../data/revenues/dinnerRevenues.json'
import dessertRevenues from '../data/revenues/dessertRevenues.json'
import veganRevenues from '../data/revenues/veganRevenues.json'
import drinksRevenues from '../data/revenues/drinksRevenues.json'

export function RevenuePage () {
  const location = useLocation()
  const navigate = useNavigate()

  const pathParts = location.pathname.split('/')
  const category = pathParts[2]
  const id = pathParts[3]


  console.log(`location = ${location}`)
  console.log(`pathParts = ${pathParts}`)
  console.log(`categoria = ${category}`)
  console.log(`id = ${id}`)

  let revenues
  let revenue

  switch (category) {
    case 'breakfast':
      revenues = breakfastRevenues
      revenue = revenues.breakfastRevenues.find((item) => item.id === parseInt(id))
    break;

    case 'lunch':
      revenues = lunchRevenues;
      revenue = revenues.lunchRevenues.find((item) => item.id === parseInt(id))
      break;
    
    case 'dinner':
      revenues = dinnerRevenues
      revenue = revenues.dinnerRevenues.find((item) => item.id === parseInt(id))
      break;
    
    case 'dessert':
      revenues = dessertRevenues
      revenue = revenues.dessertRevenues.find((item) => item.id === parseInt(id))
      break;
    
    case 'vegan':
      revenues = veganRevenues
      revenue = revenues.veganRevenues.find((item) => item.id === parseInt(id))
      break;
    
    case 'drinks':
      revenues = drinksRevenues
      revenue = revenues.drinksRevenues.find((item) => item.id === parseInt(id))
      break;
    
    default:
      return <NotFoundPage />;
  }


  function handleBackToCategoriesPage() {
    navigate(`/categories/${category}`)
  }

  return (
    <main className='min-h-screen bg-blues-blue_500 flex flex-col items-center'>
      <Header />

      <div className='flex w-full justify-between items-center mt-10'>
        <motion.button
          whileHover={{ scale: 1.07 }}
          onClick={handleBackToCategoriesPage}
          className='bg-whites-white_200 rounded-full p-2 shadow-md ml-2'
        >
          <ArrowLeft className='text-blues-blue_500' size={42} />
        </motion.button>

        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl font-extrabold text-whites-white_200 text-center'>
          {revenue!.title}
        </h1>

        <div />
      </div>

      <motion.img
        src={revenue!.url}
        alt="Imagem da receita"
        className='h-72 w-auto mt-7 rounded-lg shadow-lg'
        whileHover={{ scale: 1.07 }}
      />

      <h3 className='text-xl text-whites-white_200 mt-2 text-center'>
        {revenue!.description}
      </h3>

      <section className='flex flex-col text-whites-white_200 bg-blues-blue_400 w-full max-w-2xl mt-12 p-5 bg-whites-white_300 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold mb-2'>
          Ingredientes
        </h1>

        <ul className='text-xl text-whites-white_200'>
          {revenue!.ingredients.map((ingredient, index) => (
            <li key={index} className='mb-1'>
              • {ingredient}
            </li>
          ))}
        </ul>
      </section>

      <div className='w-full max-w-2xl mt-12 mb-12 p-5 bg-blues-blue_400 text-whites-white_200 rounded-lg shadow-lg'>
        <h1 className='text-3xl font-bold mb-2'>
          Modo de Preparo
        </h1>
        <p className='text-xl text-whites-white_200'>
          {revenue!.steps_to_prepare}
        </p>
      </div>
    </main>
  )
}