var input = document.getElementById("input");
var btn = document.getElementById("btn");
var toDoList = document.getElementById("todo-list");
var list = [];


btn.addEventListener("click", function(){
		
    if(input.value != ""){
			
		list.push(input.value);

		toDoList.innerHTML  += "<li>"+ list[list.length-1] +"</li>";

		input.value = "";
			
	}
           
});

input.addEventListener("keydown", function (){

    if (event.keyCode === 13) {
        btn.click();
    }
    
});