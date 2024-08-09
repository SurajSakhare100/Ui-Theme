import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CodeSnippet from './components/CodeSnippet.jsx';
import Preview from './components/Preview.jsx';
import Loader from './components/Loader.jsx';
import CreateComponent from './components/CreateComponent.jsx';
import DynamicComponent from './components/DynamicComponent.jsx';
import TestComponent from './components/TestComponent.jsx';

const ComponentsPage = () => {
  
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">UI Components</h1>
      <div className='w-full flex justify-center'>
        <div className="w-10/12 grid grid-cols-4 gap-20 items-center justify-center min-h-screen">
          <Loader className={`border-yellow-400`} />
          <Loader className={`border-red-400`} />
          <Loader className={`border-blue-400`} />
          <Loader className={`border-green-300`} />
        </div>
      </div>
      <div>
        <DynamicComponent/>
      </div>
      <TestComponent/>
    </div>

  );
};

export default ComponentsPage;


