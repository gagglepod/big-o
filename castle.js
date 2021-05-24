function solution(A) {
  let N = A.length;
  if (N < 3) return 0;
  let peaks = 0;
  let peaksTillNow = [0];
  let dividers = [];

  for (let i = 1; i < N - 1; i++) {
    if (A[i - 1] < A[i] && A[i] > A[i + 1]) peaks++;
    peaksTillNow.push(peaks);

    if (N % i === 0) dividers.push(i);
  }

  peaksTillNow.push(peaks);

  if (peaks === 0) return 0;
  let blocks;
  let result = 1;

  for (blocks of dividers) {
    let K = N / blocks;
    let prevPeaks = 0;
    let OK = true;

    for (let i = 1; i <= blocks; i++) {
      if (peaksTillNow[i * K - 1] > prevPeaks) {
        prevPeaks = peaksTillNow[i * K - 1];
      } else {
        OK = false;
        break;
      }
    }
    if (OK) result = blocks;
  }
  return result;
  console.log(result);
}
