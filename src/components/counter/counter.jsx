import React, { Component } from 'react';
import './counter.css';

class Counter extends Component {
    // state = {
    //     count: this.props.counter.value
    // }

    render() {
        return <div className="container-div row">
            <div className="col-sm-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
            {/* <button className="btn btn-secondary btn-sm" onClick={this.incrementCount}>Increment</button> */}
            {/* Please Note that we cannot call any function on click of the button.We just need to pass refrence of the function which needs to be triggered on the event.And hence in such cases we cannot pass argument also. */}
            {/* If you want to pass argument then don't call the arrow function directly.Instead use arrow function to call it as follows */}
            {/* onClick={() => this.incrementCount(argument)} */}
            </div>
            <div className="col-sm-1">
            <button className="btn btn-secondary btn-sm" onClick={() => this.props.onIncrement(this.props.counter.id)}>Increment</button>
            </div>
            <div className="col-sm-1">
            <button className="btn btn-danger btn-sm" onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
            </div>
        </div>;
        //React.Fragment is used as container similar to div.The benefit of using React.Fragment in place of div is that it won't add a extra div element in the DOM while wrapping the internal code.
    }

    // incrementCount = () => {
    //     // this.state.count++;    
    //     // It will not work in react.You have to do that in following manner.Actually it will modify the value of count(you can check by consoling count value before and after incresing the value) but it won't be rendered and hence wont reflect in the browser.

    //     this.setState({ count: this.state.count + 1 });
    //     // Actually the setState method internally calls render method after modifying the state.And thus the new value gets reflected on the browser.        
    // }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { value } = this.props.counter;        
        return value === 0 ? 'Zero' : value; 
        //Here we can return also JSX <h1>Zero</h1> instead of plain text 'zero';
    }
}

export default Counter;