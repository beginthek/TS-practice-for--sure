{ //local scope

    type CoffeeCup ={
        shots: number;
        hasMilk: boolean;
    }
    
    class CoffeeMaker{
        BEANS_GRAMM_PER_SHOT:number = 7; 
        coffeeBeans:number = 0;

        constructor(coffeeBeans: number){
            this.coffeeBeans = coffeeBeans
        } //constructor 라는 함수는 클래스를 가지고 object(인스턴스)를 만들때
        //항상 호출되는 함수다.


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
    const maker = new CoffeeMaker(32); //new 라는 것은 이클래스의 인스턴스를 만든다는 뜻
                                        //클래스 뒤에 괄호는 생성자를 호출한다는 뜻 
}


