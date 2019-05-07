import React from 'react';

class Counter extends React.Component{
  constructor(props){
    super(props);

    this.state ={
      count:0
    }
  }
  
  handleIncrement = e => {
    e.preventDefault();
    console.log(e);
    let count = this.state.count;
    count++;
    this.setState({ count })
  }

  handleDecrement = e => {
    e.preventDefault();
    let count = this.state.count;
    count--;
    this.setState({ count })
  }

  render(){
    return (
      <React.Fragment>
        <p>The current count is {this.state.count}</p>
        <button id="add" onClick={this.handleIncrement}>+</button>
        <button id="subtract" onClick={this.handleDecrement}>-</button>
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
