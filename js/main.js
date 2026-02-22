document.getElementById("enterBtn").onclick = function(){
document.getElementById("splash").style.display="none";
};

document.getElementById("chatbotBtn").onclick = function(){
const bot=document.getElementById("chatbot");
bot.style.display = bot.style.display==="flex"?"none":"flex";
};
