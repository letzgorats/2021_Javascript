const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"), 
    /* form, input 등으로 변수이름을 설정해주면, greeitng.js 파일의 const와 충돌..
    (작은 모듈을 만드는 법도 배워야 한다.) 
    다르게 이름 지어 주는 것도 가독성 면에서 좋은 것 같다.*/
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

const toDos = [];

function deleteToDo(event){
    const btn  = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
}
function saveToDOs(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); 
    // JSON.stringify 는 자바 스트링 object를 string으로 바꿔주는 역할
}



function paintToDo(text){
    console.log(text);
    const list = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerText = " ❌ ";
    delBtn.addEventListener("click",deleteToDo);
    const span = document.createElement("span");
    const newId = toDos.length + 1 ;
    span.innerText = text;
    list.appendChild(delBtn);
    list.appendChild(span);
    list.id = newId;
    toDoList.appendChild(list);
    const toDoObj ={
        text : text,
        id : newId
    }
    toDos.push(toDoObj);
    saveToDOs();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);
    if(loadedToDos != null){
        const parsedToDos = JSON.parse(loadedToDos);
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text);
        });
    }
}

function init(){
    loadToDos();
    toDoForm.addEventListener("submit",handleSubmit);
}
init();