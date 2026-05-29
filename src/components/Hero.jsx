import React from "react";
import arrowImg from '../assets/arrow.png'
export default function Hero() {
  return (
    <section id='top' className="relative h-screen w-full bg-[url('/src/assets/hero-bg.png')] bg-cover bg-bottom bg-no-repeat">
      <div className="absolute inset-0 bg-black/50" /> {/* self-closing div for overlay */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-primaryText">
        <h1 className="pb-1 text-6xl font-playfair tracking-widest">
          HI, I'M AAYUSHI
        </h1>
        <p className="mt-2 text-2xl font-cormorant tracking-wide">
          Web Developer & UI/UX Designer
        </p>
        <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 cursor-pointer transition-transform duration-300 hover:scale-110 animate-bounce">
          <img src={arrowImg} alt="Scroll Down" className="w-16 opacity-90" />
        </a>
      </div>
    </section>
  );
}