import React from 'react';
import { ChevronDown, Code, Sparkles } from 'lucide-react';
import KanthImg from '../image/kanth.png'; // adjust path as needed


const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-card text-cyan-300 text-sm font-medium">
                <Sparkles size={16} className="animate-pulse" />
                Welcome to my digital space
              </div>
              
              <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                <span className="block text-white mb-2">Hi, I'm</span>
                <span className="block bg-gradient-to-r from-violet-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent animate-glow-text">
                  Kanthesh L Gollarahalli
                </span>
                <span className="block text-2xl lg:text-3xl text-cyan-300 font-light mt-4">
                  
                </span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-blue-200 font-light tracking-wide">
                Full-Stack Developer | AI Explorer | Cloud Enthusiast
              </p>
            </div>
            
            <p className="text-gray-300 text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Passionate about building intelligent web applications and exploring the endless possibilities of AI and cloud technologies.
            </p>
            
            <button className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 neon-glow">
              <span className="relative z-10 flex items-center gap-2">
                <Code size={20} />
                View My Work
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
          
          <div className="lg:w-1/2 relative">
            <div className="avatar-container relative w-96 h-96 mx-auto">
              {/* Holographic rings */}
              <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border border-violet-400/40 animate-spin-reverse"></div>
              
              {/* Main avatar container */}
              <div className="relative glass-card w-full h-full rounded-full flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-cyan-500/20 rounded-full"></div>
                <div className="relative z-10 text-8xl"><img src={KanthImg} alt="me" />

</div>
              </div>
              
              {/* Floating holographic panels */}
              <div className="floating-panel absolute -top-6 -right-6 glass-card p-4 rounded-lg neon-border">
                <code className="text-cyan-400 text-sm font-mono">const dev = 'Kanthesh';</code>
              </div>
              <div className="floating-panel absolute -bottom-6 -left-6 glass-card p-4 rounded-lg neon-border">
                <code className="text-violet-400 text-sm font-mono">AI.explore()</code>
              </div>
              <div className="floating-panel absolute top-1/2 -left-16 glass-card p-4 rounded-lg neon-border">
                <code className="text-blue-400 text-sm font-mono">{'<React />'}</code>
              </div>
              <div className="floating-panel absolute top-1/4 -right-12 glass-card p-3 rounded-lg neon-border">
                <code className="text-purple-400 text-sm font-mono">☁️ AWS</code>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-cyan-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero;