const text = document.querySelector(".abt");
const textArr = text.innerHTML.split("<br>");
text.innerHTML = "";

let i = 0;
let j = 0;

function typeWriter() {
  if (i === textArr.length) {
    return;
  }

  if (j < textArr[i].length) {
    text.innerHTML += textArr[i].charAt(j);
    j++;
    setTimeout(typeWriter, 10);
  } else {
    i++;
    j = 0;
    text.innerHTML += "<br><br>";
    setTimeout(typeWriter, 50);
  }
}

typeWriter();
