import React from 'react';
import Profile from './Profile/Profile';
// import user from '../profileUser';
import user from "./Profile/user.json";


const App = () => (
    <>
    <Profile user={user}/>
    </>
);

export default App;