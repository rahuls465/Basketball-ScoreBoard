function homeAdd(i){
  let j = parseInt(document.getElementById("home_score").textContent)
  document.getElementById("home_score").textContent= j+i
}
function guestAdd(i){
  let j = parseInt(document.getElementById("guest_score").textContent)
  document.getElementById("guest_score").textContent= j+i
}
function reset(){
  document.getElementById("home_score").textContent= 0
  document.getElementById("guest_score").textContent= 0
}
