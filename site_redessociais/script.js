function toggleMode() {
  const html = document.documentElement

  // if (html.classList.contains("ligth")) {                 /*Função alternar*/
  //   html.classList.remove("ligth")
  // } else {
  //   html.classList.add("ligth")
  // }

  html.classList.toggle("light") /*Função alternar já existente*/

  //pegar a tag imagem

  const img = document.querySelector("#profile img")
  //substituir a imagem
  if (html.classList.contains("light")) {
    //se tiver ligtn mode, adicionar imagem ligth
    img.setAttribute("src", "./imagens/fotoperfil.jpg")
  } else {
    //se tiver sem ligth mode, manter a imagem normal
    img.setAttribute(
      "src",
      "./imagens/fotoperfil.jpg"
    )
  }
}
