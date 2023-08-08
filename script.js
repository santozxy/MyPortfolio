function openTab(evt, nav) { // Navegação Tab Bar 
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(nav).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("experience").style.display = "block";
});

function typingLetter() { // Efeito de piscar as letras
  function active(element) {
    const arrLetter = element.innerHTML.split("");
    element.innerHTML = "";
    arrLetter.forEach((letter, i) => {
      setTimeout(() => {
        element.innerHTML += letter;
      }, 75 * i);
    });
  }
  const title = document.querySelector(".typing");
  active(title);
}
typingLetter();

function downloadPDF() {
  //Função para realizar o download do pdf
  var pdfUrl = "assets/cv.pdf";
  var link = document.createElement("a");
  link.href = pdfUrl;
  link.setAttribute("download", "Currículo de Monnuery Júnior.pdf");
  link.click();
}
document.getElementById("btn-cv").addEventListener("click", downloadPDF);

document.addEventListener("DOMContentLoaded", function () {
  const likeButtons = document.querySelectorAll(".button-icon");
  const likeCountElements = document.querySelectorAll("#count-like");

  // Função para inicializar os contadores de curtidas se não estiverem definidos no localStorage
  function initializeLikes() {
    for (let i = 0; i < likeCountElements.length; i++) {
      const cardId = i + 1;
      if (!localStorage.getItem(`card${cardId}Likes`)) {
        localStorage.setItem(`card${cardId}Likes`, "0");
      }
      updateLikeCountDisplay(cardId);
    }
  }

  // Função para incrementar o contador de curtidas em um card
  function incrementLikes(cardId) {
    const currentLikes = parseInt(localStorage.getItem(`card${cardId}Likes`));
    const newLikes = currentLikes + 1;
    localStorage.setItem(`card${cardId}Likes`, newLikes.toString());
    updateLikeCountDisplay(cardId);
  }

  // Função para atualizar a exibição do contador de curtidas em um card
  function updateLikeCountDisplay(cardId) {
    const likes = localStorage.getItem(`card${cardId}Likes`);
    likeCountElements[cardId - 1].textContent = likes;
  }

  // Configurar os botões de curtir
  likeButtons.forEach((button, index) => {
    button.addEventListener("click", () => incrementLikes(index + 1));
  });

  // Inicializar os contadores de curtidas quando a página carregar
  initializeLikes();
});
