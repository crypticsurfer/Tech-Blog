const createPost = async (event) => {
    event.preventDefault();
    let title = document.querySelector("#title").value.trim();
    let body = document.querySelector("#body").value.trim();
    if (title && body) {
      const response = await fetch("/api/posts/", {
        method: "POST",
        body: JSON.stringify({ title, body }),
        headers: { "Content-type": "application/json" },
      });
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Error when posting");
      }
    } else {
      alert("You must have a title and body before posting");
    }
  };
  
  const updatePost = async (event) => {
      event.preventDefault();
    let title = document.querySelector("#title").value.trim();
    let body = document.querySelector("#body").value.trim();
      if (title && body) {
      const response = await fetch(
        `/api/posts/${document.location.pathname.substring(
          document.location.pathname.lastIndexOf("/") + 1
        )}`,
        {
          method: "PUT",
          body: JSON.stringify({ title, body }),
          headers: { "Content-type": "application/json" },
        }
      );
      if (response.ok) {
        document.location.replace("/dashboard");
      } else {
        alert("Error when posting");
      }
    } else {
      alert("You must have a title and body before posting");
    }
  };
  
  const cancelPost = (event) => {
    event.preventDefault();
    document.location.href = "/";
  };
  
  if (document.querySelector("#addPost")) {
      document.querySelector("#addPost").addEventListener("click", createPost);
  }
  if (document.querySelector("#updatePost")) {
      document.querySelector("#updatePost").addEventListener("click", updatePost);
  }
  document.querySelector("#cancel").addEventListener("click", cancelPost);