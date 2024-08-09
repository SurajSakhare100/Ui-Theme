import React, { useState } from 'react';
import axios from 'axios';

const CreateComponent = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [jsxCode, setJsxCode] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newComponent = {
      name,
      description,
      category,
      code: {
        jsx: jsxCode,
        css: '',
        html: ''
      },
      metadata: {
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
        author: 'Suraj Sakhare',
        tags: ['example']
      }
    };

    try {
      const response = await axios.post('http://localhost:5000/api/components/createComponents', newComponent);
      setMessage(`Component created successfully: ${response.data._id}`);
    } catch (error) {
      console.error('Error creating component:', error.message);
      setMessage('Error creating component');
    }
  };

  return (
    <div>
      <h2>Create a New Component</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='border'
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className='border'
          />
        </div>
        <div>
          <label>Category:</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
            className='border'
          />
        </div>
        <div>
          <label>JSX Code:</label>
          <textarea
            value={jsxCode}
            onChange={(e) => setJsxCode(e.target.value)}
            rows="10"
            required
            className='border'
          />
        </div>
        <button type="submit">Create Component</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CreateComponent;
