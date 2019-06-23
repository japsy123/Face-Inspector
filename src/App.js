import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navigation from './Components/Navigation/Navigation'

class App extends React.Component {

  render() {
    return (
      <div className = "App">
        <Navigation />
        {/* <Logo />
        <ImageLinkForm/>
        <FaceRecognition /> */}
      </div>
    )
  }
}

export default App;
