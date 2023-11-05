import {it,expect} from 'vitest';
import { add, add1 } from './0_math';

it.skip('01-Should retrun the sum of array number',()=>{

    const result =add([1,2,3,4,5,6,7,8,9]);
    expect(result).toBe(45)
    // expect(result).toBe(46)
});
it.skip('02-Should failed the sum of array number',()=>{

    const result =add([1,2,3,4,5,6,7,8,9]);
    expect(result).equal(45)
});

it('03-AAA pattern',()=>{

    //arrange
    const numbers =[1,2,3,4,5,6,7,8,9];
    const expectedResult =numbers.reduce((acc,curr)=>acc+curr)

    //actions
    const result =add(numbers);

    //assertion
    expect(result).equal(expectedResult)
    // expect(result).equal(45)
});
it('04 should provide Nan if invalided number is provided',()=>{

    //arrange
    const numbers =[1,2,3,'invalid'];
    // const expectedResult =numbers.reduce((acc,curr)=>acc+curr)

    //actions
    const result =add(numbers);

    //assertion
    expect(result).toBeNaN()
});
it('05 should pass if numeric string is provided',()=>{

    //arrange
    const numbers =['1','3','3'];
    const expectedResult =numbers.reduce((acc,curr)=>+acc + +curr)

    //actions
    const result =add(numbers);

    //assertion
    expect(result).toBe(expectedResult)
});
it('06 Throw error if no argument pass',()=>{
    try {
        const result =add();
    } catch (error) {
        expect(error).toBeDefined()
    }

});
it('07 Throw error if no argument is passed',()=>{
  
    const resultFn=()=>{
        add();
    };

    expect(resultFn).toThrow()

});


it('08 Throw error if multiple argument is passed',()=>{
  
    const resultFn1=()=>{
        add1(1,2,3);
    };

    expect(resultFn1).toThrow(/something went wrong/i);
    // expect(resultFn).toThrow(/is not iterable/i);

});





