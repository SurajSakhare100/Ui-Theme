import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactJSXParser from 'react-jsx-parser';

const DynamicComponent = () => {
  const [componentCode, setComponentCode] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchComponent = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/components/getCode`);
          setComponentCode(response.data[0].code.jsx);
        
      } catch (err) {
        setError('Failed to fetch component.');
        console.error('Error fetching component:', err);
      }
    };

    fetchComponent();
  }, []);
console.log(componentCode)
  return (
    <div>
    {error && <p>{error}</p>}
    {componentCode ? (
      <ReactJSXParser
        jsx={componentCode}
        components={{}} // Pass additional components if needed
        onError={(error) => {
          console.log('Error parsing JSX:', error.message);
        }}
      />
    ) : (
      <p>Loading component...</p>
    )}
  </div>
  );
};

export default DynamicComponent;
