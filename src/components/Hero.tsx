import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { ParticlesBackground } from './ParticlesBackground';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-blue-50/50 to-indigo-50/50">
      <ParticlesBackground />
      <div className="container mx-auto px-4 py-32">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0 z-10">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Perfect App Landing for Your Product
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Launch your app with this beautiful landing page, designed to showcase your app's features and convert visitors into users.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
                <Download className="w-5 h-5 mr-2" />
                Download App
              </button>
              <button className="flex items-center px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-50 transition">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 z-10">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600/10 rounded-2xl blur-3xl transform -rotate-6"></div>
              <img 
                src="https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=1000&q=80" 
                alt="App Preview" 
                className="relative rounded-2xl shadow-2xl transform hover:scale-105 transition duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}