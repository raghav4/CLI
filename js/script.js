var count = 0;
let history = [];
let content = ['ls', 'cat', 'help', 'history']
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
const helpInput = '<ul><li><b>ls</b> - display all files and directories in the current directory</li><br><li><b>cat</b><i> FILENAME</i> - displays the file</li><br><li><b>history</b> - display all the previous commands</li></ul><br>';

var eListen = document.getElementById("cmd");
eListen.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    let inputText = document.getElementById(count).innerText;
    let res = inputText.trim().split(' ');

    history[count] = inputText;
    history[count] = history[count].replace(/(\r\n|\n|\r)/gm, "");

    document.getElementById(count).setAttribute("contenteditable", false);
    if (content.indexOf(res[0]) == -1) {
      let falseInput = "<p style='margin-left:10px;'>Error: Command not found </p>";
      history.pop();
      document.getElementById(count).insertAdjacentHTML("afterend", falseInput);
    }
    if (inputText.trim() == "help") {
      document.getElementById(count).insertAdjacentHTML("afterend", helpInput);
    }
    if (inputText.trim() === "ls") {
      let ls = "<p><span class='dir'>cloud home</span> notes.txt markdown.md</p>"
      document.getElementById(count).insertAdjacentHTML("afterend", ls);
    }
    if (inputText.trim() === "cat notes.txt") {
      let notes = "<a href='#' target='blank' style='color: white; margin-left: 250px;'>View Notes</a>"
      document.getElementById(count).insertAdjacentHTML("afterend", notes);
    }
    if (inputText.trim() == "history") {
      var ul = document.createElement('ul');
      document.getElementById(count).appendChild(ul);
      history.forEach(element => {
        var li = document.createElement('li');
        li.setAttribute("id", "history");
        ul.appendChild(li);
        li.innerHTML += element;
      });
    }
    ++count;
    newChild();
  }
});