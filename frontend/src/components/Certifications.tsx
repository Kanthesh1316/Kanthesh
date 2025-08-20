import React from 'react';
import { Award, Cloud, Code, Database, Shield } from 'lucide-react';

const Certifications: React.FC = () => {
  const certifications = [
   {
  title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
  issuer: 'Amazon Web Services',
  icon: <Cloud className="w-8 h-8" />,
  color: 'from-orange-500 to-yellow-500',
  description: 'Comprehensive understanding of cloud computing concepts and AWS services',
  certificate: 'https://www.credly.com/badges/1b415d35-0d08-4b37-86d4-355a065b70ef' // replace with actual link
},{
  title: 'IT Specialist - Databases',
  issuer: 'Data Institute',
  icon: <Database className="w-8 h-8" />,
  color: 'from-purple-500 to-pink-500',
  description: 'Database design, optimization, and management expertise',
  certificate: 'https://www.credly.com/badges/4813f099-cffa-4988-9f77-12dd36042876'
},
{
  title: 'Python Programming',
  issuer: 'Programming Institute',
  icon: <Code className="w-8 h-8" />,
  color: 'from-green-500 to-blue-500',
  description: 'Advanced Python programming skills and best practices',
  certificate: 'https://example.com/python-certificate'
},
{
  title: 'Web Technologies',
  issuer: 'Tech Academy',
  icon: <Code className="w-8 h-8" />,
  color: 'from-blue-500 to-purple-500',
  description: 'Modern web development technologies and frameworks',
  certificate: 'https://example.com/webtech-certificate'
}

  ];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="glass-card p-6 text-center group hover:scale-105 transition-all duration-500 neon-border-hover">
              <div className="relative mb-6">
                <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${cert.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 neon-glow`}>
                  {cert.icon}
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full flex items-center justify-center">
                  <Award className="w-4 h-4 text-white" />
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="text-violet-300 font-medium mb-3">
                {cert.issuer}
              </p>
              
              <p className="text-gray-400 text-sm leading-relaxed">
                {cert.description}
              </p>
              
             {cert.certificate && (
  <div className="mt-4 pt-4 border-t border-violet-500/20">
    <a
      href={cert.certificate}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-xs text-cyan-300 font-medium hover:underline"
    >
      <Shield className="w-3 h-3" />
      Verified Certificate
    </a>
  </div>
)}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;