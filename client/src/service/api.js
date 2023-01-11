import axios from 'axios';


//const URL = 'https://magnificent-newt-housecoat.cyclic.app';
const URL = 'http://localhost:8080'
export const authenticateSignup = async(data) => {

    try {
        return await axios.post(`${URL}/signup`, data);
    } catch (error) {
        console.log("Error while Signup",error);
    }

}    


export const authenticateLogin = async(data) => {

    try {
       return await axios.post(`${URL}/login`, data)
    } catch (error) {
        console.log("Error while Logging in",error);
        //return error.response;
    }

}    



export const addCart = async(data) => {

    try {
       let id =  data.id;
       return await axios.post(`${URL}/addToCart/${id}`, data)
    } catch (error) {
        console.log("Error while adding to cart",error);
        return error.response;
    }

}    



