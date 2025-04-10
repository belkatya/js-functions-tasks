// BEGIN
export default (users) => {
    const friendsArray = users.map(user => user.friends.filter((friend) => friend.gender === 'female'));
    return friendsArray.flat();
}
// END