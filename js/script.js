var input = document.getElementById("input");
var btn = document.getElementById("btn");
var toDoList = document.getElementById("todo-list");
var list = [];
var index = document.getElementsByClassName("index");
var retrievedTasks = localStorage.getItem("tasks");


btn.addEventListener("click", function(){
		
    if(input.value != ""){
			
		list.push(input.value);

		toDoList.innerHTML  += "<li class='index' id='"+(list.length-1)+"' onclick='done(this.id)'>"+ list[list.length-1] +"</li>";

        input.value = "";
		localStorage["tasks"] = JSON.stringify(list);
	}
    
});

input.addEventListener("keydown", function (){

    if (event.keyCode === 13) {
        btn.click();
    }
    
});


function done(id){
			
	index[id].classList.toggle("checked");

};

if("tasks" in localStorage){

	var retrievedTasks = localStorage.getItem("tasks");

    list = JSON.parse(retrievedTasks);
    for(var i=0; i<list.length ; i++){
		toDoList.innerHTML  += '<li class="index"  onclick="done(this.id)" id="'+ i +'">' + list[i] +"</li>";
	}
		
}

