import React, { Component } from 'react';
import './App.css';
import {  Grid } from '@material-ui/core';


import Info from './components/InfoComponent';
import Resume from './components/ResumeComponent';
import Github from './components/github/GithubComponent';
import Word from './components/DocumentComponent';
import LastUpdate from './components/LastUpdate';

class App extends Component {
  render() {
    return (
      <main className='App'>
        <Grid container spacing={16}>
          <Grid item md={1}></Grid>
          <Grid item xs={12} md={3}>
            <Info classes={ {media: 'media'} }></Info>
            <Grid container spacing={16}>
              <Grid item xs={6} md={12}>
                <Word />
              </Grid>
              <Grid item xs={6} md={12}>
                <Github />
              </Grid>
              <Grid item xs={6} md={12}>
                <LastUpdate />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={10} md={7}>
            <Resume />
          </Grid>
        </Grid>
      </main>
    );
  }
}

export default App;
