
// ↓ determines the amount of lines that gets sent.
let numRows = 5

  // ↓ This starts the array, without this there would be no array containing arrays with the numbers
  let answer = [];
  for (let row = 1; row <= numRows; row++) {
      let arr = [];
      for (let col = 0; col < row; col++) {
          if (col === 0 || col === row - 1) {
              arr.push(1);
          } else {
              arr.push((answer[row-2][col-1] + answer[row-2][col]));
              
          }
      }
      answer.push(arr);
  }

// ↓ this just sends our finished array to console
  console.log(answer)

  // I used this website ↓ to help with the code, I modified it to work in my environment. That link is very very long. 
  // https://dev.to/alisabaj/solving-pascal-s-triangle-in-javascript-4e59#:~:text=Coding%20the%20Solution&text=function%20pascals(numRows)%20%7B%20if,up%20the%20first%20for%20loop.
