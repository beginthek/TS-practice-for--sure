// {
//     /*
//     union types: OR 발생할수 있는 많이 케이슺붕 하나만 닮을 수 있을때  | 느낌 
//     */
//     type Direction = 'left' | 'right' | 'up' |'down' 
//     function move(direction: Direction){
//         console.log(direction);
//     }
//     move('left')

//     type TileSize = 8|16|32;
//     const tile: TileSize = 16;
//     //function: login -> success ,fail

//     type SuccessState = {
//         response:{
//             body:string;
//         }
//     }
//     type FailState={
//         reason: string;
//     }
//     type LoginState = SuccessState | FailState;
//     function login():LoginState{
//         return{
//             response: {
//                 body: 'logged in!',
//             },
//         };
//     }

//     //printLoginState(state: LoginState)
//     //success -> body 
//     //fail  ->reason


//     type printLoginState = SuccessState|FailState
//     function printLoginState(state:LoginState){
//         if('response' in state){
//             console.log(`${state.response.body}`);
//         }else{
//             console.log(`${state.reason}`);
//         }
        
//     }
// 