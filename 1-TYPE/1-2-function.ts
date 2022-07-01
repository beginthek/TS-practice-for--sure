// //Javascript
// function jsAdd(num1,num2){
//     return num1+ num2
// }


// function Add(num1:number,num2:number):number{
//     return (num1+ num2)
// }

// function jsFetchNum(id: string):Promise<number>{
//     //code...
//     //code...
//     return new Promise((resolve, reject)=>{
//         resolve(100);
//     })


    //JavaScript => TypeScript
    //Optional parameter
    function printName(firstName: string, lastName?: string){
        console.log(firstName);
        console.log(lastName); //undefined
    }
    printName('sungyun', 'kim')
    printName('imsim',undefined)
    printName('anna', undefined)
    //Default parameter

    function printMessage(message: string = 'default message'){
        console.log(message);
        
    }
    printMessage();

    function addNumbers(...numbers: number[]):number{
        return numbers.reduce((a, b) => a + b);
    }
    //Rest parameer
    console.log(addNumbers(1,2));
    console.log(addNumbers(1,2,3,4));
    console.log(addNumbers(1,2,3,4,5,0));
    //함수에서 타입을 좀더 명확하게 사용 하는방법에 대해 공부
     
    


