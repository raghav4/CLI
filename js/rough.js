	var counter = 0;
	let node = document.createElement("p");
	node.setAttribute("contenteditable" , "true");
	node.setAttribute("id" , counter);
	node.innerText = "sudo";
	document.getElementById("work").appendChild(node);
	node.focus();


	var wage = document.getElementById("work");
	wage.addEventListener("keydown", function (e) {
	    if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"

	    document.getElementById(counter).setAttribute("contenteditable","false");
	    ++counter;
	    
	        validate(e);
	        
	    }
	});

	function validate(e){
	    console.log(counter);
	    let node = document.createElement("p");
	node.setAttribute("contenteditable" , "true");
	node.setAttribute("id" , counter);
	node.innerText = "sudo";
	document.getElementById("work").appendChild(node);
	node.focus();
	// node.getAttribute("contenteditable") = false;

	}








	// var ctr = 0;
	// window.addEventListener("load",function(event){
	//   first();
	// });

	// function first(){
	//   var giveFirst = document.getElementById("input");
	//   giveFirst.contentEditable = true;
	//   giveFirst.focus();
	// }

	// let inp = document.getElementById('input');
	// inp.addEventListener("keypress",function(e){
	//   if(e.keyCode===13){
	//   //  alert('Hello youve entered something...')
	//     newAppend(inp.innerText);
	//   }
	// })

	// function newAppend(value){
	//   document.getElementById("input").contentEditable = false;
	//   const str = '<p><span class="root">root</span> <span class="colon">:<span class="tild">~</span>$</span> <span id = "kuch" contenteditable="true">&nbsp;</span></p>';
	//   let insert = document.createElement('div');
	//   insert.innerHTML = str;
	//   document.getElementById('line').appendChild(insert);
	//   document.getElementById('kuch').focus();
	// }
	// document.getElementById('kuch').addEventListener('keypress',function(e){
	//   if(e.keyCode===13){
	//     newAppend('hi');
	//   }
	// })