import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../home/home';
import Container from '../../container/container';
// import { Redirect } from 'react-router-dom'

class Main extends Component {   

    render() { 
        // let loggedIn = true;  //You Call function to check
        return <main>
            <Switch>
                {/* <Route exact path="/">{loggedIn ? <Redirect to="/dashboard" /> : <Home />}</Route> */}
                <Route exact path='/' component={Home} />
                <Route path='/counter' render={(props) => <Container counter={this.props.counter} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} onReset={this.props.onReset} />}/>
                {/* 
                Use render method inplace of component if you need to pass props to the component. 
                Beacuse Router's component props internally uses React.createElement method i.e creates a new component to render the component.
                And if we pass props through component props it will create a new Component everytime there will be some changes in props instead of just updating.
                Which can make impact on the app's performance and can degrade it. 
                */}
            </Switch>
        </main>
    }
}
 
export default Main;