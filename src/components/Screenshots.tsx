import React from 'react';

const screenshots = [
  "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=500&q=80",
  "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&w=500&q=80",
];

export function Screenshots() {
  return (
    <section id="screenshots" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">App Screenshots</h2>
          <p className="text-xl text-gray-600">See our app in action</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {screenshots.map((screenshot, index) => (
            <div key={index} className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
              <img 
                src={screenshot} 
                alt={`App Screenshot ${index + 1}`}
                className="w-full h-auto transform hover:scale-105 transition duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}