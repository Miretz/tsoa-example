import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../../src/server';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Accounts controller test', () => {

    it('Accounts/Current should be json', () => {
        return chai.request(app).get('/v1/Accounts/Current')
            .then(res => {
                expect(res.type).to.eql('application/json');
            });
    });

    it('Accounts/Users should be json', () => {
        return chai.request(app).get('/v1/Accounts/Users')
            .then(res => {
                expect(res.type).to.eql('application/json');
            });
    });

    it('Response should have a name prop', () => {
        return chai.request(app).get('/v1/Accounts/Current')
            .then(res => {
                expect(res.body.name).to.eql('test');
            });
    });

});
