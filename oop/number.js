class RandomGenerator{
    constructor(min, max){
        this.min = min;
        this.max = max;
        this.randomNumber = null;
//takes in the minimum and maximum values
//if they are not defined, it sets the minimum to 1, and the max to 10
// makes storage for the random number
    }
    generate(min, max){
        this.randomNumber = Math.floor( Math.random() * (max-min +1) + min);

        //make a random value between the minimum and maximum values
        //and store the number into the storage from the constructor
    }
    getRange(){
        var range = {
            min: this.min,
            max: this.max,
        };
        return range;
        //return an object with min and max, min being the minimum value for the generator, max being the maximum value
        //returns a basic object literal
    }
    getNum(){
        return this.randomNumber;
        //return the random number that was generated by generate()
    }
}