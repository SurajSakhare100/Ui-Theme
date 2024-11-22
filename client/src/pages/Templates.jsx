import React from 'react';
import { Link } from 'react-router-dom';

const TemplatesPage = () => {
  const templates = [
    {
      id: 1,
      name: "Next.js Template",
      description: "A modern React-based framework for building fast, static, and dynamic websites.",
      image: "https://via.placeholder.com/600x400",
      link: "/template/1"
    },
    {
      id: 2,
      name: "Vue.js Template",
      description: "A progressive framework for building user interfaces with flexible design.",
      image: "https://via.placeholder.com/600x400",
      link: "/template/2"
    },
    {
      id: 3,
      name: "Node.js API Template",
      description: "A simple Node.js API template with authentication and database integration.",
      image: "https://via.placeholder.com/600x400",
      link: "/template/3"
    },
    {
      id: 4,
      name: "E-commerce Template",
      description: "A fully functional e-commerce platform template with product listing and cart.",
      image: "https://via.placeholder.com/600x400",
      link: "/template/4"
    }
  ];

  return (
    <div className="h-screen  text-gray-900">

      <header className="text-black py-16 text-center">
        <h1 className="text-4xl font-semibold mb-4">Explore Our Templates</h1>
        <p className="text-xl">Find the perfect template for your next project. Browse through our diverse collection of high-quality templates.</p>
      </header>

      <section className="px-20">
        <div className="mx-auto text-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {templates.map(template => (
              <div key={template.id} className="bg-white shadow-lg rounded-xl overflow-hidden">
                <img src={template.image} alt={template.name} className="w-full h-48 object-cover"/>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4">{template.name}</h3>
                  <p className="text-gray-600 mb-6">{template.description}</p>
                  <Link to={template.link} className="text-indigo-600 hover:text-indigo-700 inline-block">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default TemplatesPage;
