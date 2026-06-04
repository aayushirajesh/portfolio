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

        <div className="max-w-3xl text-left lg:text-left ">
          <p className="font-cormorant text-primaryText text-lg sm:text-xl leading-loose sm:leading-loose">
            I'm Aayushi — a frontend developer and UI/UX designer who enjoys building clean, visually thoughtful interfaces.
            <br /> 
            I'm especially interested in the space where design and code meet, and I care a lot about the small details that shape good interfaces — spacing, typography, interaction, and clarity.
            <br />
            Currently, I'm pursuing a B.Tech in Computer Science while building frontend and desktop applications using React and Electron.
            <br />
            I enjoy learning by building, refining ideas through iteration, and turning rough concepts into polished experiences.
          </p>
        </div>

        <div className="flex flex-row lg:flex-col gap-4 sm:gap-6">
          <a href='/portfolio/resume.pdf' className="text-center whitespace-nowrap px-6 sm:px-8 py-3 rounded-full border border-white/30 text-primaryText font-cormorant text-lg sm:text-xl hover:bg-primaryText hover:text-mainBg transition duration-300">
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