const dashboard = () => {
    document.location.href = '/dashboard';
  }
  
  const newPost = () => {
    document.location.href = '/new-blog';
  }
  
  const logout = async () => {
    const logout = await fetch('/api/users/logout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
    });
  
    if (logout.ok) {
        document.location.href = ('/login');
    } else {
        alert(logout.statusText);
    }
  };
  
  document.querySelector('#dashboard').addEventListener('click', dashboard);
  document.querySelector('#new').addEventListener('click', newPost);
  document.querySelector('#logout').addEventListener('click', logout);