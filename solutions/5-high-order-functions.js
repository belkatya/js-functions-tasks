import _ from 'lodash';

// BEGIN
export default (users, count = 1) => {
    const sortedUsers = _.sortBy(users, (user) => Date.parse(user.birthday));
    return sortedUsers.slice(0, count);
}
// END