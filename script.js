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


document.addEventListener("keydown", function(event) {
  if (event.key === "Home") {
    window.scrollTo(0, 0); // Rolagem para o topo da página
  } else if (event.key === "End") {
    window.scrollTo(0, document.body.scrollHeight); // Rolagem para o final da página
  }
});
