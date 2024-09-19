import React from 'react';
import { FaDollarSign } from 'react-icons/fa';
import { MdCheckCircle } from 'react-icons/md';

const PricingCard = ({ plan, price, features, isPopular }) => {
  return (
    <div
      className={`max-w-sm mx-auto  bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden ${isPopular ? 'border-2 border-blue-500' : ''}`}
    >
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">{plan}</h2>
          <span className="text-3xl font-bold text-gray-800 dark:text-gray-200 flex items-center">
            <FaDollarSign className="text-blue-500 mr-1" />
            {price}
          </span>
        </div>
        <ul className="mt-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center mb-2 text-gray-600 dark:text-gray-400">
              <MdCheckCircle className="text-green-500 mr-2" />
              {feature}
            </li>
          ))}
        </ul>
        <button className="mt-4 w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition">
          Choose Plan
        </button>
      </div>
    </div>
  );
};


const PricingSection = () => {
  const plans = [
    {
      plan: 'Basic',
      price: '$19/month',
      features: [
        '1 GB Storage',
        '10 GB Bandwidth',
        'Basic Support'
      ],
      isPopular: false
    },
    {
      plan: 'Pro',
      price: '$49/month',
      features: [
        '10 GB Storage',
        '100 GB Bandwidth',
        'Priority Support'
      ],
      isPopular: true
    },
    {
      plan: 'Enterprise',
      price: '$99/month',
      features: [
        'Unlimited Storage',
        'Unlimited Bandwidth',
        '24/7 Support'
      ],
      isPopular: false
    }
  ];

  return (
    <div className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Pricing Plans</h1>
        <div className="flex flex-wrap -mx-4">
          {plans.map((plan, index) => (
            <div key={index} className="w-full md:w-1/3  px-4 mb-8">
              <PricingCard {...plan} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
