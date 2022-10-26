import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    state = {  
        counters: [
            { id: 1, value: 1 },
            { id: 2, value: 0 },
            { id: 3, value: 2 },
            { id: 4, value: 0 },
            { id: 5, value: 7 },
        ]
    } 
    handleDelete = (id) => {
        console.log("handle Delete called id = ", id);
    } 

    render() { 
        return (
            <React.Fragment>
                {this.state.counters.map((c) => 
                <Counter key={c.id}
                         value={c.value}
                         onDelete={this.handleDelete}></Counter>)}
            </React.Fragment>
        );
    }
}
 
export default Counters;