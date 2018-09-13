import React, { Component } from 'react'

class App extends Component {

  componentDidMount() {
    console.log(window.innerHeight)

    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  render() {
    return (
      <div style={{ height: '100vh', backgroundColor: 'black', display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(var(--vh, 1vh) * 100)' }}>
        <p style={{ color: 'white', position: 'absolute' }}>Test 100 vh</p>
      </div>
    )
  }
}

export default App
