
import axios from "axios"
import { ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, GET_User_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"

const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDhhZDAzYjZhZWM1ZjUzYjJiODE0MmEiLCJ1c2VyIjoic3VtYXQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODY5MDg3NjEsImV4cCI6MTY4NzUxMzU2MX0.nu-ma37MDpZFdAqPWX9XmMIFDvVZ0Nzg-59J9Ajm1Ug"

localStorage.setItem("token",token)

export const addProduct=(data)=>(dispatch)=>{
  dispatch({type:PRODUCT_REQUEST})
  axios.post(`${process.env.REACT_APP_URL}`,data).then((res)=>{console.log(res);
dispatch({type:ADD_PRODUCT_SUCCESS,payload:res.data})
}).catch(e=>dispatch({type:PRODUCT_FAILURE}))
}


export const getProduct=(page,limit)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`https://arivu-sever-link.onrender.com/courses?page=${page}&limit=${limit}`,{
      headers:{
        Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDhhZDAzYjZhZWM1ZjUzYjJiODE0MmEiLCJ1c2VyIjoic3VtYXQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODY5MDg3NjEsImV4cCI6MTY4NzUxMzU2MX0.nu-ma37MDpZFdAqPWX9XmMIFDvVZ0Nzg-59J9Ajm1Ug`
      }
    }).then((res)=>{console.log("getProduct",res);
    dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data.course})
    }).catch(e=>dispatch({type:PRODUCT_FAILURE}))
   
}
export const getUser=(page,limit)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`https://arivu-sever-link.onrender.com/users`,{
      headers:{
        Authorization:`Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDhhZDAzYjZhZWM1ZjUzYjJiODE0MmEiLCJ1c2VyIjoic3VtYXQiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODY5MDg3NjEsImV4cCI6MTY4NzUxMzU2MX0.nu-ma37MDpZFdAqPWX9XmMIFDvVZ0Nzg-59J9Ajm1Ug`
      }
    }).then((res)=>{console.log("getUsers",res);
    dispatch({type:GET_User_SUCCESS,payload:res.data.users})
    }).catch(e=>dispatch({type:PRODUCT_FAILURE}))
   
}

export const patchProduct=(id,data)=>(dispatch)=>{
   dispatch({type:PRODUCT_REQUEST});
   axios.patch(`${process.env.REACT_APP_URL}/${id}`,data).then((res)=>console.log(res)).catch(e=>dispatch({type:PRODUCT_FAILURE}))
}


export const deleteProduct=(id)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST});
    axios.delete(`${process.env.REACT_APP_URL}/${id}`).then((res)=>{console.log(res);
    dispatch(getProduct())}).catch(e=>dispatch({type:PRODUCT_FAILURE}))
}