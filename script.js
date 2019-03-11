var input = document.getElementById("input");
input.addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    //console.log(input.innerText);
    performOperations(input.innerText);
   // newAppend();
  }
});


function newAppend() {
  var insert = document.createElement("div");
  var str = '<p><span class="root">root</span> <span class="tick">:<span class="tild">~</span>$ &nbsp;</span> <span contenteditable="true" id="input">lorem</span></p>';
  insert.innerHTML = str;
  console.log(str);
  document.getElementById("line").appendChild(insert);
}
//var inp = document.getElementById("input").innerText;
// if(inp == "help"){
//   alert("help entered");
// }
const vars = {
  root: ['about', 'resume', 'contact', 'talks'],
  projects: ['nodemessage', 'map', 'dotify', 'slack_automation'],
  skills: ['proficient', 'familiar', 'learning']
} // Will have to knnow the directory first
function performOperations(i){
  console.log(i);
  var p = i;
  if(p == "help"){
    console.log(1);
  }
  else{
    console.log(0);
  }
}
