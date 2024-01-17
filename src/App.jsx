import { useState } from 'react'
import './App.css'

import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'
import { Brand, Cta, Navbar } from './component'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <div className='gradient__bg'>
          <Navbar />
          <Header />
        </div>
        <Brand />
        <WhatGPT3 />
        <Features />
        <Possibility />
        <Cta />
        <Blog />
        <Footer />
      </div>
    </>
  )
}

export default App
