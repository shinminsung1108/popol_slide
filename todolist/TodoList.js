let inputBox = document.getElementById('inputField');  // 할 일 입력창
let addToDo = document.getElementById('addToDo');      // 버튼
let toDoList = document.getElementById('toDoList');    // 할 일 리스트창

function addList() {
    const list = document.createElement('li');
    if(inputBox.value === '') { //내용이 없을때 실행
        alert('내용을 입력해주세요');
    } else {
        list.innerText = inputBox.value; //리스트 추가하는 코드들
        toDoList.appendChild(list);
        inputBox.value = ""; //추가한뒤 공백으로 만들어주는 코드
    }

    list.addEventListener('click', function(){      // 만들어진 list에 클릭 이벤트가 발생하면 줄 긋기
        list.style.textDecoration = "line-through";
    })
    list.addEventListener('dblclick', function(){   // list에 더블클릭 이벤트가 발생하면 할 일 리스트창에서 지우기
        toDoList.removeChild(list);
    })
}

function enterKey() {
    if (window.event.keyCode == 13) { //13번 키코드는 엔터
        addList()
    }
}
