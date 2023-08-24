// import React, { useState } from 'react';
// import './../styles/App.css';

// const EditForm = (props) => {
//     const [editedName, setEditedName] = useState(props.name);
//     const [editedSurname, setEditedSurname] = useState(props.surname);
//     const [editedAge, setEditedAge] = useState(props.age);
//     const [editedTel, setEditedTel] = useState(props.tel);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         props.onSubmit(editedName, editedSurname, editedAge, editedTel);
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input
//                 type="text"
//                 placeholder="Name"
//                 value={editedName}
//                 onChange={(e) => setEditedName(e.target.value)}
//             />
//             <input
//                 type="text"
//                 placeholder="Surname"
//                 value={editedSurname}
//                 onChange={(e) => setEditedSurname(e.target.value)}
//             />
//             <input
//                 type="number"
//                 placeholder="Age"
//                 value={editedAge}
//                 onChange={(e) => setEditedAge(e.target.value)}
//             />
//             <input
//                 type="number"
//                 placeholder="Tel"
//                 value={editedTel}
//                 onChange={(e) => setEditedTel(e.target.value)}
//             />
//             <button type="submit">Save</button>
//         </form>
//     );
// };

// export default EditForm;

import React from 'react';
import { useDispatch } from 'react-redux';
import { editPerson } from '../redux/actions';
import './../styles/App.css';

const EditForm = (props) => {
    const dispatch = useDispatch();
    // const contacts = useSelector((state) => state.contacts);
    // const contacts = useSelector((state) => state.contacts[props.index]);

    // const contact = contacts[props.index]; // Get the contact being edited from the store

    const handleEditSubmit = (e) => {
        e.preventDefault();
        const editedName = e.target.elements.name.value;
        const editedSurname = e.target.elements.surname.value;
        const editedAge = e.target.elements.age.value;
        const editedTel = e.target.elements.tel.value;

        const updatedContacts = props.contacts.map((c, i) => {
            if (i === props.index) {
                return {
                    name: editedName,
                    surname: editedSurname,
                    age: editedAge,
                    tel: editedTel,
                };
            }
            return c;
        });

        dispatch(editPerson(updatedContacts));
    };

    return (
        <form onSubmit={handleEditSubmit}>
            <input
                type="text"
                placeholder="Name"
                name="name"
                defaultValue={props.name} // Set initial value from the store
            />
            <input
                type="text"
                placeholder="Surname"
                name="surname"
                defaultValue={props.surname} // Set initial value from the store
            />
            <input
                type="number"
                placeholder="Age"
                name="age"
                defaultValue={props.age} // Set initial value from the store
            />
            <input
                type="number"
                placeholder="Tel"
                name="tel"
                defaultValue={props.tel} // Set initial value from the store
            />
            <button type="submit">Save</button>
        </form>
    );
};

export default EditForm;
