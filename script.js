var input = document.getElementById("input");
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   newAppend();
  }
});


function newAppend(){
  var insert = document.createElement("div");
  var str = '<p><span class="root">root</span> <span class="tick">:<span class="tild">~</span>$ &nbsp;</span> <span contenteditable="true" id="input">lorem</span></p>';
  insert.innerHTML = str;
  console.log(str);
  document.getElementById("line").appendChild(insert);      
}

