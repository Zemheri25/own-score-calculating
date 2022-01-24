let score1 = document.querySelector(".score1");
let score2 = document.querySelector(".score2");
let score3 = document.querySelector(".score3");
let generalscore = document.querySelector(".generalscore");
let head1 = document.querySelector(".head1")

let calculate1 = document.querySelector(".calculate1");

calculate1.addEventListener("click", calculating)

function calculating () {
   generalscore.value += (Number(score1.value) + Number(score2.value) + Number(score3.value)) / 3
   if (generalscore.value > 50) {
       head1.innerHTML += "You have Passed the examination :)"
   } else {
       head1.innerHTML += "You have'nt Passed the examination :("
   }
}