var should = require('should');
var request = require('request');
var chai = require('chai');
var expect = chai.expect;
var urlBase = 'http://localhost:3000';
var token;

describe('Payments test API calls',function(){

    it('Get Token',function(done){
        request.post({
            url: urlBase + '/auth',
            form: {
                email: 'test@test.com',
                password: '123456'
            }
        },
        function(error, response, body) {
            if(error){
                console.log(error);
                done();
            }

            var _body = {};
            try{
                _body = JSON.parse(body);
            }
            catch(e){
                _body = {};
            }
            
            expect(response.statusCode).to.equal(200);

            token = _body.token;
            
            done();
        });
    });
    
    it('Retrieve all Payments',function(done){
        done();
    });

    it('Create new Payment',function(done){
        done();
    });

    it('Update Payment',function(done){
        done();
    });

    it('Delete Payment',function(done){
        done();
    });
});