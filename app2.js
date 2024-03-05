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

// const blueDance = cat.dance;
// // first is value is what 'this' should be
// // blueDance('jitterbug')
// blueDance.call(cat, 'jitterbug')

// const dog = {
//     breed: 'Black Lab',
//     name: 'Elton'
// }
// cat.play.call(dog, 'bone', 'my cat')
// // this is now set to dog object
// // it is a one time thing and does not permanently change anything
// blueDance.call(dog, 'hip hop dance')



// start video  6
// bind

const blue = {
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


// bind RETURNS a new permabound function, it does not execute it like call
// gives you a version of the function we called bind on 
// where the value of this has been changed, bound, permanently

const rocket = {
    name: 'Rocket',
    breed: 'Himalayan'
}

const bDance = blue.dance;
const boundDance = bDance.bind(blue);
// boundDance('waltz');

const rocketDance = blue.dance.bind(rocket);

const dog = {
    name: 'Tyson',
    breed: 'Mini Ausie',
    dance: rocketDance
};



// start video 7
// bind arguemnts
// can pass in further args after the value of this which will be baked into the new function

const blueDisco = blue.dance.bind(blue, 'disco');
const playsWithSocks = blue.dance.bind(blue, 'left sock', 'right sock');

// playsWithSocks();
// playsWithSocks('dirty sock'); // can add new ones as the l/r socks are set above

function applySalesTax(taxRate, price){
    return price + price * taxRate;
}

// applySalesTax(0.0725, 19.99)

const applyCATax = applySalesTax.bind(null, 0.0725)
// null makes the value of 'this' not bound
const applyTXTax = applySalesTax.bind(null, 0.0625)



const bobsMembership = {
    name: 'Bob',
    total: 250
};

const jillsMembership = {
    name: 'Jill',
    total: 899
}

function collectMonthlyFee(fee){
    const remaining = this.total - fee;
    this.total = remaining;
    return this.name + ' remaining balance:' + remaining;
}

const collectBobsFee = collectMonthlyFee.bind(bobsMembership, 5);
// takes his balance remaining down by 5 each time because it is bound to collectBobsFee
const collectJillsFee = collectMonthlyFee.bind(jillsMembership, 35);


// start video 8
// bindind callbacks
