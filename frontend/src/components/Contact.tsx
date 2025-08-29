import React, { useState } from 'react';
import {  Github, Linkedin, MessageCircle, Send, User, AtSign } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

    const socialLinks = [
    {
      name: 'LinkedIn',
      icon: <Linkedin className="w-6 h-6" />,
      href: 'https://www.linkedin.com/in/kanthesh-lg-7677b8257/',
      color: 'hover:bg-blue-500/10 hover:border-blue-400/50',
      textColor: 'group-hover:text-blue-300'
    },
    {
      name: 'GitHub',
      icon: <Github className="w-6 h-6" />,
      href: 'https://github.com/Kanthesh1316',
      color: 'hover:bg-gray-500/10 hover:border-gray-400/50',
      textColor: 'group-hover:text-gray-300'
    },
    {
      name: 'WhatsApp',
      icon: <MessageCircle className="w-6 h-6" />,
      href: 'https://wa.me/916363358378',
      color: 'hover:bg-green-500/10 hover:border-green-400/50',
      textColor: 'group-hover:text-green-300'
    }
  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="lg:w-2/3">
            <div className="glass-card p-8 neon-border">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <Send className="text-cyan-400" />
                Send me a message
              </h3>
              
              
            </div>
          </div>
          
          {/* Social Links */}
          <div className="lg:w-1/3 space-y-6">
            <div className="glass-card p-8 neon-border">
              <h3 className="text-2xl font-bold text-white mb-6">Get in touch</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, 
                or just chat about technology and innovation. Let's connect!
              </p>
              
              <div className="space-y-4">
                {socialLinks.map((link) => (
                  <a 
                    key={link.name}
                    href={link.href}
                    className={`flex items-center gap-4 p-4 glass-card transition-all duration-300 group border border-violet-500/20 ${link.color}`}
                  >
                    <div className="text-violet-400 group-hover:scale-110 transition-transform duration-300">
                      {link.icon}
                    </div>
                    <span className={`text-gray-300 font-medium transition-colors duration-300 ${link.textColor}`}>
                      {link.name}
                    </span>
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Info */}
            <div className="glass-card p-6 neon-border">
              <h4 className="text-lg font-bold text-white mb-4">Quick Info</h4>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Location</span>
                  <span className="text-cyan-300">India</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Response Time</span>
                  <span className="text-cyan-300">24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Availability</span>
                  <span className="text-green-400">Open to work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;