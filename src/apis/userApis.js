import api from "@/apis/config.js";

const endpoint = '/users';

const createUser = async (userInfo) => {
    return await api.post(`${endpoint}`, userInfo);
};

const loginUser = async (loginInfo) => {
    const res = await api.post(`${endpoint}/login`, {}, {
        auth: loginInfo
    });
    // add more logic here if needed

    return res;
}

const getAllUsers= async (searchParams) => {
    const res = await api.get(`${endpoint}`, {
        params: searchParams
    });

    return res.data;
}

export {createUser, loginUser, getAllUsers}