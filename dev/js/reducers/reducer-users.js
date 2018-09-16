//function that part of user functions

// Reducer is a piece of data you want to save in store. 
// return array of users
export default function(){
    return [
        {
            id:1,
            first:"Ray",
            last:"Yoon",
            age: 31,
            description: "Ray is a web and android developer",
            thumnail: "file:\\\C:\Users\Ray\Pictures\i_am_astronaut.gif"
        },
        {
            id:2,
            first:"Stella",
            last:"Park",
            age:30,
            description: "Stella is a science and python developer",
            thumnail: "file:\\\C:\Users\Ray\Pictures\정은이.jpg"
        },
        {
            id:3,
            first:"Squirrel",
            last: "Dunno",
            age:3,
            description: "I am a squirrel",
            thumnail: "file:\\\C:\Users\Ray\Pictures\Squrriel.jpg"
        }
    ]
}