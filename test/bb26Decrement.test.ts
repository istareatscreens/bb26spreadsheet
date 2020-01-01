import { expect } from "chai";
import "mocha";
import {bb26DecrementInputTest,bb26DecrementInvalidInputTest} from './testObjects'
import { bb26Decrement } from "../src/index";

describe("#bb26Derement", function(){
    //input test
    bb26DecrementInputTest.forEach( ({input, result})=>context("with argument "+input, function(){
        it('should return '+result, function (){
            expect(bb26Decrement(input)).to.equal(result);
        })
    }))

    //invalid input test
    bb26DecrementInvalidInputTest.forEach( ({input, result,error})=>context("with invalid inputs", function(){
        it('Should throw error '+ error, function(){
            expect(function(){
                bb26Decrement(input)
            }).to.throw(error,result)
        })
    }))

})