import { readFileSync, promises } from 'fs'
import promptSync from 'prompt-sync'
/**
 * The HelloWorld program implements an application that
 * simply displays "Hello World!" to the standard output.
 *
 * By:      Mr. Coxall
 * Version: 1.0
 * Since:   2020-01-01
 */ 

const file1 = readFileSync('./set1.txt', 'utf-8')
console.log(`File1 is ${file1}`)
const file2 = readFileSync('./set2.txt', 'utf-8')
const file3 = readFileSync('./set3.txt', 'utf-8')

const prompt = promptSync()
const number = []
let sum1: number = 0
let median: number
let median1: number
let median2: number
const count = []
let fileName: string = ''

const chooseFile = prompt('Choose a file from file1, file2 and file3: ')
if (chooseFile == 'file1') {
  fileName = file1
} else if (chooseFile == 'file2') {
  fileName = file2
} else if (chooseFile == 'file3') {
  fileName = file3
} else {
  console.log('Choose a file!')
}
if (chooseFile == 'file1' || chooseFile == 'file2' || chooseFile == 'file3') {
  const array = fileName.split(/\r?\n/)

  for (let loopCounter = 0; loopCounter < array.length + 9; loopCounter ++) {
    let singleNumber = array[array.length - 1]
    if (singleNumber != undefined) {
      let single = parseInt(singleNumber)
      number.push(single)
    }
    array.pop()
  }
  console.log(`The list is ${number}`)
  for (let i = 0; i < number.length; i ++) {
    let add = number[i]
    sum1 = sum1 + add
  }
  console.log(`The sum of the numbers is ${sum1}`)
  const mean = sum1 / number.length
  console.log(`The mean is ${mean}`)
  let numberSort = number.sort(function (a, b) { return a - b })
  console.log(`Sort the number from small to big: ${numberSort}`)
  if (Number.isInteger(number.length / 2)) {
    median1 = numberSort[number.length / 2]
    median2 = numberSort[number.length / 2 + 1]
    console.log(`The medians are ${median1} and ${median2}.`)
  } else {
    median = numberSort[(number.length + 1) / 2]
    console.log(`The median is ${median}.`)
  }
  for (let loopCounter2 = 0; loopCounter2 < number.length; loopCounter2 ++) {
    const element = number[loopCounter2]
    if (count[element]) {
      count[element] += 1
    } else {
      count[element] = 1
    }
  }
  console.log(count)
} else {
  console.log('Choose a file!')
}
