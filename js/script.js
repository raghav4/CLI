var count = 0;
var history = [];
newChild();

function newChild() {
  let div = document.createElement('div');
  div.setAttribute("id", 'cmd' + count);
  let first = document.createElement('span');
  let second = document.createElement('span');
  let third = document.createElement('span');

  first.innerHTML = '<span class="root" id="root">root</span>';
  second.innerHTML = '<span class="colon">:<span class="tild">~</span>$&nbsp;</span>';

  third.setAttribute("class", "input");
  third.setAttribute("contenteditable", true);
  third.setAttribute("id", count);

  document.getElementById("cmd").appendChild(div);
  document.getElementById("cmd" + count).appendChild(first);
  document.getElementById("cmd" + count).appendChild(second);
  document.getElementById("cmd" + count).appendChild(third);

  third.focus();
}
const helpInput = '<ul><li><b>ls</b> - display alls files in current directory</li><br><li><b>cat FILENAME</b> - displays the file</li><br><li><b>cd DIRECTORY</b> - changes the current working directory</li><br></ul>';

var eListen = document.getElementById("cmd");
eListen.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    var inputText = document.getElementById(count).innerText;
    history[count] = inputText;
    console.log(inputText);

    document.getElementById(count).setAttribute("contenteditable", false);
    if (inputText.trim() == "help") {
      document.getElementById(count).insertAdjacentHTML("afterend", helpInput);
    }
    if (inputText.trim() == "history") {
      console.log(history);
      //document.getElementById(count).insertAdjacentHTML("afterend", history);
    }
    // if (inputText.trim() == "cd") {
    //   document.getElementById("root").textContent = "home";
    // }
    ++count;
    newChild();
  }
});