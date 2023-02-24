//js는 html의 element를 끌고 와서 작업을 해주는 것이다
const loginForm = document.querySelector(".login-form");
//document.getElementById("login-form") 해도 된다.
const loginInput = loginForm.querySelector("input");
//const loginInput = document.querySelector(".login-form input"); 이런식으로 만들어도 됨.

const link = document.querySelector("a");
const greeting = document.querySelector(".greeting")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
// 일반적으로 string만 포함된 변수는 대문자를 쓰고 loginForm이나 loginInput처럼
// 중요한 정보를 담은게 아니면 대문자로 작성

function onLoginsubmit(event) {
   event.preventDefault();
   loginForm.classList.add(HIDDEN_CLASSNAME);
   const username = loginInput.value;
   localStorage.setItem(USERNAME_KEY, username); 
   paintGreetings();
} 
//localStorage.getItem("username");


loginForm.addEventListener("submit", onLoginsubmit);  

function paintGreetings() {
   const username = localStorage.getItem(USERNAME_KEY);
   greeting.classList.remove(HIDDEN_CLASSNAME); 
   greeting.innerText = `hello ${username}`;
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
//getItem은 정보(값)을 가져오는 함수이다.


if(savedUsername === null){
   //show the form
   loginForm.classList.remove(HIDDEN_CLASSNAME);
   loginForm.addEventListener("submit", onLoginsubmit);  
} else {
   // show the greetings
   paintGreetings();
   //paintGreetings는 화면에 텍스트 출력하게 하는 함수
}
