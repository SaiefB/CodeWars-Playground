function paperwork(n, m) {
  if (n < 0 || m < 0) {
    console.log(0);
    return 0;
  } else {
    answer = n * m;
    console.log(answer);
    return answer;
  }
}

paperwork(5, 5); // 25
paperwork(5, -5); // 0
paperwork(-5, -5); // 0
