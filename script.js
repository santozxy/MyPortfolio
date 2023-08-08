// Navegação Tab Bar
function openTab(evt, nav) {
  const tabcontent = document.getElementsByClassName("tabcontent");
  const tablinks = document.getElementsByClassName("tablinks");

  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  document.getElementById(nav).style.display = "block";
  evt.currentTarget.className += " active";
}

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("experience").style.display = "block";
});

// Efeito de piscar as letras
function typingLetter() {
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

// Função para realizar o download do PDF
function downloadPDF() {
  const pdfUrl = "assets/cv.pdf";
  const link = document.createElement("a");
  link.href = pdfUrl;
  link.setAttribute("download", "Currículo de Monnuery Júnior.pdf");
  link.click();
}
document.getElementById("btn-cv").addEventListener("click", downloadPDF);

// Contadores de curtidas
document.addEventListener("DOMContentLoaded", function () {
  const likeButtons = document.querySelectorAll(".button-icon");
  const likeCountElements = document.querySelectorAll("#count-like");

  function initializeLikes() {
    for (let i = 0; i < likeCountElements.length; i++) {
      const cardId = i + 1;
      const storedLikes = localStorage.getItem(`card${cardId}Likes`);
      if (storedLikes === null) {
        localStorage.setItem(`card${cardId}Likes`, "0");
      }
      updateLikeCountDisplay(cardId);
    }
  }

  function incrementLikes(cardId) {
    const currentLikes = parseInt(localStorage.getItem(`card${cardId}Likes`));
    const newLikes = currentLikes + 1;
    localStorage.setItem(`card${cardId}Likes`, newLikes.toString());
    updateLikeCountDisplay(cardId);
  }

  function updateLikeCountDisplay(cardId) {
    const likes = localStorage.getItem(`card${cardId}Likes`);
    likeCountElements[cardId - 1].textContent = likes;
  }

  likeButtons.forEach((button, index) => {
    button.addEventListener("click", () => incrementLikes(index + 1));
  });

  initializeLikes();
});
