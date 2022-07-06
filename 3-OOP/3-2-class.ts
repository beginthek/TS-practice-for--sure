{ //local scope

    type CoffeeCup ={
        shots: number;
        hasMilk: boolean;
    }
    
    class CoffeeMaker{
        BEANS_GRAMM_PER_SHOT:number = 7; 
        coffeeBeans: number = 0;

        constructor(coffeeBeans: ){
            
        }

        makeCoffee(shots: number):CoffeeCup{
            if(this.coffeeBeans < shots * this.BEANS_GRAMM_PER_SHOT){
                throw new Error('Not enough coffee beans!')
            }
            this.coffeeBeans -= shots* this.BEANS_GRAMM_PER_SHOT;
            return{
                shots, // key , valuee 같을떄는 생략가능 
                hasMilk: false,
            }
          
        }
    }
    const maker= new CoffeeMaker();
}


