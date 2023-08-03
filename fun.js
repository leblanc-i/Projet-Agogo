let countdown;

let btn1 = document.getElementById("btn-1").addEventListener("click", () => {
    timer(20)
});
let btn2 = document.getElementById("btn-2").addEventListener("click", () => {
    timer(300);
});;
let btn3 = document.getElementById("btn-3").addEventListener("click", () => {
    timer(900)
});;
let btn4 = document.getElementById("btn-4").addEventListener("click", () => {
    timer(1200)
});;
let btn5 = document.getElementById("btn-5").addEventListener("click", () => {
    timer(3600)
});;

const compteur = document.getElementById("compteur");
const retour = document.getElementById("finPause");

function timer(seconds) {

// effacer les minuteurs des fonctions qu'on a pas appelees
    clearInterval(countdown);

    const now = Date.now();
    const then = now + seconds * 1000;
    displayTimeLeft(seconds);
    displayEndTime(then);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((then - Date.now()) / 1000);
        
        // verifie si on doit l'arreter
        if(secondsLeft < 0){
            clearInterval(countdown);
            return;
        }

        // afficher la fonction
        displayTimeLeft(secondsLeft);
    }, 1000); 
}

function displayTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const second = seconds % 60; 
    const display = `${minutes} : ${second < 10 ? "0" : ""}${second}`;
    compteur.textContent = display;
}

function displayEndTime(timestamp){
    const end = new Date(timestamp);
    const hour = end.getHours();
    const minutes = end.getMinutes();
    retour.textContent = `La pause finie à ${hour}h : ${minutes}m`;
}

document.customForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    if(mins > 0) {
        timer(mins * 60);
        this.reset();
    } else this.minutes.value = "";
    
})