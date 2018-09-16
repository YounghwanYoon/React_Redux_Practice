

//This is action creator
export const selectUser = (user) => {
    console.log("You clicked on user: " + user.first + " "+user.last);
    //This is an action
    //action is made of two: 1)Type 2)Payload(data).
    return {
        type:"USER_SELECTED",
        payload: user //payload can be a data or w/e you want
    }
};