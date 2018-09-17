//active user data (whatever user selected)

export default function(state={}, action){
    switch(action.type){
        case "USER_SELECTED": //when USER_SELECTED is clicked
            return action.payload; //return payload(user data)  
            break;
    }
    return state;
}