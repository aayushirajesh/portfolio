import React from 'react'
import linkedinIcon from '../assets/linkedin.svg'
import githubIcon from '../assets/github.svg'
import instagramIcon from '../assets/instagram.svg'
import figmaIcon from '../assets/figma.svg'

export default function Contact() {
  return (
    <div id='contact' className="w-full bg-mainBg text-primaryText px-6 pt-18 pb-24 scroll-mt-23">

      {/* heading */}
      <div className="flex items-center gap-6 w-full max-w-5xl mx-auto mb-20">
        <h1 className="font-cormorant font-semibold text-5xl whitespace-nowrap">
          <span className="text-[#9BA8BC] mr-2">04.</span>
          Say Hi
        </h1>
        <div className="h-px w-full bg-primaryText/20"></div>
      </div>

      {/* content */}
      <div className="w-full max-w-5xl mx-auto flex items-center justify-between gap-24">
        {/* left */}
        <div className="max-w-lg">
          <p className="font-cormorant text-2xl leading-relaxed  text-primaryText">
            If you're looking for someone who cares deeply
            about both design and implementation.
          </p>
          <div className="w-72 h-px bg-primaryText/30 my-8"></div>
          <h2 className="font-fancy text-5xl pb-6 leading-none">
            Let’s Chat
          </h2>
          <a href="mailto:aayushirajesh7@gmail.com" className="px-10 py-3 rounded-full border border-white/30 text-primaryText font-cormorant text-xl
              hover:bg-primaryText hover:text-mainBg transition duration-300 text-center">
            Email Me ↗
          </a>
        </div>

        {/* right */}
        <div className="grid grid-cols-4 gap-1">
          
          <a href="https://www.linkedin.com/in/aayushi-rajesh/" target="_blank" className="px-2 py-3 transition duration-300 hover:scale-110">
            <img className="w-8 h-8 invert" src={linkedinIcon} alt="linkedin" />
          </a>
          <a href="https://www.github.com/aayushirajesh/" target="_blank" className="px-2 py-3 transition duration-300 hover:scale-110">
            <img className="w-8 h-8 invert" src={githubIcon} alt="github" />
          </a>
          <a href="https://instagram.com/aayushirh" target="_blank" className="px-2 py-3 transition duration-300 hover:scale-110">
            <img className="w-8 h-8 invert" src={instagramIcon} alt="instagram" />
          </a>
          <a href="https://www.figma.com/@aayushirajesh" target="_blank" className="px-2 py-3 transition duration-300 hover:scale-110">
            <img className="w-8 h-8 invert" src={figmaIcon} alt="figma" />
          </a>
          
        </div>
      </div>
    </div>
  )
}
