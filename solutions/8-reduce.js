// BEGIN
export default (arr, property) => {
    if (arr.length === 0 || property === '') {
        return {};
    }
    const result = {}
    for (const i of arr) {
        const key = i[property];
        if (!Object.hasOwn(result, key)) {
            result[key] = [];
        }
        result[key].push(i);
    }
    return result;
}
// END