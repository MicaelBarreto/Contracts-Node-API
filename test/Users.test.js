const should = require('should');
const axios = require('axios');
const chai = require('chai');
const expect = chai.expect;
const urlBase = 'http://localhost:3000';
const getToken = require('./Token.test').getToken;
var id;


describe('Users test API calls',function(){
    it('Retrieve all Users', function(){
        return getToken()
                .then(token => {
                    axios.get(urlBase+'/users', { headers: { auth: token } })
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
                    axios.post(urlBase+'/users', {
                        email: 'test@newtest.com',
                        password: '123465'
                    },
                    { headers: { auth: token } })
                        .then(res => {
                            response = res.data;
                            id = res.data.id;
                            expect(res.status).to.equal(201);
                            expect(typeof response).to.equal('object');
                            expect(response).to.have.lengthOf.at.least(2);
                            return id;
                        })
                        .catch(err => {
                            console.log(err);
                        });
                });
    });

    it('Update User', function(done){
        done();
    });

    it('Delete User', function(done){
        done();
    });
});