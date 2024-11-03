import { Header } from '../components/header';

import notFoundIllustration from '../assets/png/not_found.png'
import { Button } from '../components/button';
import { useNavigate } from 'react-router-dom';

export function NotFoundPage () {
  const navigate = useNavigate()

  function handleBackToHome() {
    navigate('/')
  }

  function handleClickSupportButton() {
    window.location.href = 'mailto:suporte@cookverse.com?subject=Interessado em Contato&body=Olá, gostaria de entrar em contato.'
  }

  return (
    <main className='flex flex-col min-h-screen bg-blues-blue_500 align-center' >
      <Header />

      <main className='flex lg:flex-row md:flex-row sm:flex-col justify-center w-full mt-20 gap-12' >
        <section className='lg:w-1/2 md:w-1/2 sm:w-full flex flex-col gap-7' >
          <h1 className='lg:text-6xl md:text-5xl sm:text-6xl font-bold text-blues-blue_700 w-full' >
            ERROR 404
          </h1>

          <p className='lg:text-2xl md:text-xl sm:text-base text-whites-white_200' >
            Parece que a página que você está tentando acessar não existe
          </p>

          <p className='lg:text-2xl md:text-xl sm:text-base text-whites-white_200' >
            Você pode tentar entrar em contato com o nosso
            <a
              className='text-blues-blue_900 ml-1 cursor-pointer hover:underline'
              onClick={ handleClickSupportButton }
            >
              suporte
            </a> ou voltar para a página inicial
          </p>

          <Button
            title='Voltar para Home'
            className='lg:w-2/6 md:w-2/4 sm:w-full;'
            onClick={ handleBackToHome }
          />
        </section>

        <section className='w-auto flex justify-center items-center' >
          <img
            src={ notFoundIllustration }
            alt="illustration"
            className='lg:h-96 md:h-80 sm:h-72 w-auto'
          />
        </section>
      </main>
    </main>
  )
}