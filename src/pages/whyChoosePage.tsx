import { Card } from '../components/card'

import revenue from '../assets/svg/revenue.svg'
import chef from '../assets/svg/chef.svg'
import smileFace from '../assets/svg/smile.svg'

const cards = [
 {
  title: 'Variedade de receitas',
  description: 'Explore uma vasta seleção de receitas, desde pratos tradicionais até criações inovadoras para todos os gostos e dietas',
  src: revenue,
  alt: 'Revenue icon'
 },
 {
  title: 'Receitas testadas',
  description: 'Todas as receitas são cuidadosamente testadas para garantir que o resultado final seja sempre delicioso',
  src: chef,
  alt: 'Chef icon'
 },
 {
  title: 'Inspiração Diária',
  description: 'Atualizações frequentes com novas receitas, garantindo que você sempre tenha algo diferente e delicioso para experimentar',
  src: smileFace,
  alt: 'Smile icon'
 }
]

export function WhyChoosePage () {
  return (
    <div className='min-h-screen w-full bg-blues-blue_900 flex flex-col items-center  gap-20 p-7' >
      <h1 className='lg:text-5xl md:text-4xl sm:text-3xl font-bold text-whites-white_200 mt-20' >
        Porque escolher o CookVerse?
      </h1>

      <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-7 h-auto' >
        { cards.map((card) => {
          return (
            <Card
            title={card.title}
            description={card.description}
            src={card.src}
            alt={card.alt}
          />
          )
        }) }
      </div>
    </div>
  )
}