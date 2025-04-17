import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FishUpload() {
    const [image, setImage] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:9000/admin-fish/api/categories/')
            .then((res) => setCategories(res.data))
            .catch((err) => console.error('Error fetching categories:', err));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('description', description);
        formData.append('price', price);
        formData.append('category', category);
        formData.append('image', image);

        try {
            await axios.post('http://localhost:9000/admin-fish/api/fish/', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            setSuccessMessage('Fish successfully uploaded!');
            setErrorMessage('');
            setName('');
            setDescription('');
            setPrice('');
            setCategory('');
            setImage(null);
        } catch (error) {
            console.error('Error uploading fish:', error);
            setSuccessMessage('');
            setErrorMessage('Error uploading fish');
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
            <h2>Add a New Fish</h2>
            <form onSubmit={handleSubmit}>
                <div style={formGroup}>
                    <label style={labelStyle}>Fish Name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} required />
                </div>

                <div style={formGroup}>
                    <label style={labelStyle}>Description</label>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} style={inputStyle} required />
                </div>

                <div style={formGroup}>
                    <label style={labelStyle}>Price</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} style={inputStyle} required />
                </div>

                <div style={formGroup}>
                    <label style={labelStyle}>Category</label>
                    <select value={category} onChange={(e) => setCategory(e.target.value)} style={inputStyle} required>
                        <option value="">Select Category</option>
                        {categories.map((cat) => (
                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                        ))}
                    </select>
                </div>

                <div style={formGroup}>
                    <label style={labelStyle}>Image</label>
                    <input type="file" onChange={(e) => setImage(e.target.files[0])} style={inputStyle} required />
                </div>

                <button type="submit" style={buttonStyle}>Submit</button>

                {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </form>
        </div>
    );
}

export default FishUpload;
