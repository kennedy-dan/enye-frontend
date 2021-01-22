import { combineReducers } from 'redux'

import profileReducer from './profile.reducers';


const reducer = combineReducers({
   profile: profileReducer
});

export default reducer