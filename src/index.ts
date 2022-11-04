// get arguments
//
import { readFileSync } from 'fs';
import { argv } from 'node:process';
//
// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val)
})

console.log(process.argv[2])


const file = readFileSync(process.argv[2], 'utf8')
console.log(file)

const newArray = file.split(/\r?\n/)
// pop last element, since it will be empty (the EOF)
newArray.pop()
console.log(newArray)
