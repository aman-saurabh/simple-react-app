import React, {
  Component
} from 'react';
import './App.css';
import Main from './components/layout/main/main';
import Header from './components/layout/header/header';

class App extends Component {
  state = {
    counter: [{
        id: 0,
        value: 0
      },
      {
        id: 1,
        value: 0
      },
      {
        id: 2,
        value: 0
      },
      {
        id: 3,
        value: 0
      }
    ]
  }

  handleIncrement = (id) => {
    let counter = this.state.counter.map(e => {
      if (id === e.id) e.value++;
      return e;
    })
    this.setState({
      counter
    });
  }

  handleReset = () => {
    let counter = this.state.counter.map(e => {
      e.value = 0;
      return e;
    })
    this.setState({
      counter
    });
  }

  handleDelete = counterId => {
    let newCounter = this.state.counter.filter(e => e.id !== counterId)
    this.setState({
      counter: newCounter
    });
  }

  render() {
    return ( 
      <React.Fragment >
        <Header count={(this.state.counter.filter(e=> e.value >0)).length}/>
        <Main counter={this.state.counter} onDelete={this.handleDelete} onReset={this.handleReset} onIncrement={this.handleIncrement}/>
      </React.Fragment>
    );
  }

  /**
   * Lifecyle hooks :- 3 Basic categories and their corresponding lifecycle hooks -> 
   * 1. Mount :- i) constructor, ii.) render iii.)componentDidMount
   * 2. Update :- i.) render ii.)componentDidUpdate 
   * 3. Unmount :- i.) componentWillUnmount
   */

  // constructor(){
  //   //Constructor can be used for initializing the properties of that class.
  //   super(); //To use constructuor first call constructor of parent class using super()
  //   this.state = this.props.anyProperty; //For example we can set state property in constructor
  //   //But please remember this.setState() method is not available in constructor so don't used that in constructor.Instead used this.state directly to set state properties. 
  // }

  // componentDidMount(){
  //   //This method is called after the component is rendered into the DOM.
  //   //You can use this method to call any server API to fetch any data which is needed on page load.
  //   //You can use this.setState Method in this method to set state property
  //   this.setState({anyProperty: "xyz"})
  // }

  // componentDidUpdate(prevState, prevProps){
  // will be called on any update in state or props
  //   console.log(prevState, prevProps);
  // }

  // componentWillUnmount(){
  //   Will be called before unmounting the component    
  // }


}

export default App;