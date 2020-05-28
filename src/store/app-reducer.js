import data from "../data/data.json";

console.log(data);
const initialState = {
    data: data
}

function appReducer(state = initialState, action){

    switch (action.type) {
        case "ADDContent":
            return{
                ...state,
                data:[...state.data, action.payload.data],
            }
            default: 
             return state;
    }
}

export default appReducer;