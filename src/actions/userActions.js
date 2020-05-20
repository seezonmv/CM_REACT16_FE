import { 
    ADD_USER_SUCCESS,
    FETCH_USER_SUCCESS,
    FETCH_USERS_SUCCESS,
    REMOVE_USER_SUCCESS,
    UPDATE_USER_SUCCESS,
    FILTER_USERS
} from '../constants/action-types'
import { UserService } from "../services/UserService";

export const fetchUsers = () => {
    return dispatch => {
        UserService.getUsers()
            .then(response => {
                dispatch({ type: FETCH_USERS_SUCCESS, payload: response.data });
            });
    };
};

export const fetchUser = (id) => {
    return async dispatch => {
        const response = await UserService.getUser(id);

        dispatch({ type: FETCH_USER_SUCCESS, payload: response.data });
    }
}

export const createUser = user => {
    return dispatch => {
        UserService.createUser(user)
            .then(response => {
                dispatch({ type: ADD_USER_SUCCESS, payload: response.data });
            });
    };
};

export const removeUser = id => {
    return dispatch => {
        UserService.removeUser(id)
            .then(() => {
                dispatch({ type: REMOVE_USER_SUCCESS, payload: id });
            });
    };
};

export const updateUser = user => {
    return dispatch => {
        UserService.updateUser(user)
            .then((response) => {
                dispatch({ type: UPDATE_USER_SUCCESS, payload: response.data });
            });
    };
};

export const filterUsers = (searchValue) => ({
    type: FILTER_USERS,
    payload: searchValue
});