import React, { Component } from 'react';
import './App.css';
import Hello from './Hello';
import Bio from './Bio';
import Hobbies from './Hobbies';
import Social from './Social';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Bio">Bio</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Hobbies">Hobbies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#Social">Social Media</a>
      </li>
      
    </ul>
  </div>
</nav>
        
        <body>
          <Hello/>
          <Bio/><a id="Bio"></a>
          <Hobbies/><a id="Hobbies"></a>
          <Social/><a id="Social"></a>
        </body>
      </div>
    );
  }
}

export default App;
