import { WhyChoosePage } from './whyChoosePage';
import { InitialPage } from './initialPage';
import { BestsRevenues } from '../components/bestsRevenues';

export function Homepage () {
  return (
    <div className='flex flex-col bg-blues-blue_500 min-h-screen w-full' >
      <InitialPage />
      <WhyChoosePage />
      <BestsRevenues />
    </div>
  )
}