import data from "../../data/data.json";

const initialState = {
    blogPost: {data: data,}
}

function appReducer(state = initialState, action){

    switch (action.type) {
        case "ADD_COMMENT":
            
                let foundIndex = data.findIndex(element => element.id === action.payload.blogId);
                console.log(foundIndex);
               
                const newState = state.blogPost.data;

                newState.data[foundIndex].comments.push(action.payload.comment);  

               return{
                ...state.blogPost
                    // newState
            }
            // return state.blogPost;
        case "BLOG_COMMENT":
            console.log(action.payload.blogId);
            break;

            default: 

            console.log(state.blogPost.data);
            console.log("me");
            return state.blogPost;
    }
}

export default appReducer;