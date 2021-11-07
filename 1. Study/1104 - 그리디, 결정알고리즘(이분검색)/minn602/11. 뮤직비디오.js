//?

//구하고자하는 용량은 최소 용량 ~ 최대 용량 범위에 들어가게 된다.
//범위의 mid값을 구해서 n개 만큼 dvd가 나오게 되는지 확인한다
//최적의 답을 찾을 때까지 계속하게 된다.

function count(arr, storage) {
  let cnt = 1,
    sum = 0;
  for (let x of arr) {
    if (sum + x > storage) {
      cnt++;
      sum = x;
    } else {
      sum += x;
    }
  }
  return cnt;
}

function solution(arr, n) {
  let answer;
  //디비디 하나에 들어갈 수 있는 용량의 범위를 구해준다.
  let minStorage = Math.max(...arr);
  let maxStorage = arr.reduce((a, b) => a + b, 0);

  while (minStorage <= maxStorage) {
    let mid = parseInt((minStorage + maxStorage) / 2);
    if (count(arr, mid) <= n) {
      answer = mid;
      maxStorage = mid - 1;
    } else {
      minStorage = mid + 1;
    }
  }

  return answer;
}

solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3);
