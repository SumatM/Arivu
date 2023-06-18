import {
  UPDATE_USER_FAILURE,
  UPDATE_USER_REQUEST,
  UPDATE_USER_SUCCESS,
} from "./actionType";

const initState = {
  user: {},
  isLoading: false,
  isError: false,
};

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case UPDATE_USER_REQUEST:
      return { ...state, isLoading: true, isError: false };
    case UPDATE_USER_SUCCESS:
      return { ...state, isLoading: false, isError: false };
    case UPDATE_USER_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
