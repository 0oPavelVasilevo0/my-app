import React, { useState } from 'react';
import './../styles/App.css';

const EditForm = (props) => {
    const [editedName, setEditedName] = useState(props.name);
    const [editedSurname, setEditedSurname] = useState(props.surname);
    const [editedAge, setEditedAge] = useState(props.age);
    const [editedTel, setEditedTel] = useState(props.tel);

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onSubmit(editedName, editedSurname, editedAge, editedTel);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Name"
                value={editedName}
                onChange={(e) => setEditedName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Surname"
                value={editedSurname}
                onChange={(e) => setEditedSurname(e.target.value)}
            />
            <input
                type="number"
                placeholder="Age"
                value={editedAge}
                onChange={(e) => setEditedAge(e.target.value)}
            />
            <input
                type="number"
                placeholder="Tel"
                value={editedTel}
                onChange={(e) => setEditedTel(e.target.value)}
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default EditForm;
