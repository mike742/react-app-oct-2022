import React, { Component } from 'react';
class Counter extends Component {
    styles = { fontSize: "20px", fontWeight: "bold"}

    render() { 
        return (
            <div>
                <span>{this.props.counter.id}</span>
                <span style={this.styles} 
                    className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button className='btn btn-success m-2'
                        onClick={() => this.props.onIncrement(this.props.counter)}> + </button>
                <button className='btn btn-success m-2'
                        onClick={() => this.props.onDecrement(this.props.counter)}
                        disabled={this.props.counter.value === 0}> - </button>
                <button className='btn btn-danger m-2'
                        onClick={() => this.props.onDelete(this.props.counter.id)}>Delete</button>
                
            </div>
        );
    }

    getBadgeClasses() {
        let classes = "m-2 badge badge-";
        classes += this.props.counter.value === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        const count = this.props.counter.value;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;