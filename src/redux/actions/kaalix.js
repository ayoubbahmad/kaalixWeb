import Types from "../types/Types";
import axios from "axios";

export const getData = () => (dispatch, getState) => {
  dispatch({
    type: Types.GET_DATA_REQUEST,
  });
  axios
    .get("/data.json")
    .then((res) => {
      dispatch({
        type: Types.GET_DATA_SUCCESS,
        payload: res.data,
      });
    })
    .catch((error) =>
      dispatch({
        type: Types.GET_DATA_FAILURE,
        payload: error.message,
      })
    );
};
