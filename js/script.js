document.addEventListener("DOMContentLoaded", function () {
  const formBtn = document.querySelector(".form--btn");
  const usernameInput = document.querySelector("input[type='text']");
  const passwordInput = document.querySelector("input[type='password']");

  if (
    localStorage.getItem("loggedIn") === "true" &&
    window.location.pathname !== "/pages/forgot.html"
  ) {
    window.location.href = "/pages/forgot.html";
  }

  formBtn.addEventListener("click", function (event) {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (username === "talaba" && password === "pdp-univer") {
      localStorage.setItem("loggedIn", "true");
      alert("Kirish muvaffaqiyatli!");
      window.location.href = "/pages/forgot.html";
    } else {
      event.preventDefault();
      alert("Login yoki parol xato, iltimos, qaytadan urinib ko'ring.");
    }
  });
});
