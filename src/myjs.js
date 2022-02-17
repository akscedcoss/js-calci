// function to clear screen
function clr_scr () {
  document.getElementById('screen').value = ''
}
// function to add items and display screen
function display_screen (val) {
  document.getElementById('screen').value += val
}

// function to calcualte
function calculate () {
  val = document.getElementById('screen').value
  res = eval(val)
  document.getElementById('screen').value = res
}
clr_scr()
