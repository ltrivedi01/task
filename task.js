
let newInputTask = document.getElementById("idNewTask");
let addTaskBtn = document.getElementById("addTaskBtn");
let toDoContainer = document.getElementById("toDoContainer");

addTaskBtn.addEventListener('click', function(){
    if(newInputTask.value == ''){
        alert("Yo must write something!");
    }else{
       //Add checkbox
       var taskCheckbox = document.createElement('input')
       taskCheckbox.type="checkbox"
       taskCheckbox.id="idTaskCheckbox"
       toDoContainer.appendChild(taskCheckbox);

        //Add task label
        var label = document.createElement('label');
        label.id="idLabel";
        label.innerText = newInputTask.value;
        toDoContainer.appendChild(label);

        var crossSymbol = document.createElement('div');
        var txt = document.createTextNode("\u00D7");
        crossSymbol.id="idCrossSymbol"
        crossSymbol.appendChild(txt);
        toDoContainer.appendChild(crossSymbol);

    }
    //restore input task back to empty
    newInputTask.value = "";

    //Add line through to label on single click
    label.addEventListener('click', function(){
        label.style.textDecoration = "line-through";
        taskCheckbox.click();
    })

    //Remove task on double click
    label.addEventListener("dblclick", function(){
        toDoContainer.removeChild(label);
        toDoContainer.removeChild(taskCheckbox);
        toDoContainer.removeChild(crossSymbol);
    })

    //Add line through to label on checkbox click and remove on unclick
    taskCheckbox.addEventListener("change", function(){
        if(this.checked){
            label.style.textDecoration = "line-through";
        }else {
            label.style.textDecoration = "none";
        }
    })

    crossSymbol.addEventListener("click", function(){
        toDoContainer.removeChild(label);
        toDoContainer.removeChild(taskCheckbox);
        toDoContainer.removeChild(crossSymbol);
    })



})