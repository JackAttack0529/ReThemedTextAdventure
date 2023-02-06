const start = `Welcome to Bimples Castle!. Click 'OK' to start the game.`;

const enter = "Please enter 1 or 2 for your answer";

const gameOver = "Sorry GAME OVER!";

const q1 = `You found a castle! you have decided that you want to enter the castle. Should you...
1. Go through the front door
OR
2. smash the window on the 3rd floor (idk how you get up there)
${enter}`;

const gameOver1 = `Bimples guards see you and immediately stab you ${gameOver}`;

const q2 = `you enter through the 3rd floor of the building and notice two doors, one leads to the stairs and the other leads to the elevator, should you...
1. take the stairs
OR
2. take the elevator
${enter}`;

const gameOver2 = `you press the button to summon the elevator, where a goblin elevator operator sees you and immediately goes feral. ${gameOver}`;

const q3 = `You find a treasure room on the 4th floor! there is enough gold in here pay for arthritis medication, but your parents told you not to steal... Should you...
1. take the money 
OR
2. leave it
${enter}`;

const gameOver3 = `despite having an enchanted bag, there is still a weight limit, and you are dumb enough to try and carry 100 pounds of gold... you run out of breath and cannot get enough air because of your arthritis ${gameOver}`;

const q4 = `you encounter 2 doors... again...  Should you...
1. enter door number 1 
OR
2. enter door number 2 
${enter}`;

const gameOver4 = `You enter door number 1 and instantly get mauled by bimple's tigers... ${gameOver}`;

const q5 = `You have found Bimple sitting on his throne! Should you...
1. convince him to stop his evil deeds
OR
2. shoot him dead
${enter}`;

const gameOver5 = `Bimple doesn't care and kills you on the spot... ${gameOver}`;

const win = `Bimple has been shot in his head, you have freed the kingdom!`;

// Alerts the user to start the game
alert(start);

// Set the value of userInput to the user's entry 
let userInput = prompt(q1);

//
// NESTED CONDITIONALS STATEMENTS
// 1ST Conditional Statements
// NOTE: Prompts return the value entered in as as String. That is why double equals is used instead of triple equals (AKA Strict Equals)
if (userInput == 2){
    userInput = prompt(q2);
  
    // 2ND Conditional Statement
    if (userInput == 1){
      userInput = prompt(q3);
  
      // 3RD Conditional Statement
      if (userInput == 2){
        userInput = prompt(q4);
  
        // 4TH Conditional Statement
        if (userInput == 2){
          userInput = prompt(q5);
  
          // 5TH Conditional Statement
          if (userInput == 2){
            alert(win);
          } else {
            alert(gameOver5);
          }
  
        } else {
          alert(gameOver4);
        }
  
      } else {
        alert(gameOver3);
      }
  
    } else {
      alert(gameOver2);
    }
  
  } else {
    alert(gameOver1);
  }