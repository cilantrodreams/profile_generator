const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// create objects to hold questions and answers
const questions = {
  name: "What's your name? Nicknames are also acceptable :) ",
  activity: "What's an activity you like doing? ",
  music: "What do you listen to while doing that? ",
  meal: "Which meal is your favourite (eg: dinner, brunch, etc.) ",
  food: "What's your favourite thing to eat for that meal? ",
  sport: "Which sport is your absolute favourite? ",
  superpower: "What is your superpower? In a few words, tell us what you are amazing at! ",
}
const answers = {}

// output answers to the console in the form of an online profile
const logProfile = (ans) => {
  console.log(`${ans.name} loves listening to ${ans.music} while ${ans.activity}, devouring ${ans.food} for ${ans.meal}, prefers ${ans.sport} over any other sport, and is amazing at ${ans.superpower}.`)
};

// ask question
// store answer
// ask another question
// if no more questions, output profile and close
rl.question(questions.name, (answer) => {
  answers['name'] = answer;
  rl.question(questions.activity, (answer) => {
    answers['activity'] = answer;
    rl.question(questions.music, (answer) => {
      answers['music'] = answer;
      rl.question(questions.meal, (answer) => {
        answers['meal'] = answer;
        rl.question(questions.food, (answer) => {
          answers['food'] = answer;
          rl.question(questions.sport, (answer) => {
            answers['sport'] = answer;
            rl.question(questions.superpower, (answer) => {
              answers['superpower'] = answer;
              logProfile(answers);
              rl.close();
            });
          });
        });
      });
    });
  });
});




