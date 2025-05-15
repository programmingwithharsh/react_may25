import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main'; //  In ES6 Importing a module, component
const root = ReactDOM.createRoot(document.getElementById('root'));

const x = 2; // Number
const username = "Namrata"; // String
const interests = ["Playing Cricket", "Watching Movies", "Podcast", "Reading Novels"]; // Array
const birth = { // Object
    place: "Bangalore",
    year: 2000
};

root.render(
  <Main x={x} usernameProps={username} interestsProps={interests} birthProps={birth}/>
)