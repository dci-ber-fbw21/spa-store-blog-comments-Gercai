import data from "../../data/data.json";

const initialState = {
    data: data,
    blogId: 0
}

function appReducer(state = initialState, action){

    switch (action.type) {
        case "ADD_COMMENT":
            
                let foundIndex = data.findIndex(element => element.id === action.payload.blogId);

                const newState = {...state};
                newState.data[foundIndex].comments.push(action.payload.comment);  
                newState.blogId = action.payload.blogId;
          
               return{
                ...state,
                newState
            }
        case "DELETE_COMMENT":
        case "BLOG_COMMENT":
            break;
            default: 
            return state;
    }
}
export default appReducer;