import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className=" px-20 py-20">
      
      <section className="bg-black text-white py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to UI THEME
          </h1>
          <p className="text-lg md:text-2xl mb-6">
            Discover the best solutions to make your life easier. Start exploring now!
          </p>
          <Link to="/contact-us" className="bg-yellow-300 text-gray-800 px-8 py-3 rounded-full text-xl hover:bg-yellow-400 transition duration-300 ease-in-out">
            Get in Touch
          </Link>
        </div>
      </section>

      <section className="features py-16 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-12">
            Why Choose Us?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="feature-card bg-gray-200 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Fast & Reliable</h3>
              <p>
                Experience top-notch services with lightning-fast delivery and 100% reliability.
              </p>
            </div>
            <div className="feature-card bg-gray-200 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p>
                Our dedicated team is available around the clock to assist you with any queries.
              </p>
            </div>
            <div className="feature-card bg-gray-200 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Secure & Safe</h3>
              <p>
                Your privacy is our priority. All your data is encrypted and protected.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl mb-6">
            Join thousands of happy users who trust us for their needs. Get started today!
          </p>
          <Link to="/register" className="bg-yellow-300 text-gray-800 px-8 py-3 rounded-full text-xl hover:bg-yellow-400 transition duration-300 ease-in-out">
            Sign Up Now
          </Link>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;
