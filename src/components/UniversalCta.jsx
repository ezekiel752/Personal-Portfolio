
const UniversalCta = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
      <div className="rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-8 md:p-16 text-center overflow-hidden relative">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="relative z-10">
          <h2 className="text-3xl md:text-4xl font-black mb-4">
            Interested in working together?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            I'm currently available for freelance work and open to new
            opportunities. Let's build something amazing together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() =>
                (window.location.href = "mailto:odoruyiezekiel7@gmail.com")
              }
              className="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:shadow-xl shadow-primary/25 transition-all flex items-center justify-center gap-2 group"
            >
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                mail
              </span>
              Get In Touch
            </button>
            <button className="px-8 py-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white rounded-xl font-bold text-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-all">
              View Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UniversalCta
