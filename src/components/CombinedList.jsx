import React, { useState } from 'react';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import EditForm from './EditForm';
import './../styles/App.css';

const CombinedList = (props) => {
    const arr = props.data;
    const [editIndex, setEditIndex] = useState(-1);

    const handleDelete = (index) => {
        const updatedContacts = arr.filter((_, i) => i !== index);
        props.onDelete(updatedContacts);
    };

    const handleEdit = (index) => {
        setEditIndex(index);
    };

    const handleEditSubmit = (editedName, editedAge, editedTel) => {
        const updatedContacts = arr.map((contact, i) => {
            if (i === editIndex) {
                return { name: editedName, age: editedAge, tel: editedTel };
            }
            return contact;
        });
        props.onEdit(updatedContacts);
        setEditIndex(-1);
    };

    const combinedItems = arr.map((person, index) => (
        <li key={index}>
            {editIndex === index ? (
                <EditForm
                    name={person.name}
                    age={person.age}
                    tel={person.tel}
                    onSubmit={(editedName, editedAge, editedTel) =>
                        handleEditSubmit(editedName, editedAge, editedTel)
                    }
                />
            ) : (
                <>
                    <span className="title">Name: </span> <span className="info">{person.name}</span><br />
                    <span className="title">Age: </span> <span className="info">{person.age}</span><br />
                    <span className="title">Tel: </span> <span className="info">{person.tel}</span><br />
                    <button className="btn" onClick={() => handleDelete(index)}>
                        <RiDeleteBinLine className="icon" />
                    </button>
                    <button className="btn" onClick={() => handleEdit(index)}>
                        <RiEdit2Line className="icon" />
                    </button>
                </>
            )}
        </li>
    ));

    return <ul>{combinedItems}</ul>;
};

export default CombinedList;
