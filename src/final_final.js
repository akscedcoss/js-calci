stack = []
function update_last_value (lastValue = 0) {
  document.getElementById('lastvalue').innerHTML = lastValue
}
// function to add items and display screen
function display_screen (val) {
  document.getElementById('screen').value += val
}
//  function to calcualte value
function calci (a, oper, b) {
  switch (oper) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return a / b
  }
}
// when operator is clicked
function operator_function (operator) {
  //value on screen
  num = document.getElementById('screen').value
  document.getElementById('screen').value = ''
  if (num != '') {
    if (stack.length > 0) {
      // updates value
      // get the last value  and operator stored in stack
      //then push the operator recived and caluclated value to the Stack
      oper_old = stack.pop()
      num_old = stack.pop()
      console.log(
        'OPERAND =>> ' + oper_old,
        'NUMBER =>> ' + num_old,
        'CUrrent Number' + num
      )

      res = calci(parseInt(num_old), oper_old, parseInt(num))
      console.log('res =>> ' + res)
      stack.push(res)
      stack.push(operator)
      update_last_value(res)
    } else {
      stack.push(num)
      stack.push(operator)
      update_last_value(num)
      console.log(
        num +
          '  Else ConDiton Pusshed in stack' +
          operator +
          'operator  pussed '
      )
    }
  }
}
