import {it,expect} from 'vitest';
import { transformToNumber } from './1_transformToNumber';

it('01-should pass if numeric string is provided',()=>{
    const stringValue ='4';
    const result =transformToNumber(stringValue);

    expect(result).toBeTypeOf('number');
    expect(result).not.toBeTypeOf('string');
})
it('02-should pass if result is not string',()=>{
    const stringValue ='4';
    const result =transformToNumber(stringValue);

    // expect(result).toBeTypeOf('number');
    expect(result).not.toBeTypeOf('string');
})
it('03-should pass if result is not string',()=>{
    const stringValue ='4';
    const result =transformToNumber(stringValue);

    // expect(result).toBeTypeOf('number');
    expect(isNaN(result)).not.toBe(true)
})