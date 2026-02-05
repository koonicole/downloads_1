const circulo = document.getElementById("circulo");

circulo.addEventListener("mouseover", () => {
  circulo.style.transform = "scale(1.5)";
});

circulo.addEventListener("mouseout", () => {
  circulo.style.transform = "scale(1)";
});

circulo.addEventListener("click", () => {
  circulo.style.backgroundColor = "hotpink";
});
