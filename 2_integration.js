import { transformToNumber } from "./1_transformToNumber";

export function cleanNumbers(inputNumbers){
    const numbers=[];
    for(const num of inputNumbers){
        validdateStringNotEmpty(num);
        const number=transformToNumber(num);
        validateNumber(number);
        numbers.push(number)
    }
    return numbers
}