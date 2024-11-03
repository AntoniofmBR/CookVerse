import { useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

import { Header } from '../components/header';
import { NotFoundPage } from './notFound';

import tips from '../data/tips.json'

export function TipPage () {
  const { id } = useParams()
  const tip = tips.tips.find(tip => tip.id === parseInt(id!.toString()));
  const navigate = useNavigate()

  if (!tip) {
    return <NotFoundPage />
  }

  function handleBackToKitchenTipsPage() {
    navigate('/kitchen-tips')
  }

  return (
    <main className='min-h-screen bg-blues-blue_500 flex flex-col items-center' >
      <Header />

      <div className='flex w-full justify-between items-center mt-10' >
        <motion.button
          whileHover={{ scale: 1.07 }}
          onClick={ handleBackToKitchenTipsPage }
        >
          <ArrowLeft className='text-whites-white_200' size={42} />
        </motion.button>

        <h1 className='lg:text-5xl md:text-4xl sm:text-3xl font-extrabold text-whites-white_200 text-center' >
          { tip.title }
        </h1>

        <div />
      </div>

     <p className='text-2xl text-whites-white_200 font-regular w-3/4 mt-12' >
        { tip.content }
     </p>
    </main>
  )
}