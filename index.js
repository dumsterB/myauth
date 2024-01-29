import axios from 'axios';

class AuthModule {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async register(body) {
        try {
            const response = await axios.post(`${this.baseURL}/auth-back/api/v2/register`, body,{
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    }

    async confirmEmail(body) {
        try {
            const response = await axios.post(`${this.baseURL}/auth-back/api/v2/confirm-email`, body);
            return response.data;
        } catch (error) {
            throw error.response ? error.response.data : error.message;
        }
    }

    async login(body) {
        try {
            const response = await axios.post(`${this.baseURL}/auth-back/api/v2/login`, body);
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



