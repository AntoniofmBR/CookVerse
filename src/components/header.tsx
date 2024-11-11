import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom';

import { Button } from './button'
import logo from '../assets/svg/logo.svg'

export function Header () {
  const navigate = useNavigate();

  function handleNavigateToInitialPage () {
    navigate('/');
  };

  function handleNavigateToCategoriesPage () {
    navigate('/categories');
  };

  function handleNavigateToAboutUsPage () {
    navigate('/about-us');
  };

  function handleNavigateToKitchenTipsPage () {
    navigate('/kitchen-tips');
  };

  return (
    <header className='flex w-full justify-between items-center bg-whites-white_200 h-auto p-3' >
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={logo} 
        alt="Logo"
        className='lg:h-28 md:h-20 sm:h-16 p-3 pl-0'
      />

      <div className='lg:text-xl md:text-base sm:text-xs flex items-center justify-evenly font-semibold gap-2 text-blues-blue_900' >
        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={ handleNavigateToInitialPage }
        >
          Inicio
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={ handleNavigateToAboutUsPage }
        >
          Sobre nós
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={ handleNavigateToCategoriesPage }
        >
          Categorias
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.1 }}
          onClick={ handleNavigateToKitchenTipsPage }
        >
          Dicas de cozinha
        </motion.button>
      </div>

      <Button
        title='Preparar'
        className='lg:w-32 md:w-28 sm:w-24'
        onClick={ handleNavigateToCategoriesPage }
      />
    </header>
  )
}