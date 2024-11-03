import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '../components/button';
import { Header } from '../components/header';

import chocolateCake from '../assets/png/chocolate_cake.png'
import { useNavigate } from 'react-router-dom';

export function InitialPage () {
  const navigate = useNavigate()

  function handleNavigateToCategories() {
    navigate('/categories')
  }

  return (
    <nav className='min-h-screen h-screen w-full flex flex-col gap-20' >
        <Header />
        <div className='flex lg:flex-row md:flex-row sm:flex-col items-center justify-center w-full' >

          <section className='text-whites-white_200 w-full flex flex-col gap-12 ml-7' >
            <h1 className='lg:text-6xl md:text-4xl sm:text-4xl font-extrabold leading-tight' >
              Transforme <br/> <strong className='text-blues-blue_900 pr-1' >Ingredientes <br /> Simples</strong> {''}
              em <strong className='text-blues-blue_900' >Pratos Incríveis</strong>
            </h1>

            <Button
              className='lg:w-72 md:w-64 sm:w-full'
              title='Comece a preparar'
              onClick={ handleNavigateToCategories }
              icon={
                <motion.svg
                height={30}
                width={30}
                initial={{ x: 0 }}
                whileHover={{ x: 30 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut", 
                  repeatType: "reverse",
                }}
                >
                  <ArrowRight size={30} />
                </motion.svg>
              }
            />
          </section>

          <section 
            className='flex items-center justify-center w-full mr-10'
          >
            <motion.img 
              src={ chocolateCake }
              alt="Bolo de chocolate"
              className='lg:size-4/6 md:size-3/6 sm:h-96 lg:mt-0 md:mt-0 sm:mt-20'
              whileHover={{ scale: 1.1 }}
            />
          </section>
        </div>
      </nav>
  )
}