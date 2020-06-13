import 'mocha';

import {expect} from 'chai';

import {isValidbb26} from '../src/index';

import {bb26toDecimalInputTest, bb26toDecimalInvalidInputTest,} from './testObjects';

describe('#isValidbb26', function() {
  // input test
  bb26toDecimalInputTest.forEach(
      ({input}) => context('with argument ' + input, function() {
        it('should return true', function() {
          expect(isValidbb26(input)).to.equal(true);
        });
      }));

  // input test
  bb26toDecimalInputTest.forEach(
      ({input}) => context('with argument ' + input, function() {
        it('should return true', function() {
          expect(isValidbb26(input, true)).to.equal(true);
        });
      }));


  // invalid input test
  bb26toDecimalInvalidInputTest.forEach(
      ({input, result, error}) =>
          context('with invalid inputs ' + input, function() {
            it('Should throw error ' + error, function() {
              expect(function() {
                isValidbb26(input);
              }).to.throw(error!, result);
            });
          }));

  // invalid input test
  bb26toDecimalInvalidInputTest.forEach(
      ({input}) => context('with invalid inputs ' + input, function() {
        it('Should return no error and false', function() {
          expect(isValidbb26(input, true)).to.equal(false);
        });
      }));
});
