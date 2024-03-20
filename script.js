const normalBtn = document.querySelectorAll(".option-button");
const advBtn = document.querySelectorAll(".adv-option-button");
const createLink = document.getElementById("createLink");
const container = document.getElementById("text-input");
const fontName = document.getElementById("fontName");
const fontSizeRef = document.getElementById("fontSize");
const align = document.querySelectorAll(".align");
const spacing = document.querySelectorAll(".spacing");
const format = document.querySelectorAll(".format");
const script = document.querySelectorAll(".script");

let fontList = [
  "Arial",
  "Verdana",
  "Times New Roman",
  "Garamond",
  "Georgia",
  "Courier New",
  "Cursive",
];

function initializer() {
  fontList.forEach((font) => {
    const option = document.createElement("option");
    option.value = font;
    option.textContent = font;
    fontName.appendChild(option);
  });

  Highlighter(align, true);
  Highlighter(spacing, true);
  Highlighter(format, false);
  Highlighter(script, true);
}

function Highlighter(className, multiplebuttons) {
  className.forEach((btn) => {
    btn.addEventListener("click", function () {
      if (multiplebuttons) {
        if (!btn.classList.contains("active")) {
          HighlighterRemove(className);
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      } else {
        btn.classList.toggle("active");
      }
    });
  });
}

function HighlighterRemove(className) {
  className.forEach((btn) => {
    btn.classList.remove("active");
  });
}

window.onload = initializer();

function executeCommand(command, value) {
  document.execCommand(command, false, value);
}

normalBtn.forEach((btn) => {
  btn.addEventListener("click", function () {
    executeCommand(btn.id, null);
  });
});

advBtn.forEach((btn) => {
  btn.addEventListener("change", function () {
    if (Number(btn.value) == Number) {
      executeCommand(btn.id, parseInt(btn.value));
    } else {
      executeCommand(btn.id, btn.value);
    }

    // console.log(btn.value);
  });
});

createLink.addEventListener("click", function () {
  var link = prompt("enter Link");
  if (/http/i.test(link)) {
    executeCommand(createLink.id, link);
    console.log(322);
  } else {
    link = "http//:" + link;
    executeCommand(createLink.id, link);
  }
});
