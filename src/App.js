import React from 'react';
import './App.css';
import PrimarySearchAppBar from './Navbar';
import MediaCard from './Card';
import { Paper } from '@material-ui/core';
import Image from './sky.jpg';

const styles = {
  paperContainer: {
      backgroundImage: `url(${Image})`,
      height: "200vh",
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: 'Bangalore'
    }
  }

  setCity = (place) => {
    this.setState({
      city: place
    })
  }
  render () {
    return (
      <div className="App">
        <Paper style={styles.paperContainer}>
          <PrimarySearchAppBar setCity={this.setCity}/>
          <div className="container">
            <MediaCard city={this.state.city}/> 
          </div>
        </Paper>
      </div>
    );
  }
}

export default App;
