export function add(numbers){
    let sum =0;
    for(const number of numbers){
        sum += +number;
        // sum += number;
    }
    return sum;
}
export function add1(numbers){
    let sum =0;


    throw new Error('something went wrong')
    for(const number of numbers){
        sum += +number;
    }
    return sum;
}