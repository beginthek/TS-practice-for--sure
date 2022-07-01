{
/**
 * JavaScripte
 * Primitive : number, string ,boolean, bigint ,symbol , null , undefined
 * Object : function, array ....
 */
//number
const num:number = -6;

//String
const str:String = "dd";

//boolean
const bool:boolean = false;

//undefined
let name: undefined;  //똥
let age: number | undefined;  // null 보다는 undefined 많이씀
age = undefined;
age = 1;

function find(): number|undefined{
    return 
}

let person:null;
let peoson2:string | null;


//null
//unknown 가능하면 쓰지 않는 것이 좋다.  자바스크립트에서 반환하는 타입을 모를떄가 있음 
let notSUre:unknown = 0;
notSUre = 'he';
notSUre = 'true';

//any 가능하면 안쓰는것이 좋다 .
let anything: any = 0
anything = 'hello';

//void
function print():void{ //회사의 style guide 를 따라 가는것이좋다 
    console.log('hello');
 
}


let unusable: void = undefined; 

// never 
// function throwError(message: string): never{
//     //message -> server(log)
    // throw new Error(message)
    // while(true){

    // }
    let neverEnding: never; //똥

    //object ( 안쓰느 것이 좋다 , 아래배열 그리고 형식들처럼 다받을수있기떄문에 )
    let obj: object;
    let obj2: object = [1, 4];
    function acceptSomeObject(obj: object){
        acceptSomeObject({name:'ellie'})
        
    }
    
}


