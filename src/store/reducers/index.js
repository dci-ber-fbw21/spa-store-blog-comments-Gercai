import {combineReducers} from "redux";
import blogPostReducerCombi from "./blogPostReducerCombi";


// Combine reducers

export default combineReducers({
    blogPost: blogPostReducerCombi
});
