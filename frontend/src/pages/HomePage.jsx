import React from 'react'
import HeroSlider from '../components/HeroSlider'
import BentoGrid from '../components/BentoGrid'
import RingSlider from '../components/RingSlider'
import { Sparkles } from 'lucide-react'
import HowItWorks from '../components/HowItWorks'

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <div className='mt-32 md:mt-36' >
        <HeroSlider/>
      </div>

      {/* BentoGrid Section */}
      <div className='bg-orange-50 font-serif'>
        <div className='w-full flex items-center justify-center pt-4 h-14 md:h-20  text-primary font-bold text-base md:text-2xl'>
          <div className='flex items-center gap-4'>
            <Sparkles className='text-neutral size-4 md:size-6'/>
             <h2 className=''>FINE JEWELLERY</h2>
            <Sparkles className='text-neutral size-4 md:size-6'/>
          </div>
        </div>
        <BentoGrid/>
      </div>

      {/* New in Store Section */}
      <div className='bg-white py-2 md:py-4 overflow-hidden'>
      <div className='w-full flex items-center justify-center h-14 md:h-20  text-primary font-bold text-base md:text-2xl '>
      <div className='flex items-center gap-4'>
            <Sparkles className='text-neutral size-4 md:size-6'/>
             <h2 className='font-serif'>NEW IN TRENDS</h2>
            <Sparkles className='text-neutral size-4 md:size-6'/>
          </div>
      </div>
        <RingSlider/>
      </div>

      {/* How It Works Section */}
      <div className=' bg-light'>
      <div className='w-full flex items-center justify-center h-14 md:h-20  text-secondary font-bold text-base md:text-2xl '>
      <div className='flex items-center gap-4'>
            <Sparkles className='text-neutral size-4 md:size-6'/>
             <h2 className='font-serif'>HOW IT WORKS</h2>
            <Sparkles className='text-neutral size-4 md:size-6'/>
          </div>
      </div>
        <HowItWorks/>
      </div>
      
    </div>
  )
}

export default HomePage