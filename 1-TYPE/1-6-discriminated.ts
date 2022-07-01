{type SuccessState = {
    result : 'sucess';
    response:{
        body:string;
    }
}
type FailState={
    result: 'fail';
    reason: string;
}




type LoginState = SuccessState | FailState;


function login():LoginState{
    return{
        result:'sucess',
        response: {
            body: 'logged in!',
        },
    };
}

type printLoginState = SuccessState|FailState
function printLoginState(state:LoginState){
    
    if(state.result == 'sucess'){
        console.log(`${state.response.body}`);
    }else{
        console.log(`${state.reason}`);
    }
    
}
}
