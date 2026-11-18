import React from 'react'

export default function Skills() {
  return (
  <div id='skills' className='w-full bg-mainBg flex flex-col items-center px-5 sm:px-6 md:px-10 py-6 pb-16 sm:pb-20 scroll-mt-23'>
      <div className="flex items-center gap-3 sm:gap-6 w-full max-w-5xl mb-10">
        <h1 className="font-cormorant font-semibold text-3xl sm:text-4xl  text-primaryText whitespace-nowrap">
          <span className="text-[#A8B7C9] mr-2">02.</span>
          Tools I Use
        </h1>
        <div className="h-px w-full bg-primaryText/20"></div>
      </div>

      <div id='dev&design' className="w-full max-w-5xl">
        {/* Columns fit their content, so only a little space is left after the longest skill */}
        <div className="w-full sm:w-fit mx-auto grid grid-cols-1 sm:grid-cols-[repeat(2,max-content)] lg:grid-cols-[repeat(3,max-content)] gap-px bg-borderSoft">

            <div className="bg-mainBg pt-8 pb-5 sm:px-8 sm:[&:nth-child(2n+1)]:pl-0 lg:[&:nth-child(2n+1)]:pl-8 
            lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n)]:pr-0 first:pt-0 sm:[&:nth-child(2)]:pt-0 lg:[&:nth-child(3)]:pt-0">
              {/* Category title */}
              <h2 className="font-cormorant font-semibold text-2xl sm:text-[26px] 
              text-[#A8B7C9] mb-5">
                Languages
              </h2>
              {/* Skills list */}
              <ul className="grid gap-2">

                <li className="group relative pl-[22px] text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60 group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Python
                </li>

                <li className="group relative pl-[22px] text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60 group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  JavaScript
                </li>

                <li className="group relative pl-[22px] text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60 group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  C
                </li>

              </ul>
            </div>

            <div className="bg-mainBg pt-8 pb-5 sm:px-8 sm:[&:nth-child(2n+1)]:pl-0
            lg:[&:nth-child(2n+1)]:pl-8 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n)]:pr-0
            first:pt-0 sm:[&:nth-child(2)]:pt-0 lg:[&:nth-child(3)]:pt-0">
              {/* Category title */}
              <h2 className="font-cormorant font-semibold text-2xl sm:text-[26px] 
              text-[#A8B7C9] mb-5">
                Frontend
              </h2>
              {/* Skills list */}
              <ul className="grid gap-2">

                <li className="group relative pl-[22px] text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  React.js
                </li>

                <li className="group relative pl-[22px] text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60 group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Tailwind CSS
                </li>

                <li className="group relative pl-[22px] text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60 group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  HTML5 / CSS3
                </li>

                <li className="group relative pl-[22px] text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60 group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Framer Motion
                </li>

                <li className="group relative pl-[22px] text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryTexttransition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60 group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Electron.js
                </li>

              </ul>
            </div>

            <div className="bg-mainBg pt-8 pb-5 sm:px-8 sm:[&:nth-child(2n+1)]:pl-0
            lg:[&:nth-child(2n+1)]:pl-8 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n)]:pr-0
            first:pt-0 sm:[&:nth-child(2)]:pt-0 lg:[&:nth-child(3)]:pt-0">
              {/* Category title */}
              <h2 className="font-cormorant font-semibold text-2xl sm:text-[26px] 
              text-[#A8B7C9] mb-5">
                Backend & Data
              </h2>
              {/* Skills list */}
              <ul className="grid gap-2">

                <li className="group relative pl-[22px] text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60 group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Django
                </li>

                <li className="group relative pl-[22px] text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60 group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Supabase
                </li>
                
                <li className="group relative pl-[22px] text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60 group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Node.js & Express.js
                </li>

                <li className="group relative pl-[22px] text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60 group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  MongoDB
                </li>

                <li className="group relative pl-[22px] text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60 transition-all duration-300"></span>
                  MySQL
                </li>

                <li className="group relative pl-[22px] text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60 group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  PostgreSQL
                </li>

                <li className="group relative pl-[22px] text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60 group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Groq LLM API
                </li>

              </ul>
            </div>

            <div className="bg-mainBg pt-8 pb-5 sm:px-8 sm:[&:nth-child(2n+1)]:pl-0
            lg:[&:nth-child(2n+1)]:pl-8 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n)]:pr-0
            first:pt-0 sm:[&:nth-child(2)]:pt-0 lg:[&:nth-child(3)]:pt-0">
              {/* Category title */}
              <h2 className="font-cormorant font-semibold text-2xl sm:text-[26px] 
              text-[#A8B7C9] mb-5">
                Design
              </h2>
              {/* Skills list */}
              <ul className="grid gap-2">

                <li className="group relative pl-[22px]  text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText  transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Figma
                </li>

                <li className="group relative pl-[22px]  text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText  transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Framer
                </li>

                <li className="group relative pl-[22px]  text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText  transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Wireframing
                </li>

                <li className="group relative pl-[22px]  text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText  transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Prototyping
                </li>

                <li className="group relative pl-[22px]  text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText  transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  User Flows
                </li>

                <li className="group relative pl-[22px]  text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText  transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Component Design
                </li>

                <li className="group relative pl-[22px]  text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText  transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Adobe Illustrator
                </li>

              </ul>
            </div>

            <div className="bg-mainBg pt-8 pb-5 sm:px-8 sm:[&:nth-child(2n+1)]:pl-0
            lg:[&:nth-child(2n+1)]:pl-8 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n)]:pr-0
            first:pt-0 sm:[&:nth-child(2)]:pt-0 lg:[&:nth-child(3)]:pt-0">
              {/* Category title */}
              <h2 className="font-cormorant font-semibold text-2xl sm:text-[26px] 
              text-[#A8B7C9] mb-5">
                Tools
              </h2>
              {/* Skills list */}
              <ul className="grid gap-2">

                <li className="group relative pl-[22px]  text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText  transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Git & GitHub
                </li>

                <li className="group relative pl-[22px]  text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText  transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  VS Code
                </li>

                <li className="group relative pl-[22px]  text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText  transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Docker
                </li>

                <li className="group relative pl-[22px]  text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText  transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Vercel
                </li>

                <li className="group relative pl-[22px]  text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText  transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Jupyter Notebook
                </li>

              </ul>
            </div>

            <div className="bg-mainBg pt-8 pb-5 sm:px-8 sm:[&:nth-child(2n+1)]:pl-0
            lg:[&:nth-child(2n+1)]:pl-8 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n)]:pr-0
            first:pt-0 sm:[&:nth-child(2)]:pt-0 lg:[&:nth-child(3)]:pt-0">
              {/* Category title */}
              <h2 className="font-cormorant font-semibold text-2xl sm:text-[26px] 
              text-[#A8B7C9] mb-5">
                Core CS
              </h2>
              {/* Skills list */}
              <ul className="grid gap-2">

                <li className="group relative pl-[22px]  text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText  transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Data Structures & Algorithms
                </li>

                <li className="group relative pl-[22px]  text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText  transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  OOP
                </li>

                <li className="group relative pl-[22px]  text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText  transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  DBMS
                </li>

                <li className="group relative pl-[22px]  text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText  transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Operating Systems
                </li>

                <li className="group relative pl-[22px]  text-[15px] sm:text-base leading-snug 
                text-primaryText/85 hover:text-primaryText  transition-colors duration-300">
                  {/* Dash */}
                  <span className="absolute left-0 top-[0.7em] h-px w-3 
                  bg-[#A8B7C9]/60  group-hover:w-4 group-hover:bg-[#A8B7C9] 
                  transition-all duration-300"></span>
                  Computer Networks
                </li>

              </ul>
            </div>

        </div>
      </div>
    </div>
  )
}