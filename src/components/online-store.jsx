import React, { Component } from 'react';
import Counters from './counters';
import Navbar from './navbar';

class OnlineStore extends Component {
    state = {  
        counters: [
            { id: 1, value: 1 },
            { id: 2, value: 0 },
            { id: 3, value: 2 },
            { id: 4, value: 0 },
            { id: 5, value: 7 },
        ]
    } 
    handleIncrement = (c) => {
        // debugger
        const counters = [...this.state.counters];
        const index = counters.indexOf(c);
        counters[index].value++;
        this.setState({counters});
    }
    handleDecrement = (c) => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(c);
        if(counters[index].value > 0) {
            counters[index].value--;
            this.setState({counters});
        }
    }
    handleDelete = (id) => {
        const counters = this.state.counters.filter((c) => c.id !== id);
        console.log("counters", counters);
        this.setState({counters})
    } 
    handleReset = () => {
        const res = this.state.counters.map((c) => {c.value = 0; return c;})
        this.setState({counters: res});
    }
    handleAdd = () => {
        const counters = [...this.state.counters];
        const id = counters.length ? counters[counters.length - 1].id + 1 : 1;
        counters.push({id, value: 0});
        this.setState({counters});
    }

    render() { 
        console.log('total: ', this.state.counters.length);
        return (
            <React.Fragment>
                <Navbar totalCounters={this.state.counters.filter((c) => c.value > 0).length}></Navbar>
                <hr />
                <Counters
                    counters={this.state.counters}
                    onReset={this.handleReset}
                    onAdd={this.handleAdd}
                    onDelete={this.handleDelete}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                ></Counters>
            </React.Fragment>
        );
    }
}
 
export default OnlineStore;