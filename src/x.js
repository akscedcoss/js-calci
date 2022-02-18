lastValue = ''
// function to clear screen
function clr_scr () {
  document.getElementById('screen').value = ''
}
// function to add items and display screen
function display_screen (val) {
  document.getElementById('screen').value += val
}
function display_final () {
  if (lastValue == '') {
    document.getElementById('screen').value = 0
  } else {
    document.getElementById('screen').value = lastValue
  }
}
// function to update last value on screen
function update_last_value () {
  document.getElementById('lastvalue').innerHTML = lastValue
}
// function to calccualte
function calcualte (operand1, operator, operand2) {
  switch (operator) {
    case '+':
      console.log(operand1, operator, operand2)
      res = parseInt(operand1) + parseInt(operand2)
      lastValue = res
      update_last_value()
      break

    case '-':
      console.log(operand1, operator, operand2)
      res = parseInt(operand1) - parseInt(operand2)
      lastValue = res
      update_last_value()
      break
    case '*':
      console.log(operand1, operator, operand2)
      res = parseInt(operand1) * parseInt(operand2)
      lastValue = res
      update_last_value()
      break
    case '/':
      console.log(operand1, operator, operand2)
      res = parseInt(operand1) / parseInt(operand2)
      lastValue = res
      update_last_value()
      break
    case '%':
      console.log(operand1, operator, operand2)
      res = parseInt(operand1) % parseInt(operand2)
      lastValue = res
      update_last_value()
      break
  }
}
// when operator is clicked we will fetch the last value and apply
// the operator and reassign on diplay scren

function operator_function (operator) {
  console.log('operator is clciked')
  //   get the value on the screen
  num1 = document.getElementById('screen').value
  clr_scr()

  // if blank operator is clicked
  if (num1 == '') {
    num1 = 0
  }
  console.log('num1=>', num1)
  // get the value last
  num2 = lastValue == '' ? 0 : lastValue

  console.log('num2=>', num2)
  //   call calculate function
  calcualte(num1, operator, num2)
  console.log('lastValue=>', lastValue)
}

display_screen('')
