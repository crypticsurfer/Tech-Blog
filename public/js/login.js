const loginFunc = async (event) => {
    event.preventDefault();
    let username = document.querySelector('#username').value.trim();
    let password = document.querySelector('#password').value.trim();
    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-type': 'application/json' }
        });
        if (response.ok) {
            document.location.href = '/';
        } else {
            const body = await response.json();
            alert(body.message);
        }
    } else {
    alert('Some fields are missing values');
  }
};

const switchToSignup = (event) => {
  event.preventDefault();
  document.location.href = '/signup';
}

document.querySelector('#loginButton').addEventListener('click', loginFunc);
document.querySelector('#switchSignup').addEventListener('click', switchToSignup);