import React from 'react'
import HeroSection from './Page/Hero'
import Skills from './Page/skills'
import Categories from './Page/categories'
import Showcase from './Page/showcase'
import Certification from './Page/certification'
import Testimonial from './Page/Testimonial'
import Experience from './Page/experience'
import Footer from './Page/footer'
import Navigator from './Page/Navigator'
import background from './assets/background.png'


function Portfolio() {
  return (
    <div className='relative flex flex-col mx-4 md:mx-12 items-center font-leuleAfa'>
      <img src={background} alt="back" className='absolute top-0 -z-10' />
      <Navigator/>
      <HeroSection/>
      <Skills/>

      <Categories/>
      <Showcase/>
      <Experience/>
      <Certification/>
      <Testimonial/>
      <Footer/>
      <img src={background} alt="back" className='absolute rotate-180 w-2/3 mx-auto bottom-0 -z-10' />
    </div>
  )
}

export default Portfolio