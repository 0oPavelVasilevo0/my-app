const initialState = {
    contacts: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PERSON':
            return { ...state, contacts: [...state.contacts, ...action.payload] };
        case 'DELETE_PERSON':
        case 'EDIT_PERSON':
            return { ...state, contacts: action.payload };
        default:
            return state
    }
};

export default rootReducer;
