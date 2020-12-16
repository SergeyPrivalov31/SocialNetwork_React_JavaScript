import React from 'react';
import './App.css';
import {Route} from "react-router";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import HeaderRight from "./components/Header/HeaderRight";
import Friends from "./components/Friends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <HeaderRight/>
            <Navbar/>
            <div className='app-wrapper-content'>

                <Route path='/profile'
                       render={() => <Profile
                           store={props.store}
                           />}/>

                <Route path='/dialogs'
                       render={() => <DialogsContainer
                           store={props.store}/>}/>

                <Route path='/News' component={News}/>
                <Route path='/Music' component={Music}/>
                <Route path='/Settings' component={Settings}/>

                <Route path='/Friends'
                       render={() => <Friends
                           state={props.state.users}/>}/>
            </div>
        </div>
    )
}

export default App


