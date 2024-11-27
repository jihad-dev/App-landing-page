import React from 'react';
import { Smartphone, Shield, Zap, Users, Cloud, Heart } from 'lucide-react';

const features = [
  {
    icon: <Smartphone className="w-12 h-12" />,
    title: 'Responsive Design',
    description: 'Our app works seamlessly across all devices and screen sizes, providing a consistent experience.',
    color: 'bg-blue-50 text-blue-600'
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: 'Secure by Default',
    description: 'Built with security in mind to protect your data and privacy at every level.',
    color: 'bg-green-50 text-green-600'
  },
  {
    icon: <Zap className="w-12 h-12" />,
    title: 'Lightning Fast',
    description: 'Optimized for speed to provide the best possible user experience and performance.',
    color: 'bg-yellow-50 text-yellow-600'
  },
  {
    icon: <Users className="w-12 h-12" />,
    title: 'User Friendly',
    description: 'Intuitive interface that anyone can use without training or technical knowledge.',
    color: 'bg-purple-50 text-purple-600'
  },
  {
    icon: <Cloud className="w-12 h-12" />,
    title: 'Cloud Sync',
    description: 'Access your data from anywhere with seamless cloud synchronization features.',
    color: 'bg-pink-50 text-pink-600'
  },
  {
    icon: <Heart className="w-12 h-12" />,
    title: 'Made with Love',
    description: 'Crafted with attention to detail and care for our users needs and preferences.',
    color: 'bg-red-50 text-red-600'
  }
];

export function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Amazing Features</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover what makes our app special and why users love it
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group p-8 rounded-xl transition duration-300 hover:shadow-2xl border border-gray-100 hover:border-transparent"
            >
              <div className={`${feature.color} w-20 h-20 rounded-lg flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}