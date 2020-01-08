const username = document.getElementById('username')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
  let messages = []
  if (username.value === '' || username.value == null) {
    messages.push('Username is required')
  }

  if (password.value.length <= 8) {
    messages.push('Password must be longer than 8 characters')
  }

  else if (password.value.search(/.*[\d].*/) == -1) {
    messages.push('Password must contain a number');
  } 
  else if (password.value.search(/.*[A-Z].*/)  == -1) {
    messages.push('Password must contain atleast one uppercase letter');
  } 
  // else if (password.value.search(/.*[`~!@#$%^&*()-_=+\\\\|\\[{\\]};:'\",<.>].*/) == -1) {
  //   messages.push('Password must contain one special character');
  // }

  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (password.value === 'password') {
    messages.push('Password cannot be password')
  }
 
  if (password.value.length >= 20) {
    messages.push('Password must be less than 20 characters')
  }

  if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join('\n')
  }
})