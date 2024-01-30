import axios from 'axios';

class AuthModule {
    constructor(baseURL) {
        this.baseURL = baseURL;
    }
    async register(body) {
        try {
            const response = await axios.post(`${this.baseURL}/auth-back/api/v2/register`, body, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return response.data;
        } catch (error) {
           return error
        }
    }

    async confirmEmail(body) {
        try {
            const response = await axios.post(`${this.baseURL}/auth-back/api/v2/confirm-email`, body);
            return response.data;
        } catch (error) {
            return error
        }
    }
    async sendEmailConfirmationLink(body) {
        try {
            const response = await axios.post(`${this.baseURL}/auth-back/api/v2/sendEmailConfirmationLink`, body);
            return response.data;
        } catch (error) {
            return error
        }
    }

    async login(body) {
        try {
            const response = await axios.post(`${this.baseURL}/auth-back/api/v2/login`, body);
            return response.data;
        } catch (error) {
            return error
        }
    }

    async checkAuthorization(token) {
        try {
            const response = await axios.get(`${this.baseURL}/auth-back/api/v2/protected-route`, {
                headers: { Authorization: token }
            });
            return response.data;
        } catch (error) {
            return error
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




