import React from 'react'

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 flex flex-col items-center text-center">
      <div>
        <div className="mb-8 border border-primary/30 font-bold rounded-full inline-flex items-center gap-2 bg-primary/10 px-3 py-1 tracking-widest text-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
          AVAILABLE FOR NEW PROJECTS
        </div>

        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-8xl leading-[1.2] mb-8">
            Crafting <span className="text-primary">High-Performance</span> Web
            Experiences
          </h1>
          <p className='text-slate-600 text-lg md:text-xl'>
            I'm a world-class senior frontend engineer specializing in building
            polished, scalable, and AI-integrated digital products with modern
            technologies.
          </p>
        </div>
        <div>
            <button className='material-symbols-outlined'>
                visibility
            </button>
        </div>
      </div>
    </section>
  );
}

export default Hero
