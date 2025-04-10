// BEGIN
export default (...dates) => {
    if (dates.length === 0) {
        return [];
    }
    const resultDates = [];
    for (const [year, month, day] of dates) {
        resultDates.push(new Date(year, month, day).toDateString());
    }
    return resultDates;
}
// END