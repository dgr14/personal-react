import React, { Component } from 'react';
import axios from 'axios';
import Teams from './Teams/TeamList';
import Header from './Header'
import Footer from './Footer'
import View from './View'

const App = () => {
  return (
    <div className="appReturnDiv">
      < Header />
      < View />
      < Footer />
    </div>
  );
}

export default App;
