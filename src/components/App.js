import React from 'react';
import Profile from './Profile/Profile';
// import user from '../profileUser';
import user from './Profile/user.json';

import Statistics from './Statistics/Statistics'
import stats from "./Statistics/statisticalData.json";

import FriendList from './FriendList/FriendList';
import friends from './FriendList/friends.json';

import TransactionHistory from './TransactionHistory/TransactionHistory';
import items from './TransactionHistory/transactions.json';


const App = () => (
    <>
    <Profile user={user}/>
    <Statistics title="Upload stats" stats={stats}/>
    <FriendList friends={friends}/>
    <TransactionHistory items={items}/>
    </>
);

export default App;