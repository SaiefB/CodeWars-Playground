function makeNegative(num) {
    if (num === 0) {
        return 0
    } else if (num < 0) {
        return num
    } else {
        let result = 0;
        result = result - num;
        return result
    }
  }