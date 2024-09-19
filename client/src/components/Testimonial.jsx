import React from 'react';
import { FaStar } from 'react-icons/fa';

// TestimonialCard Component
const TestimonialCard = ({ name, role, testimonial, image }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden p-6">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover mr-4" />
        <div>
          <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">{name}</h3>
          <p className="text-gray-600 dark:text-gray-400">{role}</p>
        </div>
      </div>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{testimonial}</p>
      <div className="flex items-center">
        {[...Array(5)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
      </div>
    </div>
  );
};

// TestimonialsSection Component
const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Jane Doe',
      role: 'Software Engineer',
      testimonial: 'This product has significantly improved my workflow. Highly recommend it to everyone!',
      image: 'https://randomuser.me/api/portraits/women/68.jpg'
    },
    {
      name: 'John Smith',
      role: 'Product Manager',
      testimonial: 'A game-changer for our team. Excellent customer support and intuitive interface.',
      image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
      name: 'Alice Johnson',
      role: 'UX Designer',
      testimonial: 'The best tool I’ve used this year. Easy to use and integrates well with other software.',
      image: 'https://randomuser.me/api/portraits/women/45.jpg'
    }
  ];

  return (
    <div className="px-12 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-8">
          What Our Users Say
        </h1>
        <div className="flex flex-wrap -mx-4">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-8">
              <TestimonialCard {...testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
