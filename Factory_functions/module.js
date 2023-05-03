const calculator = (() => {
    const _privateSub = (a, b) => a - b;
    const _privateSub2 = (a, b) => b - a;

    const add = (a, b) => a + b;
    const mul = (a, b) => a * b;
    const div = (a, b) => a / b;
    const sub = (a, b) => {
        if (a > b){
            return _privateSub(a, b);
        }
        else {
            return _privateSub2(a, b);
        }
    }

    return { add, sub, mul, div };
})();

let sum = calculator.add(3, 4);
console.log(sum);

let minus = calculator.sub(5, 10);
console.log(minus);

let product = calculator.mul(5, 34);
console.log(product);



