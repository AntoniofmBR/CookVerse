import { Header } from '../components/header';
import { TipCard } from '../components/tipCard';

import tips from '../data/tips.json'

export function KitchenTips () {
  return (
    <main className='min-h-screen w-full flex flex-col align-center bg-blues-blue_500' >
      <Header />

      <h1 className='lg:text-6xl md:text-5xl sm:text-4xl font-extrabold text-whites-white_200 mt-10 text-center' >
        Confira as nossas melhores práticas na cozinha
      </h1>

      <h3 className='lg:text-2xl md:text-xl sm:text-base font-semibold text-whites-white_200 mt-7 text-center' >
        Descubra truques que facilitam o seu dia a dia na cozinha
      </h3>

      <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-7 self-center w-full pr-20 pl-20 mt-10' >
          { tips.tips.map((tip) => {
            return (
              <TipCard
                id={ tip.id }
                key={ tip.id }
                title={ tip.title }
                summary={ tip.summary }
                url={ tip.url }
              />
            )
          }) }
      </div>
    </main>
  )
}