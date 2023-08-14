import React, { useState } from 'react';
import './../styles/App.css';

const AddPersonForm = (props) => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [tel, setTel] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeAge = (e) => {
        setAge(e.target.value);
    };

    const handleChangeTel = (e) => {
        setTel(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() !== '' && age.trim() !== '' && tel.trim() !== '') {
            props.handleSubmit(name.trim(), age.trim(), tel.trim());
            setName('');
            setAge('');
            setTel('');
        }
    };

    return (
        <>
            <h1>Contact Manager</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={handleChangeName}
                    value={name}
                />
                <input
                    type="number"
                    placeholder="Age"
                    onChange={handleChangeAge}
                    value={age}
                />
                <input
                    type="number"
                    placeholder="Tel"
                    onChange={handleChangeTel}
                    value={tel}
                />
                <button type="submit">Add</button>
            </form>
        </>
    );
};

export default AddPersonForm;