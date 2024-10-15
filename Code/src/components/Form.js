
import React, { useState } from 'react';
import InputField from './InputField';
import "../styles.css"

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        subscribe: false,
        gender: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <InputField
                label="Name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
            />
            <InputField
                label="Job Description"
                name="description"
                type="textarea"
                value={formData.description}
                onChange={handleChange}
            />
            <InputField
                label="Software Developer"
                name="so"
                type="checkbox"
                value={formData.fresher}
                onChange={handleChange}
            /><InputField
            label="Experience"
            name="experience"
            type="checkbox"
            value={formData.experience}
            onChange={handleChange}
        />
            <InputField 
                label="Gender"
                name="gender"
                type="radio"
                value={formData.gender}
                onChange={handleChange}
                options={[
                    { label: 'male', value: 'male' },
                    { label: 'female', value: 'female'}
                ]}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;
