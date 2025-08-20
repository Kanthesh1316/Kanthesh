import React from 'react';
import { Brain, Cloud, Car, MapPin, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3">
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="relative glass-card w-full h-full rounded-full overflow-hidden neon-border">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-cyan-600/30"></div>
                <div className="relative z-10 w-full h-full flex items-center justify-center text-8xl">
                  🧑‍💻
                </div>
              </div>
              
              {/* Orbiting icons */}
              <div className="absolute inset-0 animate-spin-slow">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-violet-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Brain size={16} className="text-white" />
                </div>
                <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Cloud size={16} className="text-white" />
                </div>
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Car size={16} className="text-white" />
                </div>
                <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-8 h-8 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full flex items-center justify-center">
                  <Heart size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-2/3 space-y-8">
            <div className="glass-card p-8 neon-border">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Brain className="text-violet-400" size={28} />
                My Journey
              </h3>
              
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                <p>
                  Hello! I'm Kanthesh, but most people call me Kiran. I'm a passionate full-stack developer 
                  with a deep fascination for artificial intelligence and cloud computing. My journey into 
                  technology began with curiosity about how intelligent systems work, which led me to explore 
                  the fascinating world of AI and machine learning.
                </p>
                
                <p>
                  I specialize in building scalable web applications using modern technologies like React, 
                  Node.js, and cloud platforms, particularly AWS. My experience spans from creating intelligent 
                  systems like face recognition attendance systems to developing robust web applications with 
                  advanced security features.
                </p>
                
                <p>
                  When I'm not coding or exploring new AI technologies, you'll find me traveling to new places, 
                  going on long drives, or spending quality time with my pets. I believe that diverse experiences 
                  fuel creativity and help me approach problems from unique perspectives.
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 neon-border-hover">
                <Brain className="w-10 h-10 text-violet-400 mx-auto mb-3" />
                <p className="text-sm text-gray-300 font-medium">AI Explorer</p>
              </div>
              <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 neon-border-hover">
                <Cloud className="w-10 h-10 text-blue-400 mx-auto mb-3" />
                <p className="text-sm text-gray-300 font-medium">Cloud Expert</p>
              </div>
              <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 neon-border-hover">
                <Car className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
                <p className="text-sm text-gray-300 font-medium">Road Tripper</p>
              </div>
              <div className="glass-card p-6 text-center group hover:scale-105 transition-all duration-300 neon-border-hover">
                <Heart className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                <p className="text-sm text-gray-300 font-medium">Pet Lover</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;