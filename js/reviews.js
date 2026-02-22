const form=document.getElementById("reviewForm");
const list=document.getElementById("reviewsList");

form.addEventListener("submit",function(e){
e.preventDefault();
let name=document.getElementById("name").value;
let text=document.getElementById("reviewText").value;

let review={name,text};
let reviews=JSON.parse(localStorage.getItem("reviews"))||[];
reviews.push(review);
localStorage.setItem("reviews",JSON.stringify(reviews));
displayReviews();
form.reset();
});

function displayReviews(){
let reviews=JSON.parse(localStorage.getItem("reviews"))||[];
list.innerHTML="";
reviews.forEach(r=>{
let div=document.createElement("div");
div.innerHTML="<strong>"+r.name+"</strong><p>"+r.text+"</p>";
list.appendChild(div);
});
}

displayReviews();
