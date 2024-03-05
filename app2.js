// const cat = {
//     name: 'blue',
//     breed: 'Scottish Fold',
//     dance: function(dance){
//         console.log('THIS IS:', this);
//         console.log(`Meow, I am ${this.name} and I like to ${dance}`);
//     }
// }

// cat.dance('salsa');
// const bluesDance = cat.dance;
// bluesDance('salsa');


// start video 3

// function whatIsThis(){
//     console.log("this =", this)
// }

// const myObj = {
//     func: whatIsThis,
//     color: 'purple'
// };

// myObj.func()

// 'this' will be set to whatever you have to the left of the dot 


// start video 4
// strict mode

class Cat{
    constructor(name, breed){
        this.name = name;
        this.breed = breed;
    }
    dance(danceType){
        console.log('THIS IS:', this);
        console.log(`Meow, I am ${this.breed} and I like to ${danceType}`);
    }
}

// const rocket = new Cat('Rocket', 'Tabby');
// rocket.dance('tango');
// const rocketDance = rocket.dance;
// rocketDance('tango');


// start video 5
// call
// can help specify what the value of 'this' should be when you call a function


const cat = {
    name: 'blue',
    breed: 'Scottish Fold',
    dance: function(dance){
        console.log('THIS IS:', this);
        console.log(`Meow, I am ${this.name} and I like to ${dance}`);
    },
    play: function(...toys){
        for(let toy of toys){
            console.log(`${this.name} plays with ${toy}`);
        }
    }
};

const blueDance = cat.dance;
// first is value is what 'this' should be
// blueDance('jitterbug')
blueDance.call(cat, 'jitterbug')

const dog = {
    breed: 'Black Lab',
    name: 'Elton'
}
cat.play.call(dog, 'bone', 'my cat')
// this is now set to dog object
// it is a one time thing and does not permanently change anything
blueDance.call(dog, 'hip hop dance')



// start video  6
// bind