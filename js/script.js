document.addEventListener("DOMContentLoaded", function () {
  const formBtn = document.querySelector(".form--btn");
  const usernameInput = document.querySelector("input[type='text']");
  const passwordInput = document.querySelector("input[type='password']");
  const termsCheckbox = document.getElementById("termsCheckbox"); // Добавляем ссылку на чекбокс

  if (
    localStorage.getItem("loggedIn") === "true" &&
    window.location.pathname !== "/pages/home.html"
  ) {
    window.location.href = "/pages/home.html";
  }

  formBtn.addEventListener("click", function (event) {
    const username = usernameInput.value;
    const password = passwordInput.value;

    if (!termsCheckbox.checked) {
      // Проверяем, выбран ли чекбокс
      event.preventDefault();
      alert("Iltimos, xizmat ko'rsatish shartlarini qabul qiling.");
      return; // Останавливаем выполнение если чекбокс не нажат
    }

    if (username === "talaba" && password === "pdp-univer") {
      localStorage.setItem("loggedIn", "true");
      alert("Kirish muvaffaqiyatli!");
      window.location.href = "/pages/home.html";
    } else {
      event.preventDefault();
      alert("Login yoki parol xato, iltimos, qaytadan urinib ko'ring.");
    }
  });
});
