// class is 

class cars{
    constructor(name,model,color,fuel){
        this.name=name
        this.model=model
        this.color=color
        this.fuel=fuel
    }
    print(){
        console.log(`Name:  ${this.name}
Model : ${this.model}
Color : ${this.color}
Fuel : ${this.fuel}`)
    }
}

let car1= new cars("Swift","VXI","Black","Petrol")

console.log(car1)
car1.print()



