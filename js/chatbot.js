const chat = document.getElementById("chatContent");

function addMessage(text){
let div=document.createElement("div");
div.innerText=text;
chat.appendChild(div);
}

addMessage("Hi 👋 I'm Haron AI. How can I help?");
