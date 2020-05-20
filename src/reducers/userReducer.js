import {
    ADD_USER_SUCCESS,
    FETCH_USER_SUCCESS,
    FETCH_USERS_SUCCESS,
    REMOVE_USER_SUCCESS,
    FILTER_USERS
} from '../constants/action-types';

const initialState = {
    users: [],
    user: {},
    filtered: []
};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case FETCH_USERS_SUCCESS:
            return { ...state, users: payload, user: {}, filtered:[] };
        case FETCH_USER_SUCCESS:
            return { ...state, user: payload };
        case ADD_USER_SUCCESS:
            return { ...state, users: [...state.users, payload ] };
        case REMOVE_USER_SUCCESS:
            return { ...state, users: state.users.filter(user =>user.id !== payload) };
        case FILTER_USERS:
            const value = payload.toLowerCase();
        console.log("vallue=>",value);
            return { ...state, filtered: state.users.filter(({ name }) => {
                return name.toLowerCase().includes(value);
            })};
        default:
            return state;
    }
};
