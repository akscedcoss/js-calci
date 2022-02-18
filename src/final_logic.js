lastValue = ''
// function to add items and display screen
function display_screen (val) {
  document.getElementById('screen').value += val
}
// function to clear screen
function clr_scr () {
  document.getElementById('screen').value = ''
}

// function to calccualte
function calcualte (operand1, operator, operand2) {
  switch (operator) {
    case '+':
      console.log(operand1, operator, operand2)
      res = operand1 + operand2
      lastValue = res
      update_last_value()
      break

    case '-':
      console.log(operand1, operator, operand2)
      res = operand1 - operand2
      lastValue = res
      update_last_value()
      break
    case '*':
      console.log(operand1, operator, operand2)
      if (operand2 == 0) {
        operand2 = 1
      }
      res = operand1 * operand2
      lastValue = res
      update_last_value()
      break
    case '/':
      console.log(operand1, operator, operand2)
      if (operand2 == 0) {
        operand2 = 1
      }
      res = operand1 / operand2
      lastValue = res
      update_last_value()
      break
    case '%':
      console.log(operand1, operator, operand2)
      res = operand1 % operand2
      lastValue = res
      update_last_value()
      break
  }
}
// function to update last value on screen
function update_last_value () {
  document.getElementById('lastvalue').innerHTML = lastValue
}
// when operator is clicked we will fetch the last value and apply
// the operator and reassign on diplay scren

function operator_function (operator) {
  console.log('operator is clciked')
  //   get the value on the screen
  num1 = document.getElementById('screen').value
  clr_scr()

  console.log('num1=>', num1)
  // get the value last
  num2 = lastValue == '' ? 0 : lastValue

  console.log('num2=>', num2)
  // Call calculate function
  if (num1 != '') {
    calcualte(parseInt(num1), operator, parseInt(num2))
  }
}

display_screen('')
