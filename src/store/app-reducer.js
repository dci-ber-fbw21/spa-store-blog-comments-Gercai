import data from "../data/data.json";

const initialState = {
    data: data
}

function appReducer(state = initialState, action){

    switch (action.type) {
        case "ADD_COMMENT":
            
                let foundIndex = data.findIndex(element => element.id === action.payload.blogId);

                const newState = {...state};
                newState.data[foundIndex].comments.push(action.payload.comment);  

                return{
                ...state,
                    newState
                // data: state.data.map((data,i) => i === foundIndex ? data.comments.push("ok"):data)
                // data: state.data.map((data,i) => i === foundIndex ? {...data, comments: action.payload.comment}:data)
            }
            default: 
             return state;
    }
}

export default appReducer;