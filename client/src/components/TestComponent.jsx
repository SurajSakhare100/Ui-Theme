import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactJSXParser from 'react-jsx-parser';
const TestComponent = () => {
    const jsxCode = `
      import React, { useEffect } from 'react';
      import { gsap } from 'gsap';
  
      const Loader = ({ className = "" }) => {
        useEffect(() => {
          gsap.to('.spinner', {
            rotation: 360, 
            duration: 1,   
            repeat: -1,    
            ease: 'linear' 
          });
        }, []);
  
        return (
          <div className="w-full h-60 shadow-xl flex items-center justify-center rounded-xl">
            <div className={'spinner w-20 h-20 border-8 border-t-transparent border-solid rounded-full ' + className}></div>
          </div>
        );
      };
  
      export default Loader;
    `;
  
    return (
      <div>
        <ReactJSXParser
          jsx={jsxCode}
          components={{}}
          onError={(error) => console.error('Error parsing JSX:', error)}
        />
      </div>
    );
  };
  
  export default TestComponent;
  