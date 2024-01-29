import axios from 'axios';

class AuthModule {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }

    async register(body) {
        try {
            console.log(body)
            const response = await axios.post(`${this.baseURL}/auth-back/api/v2/register`, body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return response.data;
        } catch (error) {
            console.log(error)
           return error
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

const auth = new AuthModule('https://helloam');
const data = {
    password: '23423',
    email: 'fewfew@fewfew.few',
    phone: '3242342',
    userInfo: '432423'
};

auth.register(data);

export default AuthModule;




