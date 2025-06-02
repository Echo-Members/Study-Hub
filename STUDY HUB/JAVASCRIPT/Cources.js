  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (!currentUser) {
    alert("Please log in to access this page.");
    window.location.href = "login.html"; // or wherever your login page is
  }