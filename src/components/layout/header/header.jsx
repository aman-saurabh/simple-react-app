import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {       
        return <React.Fragment>
        <nav className="navbar navbar-expand-sm bg-warning navbar-light">
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item font-weight-bold"><Link className="nav-link" to='/'>Home</Link></li>
            <li className="nav-item font-weight-bold"><Link className="nav-link" to='/counter'>Counter</Link></li>
          </ul>          

          <ul className="navbar-nav">
          <li className="nav-item font-weight-bold">Total Items : {this.props.count}</li>   
          </ul>
        </div>
        </nav>
      </React.Fragment>
    }
}

/**
 * These types of components which doesn't have state are known as Stateless Functional Components.
 * We can define such components without the concept of class also like below.
 * But in Stateless Functional component "this.props" will not be accessible.To get props properties add props as argument in the function as shown in following example.
 */

// const Header = (props) => {
//   return <React.Fragment>
//     <nav className="navbar navbar-expand-sm bg-warning navbar-light">
//       <div className="collapse navbar-collapse">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item font-weight-bold"><Link className="nav-link" to='/'>Home</Link></li>
//           <li className="nav-item font-weight-bold"><Link className="nav-link" to='/counter'>Counter</Link></li>
//         </ul>

//         <ul className="navbar-nav">
//           <li className="nav-item font-weight-bold">Total Items : {props.count}</li>
//         </ul>
//       </div>
//     </nav>
//   </React.Fragment>
// }

/**
 * We can even simplify this by using "Object destructuring"
 * In Object destreucturing we import directly that property of an object which we need 
 * Like here we need only count property of props.So we can iumport only that
 */

// const Header = ({count}) => {
//   return <React.Fragment>
//     <nav className="navbar navbar-expand-sm bg-warning navbar-light">
//       <div className="collapse navbar-collapse">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item font-weight-bold"><Link className="nav-link" to='/'>Home</Link></li>
//           <li className="nav-item font-weight-bold"><Link className="nav-link" to='/counter'>Counter</Link></li>
//         </ul>

//         <ul className="navbar-nav">
//           <li className="nav-item font-weight-bold">Total Items : {count}</li>
//         </ul>
//       </div>
//     </nav>
//   </React.Fragment>
// }

export default Header;