import React from "react";
import arrowImg from '../assets/arrow.png'
export default function Hero() {
  return (
    <section id='top' className="relative min-h-screen w-full bg-[url('/src/assets/hero-bg.png')] bg-cover bg-center md:bg-bottom bg-no-repeat">
      <div className="absolute inset-0 bg-black/50" /> {/* self-closing div for overlay */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 text-center text-primaryText">
        <h1 className="pb-1 text-4xl sm:text-5xl md:text-6xl font-playfair tracking-[0.18em] sm:tracking-widest">
          HI, I'M AAYUSHI
        </h1>
        <p className="mt-2 text-lg sm:text-xl md:text-2xl font-cormorant tracking-wide">
          Web Developer & UI/UX Designer
        </p>
        <a href="#about" className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer transition-transform duration-300 hover:scale-110 animate-bounce">
          <img src={arrowImg} alt="Scroll Down" className="w-12 sm:w-14 md:w-16 opacity-90" />
        </a>
      </div>
    </section>
  );
}