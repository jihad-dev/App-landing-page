import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '9',
    features: ['1 User', '1GB Storage', 'Basic Support', 'Basic Features'],
    recommended: false
  },
  {
    name: 'Pro',
    price: '29',
    features: ['5 Users', '10GB Storage', 'Priority Support', 'Pro Features'],
    recommended: true
  },
  {
    name: 'Enterprise',
    price: '99',
    features: ['Unlimited Users', 'Unlimited Storage', '24/7 Support', 'All Features'],
    recommended: false
  }
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple Pricing</h2>
          <p className="text-xl text-gray-600">Choose the plan that fits your needs</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`rounded-xl p-8 ${
                plan.recommended 
                  ? 'bg-blue-600 text-white shadow-xl scale-105' 
                  : 'bg-white text-gray-900 border border-gray-200'
              }`}
            >
              <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">${plan.price}</span>
                <span className="text-sm">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button 
                className={`w-full py-3 rounded-full font-semibold ${
                  plan.recommended
                    ? 'bg-white text-blue-600 hover:bg-gray-100'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}