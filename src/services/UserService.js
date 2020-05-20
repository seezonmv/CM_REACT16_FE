import axios from 'axios';

export const UserService = {
    API: 'users',
    getUsers() {
        const URL = `${process.env.REACT_APP_API_URL}/${this.API}`;
        return axios.get(URL);
    },
    getUser(id) {
        const URL = `${process.env.REACT_APP_API_URL}/${this.API}/${id}`;
        return axios.get(URL);
    },
    removeUser(id) {
        const URL = `${process.env.REACT_APP_API_URL}/${this.API}/${id}`;
        return axios.delete(URL);
    },
    createUser(user) {
        const URL = `${process.env.REACT_APP_API_URL}/${this.API}`;
        return axios.post(URL, user);
    },
    updateUser(user) {
        const URL = `${process.env.REACT_APP_API_URL}/${this.API}/${user.id}`;
        return axios.put(URL, user);
    }
}
