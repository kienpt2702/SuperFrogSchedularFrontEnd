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

const getAllUsers = async (searchParams) => {
    const res = await api.get(`${endpoint}`, {
        params: searchParams
    });

    return res.data;
}

const getUserById = async (userId) => {
    const res = await api.get(`${endpoint}/${userId}`);

    return res.data;
}

const updateUser = async (userId, info) => {
    const res = await api.put(`${endpoint}/${userId}`, info);

    return res;
}

const deactivateUser = async (userId) => {
    const res = await api.delete(`${endpoint}/${userId}`);

    return res;
}

export {createUser, loginUser, getAllUsers, getUserById, updateUser, deactivateUser}