import React from 'react'
import pomodoroImg from '../assets/pomodoro.png'
import lifePilotImg from '../assets/lifepilot.png'
import dinoImg from '../assets/dino.png'
import memorypalace from '../assets/memorypalace.png'

export default function Projects() {
  return (
    <div id='projects' className='w-full bg-mainBg flex flex-col items-center px-5 sm:px-6 md:px-10 pt-4 pb-14 sm:pb-20 scroll-mt-23'>
      <div className="flex items-center gap-3 sm:gap-6 w-full max-w-5xl mb-10">
        <h1 className="font-cormorant font-semibold text-3xl sm:text-4xl  text-primaryText whitespace-nowrap">
          <span className="text-[#A8B7C9] mr-2">03.</span>
          Some Things I’ve Built
        </h1>
        <div className="h-px w-full bg-primaryText/20"></div>
      </div>
      <div className='w-full max-w-6xl flex flex-col gap-15 sm:gap-20'>

        {/* Project 1 */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 pt-1 sm:pt-8 items-center text-lg w-full text-primaryText'>
          <div className='w-full aspect-4/3 overflow-hidden rounded-xl'>
            <img src={memorypalace} alt="memory-palace" className='w-full h-full object-contain' />
          </div>
          <div>
            <h2 className="font-cormorant text-2xl sm:text-3xl font-medium tracking-wide text-primaryText mb-6">
              Memory Palace
            </h2>
            <p className='font-cormorant text-pretty text-base sm:text-lg leading-relaxed'>
              A journaling website inspired by the idea that memories should feel discovered rather than stored.
              <br />
              Instead of organizing entries into lists or timelines, it transforms personal memories into floating gates drifting through an animated memory wall.
              <br />
              The project explores how animation, atmosphere, and thoughtful user experience can create a more meaningful way to revisit personal memories.
            </p>
            <br />
            <div className="flex flex-wrap items-center gap-4">
              <a href="https://github.com/aayushirajesh/memory-palace" target="_blank"
                className="px-6 sm:px-10 py-3 rounded-full border border-white/30 text-primaryText font-cormorant text-lg sm:text-xl hover:bg-primaryText hover:text-mainBg transition duration-300 text-center">
                Github ↗
              </a>
              <a href="https://memorypalaceapp.vercel.app/" target="_blank"
                className="px-6 sm:px-10 py-3 rounded-full border border-white/30 text-primaryText font-cormorant text-lg sm:text-xl hover:bg-primaryText hover:text-mainBg transition duration-300 text-center">
                Live Demo ↗
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 pt-1 sm:pt-8 items-center text-lg w-full text-primaryText'>
          <div className='w-full aspect-4/3 overflow-hidden rounded-xl'>
            <img src={lifePilotImg} alt="LifePilot" className='w-full h-full object-contain'/>
          </div>
          <div>
            <h2 className="font-cormorant text-2xl sm:text-3xl font-medium tracking-wide text-primaryText mb-6">
              LifePilot
            </h2>
            <p className='font-cormorant text-pretty text-base sm:text-lg leading-relaxed'>
              An AI-powered productivity assistant that transforms goals into structured task plans and syncs them directly to Notion.
              <br />
              Built with a focus on simplicity and usability, the app generates realistic schedules with categories, priorities, and deadlines while still allowing users to review and edit tasks before saving.
              <br />
              The project explores the intersection of AI, automation, and thoughtful user experience to make planning feel more organized and less overwhelming.
            </p>
            <br />
            <a href="https://github.com/aayushirajesh/LifePilot" target="_blank"
              className="px-6 sm:px-10 py-3 rounded-full border border-white/30 text-primaryText font-cormorant text-lg sm:text-xl hover:bg-primaryText hover:text-mainBg transition duration-300 text-center">
              Github ↗
            </a>
          </div>
        </div>

        {/* Project 3 */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 pt-1 sm:pt-8 items-center text-lg w-full text-primaryText'>
          <div className='w-full aspect-4/3 overflow-hidden rounded-xl'>
            <img src={pomodoroImg} alt="pomodoro-with-miu" className='w-full h-full object-contain' />
          </div>
          <div>
            <h2 className="font-cormorant text-2xl sm:text-3xl font-medium tracking-wide text-primaryText mb-6">
              Pomodoro With Miu
            </h2>
            <p className='font-cormorant text-pretty text-base sm:text-lg leading-relaxed'>
              Pomodoro with Miu is a small cozy desktop productivity app built using Electron, designed to make focus sessions feel more calm and enjoyable through a playful cat-themed interface.
              <br />
              The app includes work and break timers with a simple, distraction-free UI focused on comfort and usability.
              <br />
              I'm planning to develop the project and add more features, interactions, and quality-of-life improvements over time.
            </p>
            <br />
            <div className="flex flex-wrap items-center gap-4">
              <a href="https://github.com/aayushirajesh/pomodoro-with-miu" target="_blank"
                className="px-6 sm:px-10 py-3 rounded-full border border-white/30 text-primaryText font-cormorant text-lg sm:text-xl hover:bg-primaryText hover:text-mainBg transition duration-300 text-center">
                Github ↗
              </a>
              <a href="https://www.figma.com/community/file/1577001124513303240/pomodoro-with-miu-pomodoro-timer" target="_blank"
                className="px-6 sm:px-10 py-3 rounded-full border border-white/30 text-primaryText font-cormorant text-lg sm:text-xl hover:bg-primaryText hover:text-mainBg transition duration-300 text-center">
                Figma ↗
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 pt-1 sm:pt-8 items-center text-lg w-full text-primaryText'>
          <div className='w-full aspect-4/3 overflow-hidden rounded-xl'>
            <img src={dinoImg} alt="Dino Runner — Cherry Blossom Edition" className='w-full h-full object-contain'/>
          </div>
          <div>
            <h2 className="font-cormorant text-2xl sm:text-3xl font-medium tracking-wide text-primaryText mb-6">
              Dino Runner — Cherry Blossom Edition
            </h2>
            <p className='font-cormorant text-pretty text-base sm:text-lg leading-relaxed'>
              A reimagined version of the classic Dino Runner game built with Python, featuring a soft cherry blossom inspired aesthetic, custom visuals, and a minimal pixel-art style interface.
              <br />
              The project focuses on creating a playful and visually cohesive experience while experimenting with game interactions and themed UI elements.
            </p>
            <br />
            <a href="https://github.com/aayushirajesh/dinoRunner-cherryBlossomEdition" target="_blank"
              className="px-6 sm:px-10 py-3 rounded-full border border-white/30 text-primaryText font-cormorant text-lg sm:text-xl hover:bg-primaryText hover:text-mainBg transition duration-300 text-center">
              Github ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}