const cat = {
    name: 'blue',
    breed: 'Scottish Fold',
    dance: function(dance){
        console.log('THIS IS:', this);
        console.log(`Meow, I am ${this.name} and I like to ${dance}`);
    }
}

// cat.dance('salsa');
// const bluesDance = cat.dance;
// bluesDance('salsa');


// start video 3

function whatIsThis(){
    console.log("this =", this)
}

const myObj = {
    func: whatIsThis,
    color: 'purple'
};

myObj.func()

// 'this' will be set to whatever you have to the left of the dot 

// start video 4

