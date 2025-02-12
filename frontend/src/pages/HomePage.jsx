import React from 'react'
import HeroSlider from '../components/HeroSlider'
import BentoGrid from '../components/BentoGrid'
import RingSlider from '../components/RingSlider'

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className=''>
        <HeroSlider/>
      </div>

      {/* BentoGrid Section */}
      <div className='bg-orange-50'>
        <div className='w-full flex items-center justify-center h-14 md:h-20  text-primary font-bold text-lg md:text-2xl'>
          <h2>FINE JEWELLERY</h2>
        </div>
        <BentoGrid/>
      </div>

      {/* New in Store Section */}
      <div className='bg-white'>
      <div className='w-full flex items-center justify-center h-14 md:h-20  text-primary font-bold text-lg md:text-2xl '>
          <h2>NEW IN STORE</h2>
        </div>
        <RingSlider/>
      </div>

      {/* Next Section */}
      <div className='h-[50vh] bg-orange-100'>

      </div>
      
    </div>
  )
}

export default HomePage