import { motion } from 'framer-motion'
import logo from '../assets/svg/logo.svg'

export function Footer () {
  return (
    <header className='flex flex-col w-full justify-between items-center bg-blues-blue_900 h-auto p-3' >
      <motion.img
        whileHover={{ scale: 1.1 }}
        src={logo} 
        alt="Logo"
        className='h-24 p-3 pl-0' 
      />

      <h2 className='text-whites-white_200 font-semibold text-xl' >
        Todos os direitos reservados ©
      </h2>
      <h4 className='text-whites-white_200 font-regular text-sm' >
        Code by Antoniofm
      </h4>
    </header>
  )
}