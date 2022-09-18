
let Array = [1, 1];

// Start Loop
for (let i = 0; i < 5; i++) {

  Array.push(Array[Array.length - 1] + Array[Array.length - 2])
  
}

console.log(`[${Array}]`);
