import { Component } from 'react';
//render or return html
export class userList extends Component {
    
    createListItems() {
        //map() will loop through list 
        return this.props.users.map((user) => {
            return (<li key="{user.id}">{user.id}{user.first} {user.last} </li>);
        });
    }
    render() {
        return (
            //this.props.users = users for our entire application.
            <ul>
                {this.createListItems()}
            </ul>);
    }
}