const str: string = '123';
// error TS2363: The right-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
console.log(123 * str);