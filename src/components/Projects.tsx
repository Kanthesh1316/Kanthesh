import React from 'react';
import { ExternalLink, Github, Eye, Shield, UserCheck } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
     title: 'Yoga Kirana Studio',
  description: 'Modern yoga training website with secure authentication, email verification, session handling, and user-friendly UI for a smooth registration and learning experience.',
  tech: ['React', 'Node.js', 'MongoDB', 'JWT', 'Nodemailer'],
  image: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=800',
  icon: <Shield className="w-8 h-8" />,
  category: 'Web Development',
  github: 'https://github.com/Kanthesh1316/yogakiranastudio', // Add your GitHub repo link here later
  demo: 'https://yogakiranastudio.onrender.com/'
  },
    {
    title: 'Face Recognition Attendance System',
    description: 'AI-powered attendance system using computer vision and machine learning for accurate face detection and recognition with real-time processing.',
    tech: ['Python', 'OpenCV', 'TensorFlow', 'Flask', 'SQLite'],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <UserCheck className="w-8 h-8" />,
    category: 'AI/ML',
    github: 'https://github.com/Kanthesh1316/face_recognition',
    demo: '' // add a demo link if available
  },
  {
    title: 'Exam Cheating Detector using AI',
    description: 'Intelligent proctoring system that detects suspicious behavior during online exams using computer vision and behavioral analysis.',
    tech: ['Python', 'OpenCV', 'MediaPipe', 'React', 'Node.js'],
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
    icon: <Eye className="w-8 h-8" />,
    category: 'AI/ML',
    github: 'https://github.com/Kanthesh1316/Exam-Cheating-Detector',
    demo: ''
  }, 
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="glass-card group hover:scale-[1.02] transition-all duration-500 neon-border-hover overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                
                {/* Project Category Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-violet-600/90 to-purple-600/90 rounded-full text-sm text-white font-medium backdrop-blur-sm">
                  {project.category}
                </div>
                
                {/* Project Icon */}
                <div className="absolute bottom-4 right-4 p-3 glass-card rounded-full text-cyan-400">
                  {project.icon}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-3 py-1 bg-gradient-to-r from-violet-600/20 to-cyan-600/20 rounded-full text-sm text-violet-300 border border-violet-500/30 hover:border-cyan-400/50 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
               <div className="flex gap-4">
  <a 
    href={project.github} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-violet-600 to-purple-600 rounded-lg text-white font-medium hover:from-violet-500 hover:to-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/25 neon-glow"
  >
    <Github size={18} />
    Code
  </a>
  {project.demo && (
    <a 
      href={project.demo} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-lg text-white font-medium hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 neon-glow"
    >
      <ExternalLink size={18} />
      Demo
    </a>
  )}
</div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;