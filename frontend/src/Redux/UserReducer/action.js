import axios from "axios";

import {
  actionLoginError,
  actionLoginLoading,
  actionLoginSuccess,
  actionsignUpLoading,
  actionsingUpError,
  actionsingUpSuccess,
} from "./actionType";

let baseURL = "http://localhost:8080/";

export const loginFetch = (value) => (dispatch) => {
  dispatch(actionLoginLoading());
  return axios
    .post(`${baseURL}users/login`, value)
    .then((res) => {
      dispatch(actionLoginSuccess(res.data));
      localStorage.setItem(
        "user",
        JSON.stringify({email: res.data.user.email,name: res.data.user.name,role:res.data.user.role,token: res.data.token,isAuth: true})
      );
      console.log(res);
    })
    .catch((err) => {
      dispatch(actionLoginError(err.message));
      console.log(err);
    });
};


export const signUpFetch = (value) => (dispatch) => {
   dispatch(actionsignUpLoading())
  return  axios.post(`${baseURL}users/register`,value)
    .then((res)=>{
    dispatch(actionsingUpSuccess())
        console.log(res);
    })
    .catch((err)=>{
    dispatch(actionsingUpError(err.response.data.msg))
        console.log(err.response.data.msg);
    })
}
