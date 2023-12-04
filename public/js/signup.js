const signupFunc = async (event) => {
    event.preventDefault();
    let username = document.querySelector('#username').value.trim();
    let password = document.querySelector('#password').value.trim();
    let confirm = document.querySelector('#confirm').value.trim();
    if (username && password && confirm) {
    if (password === confirm) {
      const response = await fetch('/api/users/signup', {
        method: 'POST',
        body: JSON.stringify({ username, password }),
        headers: { 'Content-type': 'application/json' }
      });
      if (response.ok) {
        document.location.href = '/';
      } else {
        alert('Invalid username and password');
      }
    } else {
      alert('Passwords do not match')
    }
    } else {
    alert('Some fields are missing values');
  }
};

const switchToLogin = (event) => {
  event.preventDefault();
  document.location.href = '/login';
}

document.querySelector('#signupButton').addEventListener('click', signupFunc);
document.querySelector('#switchLogin').addEventListener('click', switchToLogin);