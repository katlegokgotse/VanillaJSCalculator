//Initialise
const container = document.createElement('div')
const grid_container = document.createElement('div')
const displayAnswer = document.createElement('input')
const one = document.createElement('button')
const two = document.createElement('button')
const three = document.createElement('button')
const four = document.createElement('button')
const five = document.createElement('button')
const six = document.createElement('button')
const seven = document.createElement('button')
const eight = document.createElement('button')
const nine = document.createElement('button')
const zero = document.createElement('button')
const plus = document.createElement('button')
const minus = document.createElement('button')
const multiply = document.createElement('button')
const divide = document.createElement('button')
const equalTo = document.createElement('button')
const clearCalc = document.createElement('button')
displayAnswer.id = "display"
displayAnswer.readOnly =  true
container.className = 'calculator'
grid_container.className = 'keys'
plus.className = "btnOperater"
minus.className = "btnOperater"
multiply.className = "btnOperater"
divide.className = "btnOperater"
clearCalc.className = "btnOperater"
one.innerHTML = "1"
two.innerHTML = "2"
three.innerHTML = "3"
four.innerHTML = "4"
five.innerHTML = "5"
six.innerHTML = "6"
seven.innerHTML = "7"
eight.innerHTML = "8"
nine.innerHTML = "9"
zero.innerHTML = "0"
plus.innerHTML = "+"
multiply.innerHTML = "*"
divide.innerHTML = "/"
minus.innerHTML = "-"
equalTo.innerHTML = "="
clearCalc.innerHTML = "C"

function appendToDisplay(input){
    //retrieve the state
    displayAnswer.value += input
}

function clearInformation(){
    //retrieve the state and clear it
    displayAnswer.value = " "
}

function calculate(){
    try{
        const expression = displayAnswer.value;
        const result = eval(expression);
        displayAnswer.value = result;
    }catch(error){
        displayAnswer.value = "Error";
    }
   
}

zero.addEventListener('click',() => appendToDisplay('0'));
one.addEventListener('click', () => appendToDisplay('1'));
two.addEventListener('click', () => appendToDisplay('2'));
three.addEventListener('click', () => appendToDisplay('3'));
four.addEventListener('click', () => appendToDisplay('4'));
five.addEventListener('click', () => appendToDisplay('5'));
six.addEventListener('click', () => appendToDisplay('6'));
seven.addEventListener('click', () => appendToDisplay('7'));
eight.addEventListener('click', () => appendToDisplay('8'));
nine.addEventListener('click', () => appendToDisplay('9'));
plus.addEventListener('click', () => appendToDisplay('+'));
minus.addEventListener('click', () => appendToDisplay('-'));
multiply.addEventListener('click', () => appendToDisplay('*'));
divide.addEventListener('click', () => appendToDisplay('/'));

equalTo.addEventListener('click', calculate());
clearCalc.addEventListener('click', clearInformation());

//To Display DOM nodes on the webpage
document.body.appendChild(container)
container.appendChild(displayAnswer)
container.appendChild(grid_container)
grid_container.appendChild(minus)
grid_container.appendChild(one)
grid_container.appendChild(two)
grid_container.appendChild(three)
grid_container.appendChild(multiply)
grid_container.appendChild(four)
grid_container.appendChild(five)
grid_container.appendChild(six)
grid_container.appendChild(divide)
grid_container.appendChild(seven)
grid_container.appendChild(eight)
grid_container.appendChild(nine)
grid_container.appendChild(plus)
grid_container.appendChild(zero)
grid_container.appendChild(equalTo)
grid_container.appendChild(clearCalc)