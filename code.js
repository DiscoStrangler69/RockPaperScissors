function getComputerChoice(){
    let n = Math.floor(Math.random()*3) +1;
    if(n === 1)
    return "rock";
    else if(n === 2)
    return "paper";
    else
    return "scissors";
}


function PlayRound(Compchoice,userChoice){
    const UserChoice = userChoice || ' ';
    let wins = 0;
    if(Compchoice === UserChoice.toLowerCase())
    return "It's a tie";
    else if(Compchoice === "rock"){
        if(UserChoice.toLowerCase() === "paper")
        return "You win";
        if(UserChoice.toLowerCase() === "scissors")
        return "You lose";
    }
    else if(Compchoice === "paper"){
        if(UserChoice.toLowerCase() === "scissors")
        return "You win";
        if(UserChoice.toLowerCase() === "rock")
        return "You lose";
    }
    else if (Compchoice === "scissors"){
        if(UserChoice.toLowerCase() === "rock")
        return "You win";
        if(UserChoice.toLowerCase() === "paper")
        return "You lose";
    }

}

function game(){
    let wins = 0;
    for(let i = 1;i <=5;i++){
        let userChoice = prompt("Enter your choice for rock paper scissors");
        console.log(userChoice);
        let Compchoice = getComputerChoice();
        console.log(Compchoice);
        
        let result = PlayRound(Compchoice,userChoice)
        console.log(result)
        if(result === "You win")
        wins++;
    }
    console.log(`You won ${wins} out of 5`);
}
game();