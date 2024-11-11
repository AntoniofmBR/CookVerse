import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import { Homepage } from './pages/homepage';
import { Categories } from './pages/categories';
import { AboutUsPage } from './pages/aboutUs';
import { KitchenTips } from './pages/kitchenTips';

import { BreakfastPage } from './pages/breakfastPage';
import { LunchPage } from './pages/lunchPage';
import { DinnerPage } from './pages/dinnerPage';
import { DessertPage } from './pages/dessertPage';
import { VeganPage } from './pages/veganPage';
import { DrinksPage } from './pages/drinksPage';


import { RevenuePage } from './pages/revenuePage';
import { TipPage } from './pages/tipPage';

import { NotFoundPage } from './pages/notFound';

export default function App() {
  return (
    <div className='app-container' >
      <Router>
        <Routes>
          <Route path="/" element={ <Homepage/> } />
          <Route path="*" element={<NotFoundPage />} />

          <Route path="/categories" element={ <Categories /> } />
          <Route path="/about-us" element={ <AboutUsPage /> } />

          <Route path="/kitchen-tips" element={ <KitchenTips /> } />
          <Route path="/kitchen-tips/:id" element={ <TipPage /> } />

          <Route path="/categories/breakfast" element={ <BreakfastPage /> } />
          <Route path="/categories/breakfast/:id" element={ <RevenuePage /> } />

          <Route path="/categories/lunch" element={ <LunchPage /> } />
          <Route path="/categories/lunch/:id" element={ <RevenuePage /> } />

          <Route path="/categories/dinner" element={ <DinnerPage /> } />
          <Route path="/categories/dinner/:id" element={ <RevenuePage /> } />

          <Route path="/categories/dessert" element={ <DessertPage /> } />
          <Route path="/categories/dessert/:id" element={ <RevenuePage /> } />

          <Route path="/categories/vegan" element={ <VeganPage /> } />
          <Route path="/categories/vegan/:id" element={ <RevenuePage /> } />

          <Route path="/categories/drinks" element={ <DrinksPage /> } />
          <Route path="/categories/drinks/:id" element={ <RevenuePage /> } />
        </Routes>
      </Router>
    </div>
  )
}

