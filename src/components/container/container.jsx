import React, { Component } from 'react';
import Counter from '../counter/counter';

class Container extends Component {

    render() {
        return <div>
            <button className="btn btn-primary btm-sm m-2" onClick={this.props.onReset}>Reset</button>
            {this.props.counter.map(e => (
                // <Counter key={e.id} onDelete={this.handleDelete} value={e.value} id={e.id} />
                //Instead of passing single counter property we can pass entire counter also in which case we will not need to modify code here if we want to modify counter
                <Counter key={e.id} onDelete={this.props.onDelete} onIncrement={this.props.onIncrement} counter={e} />
                //But now in Counter component this counter's propert like value, id etc won't be available directly in this.props.value instead we will need to modify that to this.props.counter.value
            )
                //We can also pass children component inside any custome component which can be rendered in the custom component.
                //<Counter key={e.id} onDelete={this.handleDelete} counter={e.counter}><h1>Tile</h1></Counter>
                //Here in place of <h1> we can use any html element or any component.But this itself will not be enough.We need to render this child component in Custom component's (in this case Counter Component's) render method.
                //render() { return <div><p>Put this.props.children where you want to render</p> {this.props.children}<p>Remaining code</p></div>}
            )}
        </div>
    }

}

export default Container;