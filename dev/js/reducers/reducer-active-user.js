//active user data

export default function(state=null, action){
    switch(action.type){
        case "USER_SELECTED": //when USER_SELECTED is clicked
            return action.payload //return payload  
            break;

    }
    return state;
}