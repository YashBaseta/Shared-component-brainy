import React from 'react';

const InputField = ({ label, name, type, value, onChange, options }) => {
    switch (type) {
        case 'textarea':
            return (
                <div className="form-group">
                    <label htmlFor={name}>{label}</label>
                    <textarea
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            );
        case 'checkbox':
            return (
                <div className="form-group">
                    <label>
                        <input
                            type="checkbox"
                            name={name}
                            checked={value}
                            onChange={onChange}
                        />
                        {label}
                    </label>
                </div>
            );
        case 'radio':
            return (
                <div className="form-group,gender">
                    <label>{label}</label>
                    {options.map((option) => (
                        <label key={option.value}>
                            <input
                                type="radio"
                                name={name}
                                value={option.value}
                                checked={value === option.value}
                                onChange={onChange}
                            />
                            {option.label}
                        </label>
                    ))}
                </div>
            );
        default:
            return (
                <div className="form-group">
                    <label htmlFor={name}>{label}</label>
                    <input
                        type={type}
                        id={name}
                        name={name}
                        value={value}
                        onChange={onChange}
                    />
                </div>
            );
    }
};

export default InputField;
