var readlineSync=require('readline-sync')

//creating question and answer objects
questionOne={
    question:"Who is the main protagonist of the Pokémon anime and games? ",
    answer:"Ash"
}
questionTwo={
    question:"Who is a Gym Leader from the Pokémon games and anime that specialized in fighting-type Pokémon? ",
    answer:"Brock"
}
questionThree={
    question:"What is the name of the Pokémon that is known for its powerful fire-based attacks and can evolve into three different forms? ",
    answer:"Charizard"
}
questionFour={
    question:"What type of Pokémon is Bulbasaur? ",
    answer:"Grass"
}
questionFive={
    question:"Who is a Gym Leader from the Pokémon games and anime that specializes in water-type Pokémon? ",
    answer:"Misty"
}

var questions=[questionOne,questionTwo,questionThree,questionFour,questionFive]
var score=0;

function play(question,answer)
{
    var userAnswer=readlineSync.question(question)

    if(userAnswer===answer)
    {
        console.log("Correct!!!");
        score++;
    }
    else{
        console.log("Wrong!!!")
    }
}

function game()
{
    for(var i=0;i<questions.length;i++)
    {
        var question=questions[i].question;
        var answer=questions[i].answer;

        play(question,answer);
    }
}

function welcome()
{
    var name=readlineSync.question("Please enter your name ;)  ")
    console.log("Hi "+name+"!!! let's start the quiz")

}

function viewScore()
{
    console.log("Quiz finished!")
    console.log("You scored "+score+" out of 5.")
}

welcome()
game()
viewScore()