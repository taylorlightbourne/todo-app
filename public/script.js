const list = document.getElementById("list");
const CHECK = "fa-check-circle";
const UNCHECK = "fa-circle-thin";
const LINE_THROUGH =  "lingThrough";

function addToDo( toDo, id, done, trash ){

    if ( trash ){ return; }
    const DONE = done ? CHECK: UNCHECK;
    const LINE = done ? LINE_THROUGH : "";

    const text = <li class="item">
                    <i class="fa ${DONE} complete" job="complete" id="${id}"></i>
                    <p class="text ${LINE}"> ${toDo} </p>
                    <i class="de fa fa-trash-o" job="delete" id="${id}"></i>
                </li>

    const position = "beforeend";

    list.insertAdjacentHTML(position,text);
}

addToDo("Drink Coffee");

const input = document.getElementById("task-input");
document.addEventListener("keyup", function(event){ 
    if( event.keyCode == 13) {
        const toDo = input.value;
        if(toDo) {
            addToDo(toDo, id, false, false);
            LIST.push(
                {name: toDo,
                id: id,
                done: false,
                trash:false
                }
            )
        }
        input.value = "";
        id++;
    }
});

let LIST = [];
let id = 0;
LIST = [{} ,{} , ... ];

LIST[0] ->
{
    name: "Drink Coffee",
    id: 0,
    done : false,
    trash : false
} 
LIST[1] ->
{
    name: "Workout",
    id: 1,
    done : true,
    trash : false
} 
