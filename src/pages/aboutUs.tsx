import { motion } from 'framer-motion';

import { Header } from '../components/header';

import illustration from '../assets/png/about_us.png'

export function AboutUsPage () {
  return (
    <main className='min-h-screen bg-blues-blue_500 flex flex-col' >
      <Header />

      <h1 className='lg:text-6xl md:text-5xl sm:text-4xl font-extrabold text-whites-white_200 mt-12 text-center' >
        Sobre nós
      </h1>

      <div className='w-full flex lg:flex-row md:flex-row sm:flex-col justify-center items-center' >
        <section className='lg:w-1/2 md:w-1/2 sm:w-full flex flex-col gap-5 p-5' >
          <p className='lg:text-3xl md:text-2xl sm:text-2xl lg:text-left md:text-left sm:text-center text-whites-white_200 font-base' >
          Acreditamos que a culinária é uma arte que deve ser acessível para  todos, por isso o nosso objetivo é inspirar pessoas a explorarem o universo gastronômico de forma simples e prática. 
          </p>

          <p className='lg:text-3xl md:text-2xl sm:text-2xl lg:text-left md:text-left sm:text-center text-whites-white_200 font-base mt-2' >
          Seja você um iniciante na cozinha ou um chef experiente, aqui você encontrará receitas fáceis, saudáveis e deliciosas, perfeitas para qualquer ocasião.
          </p>
        </section>

        <section className='lg:w-1/2 md:w-1/2 sm:w-full flex items-center justify-center'>
          <motion.img
            src={illustration}
            alt="illustration"
            className='size-8/12'
            whileHover={{ scale: 1.1 }}
          />
        </section>
      </div>
    </main>
  )
}