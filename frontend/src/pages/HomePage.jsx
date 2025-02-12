import React from 'react'
import HeroSlider from '../components/HeroSlider'
import BentoGrid from '../components/BentoGrid'

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className=''>
        <HeroSlider/>
      </div>

      <div className=''>
        <div className='w-full flex items-center justify-center h-10 md:h-20  text-primary font-bold text-xl md:text-2xl'>
          <h2>FINE JEWELLERY</h2>
        </div>
        <BentoGrid/>
      </div>
      
    </div>
  )
}

export default HomePage