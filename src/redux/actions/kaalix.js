import Types from "../types";
import axios from "axios";

export const getData = async () => (dispatch, getState) => {
  const data = await axios("/data.json").then((res) => res.data);
  const err = data.catch((error) => error.message);
  dispatch({
    type: GET_DATA_REQUEST,
  });
  dispatch({
    type: GET_DATA_SUCCESS,
    payload: data,
  });
  dispatch({
    type: GET_DATA_FAILURE,
    payload: err,
  });
};
