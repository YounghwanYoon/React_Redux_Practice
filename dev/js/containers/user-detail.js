import React, {Component} from 'react';
import {connect} from 'react-redux';


class UserDetail extends Component{

    render(){
        return(
            <div>
                <img src={this.props.user.thumbnail}/>
                <h2>Name: {this.props.user.first} {this.props.user.last} </h2>
                <h3>Age: {this.props.user.age}</h3>
                <h3>Description: {this.props.description}</h3>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        user: state.activeUser //just take only state of active user
    };

}
//smart container
export default connect(mapStateToProps)(UserDetail);
