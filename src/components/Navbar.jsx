import React, { useState, useEffect, useRef } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const toggleRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return

    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(e.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className="w-full px-5 sm:px-6 md:px-10 lg:px-20 h-20 sm:h-22 bg-mainBg text-primaryText flex items-center justify-between fixed top-0 left-0 z-50">
      
      <h1 className="text-4xl sm:text-5xl italic font-fancy cursor-pointer pt-1">
        <a href="#top">
          AR
        </a>
      </h1>

      {/* Desktop Nav */}
      <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-lg lg:text-xl font-cormorant tracking-wide">
        <li className="cursor-pointer hover:text-accent transition duration-300">
          <a href="#about"><span className="text-[#A8B7C9]">01.</span> About</a>
        </li>
        <li className="cursor-pointer hover:text-accent transition duration-300">
          <a href="#skills"><span className="text-[#A8B7C9]">02.</span> Skills</a>
        </li>
        <li className="cursor-pointer hover:text-accent transition duration-300">
          <a href="#projects"><span className="text-[#A8B7C9]">03.</span> Projects</a>
        </li>
        <li className="cursor-pointer hover:text-accent transition duration-300">
          <a href="#contact"><span className="text-[#A8B7C9]">04.</span> Contact</a>
        </li>
      </ul>

      {/* Mobile Nav */}
      <button ref={toggleRef} className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        {
          isOpen
            ? <X size={30} />
            : <Menu size={30} />
        }
      </button>

      {/*Mobile Dropdown*/}
      {
        isOpen && (
          <>
          <div className="fixed top-20 left-0 right-0 bottom-0 bg-black/30 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsOpen(false)}/>
            <div ref={menuRef} className="absolute top-20 left-0 w-full bg-mainBg border-t border-white/10 md:hidden z-50">
              <ul className="flex flex-col items-center text-2xl font-cormorant">

                <li className="w-full border-b border-white/10 last:border-b-0">
                  <a href="#about" className="flex items-center justify-center w-full py-4 hover:bg-white/5 transition" onClick={() => setIsOpen(false)}>
                    <span className="text-[#A8B7C9]">01.</span> About
                  </a>
                </li>

                <li className="w-full border-b border-white/10 last:border-b-0">
                  <a href="#skills" className="flex items-center justify-center w-full py-4 hover:bg-white/5 transition" onClick={() => setIsOpen(false)}>
                    <span className="text-[#A8B7C9]">02.</span> Skills
                  </a>
                </li>

                <li className="w-full border-b border-white/10 last:border-b-0">
                  <a href="#projects" className="flex items-center justify-center w-full py-4 hover:bg-white/5 transition" onClick={() => setIsOpen(false)}>
                    <span className="text-[#A8B7C9]">03.</span> Projects
                  </a>
                </li>

                <li className="w-full border-b border-white/10 last:border-b-0">
                  <a href="#contact" className="flex items-center justify-center w-full py-4 hover:bg-white/5 transition" onClick={() => setIsOpen(false)}>
                    <span className="text-[#A8B7C9]">04.</span> Contact
                  </a>
                </li>

              </ul>

            </div>
          </>
        )
      }
    </div>
  )
}
