import omelet from '../assets/png/omelet.png'
import pasta from '../assets/png/pasta.png'
import soup from '../assets/png/soup.png'

import { BestRevenueCard } from './bestRevenueCard'
import { Footer } from './footer'


const bestsRevenues = [
 {
  title: 'Omelete Clássica',
  src: omelet,
  alt: 'Omelet image'
 },
 {
  title: 'Espaguete',
  src: pasta,
  alt: 'Pasta image'
 },
 {
  title: 'Sopa de legumes',
  src: soup,
  alt: 'Soup image'
 }
]

export function BestsRevenues () {
  return (
    <div className='min-h-screen flex flex-col gap-20' >
      <div className='w-full bg-blues-blue_500 flex flex-col gap-20 p-7' >
      <h1 className='lg:text-5xl md:text-4xl sm:text-3xl font-bold text-whites-white_200 mt-20 pl-7' >
        Confira as nossas melhores receitas
      </h1>

      <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-1 gap-3' >
        { bestsRevenues.map((revenue) => {
          return (
            <BestRevenueCard
            title={revenue.title}
            src={revenue.src}
            alt={revenue.alt}
          />
          )
        }) }
      </div>

      </div>
      <Footer />
    </div>
  )
}