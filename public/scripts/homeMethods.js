document.addEventListener("DOMContentLoaded", () => {
  const logoutButton = document.getElementById("logout");
  logoutButton.addEventListener("click", () => {
    Cookies.set("jwaat", "hoalas");
    Cookies.remove("test");
  });
});
