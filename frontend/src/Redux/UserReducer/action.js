import axios from "axios";
import { UPDATE_USER_FAILURE, UPDATE_USER_REQUEST } from "./actionType";

export const updateUser = () => (dispatch) => {
  dispatch({ type: UPDATE_USER_REQUEST });
  axios
    .patch(`http://localhost:8080/update/:userId`)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => dispatch({ type: UPDATE_USER_FAILURE }));
};
