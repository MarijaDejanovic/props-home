import React from 'react';
import './App.css';
import { UserFunction, UserClass, UserChildren } from './User';

const users = [
  {name: 'Pero', age: 21},
  {name: 'Ana', age: 34},
  {name: 'Marko', age: 45},
];

export default class App extends React.Component
{
  render(){
    return(
      <>
      <h1>
        React aplikacija
      </h1>
      <UserFunction name={users[0].name} age={users[0].age}/>
      <UserClass name={users[1].name} age={users[1].age}/>
      <UserChildren name={users[2].name} age={users[2].age} >
        I hobi mi je tenis!
      </UserChildren>
      </>
    );
  }
}

