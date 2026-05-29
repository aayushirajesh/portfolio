import React from 'react'
import Marquee from './Marquee'

export default function About() {
  return (
<   div id="about" className="w-full min-h-screen bg-mainBg flex flex-col items-center px-6 pt-22 pb-14 scroll-mt-15">
      <div className="flex items-center gap-6 w-full max-w-5xl mb-8">
        <h1 className="font-cormorant font-semibold text-5xl text-primaryText whitespace-nowrap">
          <span className="text-[#A8B7C9] mr-2">01.</span>
          About Me
        </h1>

        <div className="h-px w-full bg-primaryText/20"></div>

      </div>
      <div className="flex items-center justify-center w-full max-w-5xl gap-20">

        <div className="max-w-3xl text-left text-[1.15rem]">
          <p className="font-cormorant text-primaryText text-xl leading-loose">
            I'm Aayushi — a frontend developer and UI/UX designer who enjoys building clean, visually thoughtful interfaces.
            <br />
            I'm especially interested in the space where design and code meet, and I care a lot about the small details that shape good interfaces — spacing, typography, interaction, and clarity.
            <br />
            Currently, I'm pursuing a B.Tech in Computer Science while building frontend and desktop applications using React and Electron.
            <br />
            I enjoy learning by building, refining ideas through iteration, and turning rough concepts into polished experiences.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <a href='/src/assets/resume.pdf' className="whitespace-nowrap w-40 px-10 py-3 rounded-full border border-white/30 text-primaryText font-cormorant text-xl hover:bg-primaryText hover:text-mainBg transition duration-300">
            Resume ↗
          </a>
          <a href='https://github.com/aayushirajesh'className="whitespace-nowrap w-40 px-10 py-3 rounded-full border border-white/30 text-primaryText font-cormorant text-xl hover:bg-primaryText hover:text-mainBg transition duration-300">
            GitHub ↗
          </a>
        </div>
      </div>

      <div className="w-full mt-20">
        <Marquee />
      </div>

    </div>
  )
}