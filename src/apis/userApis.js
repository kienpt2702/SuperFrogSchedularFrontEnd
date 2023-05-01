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

const updateUser = async (userId, info) => {
    try {
        const res = await api.put(`${endpoint}/${userId}`, info);

        return res;
    } catch (err) {
        console.log(false)
    }
}

const deactivateUser = async (userId) => {
    try {
        const res = await api.delete(`${endpoint}/${userId}`);

        return res;
    } catch (err) {
        console.log(false)
    }
}

export {createUser, loginUser, getAllUsers, updateUser, deactivateUser}