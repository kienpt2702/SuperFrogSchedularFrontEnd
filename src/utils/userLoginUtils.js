import cache from '@/utils/cacheUtils';
import {loginUser} from '@/apis/userApis';
import router from '@/router';

export async function login(loginInfo) {
    const res = await loginUser(loginInfo);
    const token = res.data.token;
    // We obviously can do this directly:
    // localStorage.setItem('token', token);
    // However, we choose to create an utility object to handle expire time
    cache.set('login_token', {token}, 7200); // token is valid for 2h
    //after successful login, redirect to home page

    const roles = res.data.userInfo.roles;
    const routeName = roles.includes('admin') ? 'director' : 'superfrogstudent';
    router.push({name: routeName});

    return res;
}

export function logout() {
    cache.remove('login_token');
// redirect to root page
    router.push('/home');
}