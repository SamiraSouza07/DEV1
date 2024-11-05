const button = document.getElementsByTagName("button")[0];
const texto = document.getElementsByTagName("h1")[0];
button.addEventListener("click", () => {
  window.alert((texto.textContent = "Texto alterado"));
});
