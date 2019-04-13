
class Guess{
    constructor(){
        this.secretNumber = null;
        this.handleGuess = this.handleGuess.bind(this);
        this.guess_start = this.guess_start.bind(this);

    }
    guess_start(){
        var randomGenerator = new RandomGenerator();
        randomGenerator.generate(1,10);
        this.secretNumber = randomGenerator.randomNumber;
        this.attachHandlers();

    }
    // pickRandomNumber(min, max) {
    //     // return Math.floor( Math.random() * (max-min)) + min;
    //
    // }
    attachHandlers(){
        $('#submitGuess').click( this.handleGuess );
        $('#userGuess').focus( this.clearGuess );
    }
    handleGuess(){
        var userGuess = parseInt( $('#userGuess').val());
        if(userGuess<1 || userGuess>10){
            this.displayResult('invalid range.  Must be between 1 and 10');
            return;
        }
        if(userGuess === this.secretNumber){
            this.displayResult('you got it!');
        } else if (userGuess < this.secretNumber){
            this.displayResult('too low!');
        } else if (userGuess > this.secretNumber){
            this.displayResult('too high!');
        }

    }
    clearGuess(){
        $('#userGuess').val('');
    }
    displayResult( message ){
        $('#display').text( message );
    }
}

