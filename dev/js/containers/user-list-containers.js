import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';


//render or return html
class UserList extends Component{

    createListItems(){
        //map() will loop through list 
        return this.props.users.map((user) => {
            return(
                <li 
                    key={user.id}
                    onClick = {()=> this.props.selectUser(user)}
                >
                    {user.first} {user.last}
                </li>
            );
        });
    }

    render(){
        return (
            //this.props.users = users for our entire application.
            <ul>
                {this.createListItems()}
            </ul>
        );
    }
}
//takes a piece of your application store(state) and 
//pass/send it into your component as property(props)
function mapStateToProps(state){
    return {
        users: state.users //just take only state of users to UserList from all data
    };

}

//
function matchDispatchToProps(dispatch){
    return bindActionCreators({selectUser: selectUser},dispatch); //bind is synnom of connect
}

export default connect(mapStateToProps,matchDispatchToProps)(UserList);

