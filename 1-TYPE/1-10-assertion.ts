/**
 * Type Inference
 */

let text = 'hello'; // 선엄함과 동시에 스트링을 선언
// text = 1 하면 에러가 발생한다.
function print(message:any){
    console.log(message);
}
print('hello');
print(1);

function add(x: number, y:number):number{
    return x+y;

}

const result = add(1,2);

