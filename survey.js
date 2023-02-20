const { realpath } = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let result = []
rl.question("What's your name? Nicknames are also acceptable :)", (answer) => {
  result.push(answer)
  rl.question("What's an activity you like doing?", (answer) => {
    result.push(answer);
    rl.question("What do you listen to while doing that?", (answer) => {
      result.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        result.push(answer);
        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          result.push(answer);
          rl.question("Which sport is your absolute favourite?", (answer) => {
            result.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              result.push(answer);
              console.log(`${result[0]} loves listening to ${result[2]} while ${result[1]}. Their favourite meal is ${result[4]} for ${result[3]}! Their favourite sport is ${result[5]}. ${result[0]}'s superpower is ${result[6]}.`);
              rl.close();
            })
          })
        })
      })
    })
  })
});
