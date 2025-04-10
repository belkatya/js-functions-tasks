import _ from 'lodash';

// BEGIN
export default (...arg) => {
    if (arg.length === 0) {
        return null;
    }
    return _.sum(arg)/arg.length;
}
// END