// src/components/CategoryUpload.js
import React, { useState } from 'react';
import axios from 'axios';

function CategoryUpload() {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post(
                'http://localhost:9000/admin-fish/api/categories/',
                { name, description },
                { headers: { 'Content-Type': 'application/json' } }
            );
            setSuccessMessage('Category successfully created!');
            setErrorMessage('');
            setName('');
            setDescription('');
        } catch (error) {
            console.error('Error uploading category:', error);
            setErrorMessage('Error uploading category');
            setSuccessMessage('');
        }
    };
    const formStyle = {
      maxWidth: '500px',
      margin: '30px auto',
      padding: '20px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9',
  };

  const formGroup = {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '15px',
  };

  const labelStyle = {
      marginBottom: '5px',
      fontWeight: 'bold',
  };

  const inputStyle = {
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
  };

  const buttonStyle = {
      padding: '10px 20px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      alignSelf: 'flex-start',
  };

    return (
      <div style={formStyle}>
            <h2>New Category</h2>
            <form onSubmit={handleSubmit}>
              <div style={formGroup}>
                <label style={labelStyle}>
                    Category Name
                </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} required />
                
              </div>
              <div style={formGroup}>
                <label style={labelStyle}>
                    Description
                </label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={inputStyle} required />
              </div>      
                <button type="submit" style={buttonStyle}>Submit</button>
            </form>

            {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
    );
}

export default CategoryUpload;
