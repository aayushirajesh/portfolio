import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY > window.innerHeight * 0.8){
        setShowTopBtn(true)
      } 
      else{
        setShowTopBtn(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      { showTopBtn && (
          <a href="#top" className="fixed bottom-8 right-8 w-16 h-16 rounded-full border border-primaryText/30 flex items-center justify-center
              text-primaryText backdrop-blur-sm hover:bg-primaryText hover:text-mainBg transition-all duration-300 z-50" >
            ↟
          </a> )
      }
    </>
  )
}

export default App
