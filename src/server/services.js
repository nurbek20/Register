import instance from './settings';
import Cookies from 'js-cookie';

const register = (object) => {
    console.log(object)   
    return instance.post("email/register", object)
}
const login = (object) => {
    console.log("servisec login>>>", object)   
    return instance.post("email/login", object)
}



const services = {
    register,
    login,
    // getMe
}


export default services;