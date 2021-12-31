import Types from "../types/Types";

const initialState = {
  data: {},
  loading: false,
  error: "",
};
export default function (state = initialState, action) {
  switch (action.type) {
    case Types.GET_DATA_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.GET_DATA_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case Types.GET_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
