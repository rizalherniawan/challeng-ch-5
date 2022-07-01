class playerChoose{
    constructor(chosen){
        this.chosen = chosen
    }
}

class computerChoose{
    constructor(){
        this.randomize()
    }
    randomize(){
       let random = Math.floor(Math.random() * 3);
       if(random === 1){
           this.chosen = 'rock'
        } 
       else if(random === 2){
            this.chosen = 'paper'
        }
       else{
            this.chosen = 'scissor'
        }
    }
    background(){
        let click2 = document.getElementsByClassName("pict2");
        if(this.chosen === 'rock'){
            click2[0].classList.add('Background1')
        }
        else if(this.chosen === 'paper'){
            click2[1].classList.add('Background1')
        }
        else{click2[2].classList.add('Background1')}
    }
}

class gameLogic{
    constructor(humanChoice,computerChoice){
        this.humanChoice = humanChoice;
        this.computerChoice = computerChoice
    }
    combined(){
        return this.humanChoice + this.computerChoice
    }
    decision(){
        let combination = this.humanChoice + this.computerChoice;
        let popUp = document.querySelector(".vs"); 
        if(combination === 'rockrock'){
            popUp.innerHTML = 'DRAW'
            popUp.style.fontSize = '25px'
            popUp.style.color = 'white'
            popUp.classList.add("Background3")
        }
        else if(combination === 'rockpaper'){
            popUp.innerHTML = 'PLAYER LOSE'
            popUp.style.fontSize = '25px'
            popUp.style.color = 'white'
            popUp.classList.add("Background3")
        }
        else if(combination === 'rockscissor'){
            popUp.innerHTML = 'PLAYER WIN'
            popUp.style.fontSize = '25px'
            popUp.style.color = 'white'
            popUp.classList.add("Background2")
        }
        else if(combination === 'paperrock'){
            popUp.innerHTML = 'PLAYER WIN'
            popUp.style.fontSize = '25px'
            popUp.style.color = 'white'
            popUp.classList.add("Background2")
        }
        else if(combination === 'paperscissor'){
            popUp.innerHTML = 'PLAYER LOSE'
            popUp.style.fontSize = '25px'
            popUp.style.color = 'white'
            popUp.classList.add("Background3")
        }
        else if(combination === 'paperpaper'){
            popUp.innerHTML = 'DRAW'
            popUp.style.fontSize = '25px'
            popUp.style.color = 'white'
            popUp.classList.add("Background3")
        }
        else if(combination === 'scissorrock'){
            popUp.innerHTML = 'PLAYER LOSE'
            popUp.style.fontSize = '25px'
            popUp.style.color = 'white'
            popUp.classList.add("Background3")
        }
        else if(combination === 'scissorpaper'){
            popUp.innerHTML = 'PLAYER WIN'
            popUp.style.fontSize = '25px'
            popUp.style.color = 'white'
            popUp.classList.add("Background2")
        }
        else{
            popUp.innerHTML = 'DRAW'
            popUp.style.fontSize = '25px'
            popUp.style.color = 'white'
            popUp.classList.add("Background3")
        }
    }
}    

let click = document.getElementsByClassName("pict1")

function choice(chosen){

    for(let i = 0; i < click.length; i++){
        click[i].removeAttribute("onclick")
    }

    if(chosen === 'rock'){
        click[0].classList.add('Background1')
    }

    else if(chosen === 'paper'){
        click[1].classList.add('Background1')
    }

    else{click[2].classList.add('Background1')}


    let human = new playerChoose(chosen)
    console.log(human)

    let computer = new computerChoose()
    computer.background()
    console.log(computer)

    let gamePlay = new gameLogic(human.chosen,computer.chosen)
    console.log(gamePlay.combined())
    console.log(gamePlay.decision())

}


function refresh(){
    window.location.reload()
}