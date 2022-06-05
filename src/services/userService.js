import axios from "../axios"
const handleLoginAPI = (email, password) => {
    return axios.post('/api/login', { email, password });
    // console.log('hello');
    // console.log(email);
    // console.log(password);
}
const getAllUser = (id) => {
    return axios.get(`/api/get-all-user?id=${id}`)
}
const createNewUserService = (data) => {
    console.log('>>>check data from userservice: ', data);
    return axios.post('/api/create-new-user', data)
}
const deletUserService = (userId) => {
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}
const editUserService = (inputData) => {
    console.log('>>>check id user to nodejs: ');
    return axios.put('/api/edit-user', inputData);

}
const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`)

}
export {
    handleLoginAPI,
    getAllUser,
    createNewUserService,
    deletUserService,
    editUserService,
    getAllCodeService,
};