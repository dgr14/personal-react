// #1 
// I am building a site to display soccer data specifically pertaining to the premier league. I want to try and create an easy to use, simple, and yet still powerful website to easily parce through match data. Depending on how much information is still offered by the free site, I would like to display matches (and the data attached). If possible I would also like a page dedicated to the 20 clubs in the Prem. I would like the background colors and certain accents on the page to automatically switch to the clubs traditional colors when clicking on that actual page. All club pages should have links to their official sites. While an official site for the premier league exists, corporate sponsors and other relatively superfluous info muddles the appearence of the page. 

// ***THINGS I WILL ADD IF I HAVE TIME***
// A dedicated section for club news that changes and generates based on which clubs page you're on

// A section dedicated to your favorite club so you just have a single button to press to display all the data one would want to see about their respective club.

//#2
// Minimum Viable Product - A webpage that easily displays scores from matches.
// Team Page
// One page for Fixtures, one page for the upcoming schedule, last page for league tables

// #3 
// User Story - In order to cleanly orgainize data I will keep things easy to read and concise so that the purpose of my app doesnt get lost in styling.


// *****
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import TeamProvider from './Teams/TeamProvider';
import {BrowserRouter} from 'react-router-dom'
import Favicon from './Favicon'

ReactDOM.render(
    <BrowserRouter>
    {/* <Favicon /> */}
        <App />
    </BrowserRouter>,
     document.getElementById('root'));
