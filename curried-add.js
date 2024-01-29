function curriedAdd (total) {
  return function addNext(num) {
    if (total === undefined && num === undefined) return 0;

    const newTotal = total === undefined ? 0 : total;

    if (num === undefined) {
      return newTotal;
    }

    return curriedAdd(newTotal + num);
  };
}


module.exports = { curriedAdd };