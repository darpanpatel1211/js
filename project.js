//Chaining Method with Bacnk Account Project

class bankAccount{
    constructor(owner,pin){
        this.owner = owner;
        this.pin = pin;
        this.movements=[];
    }
    movements(){
        return this.movements;
    }
    deposit(val){
        this.movements.push(val);
    }
    windrawal(val){
        this.deposit(-val);
    }
    get discription(){
        console.log(`student name is :$(this.owner} pin number is :$(this.pin)`)
    }
}
//create user
let account = new bankAccount("Darpan",1234);
account.deposit(1000)
account.windrawal(500)
console.log(account.movements);
console.log(account);
console.log(account.discription);
