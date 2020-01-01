import { expect } from "chai";
import "mocha";
import {decimalTobb26InputTest,decimalTobb26InvalidInputTest} from './testObjects'
import { decimalTobb26 } from "../src/index";

describe("#decimalTobb26", function(){
    //input test
    decimalTobb26InputTest.forEach( ({input, result})=>context("with argument "+input, function(){
        it('should return '+result, function (){
            expect(decimalTobb26(input)).to.equal(result)
        })
    }))

    //invalid input test
    decimalTobb26InvalidInputTest.forEach( ({input, result,error})=>context("with invalid inputs", function(){
            it('Should throw error '+ error, function(){
                expect(function(){
                    decimalTobb26(input)
                }).to.throw(error,result)
            })
        }))
})