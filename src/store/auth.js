import { parseCookies, setCookie, destroyCookie } from 'nookies';
import { create } from 'zustand';
import axiosInstance from '@/utils/axios';

/*
User fields
- email: string
- password: string
- username: string
- avatar_url: string or null
- phone_number: string or null
- location: {name: string}
- user_type: int (0: seller, 1: buyer)
- achievements: string or null
- about: string or null
*/

const fetchUser = async () => {
    try {
        const { jwt } = parseCookies();
        const data = await axiosInstance.get('user/');
        // setCookie(null, 'jwt', jwt, { maxAge: 60 * 60 * 24 *  7, path: '/' });
        return data.data;
    } catch (error) {
        console.log(error);
        return null;
    }
};

export const useAuthStore = create((set) => ({
    user: null,
    defaultAvatarUrl:
        'https://i.pinimg.com/564x/80/01/3b/80013ba9fbd82789fba7dd72e2428b96.jpg',
    getUser: async () => {
        const data = await fetchUser();
        set({ user: data });
        if (data) {
            return data;
        } else {
            return null;
        }
    },

    getGalleryUsers: async (filters) => {
        try {
            const data = await axiosInstance.get('gallery-user/', {
                params: filters,
            });
            return data.data;
        } catch (e) {
            console.error(e);
            return false;
        }
    },

    getGalleryUser: async (id) => {
        try {
            const data = await axiosInstance.get(`gallery-user/${id}/`);
            return data.data;
        } catch (e) {
            console.error(e);
            return null;
        }
    },

    login: async (email, password) => {
        console.log('herere');
        try {
            const data = await axiosInstance.post('login/', {
                email,
                password,
            });
            if (data.data.user.is_banned) {
                return false;
            }
            const jwt_token = data.data.jwt;
            setCookie(null, 'jwt', jwt_token, {
                maxAge: 60 * 60 * 24 * 365,
                path: '/',
            });
            set({ user: data.data.user });
            return true;
        } catch (error) {
            throw error;
        }
    },

    checkEmailAvailability: async (email) => {
        try {
            const data = await axiosInstance.get('check-email/', {
                params: { email },
            });
            return data.data;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    register: async (data) => {
        try {
            const response = await axiosInstance.post('register/', data);
            return response.data;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    logout: () => {
        destroyCookie(null, 'jwt');
        set({ user: null });
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    },

    fetchUserLocations: async (filters) => {
        const response = await axiosInstance.get('user-location/', {
            params: filters,
        });
        return response.data;
    },

    createFollowing: async (id) => {
        try {
            const data = {
                following_id: id,
            };
            const response = await axiosInstance.post('following/', data);
            return response.data;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    deleteFollowing: async (id) => {
        try {
            const response = await axiosInstance.delete(`following/${id}/`);
            return response.data;
        } catch (error) {
            console.log(error);
            return false;
        }
    },

    fetchFollowings: async (filters = {}) => {
        const response = await axiosInstance.get('following/', {
            params: filters,
        });
        return response.data;
    },
}));
