import logo from './logo.svg';
import './App.css';
import React from 'react'
import ConexaToolbar from './Components/ConexaToolbar';
import PhotosTable from './Components/PhotosTable';
import SideBar from './Components/SideBar';
import { Switch, Route, useHistory } from "react-router-dom";
import PostsTable from './Components/PostsTable';
import Login from './Components/Login';
import { Redirect } from "react-router-dom";
import { NotFound } from './Components/404';



function App() {

  return (
    <div>
      <Switch>
        <Route exact path='/login' render={() => {
          return (
            <Login />
          )
        }} />
        <Route exact path='/posts' render={() => {
          return (
            <div className='body'>
              <div className='toolbar'>
                <ConexaToolbar />
              </div>
              <div className='bodyBottom'>
                <SideBar />
                <PostsTable />
              </div>
            </div>
          )
        }} />
        <Route exact path='/' render={() => {
          return (
            <Login />
          )
        }} />
        <Route exact path='/photos' render={() => {
          return (
            <div className='body'>
              <div className='toolbar'>
                <ConexaToolbar />
              </div>
              <div className='bodyBottom'>
                <SideBar />
                <PhotosTable />
              </div>
            </div>
          )
        }} />
        <Redirect to="/posts" />
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
