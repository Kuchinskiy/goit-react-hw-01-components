import React from 'react';
import Profile from './Profile/Profile';
import user from '../profileUser';


const App = () => (
    <>
    <Profile user={user}/>
    </>
);

export default App;