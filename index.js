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
    async sendConfirmCode(body) {
        try {
            const response = await axios.post(`${this.baseURL}/auth-back/api/v2/sendConfirmCode`, body);
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

    async getMe(body) {
        try {
            const response = await axios.get(`${this.baseURL}/auth-back/api/v2/getUserInfo`, body);
            return response.data;
        } catch (error) {
            return error
        }
    }
}

/*const auth = new AuthModule('https://helloam');
const data = {
    email: 'fewfew@fewfew.few',
};

auth.sendConfirmCode(data);*/

export default AuthModule;




