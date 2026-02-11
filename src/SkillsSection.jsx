import { skills } from "./propData";

const Skills = () => {
  const skillProps = skills; 

  return (
    <div id="skills" className="border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col items-center sm:flex-row justify-center my-12 ">
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2">Core Expertise</h2>
            <div className="bg-primary w-12 h-1 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skillProps.map((skill) => (
            <div
              key={skill.id}
              className="bg-white p-6 text-center rounded-2xl hover:border-primary transition-all border border-slate-200 mt-12"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary">
                  {skill.icon}
                </span>
              </div>
              <h3 className="text-lg font-medium">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills
