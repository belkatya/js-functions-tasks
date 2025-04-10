// BEGIN
export default (users) => {
    const childrens = users.map(user => user.children);
    return childrens.flat();
}
// END