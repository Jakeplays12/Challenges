// Looping Config

var Loop_Amount = 3

// Code

let ArrayF = Array ( )

ArrayF[0] = Array (1, 2, 3, 4, 5)

for (let i = 0; i < Loop_Amount; i++) {
let I2 = (i + 1)
let N1 = [(ArrayF[i][Array.length + 3] + 1), (ArrayF[i][Array.length + 3] + 2), (ArrayF[i][Array.length + 3] + 3), (ArrayF[i][Array.length + 3] + 4), (ArrayF[i][Array.length + 3] + 5)]

ArrayF[I2] = N1

}
console.log(`\n - - - - - \n`, ArrayF, `\n - - - - - \n`, )
