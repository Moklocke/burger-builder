import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-5b2f3-default-rtdb.firebaseio.com/'
});

export default instance;