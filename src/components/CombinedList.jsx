// import React, { useState } from 'react';
// import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
// import EditForm from './EditForm';
// import './../styles/App.css';

// const CombinedList = (props) => {
//     const arr = props.data;
//     const [editIndex, setEditIndex] = useState(-1);

//     const handleDelete = (index) => {
//         const updatedContacts = arr.filter((_, i) => i !== index);
//         props.onDelete(updatedContacts);
//     };

//     const handleEdit = (index) => {
//         setEditIndex(index);
//     };

//     const handleEditSubmit = (editedName, editedSurname, editedAge, editedTel) => {
//         const updatedContacts = arr.map((contact, i) => {
//             if (i === editIndex) {
//                 return { name: editedName, surname: editedSurname, age: editedAge, tel: editedTel };
//             }
//             return contact;
//         });
//         props.onEdit(updatedContacts);
//         setEditIndex(-1);
//     };

//     const combinedItems = arr.map((person, index) => (
//         <li key={index}>
//             {editIndex === index ? (
//                 <EditForm
//                     name={person.name}
//                     surname={person.surname}
//                     age={person.age}
//                     tel={person.tel}
//                     onSubmit={(editedName, editedSurname, editedAge, editedTel) =>
//                         handleEditSubmit(editedName, editedSurname, editedAge, editedTel)
//                     }
//                 />
//             ) : (
//                 <>
//                     <span className="title">Name: </span> <span className="info">{person.name}</span><br />
//                     <span className="title">Surname: </span> <span className="info">{person.surname}</span><br />
//                     <span className="title">Age: </span> <span className="info">{person.age}</span><br />
//                     <span className="title">Tel: </span> <span className="info">{person.tel}</span><br />
//                     <button className="btn" onClick={() => handleDelete(index)}>
//                         <RiDeleteBinLine className="icon" />
//                     </button>
//                     <button className="btn" onClick={() => handleEdit(index)}>
//                         <RiEdit2Line className="icon" />
//                     </button>
//                 </>
//             )}
//         </li>
//     ));

//     return <ul>{combinedItems}</ul>;
// };

// export default CombinedList;


import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deletePerson, editPerson } from '../redux/actions';
import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import EditForm from './EditForm';
import './../styles/App.css';

const CombinedList = () => {
    const contacts = useSelector((state) => state.contacts);
    const dispatch = useDispatch();
    const [editIndex, setEditIndex] = useState(-1);

    const handleDelete = (index) => {
        const updatedContacts = contacts.filter((_, i) => i !== index);
        dispatch(deletePerson(updatedContacts));
    };

    const handleEdit = (index) => {
        setEditIndex(index);
    };

    const handleEditSubmit = (editedName, editedSurname, editedAge, editedTel, index) => {
        const updatedContacts = contacts.map((contact, i) => {
            if (i === index) {
                return {
                    name: editedName,
                    surname: editedSurname,
                    age: editedAge,
                    tel: editedTel
                };
            }
            return contact;
        });
        dispatch(editPerson(updatedContacts));
        setEditIndex(-1); // Reset editIndex
    };

    const combinedItems = contacts.map((person, index) => (
        <li key={index}>
            {editIndex === index ? (
                <EditForm
                    name={person.name}
                    surname={person.surname}
                    age={person.age}
                    tel={person.tel}
                    contacts={contacts}
                    index={index}
                    onSubmit={(editedName, editedSurname, editedAge, editedTel) =>
                        handleEditSubmit(editedName, editedSurname, editedAge, editedTel, index)
                    }
                />
            ) : (
                <>
                    <span className="title">Name: </span> <span className="info">{person.name}</span><br />
                    <span className="title">Surname: </span> <span className="info">{person.surname}</span><br />
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