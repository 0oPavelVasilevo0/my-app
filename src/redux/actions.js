export const addPerson = (name, surname, age, tel) => ({
    type: 'ADD_PERSON',
    payload: [{ name, surname, age, tel }]
});

export const deletePerson = (updatedContacts) => ({
    type: 'DELETE_PERSON',
    payload: updatedContacts
});

export const editPerson = (updatedContacts) => ({
    type: 'EDIT_PERSON',
    payload: updatedContacts
});