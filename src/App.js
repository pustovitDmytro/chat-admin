import React from 'react';
import './App.css';
import { Admin, Resource} from 'react-admin';
import dataProvider from './dataProvider';
import pages  from './pages';
const { DashBoard, chats, users } = pages;

const App = () => (
    <Admin dashboard={DashBoard} dataProvider={dataProvider}>
        <Resource name="users" list={users.list} show={users.show}/>
        <Resource name="chats" list={chats.list} />
    </Admin>
);

export default App;
