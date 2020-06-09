import React, { Component } from 'react';

class Home extends Component {
    state = { }
    //This Component along with Main Component is important to understand how Routers work
    render() { 
        return <React.Fragment>
            <center>
            <h1 className="mt-4">Welcome to home page</h1>
            <button className="mt-3 btn btn-primary" onClick={this.setRedirect}>Redirect to Counter Page</button>
            </center>
        </React.Fragment>;
    }

    setRedirect = () => {        
        this.props.history.push('/counter');
    }
    
}
 
export default Home;