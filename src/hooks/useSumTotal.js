const useSumTotal = (object) => {
    const reducer = (accumulator, currentValue) =>
      accumulator + currentValue.price;
    const sum = object.reduce(reducer, 0);
    return sum;
  };

export default useSumTotal;