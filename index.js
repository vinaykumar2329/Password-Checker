const input = document.querySelector('input')
const condition = document.querySelector('#condition')
const result = document.querySelector('#createdpassword')

input.addEventListener('input', function () {
  const password = input.value;
  if (password.length < 8) {
    condition.innerText = "Password is too short"
    condition.style.color = 'red';
  }
  else {

    if (password.search(/[a-z]/) === -1) {
      condition.innerText = "Password must contain a Lowercase letter"
    }
    else if (password.search(/[A-Z]/) === -1) {
      condition.innerText = "Password must contain a Uppercase letter"
    }

    else if (password.search(/[0-9]/) === -1) {
      condition.innerText = "Password must contain a  Numeric letter"
    }
    else if (password.search(/[@\#\$\*\&]/) === -1) {
      condition.innerText = "Password must contain a  Special Character(@,#,$,*,&)"
    }
    else if (password.length > 14) {
      condition.innerText = " * Password must be contain less than 14 characters"
      condition.style.color = "red"
    }

    else {
      condition.innerText = "Password is stong";
      condition.style.color = 'Green'
    }
  }
}
)
input.addEventListener('keydown', function (e) {
  if (e.key === "Enter") {
    const password = input.value;
    if (password.length > 14) {
      result.innerText = "Password is not valid"
      result.style.color = "red"
    }
    else if (password.search(/[a-z]/) === -1) {
      condition.innerText = "Password must contain a Lowercase letter"
    }
    else if (password.search(/[A-Z]/) === -1) {
      condition.innerText = "Password must contain a Uppercase letter"
    }

    else if (password.search(/[0-9]/) === -1) {
      condition.innerText = "Password must contain a  Numeric letter"
    }
    else if (password.search(/[@\#\$\*\&]/) === -1) {
      condition.innerText = "Password must contain a  Special Character(@,#,$,*,&)"
    }
    else {
      result.innerText = password;
      result.style.color = "green"
      condition.innerText = " * Password created"
    }
  }

})