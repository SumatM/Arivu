
import { ISUSER_FALSE, ISUSER_TRUE, LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS, SIGNUP_LOADING, SINGUP_ERROR, SINGUP_SUCCESS } from "./actionType";


let init = JSON.parse(localStorage.getItem('user')) || {
    email:"",
    name:"",
    "role":"",
    "token": "",
    isAuth:"",
    isError:"",
    loading:false,
    success: false,
    isUser: false
} 

const reducer = (state = init,action)=>{
    const {type,payload} = action;
    switch(type){
        case LOGIN_LOADING : return {...state, isAuth:false,token:"",isError:"",loading:true}
        
        case LOGIN_SUCCESS : return {...state,loading:false, isAuth:true,token:payload.token,name:payload.user.name,role:payload.user.role,email:payload.user.email}

        case LOGIN_ERROR : return {...state,loading:false,isAuth:false,isError:payload,token:''}

        case SIGNUP_LOADING : return {...state, isAuth:false,token:"",isError:"",loading:true}

        case SINGUP_SUCCESS: return {...state,loading:false,success:true  }

        case SINGUP_ERROR: return {...state,loading:false,isError:payload  }

        case ISUSER_TRUE: return {...state,isUser:true}
        case ISUSER_FALSE: return {...state,isUser:false}

        case 'USER_LOGOUT':  return {...state,loading:false, isAuth:false,token:"",name:"",role:"",email:""}

        default: return {...state}
    }


}

export  {reducer};
