const colors=["aliceblue","antiquewhite","aqua","aquamarine","black","blue","brown","blueviolet","cadetblue","chartreuse","coral","chocolate","cornflowerblue","crimson","darkcyan","cyan","darkorchid","darkseagreen","darksalmon","gold","lime","midnightblue","orange","pink","purple","red","teal","thistle","	violet","yellowgreen","yellow","silver","seagreen","navajowhite","mistyrose","lightsteelblue","lavender","indigo","	grey","green" ];

const btn = document.getElementById('btn');
const color= document.querySelector(".color");

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent= colors[randomNumber];
})

function getRandomNumber(){
    return  Math.floor(Math.random() * colors.length);
}