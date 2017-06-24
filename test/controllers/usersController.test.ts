import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import { app } from '../../src/server';

chai.use(chaiHttp);
const expect = chai.expect;

describe('Users controller test', () => {

    it('Users/Current should be json', () => {
        return chai.request(app).get('/v1/Users/Current')
            .then(res => {
                expect(res.type).to.eql('application/json');
            });
    });

    it('Users/:id should be json', () => {
        return chai.request(app).get('/v1/Users/1')
            .then(res => {
                expect(res.type).to.eql('application/json');
            });
    });

    it('Response should have a email prop', () => {
        return chai.request(app).get('/v1/Users/Current')
            .then(res => {
                expect(res.body.email).to.eql('test');
            });
    });

});