/*
Skapa ett enkelt nummer-gissningsspel. Det ska välja ett slumpmässigt tal mellan 1 och 100, sedan utmana spelaren att gissa
 antalet med max 10 gissningar. Efter varje tur ska spelaren få veta om den har rätt eller fel, och om de har fel, om 
 gissningen var för låg eller för hög. Det ska också tala om för spelaren vilka nummer de tidigare gissat. Spelet ska 
 avslutas när spelaren gissar rätt, eller när de får slut på gissningar. När spelet slutar ska spelaren ges möjlighet 
 att spela igen.
*/


/*
 get rndNr, ask user for guess between 1 and 100 (error if outside of range), compare guess to rndNr, 
 if equal return 'you win' and number of guesses
 if guess < rndNr return 'you guessed too low' and number of guesses
 if guess > rndNr return 'you guessed too high' and number of guesses

 if guesses > 10 || guess = rndNr, game ends
 else return previous guesses
 */

const returnsRandomInt = () => {
    return Math.floor((Math.random() * 100) + 1); // floor and +1 because Math.random returns float between 0 and <1 (excluding 1, including 0) 
}

//console.log(returnsRandomInt());


/*
these need to be initialized for repliesCorrect() and repleisFalse() to work, have
to be variables because they get reassigned later
*/
let userGuess;
let rndNumber = returnsRandomInt(); 

// functions should be const since they dont change
const repliesCorrect = () => {
    console.log(`Correct! you guessed ${rndNumber}, Congrats!`);
}

const repliesFalse = () => {
    userGuess > rndNumber ?
        console.log(`Wrong!!! ${userGuess} is too high`) : console.log(`Wrong!!! ${userGuess} is too low`);
}


// turn Game into function
const playGame = () => {
    //let userGuess;
    const attempts = 10; //this is an internal parameter that is not accessible to user
    const guesses = []; //const because it will always be of type array
    //rndNumber = returnsRandomInt();
    let i = 0;

    do {
        //console.log("Hi there");
        userGuess = window.prompt(`You have ${attempts - guesses.length} attempts to guess a number between 1 and 100, including 1 and 100: `);
        //console.log(typeof(userGuess));
        userGuess = Number(userGuess);
        if (Number.isInteger(userGuess) && userGuess >= 1 && userGuess <= 100) {
            console.log(`${userGuess} is between 1 and 100`);
            userGuess == rndNumber ? repliesCorrect() : repliesFalse(); // has to be == not === (which would be tru if they were the same object?)
            //console.log(`hint...${rndNumber}`); // for debugging, comment this out for more excitement

            guesses.push(userGuess);
            console.log(`numbers guessed: ${guesses}`);
            guesses.length < attempts ? console.log() : console.log("Game OVER, mate!"); //console.log("Continue!")

        } else {
            console.log("Seriously pal, enter an integer in the inclusive range of 1-100");
        };

        i++
    } while (i < attempts && userGuess != rndNumber);
};

// main program starts here
console.log("Let's play !!!");
setTimeout(playGame(), 1000);

//define a variable for newGame answer
let newGame;

do {
    rndNumber = returnsRandomInt();
    newGame = window.prompt("Wanna play again?? Enter Yes or No");
    newGame = newGame.toLowerCase(); // in case user enters a combination of upper- and lowercase letters
    newGame == "yes" ? playGame() : alert("Okay");
} while (newGame == "yes");


 //userGuess === rndNumber ? console.log(`Correct! you guessed ${rndNumber}, Congrats!`) : console.log(`Wrong!!! you guessed ${userGuess}, try again`);
 //userGuess === rndNumber ? console.log(`Correct! you guessed ${rndNumber}, Congrats!`) : repliesCorrect()  : repliesFalse();
