//
import UserList from '../../js/containers/user-list-containers'
import UserDetail from '../../js/containers/user-detail'
import React from 'react';
require('../../scss/style.scss');

// main layout
//Component is just a function that returns some HTML.
const App = () =>(
    <div>
        <h2>Username List: </h2>
        <UserList/>
        <hr/>
        <h2>User Details: </h2>
        <UserDetail/>
    </div>
);

export default App;