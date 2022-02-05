// let title = document.querySelector('.title')
// let newTitle = prompt(`Введите новый текст`)
// title.textContent = newTitle
// let btn = document.querySelector('.btn')
// btn.onclick = function () {
//     let newTitle = prompt(`Введите новый текст`)
// title.textContent = newTitle
// }

let firstNumber = document.getElementById('first__number')
let secondNumber = document.getElementById('second__number')
let btnPlus = document.querySelector('#btn__plus')
let btnMinus = document.querySelector('#btn__minus')
let btnMultyply = document.querySelector('#btn__multyply')
let btnDivedet = document.querySelector('#btn__divedet')
let result = document.querySelector('.result')

btnPlus.onclick = function () {
    let sum = firstNumber.value*1 + secondNumber.value*1
    result.textContent = sum
    
}
btnMinus.onclick = function () {
    let sum = firstNumber.value*1 - secondNumber.value*1
    result.textContent = sum
    
}
btnMultyply.onclick = function () {
    let sum = firstNumber.value*1 * secondNumber.value*1
    result.textContent = sum
    
}
btnDivedet.onclick = function () {
    let sum = firstNumber.value*1 / secondNumber.value*1
    result.textContent = sum
    
}
btn__firstSquare.onclick = function () {
    let sum = firstNumber.value**2
    result.textContent = sum
    
}
btn__secondSquare.onclick = function () {
    let sum = secondNumber.value**2
    result.textContent = sum
    
}
btn__secondSquare.onclick = function () {
    let sum = secondNumber.value**2
    result.textContent = sum
    
}
btn__firstFloor.onclick = function () {
    let sum = Math.sqrt( firstNumber.value)
    result.textContent = sum
    
}
btn__secondFloor.onclick = function () {
    let sum = Math.sqrt(secondNumber.value)
    result.textContent = sum
    
}