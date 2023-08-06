function openTab(evt, nav) {
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
