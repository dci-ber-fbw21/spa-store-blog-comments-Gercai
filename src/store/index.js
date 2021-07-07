import {createStore} from "redux";
import RootReducer from "./reducers";
import blogPost from "./reducers/blogPostReducer";


const store = createStore(
    blogPost,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;