import React from 'react'

export default function Navbar() {
  return (
    <div className="w-full px-30 h-22 bg-mainBg text-primaryText flex items-center justify-between fixed top-0 left-0 z-50">
      
      <h1 className="text-5xl italic font-fancy cursor-pointer pt-2">
        <a href="#top">
          AR
        </a>
      </h1>

      {/* Nav Links */}
      <ul className="flex items-center gap-8 text-xl font-cormorant tracking-wide">
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
    </div>
  )
}
