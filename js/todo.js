const toDoForm = document.querySelector(".todo-form");
const toDoList = document.querySelector(".todo-list");
const toDoInput = toDoForm.querySelector("input");

const TODOS_KEY="todos";

let toDos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
    //JSON.Stringify([1,2,3,4]) 값을 문자열로 저장하고 싶을때 사용  "[1,2,3,4]"
}

function deleteToDO(event){
    const li = event.target.parentElement;
    console.log(li.id);
    console.dir(event.target.parentElement.innerText);
    li.remove();
    toDos = toDos.filter((toDO) => toDO.id !== parseInt(li.id));
    saveToDos();
    //우리가 클릭한 li.id와 다른 toDO는 남겨두고 싶다.라는 뜻이다.
    //Target은 html의 element이다
    //parentElement는 클릭된 Element의 부모다
}


function paintToDo(newTodo){
    const li =document.createElement("li");
    li.id = newTodo.id;
    const span =  document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "☑️";
    button.addEventListener("click", deleteToDO );
    li.appendChild(span);
    li.appendChild(button);
    //span을  li내부안으로 집어넣음 
    toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    console.log(toDoInput.value);
    const newTodo = toDoInput.value;
    toDoInput.value ="";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    //Date.now() 밀리초(1000분의 1초)를 주는 함수
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);  

function sayHello(item){
    console.log("this is the turn of", item);
  }

const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos);
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
    //forEach는 array의 각 item에 대해 function을 실행하게  해줘
    //sayHello대신에 (item) => console.log("this is the turn of", item); 적어도 된다. 똑같은 말이다.
    //함수이름 안지어내도 된다.
    //parsedToDo안에 있는 각각의 item에 대해서 console.log 할 것이라는 뜻이다.
}

