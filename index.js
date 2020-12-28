//task 1
function showNums() {
  for (let i = 25; i > 0; i--) {
    console.log(i);
  }
  let num = 25;
  while (num > 0) {
    console.log(num);
    num--;
  }
  num = 25;
  do {
    console.log(num);
    num--;
  } while (num > 0);
}
//task 2
function evenlyCheck() {
  for (let i = 10; i < 50; i++) {
    if (i % 5 === 0) {
      console.log(i);
    }
  }

  let num = 10;
  while (num <= 50) {
    if (num % 5 === 0) {
      console.log(num);
    }
    num++;
  }

  num = 10;
  do {
    if (num % 5 === 0) {
      console.log(num);
    }
    num++;
  } while (num <= 50);
}
//task 3
function showSumm() {
  let result = 0;
  for (let i = 1; i <= 100; i++) {
    result += i;
  }
  console.log(result);

  result = 0;
  let i = 0;
  while (i <= 100) {
    result += i;
    i++;
  }
  console.log(result);

  result = 0;
  i = 0;
  do {
    result += i;
    i++;
  } while (i <= 100);
  console.log(result);
}
//task4
function solveTask() {
  let answer = 2 + 2 * 2;
  while (true) {
    let userAnswer = prompt("Solve this tusk: 2 + 2 * 2");
    if (userAnswer === answer) {
       break;
    }
  }
  
  do {
    let userAnswer = prompt("Solve this tusk: 2 + 2 * 2");
    if (userAnswer === answer) {
      break;
    }
  } while (true);
}
// showNums();
// evenlyCheck();
// showSumm();
