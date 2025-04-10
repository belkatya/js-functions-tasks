const smallestDivisor = (num) => {
    // BEGIN
    if (num === 1) {
      return 1;
    }
    
    const iter = (counter) => {
      if (counter > Math.sqrt(num)) {
        return num;
      }
      if (num % counter === 0) {
        return counter;
      }
      return iter(counter + 1);
    }
    return iter(2);
    // END
  };
  
export default smallestDivisor;
  