// @flow

import { expect } from 'chai';
import Main from '../src/index.js';

describe('Main', () => {
    let register;

    it('should be a class', () => {
	expect(new Main({})).to.not.equal(undefined);
    });

    beforeEach(() => {
        let rules: Object;
        rules = {
            A: [0, 0],
            B: [0, 0],
            C: [0, 0],
            D: [0, 0]
        };
        register = new Main(rules);
    });

    describe('Calculating Total', () => {
       it('total should be initialized to zero', () => {
         expect(register.total).to.equal(0);
       });

       it('scans an item and increments total', () => {
           register.scan("A");
           expect(register.total).to.equal(50);
       });

       it('increments total by 30 after scanning item B', () => {
           register.scan("B");
           expect(register.total).to.equal(30);
       });

       it('increments total by 20 after scanning item C', () => {
           register.scan("C");
           expect(register.total).to.equal(20);
       });

       it('increments total by 15 after scanning item D', () => {
           register.scan("D");
           expect(register.total).to.equal(15);
       });

       it('scanning multiple items increments total by item amount', () => {
          register.scan("A");
          register.scan("A");
          expect(register.total).to.equal(100);
       });

       it('allows for special multibuy sales', () => {
           let RULES = {
               A: [3, 130],
               B: [0, 0],
               C: [0, 0],
               D: [0, 0]
           };
           register = new Main(RULES);
           for(let i = 0; i < 3; i++) {
               register.scan("A");
           }
           expect(register.total).to.equal(130);
       });

        it('allows for special multibuy sales', () => {
            let RULES = {
                A: [3, 130],
                B: [0, 0],
                C: [0, 0],
                D: [0, 0]
            };
            register = new Main(RULES);
            for(let i = 0; i < 4; i++) {
                register.scan("A");
            }
            expect(register.total).to.equal(180);
        });
    });
});
