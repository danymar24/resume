import React, { Component } from 'react';
import './App.css';
import {  Grid } from '@material-ui/core';


import Info from './components/InfoComponent';
import Resume from './components/ResumeComponent';
import Github from './components/github/GithubComponent';
import Word from './components/DocumentComponent';

class App extends Component {
  render() {
    return (
      <main className='App'>
        <Grid container spacing={16}>
          <Grid item xs={12} md={4}>
            <Info classes={ {media: 'media'} }></Info>
            <Grid container spacing={16}>
              <Grid item xs={6} md={12}>
                <Word />
              </Grid>
              <Grid item xs={6} md={12}>
                <Github />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={8}>
            
            <Resume />
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default App;
