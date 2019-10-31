const axios = require('axios');

module.exports = {
    getToken() {
        return axios.post('http://localhost:3000/auth', {
            email: 'test@test.com',
            password: '123456'
        })
        .then(res => res.data.token)
        .catch(err => err);
    }
};