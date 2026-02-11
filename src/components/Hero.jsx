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
          <p className="text-slate-600 text-lg md:text-xl">
            I'm a world-class senior frontend engineer specializing in building
            polished, scalable, and AI-integrated digital products with modern
            technologies.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 my-12">
          <button className="bg-primary text-white hover:shadow-2xl shadow-primary/30 px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-[#6679e6] transition-all">
            <span className="material-symbols-outlined">visibility</span>
            view my projects
          </button>
          <button className="border border-primary text-primary hover:shadow-2xl px-6 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-primary/10 transition-all">
            <span className="material-symbols-outlined">download</span>
            download my resume
          </button>
        </div>

        <div>
          <div className="rounded-lg border border-slate-300 shadow-lg overflow-hidden bg-white">
            {/* Editor Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-slate-100 border-b border-slate-300">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-slate-600 text-sm font-medium ml-2">
                  Portfolio.js
                </span>
              </div>
              <div className="text-slate-400 text-xs">JavaScript</div>
            </div>

            {/* Code Editor Content */}
            <div className="p-6 text-left font-mono text-sm sm:text-base leading-relaxed overflow-x-auto whitespace-nowrap scrollbar-hide">
              <div className="flex gap-4">
                <div className="text-slate-400 text-right select-none pr-2 border-r border-slate-200 hidden sm:block min-w-8">
                  <div>1</div>
                  <div>2</div>
                  <div>3</div>
                  <div>4</div>
                  <div>5</div>
                  <div>6</div>
                  <div>7</div>
                  <div>8</div>
                  <div>9</div>
                  <div>10</div>
                  <div>11</div>
                  <div>12</div>
                </div>
                <div className="flex-1">
                  <div>
                    <span className="text-[#d73a49]">import</span>{" "}
                    <span className="text-[#24292e]">React</span>{" "}
                    <span className="text-[#d73a49]">from</span>{" "}
                    <span className="text-[#032f62]">'react'</span>
                    <span className="text-[#24292e]">;</span>
                  </div>
                  <div className="h-4"></div>
                  <div>
                    <span className="text-[#d73a49]">const</span>{" "}
                    <span className="text-[#6f42c1]">Portfolio</span>{" "}
                    <span className="text-[#d73a49]">=</span>{" "}
                    <span className="text-[#24292e]">()</span>{" "}
                    <span className="text-[#d73a49]">=&gt;</span>{" "}
                    <span className="text-[#24292e]">{"{"}</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#d73a49]">return</span>{" "}
                    <span className="text-[#24292e]">(</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-[#24292e]">&lt;</span>
                    <span className="text-[#22863a]">div</span>{" "}
                    <span className="text-[#6f42c1]">className</span>
                    <span className="text-[#d73a49]">=</span>
                    <span className="text-[#032f62]">
                      "p-8 bg-primary rounded-xl"
                    </span>
                    <span className="text-[#24292e]">&gt;</span>
                  </div>
                  <div className="pl-12">
                    <span className="text-[#24292e]">&lt;</span>
                    <span className="text-[#22863a]">h1</span>
                    <span className="text-[#24292e]">&gt;</span>
                    <span className="text-[#24292e]">
                      Building scalable futures
                    </span>
                    <span className="text-[#24292e]">&lt;/</span>
                    <span className="text-[#22863a]">h1</span>
                    <span className="text-[#24292e]">&gt;</span>
                  </div>
                  <div className="pl-12">
                    <span className="text-[#24292e]">&lt;</span>
                    <span className="text-[#22863a]">p</span>
                    <span className="text-[#24292e]">&gt;</span>
                    <span className="text-[#24292e]">
                      Senior Frontend Engineer
                    </span>
                    <span className="text-[#24292e]">&lt;/</span>
                    <span className="text-[#22863a]">p</span>
                    <span className="text-[#24292e]">&gt;</span>
                  </div>
                  <div className="pl-8">
                    <span className="text-[#24292e]">&lt;/</span>
                    <span className="text-[#22863a]">div</span>
                    <span className="text-[#24292e]">&gt;</span>
                  </div>
                  <div className="pl-4">
                    <span className="text-[#24292e]">);</span>
                  </div>
                  <div>
                    <span className="text-[#24292e]">{"}"}</span>
                    <span className="text-[#24292e]">;</span>
                  </div>
                  <div className="h-4"></div>
                  <div>
                    <span className="text-[#d73a49]">export default</span>{" "}
                    <span className="text-[#6f42c1]">Portfolio</span>
                    <span className="text-[#24292e]">;</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero
