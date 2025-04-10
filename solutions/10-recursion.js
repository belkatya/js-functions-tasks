const sequenceSum = (begin, end) => {
    // BEGIN
    if (begin > end) {
      return NaN;
    }
    if (begin === end) {
      return end;
    }
    return begin + sequenceSum(begin + 1, end);
    // END
  };
  
export default sequenceSum;
  