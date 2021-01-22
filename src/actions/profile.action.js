
import axios from "axios"
import { authConstants } from "./constants"

export function profileAction() {
    return async function(dispatch) {
      const  data  = await axios.get("https://api.enye.tech/v1/challenge/records");
        dispatch(setArticleDetails(data));
        console.log(data);
    };
  }

  function setArticleDetails(data) {
    return {
      type: authConstants.LOGIN_SUCCESS,
      payload: data
    };
  }

// export const profile = () => {
//     return async (dispatch) => {
         
//         return axios.get("https://api.enye.tech/v1/challenge/records").then(({ data }) => {
//             dispatch(setArticleDetails(data));
//     }
        
// }


// dispatch({ type:authConstants.LOGIN_REQUEST})
        // const res = await axios.get('https://api.enye.tech/v1/challenge/records')