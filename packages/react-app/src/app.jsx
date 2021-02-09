import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.info}</p>
      </div>
    )
  }
}

export default App;