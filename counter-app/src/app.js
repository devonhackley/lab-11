import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      count:0
    };
  }
  handleClick = e => {
    e.preventDefault();
    let count = this.state.count;
    e.target.id === 'add' ? count++ :
      count <= 0 ?
        count = 0 :
        count--;
    this.setState({ count });
  }

  render(){
    return (
      <React.Fragment>
        <p>The current count is {this.state.count}</p>
        <button id="add" onClick={this.handleClick}>+</button>
        <button id="subtract" onClick={this.handleClick}>-</button>
      </React.Fragment>
    ); 
  }
}

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Counter />
      </React.Fragment>
    );
  }
}

export default App;
