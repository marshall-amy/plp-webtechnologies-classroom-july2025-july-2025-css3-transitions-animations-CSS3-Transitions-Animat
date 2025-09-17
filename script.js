let boxClicked=0;
function calculateRotation(base, multiplier){
    return base*multiplier
}
function animateBox(){
    const box=document.getElementById("box");
    boxClicked++;
    box.classList.toggle("animate");
    let degrees=calculateRotation(15,boxClicked);
    console.log('Box rotated approximately ${degrees}degrees so far!');
}
function flipCard(){
    document.getElementById("card").querySelector(".card-inner")
    .classList.toggle("flip");
}
function openModal(){
    document.getElementById("modal").classList.add("show");
}
function closeModal(){
    document.getElementById("modal").classList.remove("show");
}
document.getElementById("animateBoxBtn").addEventListener
document.getElementById("flipCardBtn").addEventListener
document.getElementById("openModalBtn").addEventListener
document.getElementById("clodeModalBtn").addEventListener("click",closeModal);