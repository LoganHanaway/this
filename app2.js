const cat = {
    name: 'blue',
    breed: 'Scottish Fold',
    dance: function(dance){
        console.log('THIS IS:', this);
        console.log(`Meow, I am ${this.name} and I like to ${dance}`);
    }
}

const bluesDance = cat.dance