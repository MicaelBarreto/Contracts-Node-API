const should = require('should');
const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;
const urlBase = 'http://localhost:3000/users';
const getToken = require('./Token.test').getToken;

describe('Users test API calls',function(){

    it('Retrieve all Users', function(){
        return getToken()
                .then(token => {
                    axios.get(urlBase, { headers: { auth: token } })
                    .then(res => {
                        response = res.data;
                        expect(res.status).to.equal(200);
                        expect(typeof response).to.equal('object');
                        expect(response).to.have.lengthOf.at.least(2);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                });
    });

    it('Create new User', function(){
        return getToken()
                .then(token => {
                    axios.post(urlBase, {
                        email: 'test@newtest.com',
                        password: '123465'
                    },
                    { headers: { auth: token } })
                    .then(res => {
                        response = res.data;
                        console.log(response)
                        expect(res.status).to.equal(201);
                        expect(typeof response).to.equal('object');
                        expect(response).to.have.lengthOf.at.least(2);
                    })
                    .catch(err => {
                        console.log(err);
                    });
                });
    });

    it('Update User', function(){
        return getToken()
                .then(token => {
                    axios.put(urlBase+'/'+id, {
                        email: 'test@newtest.com',
                        password: '1234657'
                    },
                    { headers: { auth: token } })
                    .then(res => {
                        response = res.data;
                        expect(res.status).to.equal(200);
                        expect(typeof response).to.equal('object');
                    })
                    .catch(err => {
                        console.log(err);
                    });
                });
    });

    it('Delete User', function(done){
        done();
    });
});