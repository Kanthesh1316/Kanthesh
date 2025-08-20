import React from 'react';

const Skills: React.FC = () => {
  const skills = [
    { name: 'React', level: 92, icon: '⚛️', category: 'Frontend' },
    { name: 'Node.js', level: 88, icon: '🟢', category: 'Backend' },
    { name: 'MongoDB', level: 85, icon: '🍃', category: 'Database' },
    { name: 'Express.js', level: 87, icon: '🚀', category: 'Backend' },
    { name: 'JavaScript', level: 95, icon: '⚡', category: 'Language' },
    { name: 'Python', level: 90, icon: '🐍', category: 'Language' },
    { name: 'Java', level: 82, icon: '☕', category: 'Language' },
    { name: 'MySQL', level: 84, icon: '🗄️', category: 'Database' },
    { name: 'HTML5', level: 96, icon: '🌐', category: 'Frontend' },
    { name: 'CSS3', level: 93, icon: '🎨', category: 'Frontend' },
    { name: 'AWS', level: 86, icon: '☁️', category: 'Cloud' },
    { name: 'Git', level: 89, icon: '📝', category: 'Tools' },
  ];

  const cloudSkills = [
    { name: 'EC2', level: 88 },
    { name: 'S3', level: 90 },
    { name: 'EBS', level: 82 },
    { name: 'VPC', level: 85 },
    { name: 'IAM', level: 87 },
  ];

  const additionalSkills = ['REST APIs', 'Ethical Hacking', 'AI/ML', 'Docker', 'Linux'];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Skills & Technologies
        </h2>
        
        {/* Main Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <div key={skill.name} className="glass-card p-6 group hover:scale-105 transition-all duration-300 neon-border-hover">
              <div className="text-center mb-4">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-1">{skill.name}</h3>
                <span className="text-xs text-cyan-300 px-2 py-1 bg-cyan-500/20 rounded-full">{skill.category}</span>
              </div>
              
              <div className="relative">
                <div className="w-full bg-gray-700/50 rounded-full h-3 mb-2 overflow-hidden">
                  <div 
                    className="skill-bar h-3 rounded-full bg-gradient-to-r from-violet-500 via-purple-500 to-cyan-500 transition-all duration-2000 ease-out neon-glow-bar"
                    style={{ 
                      width: `${skill.level}%`,
                      animationDelay: `${index * 0.1}s`
                    }}
                  ></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">Proficiency</span>
                  <span className="text-sm text-cyan-300 font-semibold">{skill.level}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* AWS Cloud Skills */}
        <div className="glass-card p-8 mb-12 neon-border">
          <h3 className="text-2xl font-bold text-center mb-8 text-white flex items-center justify-center gap-3">
            <span className="text-3xl">☁️</span>
            AWS Cloud Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {cloudSkills.map((service, index) => (
              <div key={service.name} className="text-center">
                <div className="glass-card p-4 rounded-lg mb-3 hover:scale-105 transition-all duration-300">
                  <h4 className="text-lg font-semibold text-white mb-2">{service.name}</h4>
                  <div className="w-full bg-gray-700/50 rounded-full h-2">
                    <div 
                      className="h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 neon-glow-bar"
                      style={{ 
                        width: `${service.level}%`,
                        animationDelay: `${index * 0.2}s`
                      }}
                    ></div>
                  </div>
                  <span className="text-sm text-cyan-300 mt-1 block">{service.level}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Additional Expertise</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((skill) => (
              <span 
                key={skill} 
                className="px-6 py-3 glass-card text-cyan-300 font-medium rounded-full hover:scale-105 transition-all duration-300 neon-border-hover"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;