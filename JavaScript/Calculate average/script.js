function findAverage(array) {
  const initialValue = 0;
  const sumWithInitial = array.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue,
  );
  const average = sumWithInitial / array.length;
  return average;
}
