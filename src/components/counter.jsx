import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        count: 77,
        image: "https://picsum.photos/70"
     } 
     styles = { fontSize: "20px", fontWeight: "bold"}
    render() { 
        return (
            <React.Fragment>
                <h2>Hello React Component</h2>
                <img src={this.state.image} className="m-2" alt="" />
                <span style={this.styles} 
                    className="badge badge-primary m-2">{this.formatCount()}</span>
                <button className='btn btn-success m-2'>Click me</button>
            </React.Fragment>
        );
    }
    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;