
import axios from "axios"
import { ADD_PRODUCT_SUCCESS, GET_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST } from "./actionType"

export const addProduct=(data)=>(dispatch)=>{
  dispatch({type:PRODUCT_REQUEST})
  axios.post(`${process.env.REACT_APP_URL}`,data).then((res)=>{console.log(res);
dispatch({type:ADD_PRODUCT_SUCCESS,payload:res.data})
}).catch(e=>dispatch({type:PRODUCT_FAILURE}))
}


export const getProduct=(page,limit)=>(dispatch)=>{
    dispatch({type:PRODUCT_REQUEST})
    axios.get(`${process.env.REACT_APP_URL}?_page=${page}&_limit=${limit}`).then((res)=>{console.log(res,"getProduct");
    dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data})
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