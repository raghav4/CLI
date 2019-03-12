window.addEventListener("load", function (event) {
  first();
});

function first() {
  var first = document.getElementById("input");
  first.contentEditable = true;
  first.focus();
}
var input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    var inputValue = input.innerText;
    newAppend(inputValue);
  }
});
const helpInput = '<ul><li><b>ls</b> - display alls files in current directory</li><br><li><b>cat FILENAME</b> - displays the file</li><br><li><b>cd DIRECTORY</b> - changes the current working directory</li><br></ul>';

function newAppend(value) {

  var insert = document.createElement("div");
  var str = '<p><span class="root">root</span> <span class="tick">:<span class="tild">~</span>$ &nbsp;</span> <span contenteditable="true" id="input">lorem</span></p>';
  console.log("Value entered is " + value);
  if (value == input.innerText) {
    insert.innerHTML = helpInput;
  } else insert.innerHTML = str;
  document.getElementById("line").appendChild(insert);
  insert.focus();
}

// TODO event listener on input id, and when entered is press take input and parse it.
// TODO if input is help then append a ul of having things we want to do.