import {it,expect} from 'vitest';
import { add } from './math';

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

