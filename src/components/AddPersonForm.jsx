// import React, { useState } from 'react';
// import './../styles/App.css';

// const AddPersonForm = (props) => {
//     const [name, setName] = useState('');
//     const [surname, setSurname] = useState('');
//     const [age, setAge] = useState('');
//     const [tel, setTel] = useState('');

//     const handleChangeName = (e) => {
//         setName(e.target.value);
//     };

//     const handleChangeSurname = (e) => {
//         setSurname(e.target.value);
//     };

//     const handleChangeAge = (e) => {
//         setAge(e.target.value);
//     };

//     const handleChangeTel = (e) => {
//         setTel(e.target.value);
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (name.trim() !== '' && surname.trim() !== '' && age.trim() !== '' && tel.trim() !== '') {
//             props.handleSubmit(name.trim(), surname.trim(), age.trim(), tel.trim());
//             setName('');
//             setSurname('');
//             setAge('');
//             setTel('');
//         }
//     };

//     return (
//         <>
//             <h1>Contact Manager</h1>
//             <form onSubmit={handleSubmit}>
//                 <input
//                     type="text"
//                     placeholder="Name"
//                     onChange={handleChangeName}
//                     value={name}
//                 />
//                 <input
//                     type="text"
//                     placeholder="Surname"
//                     onChange={handleChangeSurname}
//                     value={surname}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Age"
//                     onChange={handleChangeAge}
//                     value={age}
//                 />
//                 <input
//                     type="number"
//                     placeholder="Tel"
//                     onChange={handleChangeTel}
//                     value={tel}
//                 />
//                 <button type="submit">Add</button>
//             </form>
//         </>
//     );
// };

// export default AddPersonForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addPerson } from '../redux/actions';
import './../styles/App.css';

const AddPersonForm = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [age, setAge] = useState('');
    const [tel, setTel] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name.trim() !== '' && surname.trim() !== '' && age.trim() !== '' && tel.trim() !== '') {
            dispatch(addPerson(name.trim(), surname.trim(), age.trim(), tel.trim()));
            setName('');
            setSurname('');
            setAge('');
            setTel('');
        }
    };

    // const handleChangeName = (e) => {
    //     const newName = e.target.value;
    //     dispatch({ type: 'UPDATE_NAME', payload: newName });
    // };

    // const handleChangeSurname = (e) => {
    //     const newSurname = e.target.value;
    //     dispatch({ type: 'UPDATE_SURNAME', payload: newSurname });
    // };

    // const handleChangeAge = (e) => {
    //     const newAge = e.target.value;
    //     dispatch({ type: 'UPDATE_AGE', payload: newAge });
    // };

    // const handleChangeTel = (e) => {
    //     const newTel = e.target.value;
    //     dispatch({ type: 'UPDATE_TEL', payload: newTel });
    // };

    // return (
    //     <>
    //         <h1>Contact Manager</h1>
    //         <form onSubmit={handleSubmit}>
    //             <input
    //                 type="text"
    //                 placeholder="Name"
    //                 onChange={handleChangeName}
    //                 value={name}
    //             />
    //             <input
    //                 type="text"
    //                 placeholder="Surname"
    //                 onChange={handleChangeSurname}
    //                 value={surname}
    //             />
    //             <input
    //                 type="number"
    //                 placeholder="Age"
    //                 onChange={handleChangeAge}
    //                 value={age}
    //             />
    //             <input
    //                 type="number"
    //                 placeholder="Tel"
    //                 onChange={handleChangeTel}
    //                 value={tel}
    //             />
    //             <button type="submit">Add</button>
    //         </form>
    //     </>
    // );

    return (
        <>
            <h1>Contact Manager test</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />
                <input
                    type="text"
                    placeholder="Surname"
                    onChange={(e) => setSurname(e.target.value)}
                    value={surname}
                />
                <input
                    type="number"
                    placeholder="Age"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                />
                <input
                    type="number"
                    placeholder="Tel"
                    onChange={(e) => setTel(e.target.value)}
                    value={tel}
                />
                <button type="submit">Add</button>
            </form>
        </>
    );
};

export default AddPersonForm;
