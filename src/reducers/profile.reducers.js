import { authConstants } from "../actions/constants";

const initState = {
 details: []
}
export default (state = initState, action) => {
  console.log(action);
  switch (action.type) {
    case authConstants.LOGIN_SUCCESS:
      state = {
        ...state,
        details: action.payload.data
      };
      break;
   
  }
  return state;
};
