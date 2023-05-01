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

export {createUser, loginUser}