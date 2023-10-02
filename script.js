function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-eu-light.png")
    img.setAttribute(
      "alt",
      "Foto de Milena Dognini, blusa rosa, cabelo comprido e fundo laranja."
    )
  } else {
    img.setAttribute("src", "./assets/avatar-eu.png")
  }
}
