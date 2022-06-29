const car =function(make,speed){
    this.make=make;
    this.speed=speed;
}

car.prototype.hurry=function(){
    return(this.speed += 10)
}
car.prototype.brake=function(){
    return(this.speed -=5)  
}

const BMW=new car("BMW",120);
const Mercedes=new car("mercedes",95);

console.log("tăng lần 1",BMW.hurry());
console.log("tăng lần 2",BMW.hurry());

console.log("giảm lần 1",Mercedes.brake());
console.log("giảm lần 2",Mercedes.brake());
