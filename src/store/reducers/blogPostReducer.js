import data from "../../data/data.json";

const initialState = {
    data: data,
    blogId: 0
}

function appReducer(state = initialState, action){

    const newState = {...state};
    
    
    switch (action.type) {
        case "ADD_COMMENT":
            
                let foundIndex = data.findIndex(element => element.id === action.payload.blogId);
                let {text, date} = action.payload.commentPackage;
                newState.data[foundIndex].comments.push({
                    text, 
                    date 
                });  
                
                newState.blogId = action.payload.blogId;
          
               return{
                ...state,
                newState
              }
        case "DELETE_COMMENT":
        
        let {indexOfComment,blogId} = action.payload;
        let foundIndex2 = data.findIndex(element => element.id === blogId);
        let comments = newState.data[foundIndex2].comments;
        let position = comments.length - indexOfComment - 1;
        
                comments.splice(position,1);
               return{
                ...state,
                newState
            }
         case "BLOG_COMMENT":
            break;
            default: 
            return state;
    }
}
export default appReducer;