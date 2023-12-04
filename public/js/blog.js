const deletePost = async (event) => {
    event.preventDefault();
    const response = await fetch(
      `/api/posts/${document.location.pathname.substring(
        document.location.pathname.lastIndexOf("/") + 1
      )}`,
      {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
      }
    );
    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert("Error when deleting");
    }
  };
  
  document.querySelector("#delete").addEventListener("click", deletePost);