import React from 'react'
import Marquee from './Marquee'

export default function About() {
  return (
  <div id="about" className="w-full lg:min-h-screen bg-mainBg flex flex-col items-center px-6 sm:px-6 md:px-10 pt-22 pb-14 scroll-mt-16">
      <div className="flex items-center gap-6 sm:gap-6 w-full max-w-5xl mb-8">
        <h1 className="font-cormorant font-semibold text-3xl sm:text-4xl text-primaryText whitespace-nowrap">
          <span className="text-[#A8B7C9] mr-2">01.</span>
          About Me
        </h1>

        <div className="h-px w-full bg-primaryText/20"></div>

      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full max-w-5xl gap-8 lg:gap-20">

        <div className="max-w-2xl text-left space-y-5 font-cormorant text-primaryText text-lg sm:text-[1.3rem] font-medium leading-relaxed sm:leading-[1.75] text-pretty">
          <p>
            I’m Aayushi, a web developer and UI/UX designer from India, and the kind of
            person who notices when something is two pixels off.
          </p>
          <p>
            I’m finishing a B.Tech in computer science, and I like the part of building
            where design and code stop being separate jobs. I love the point where a
            design stops being a picture and starts responding to you.
          </p>
          <p>
            Outside of screens, I play violin and have a lasting soft spot for 
            cats (especially the ones I spot along the way) and anything ocean-themed.
          </p>
        </div>
          <div className="flex flex-row lg:flex-col gap-4 sm:gap-6">
            <a href='/portfolio/resume-public.pdf' className="text-center whitespace-nowrap px-6 sm:px-8 py-3 rounded-full border border-white/30 text-primaryText font-cormorant text-lg sm:text-xl hover:bg-primaryText hover:text-mainBg transition duration-300">
              Resume ↗
            </a>
            <a href='https://github.com/aayushirajesh'className="text-center whitespace-nowrap px-6 sm:px-8 py-3 rounded-full border border-white/30 text-primaryText font-cormorant text-lg sm:text-xl hover:bg-primaryText hover:text-mainBg transition duration-300">
              GitHub ↗
            </a>
          </div>
      </div>

      <div className="w-full mt-16 sm:mt-20">
        <Marquee />
      </div>

    </div>
  )
}