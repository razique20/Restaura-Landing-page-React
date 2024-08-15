import React from 'react'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
// import "./Index.css"

const App = () => {
  return (
    <main className='overflow-y-hidden text-neutral-200 antialiased'>
      <HeroSection/>
      <Navbar/>
    </main>
  )
}

export default App