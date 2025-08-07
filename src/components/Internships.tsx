import React from 'react';
import { Briefcase, Code, Brain } from 'lucide-react';

const Internships: React.FC = () => {
  const internships = [
    {
      title: 'Web Development Intern',
      company: 'Codesoft',
      duration: 'June 2023 - August 2023',
      description: 'Developed responsive web applications using React.js and Node.js. Collaborated with senior developers on client projects and gained hands-on experience with modern web development practices.',
      skills: ['React.js', 'Node.js', 'JavaScript', 'HTML/CSS', 'Git'],
      icon: <Code className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AI Intern',
      company: 'InternCertify',
      duration: 'September 2023 - November 2023',
      description: 'Worked on machine learning projects including computer vision applications. Developed AI models for image recognition and data analysis using Python and TensorFlow.',
      skills: ['Python', 'TensorFlow', 'OpenCV', 'Machine Learning', 'Data Analysis'],
      icon: <Brain className="w-8 h-8" />,
      color: 'from-violet-500 to-purple-500'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Internship Experience
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {internships.map((internship, index) => (
            <div key={index} className="glass-card p-8 group hover:scale-[1.02] transition-all duration-500 neon-border-hover">
              <div className="flex items-start gap-6">
                <div className={`p-4 rounded-full bg-gradient-to-r ${internship.color} text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {internship.icon}
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Briefcase className="w-5 h-5 text-cyan-400" />
                    <span className="text-sm text-cyan-300 font-medium">{internship.duration}</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {internship.title}
                  </h3>
                  
                  <h4 className="text-lg text-violet-300 font-semibold mb-4">
                    {internship.company}
                  </h4>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {internship.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {internship.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-3 py-1 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-full text-sm text-violet-300 border border-violet-500/30 hover:border-cyan-400/50 transition-colors duration-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;