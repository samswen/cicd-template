'use strict';

const chai = require('chai');
const one = require('../src');

const expect = chai.expect;

// NODE_ENV=test mocha --reporter spec tests/test-demo

describe('Test demo', () => {

    it('simple', async () => {
        console.log('packages/one/tests/test-demo.js running');
        expect(one()).equals('one');
    });

});