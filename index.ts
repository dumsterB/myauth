import axios from 'axios';

class AuthModule {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async register(email, password) {
        try {
            const response = await axios.post(`${this.baseURL}/auth-back/api/v2/register`, { email, password });
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    }

    async confirmEmail(email, confirmationCode) {
        try {
            const response = await axios.post(`${this.baseURL}/auth-back/api/v2/confirm-email`, { email, confirmationCode });
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    }

    async login(email, password) {
        try {
            const response = await axios.post(`${this.baseURL}/auth-back/api/v2/login`, { email, password });
            return response.data.token;
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    }

    async checkAuthorization(token) {
        try {
            const response = await axios.get(`${this.baseURL}/auth-back/api/v2/protected-route`, {
                headers: { Authorization: token }
            });
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    }
}

export default AuthModule;



