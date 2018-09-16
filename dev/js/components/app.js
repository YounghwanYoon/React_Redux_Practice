//
import UserList from '../../js/containers/user-list-containers'
import React from 'react';
require('../../scss/style.scss');


//Component is just a function that returns some HTML.
const App = () =>(
    <div>
        <h2>Username List: </h2>
        <UserList></UserList>
        <hr/>
        <h2>User Details: </h2>
    </div>
);

export default App;