{ //local scope

    type CoffeeCup ={
        shots: number;
        hasMilk: boolean;
    }
    
    const BEANS_GRAMM_PER_SHOT:number = 7; 

    let coffeeBeans: number = 0;
    function makeCoffee(shots: number):CoffeeCup{
        if(coffeeBeans < shots * BEANS_GRAMM_PER_SHOT){
            throw new Error('Not enough coffee beans!')
        }
        coffeeBeans -= shots* BEANS_GRAMM_PER_SHOT;
        return{
            shots, // key , valuee 같을떄는 생략가능 
            hasMilk: false,
        }
      
    }
    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee)
    
    // return{} 이렇게 오브젝트를 리턴해도 된다.but 
}


