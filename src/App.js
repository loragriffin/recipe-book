import React, { Component } from 'react';
import './App.css';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';

import RecipeCard from './recipeCard';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <RecipeCard />
      </MuiThemeProvider>
    );
  }
}

export default App;
