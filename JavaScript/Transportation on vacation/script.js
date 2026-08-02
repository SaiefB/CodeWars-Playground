function rentalCarCost(d) {
  if (d <= 2) {
    return d * 40;
  } else if (2 < d && d < 7) {
    return d * 40 - 20;
  } else {
    return d * 40 - 50;
  }
}
