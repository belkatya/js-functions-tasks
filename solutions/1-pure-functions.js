// BEGIN
const isPrime = (number) => {
    if (number <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i += 1) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

export default (number) => {
    if (isPrime(number)) {
        console.log('yes');
    }
    else {
        console.log('no');
    }
}
// END