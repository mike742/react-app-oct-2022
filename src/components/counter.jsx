import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        count: 1,
        image: "https://picsum.photos/70",
        tags: ["tag1"]
     } 
    styles = { fontSize: "20px", fontWeight: "bold"}

    constructor() {
        super();
        this.handleIncrement = this.handleIncrement.bind(this);
    }
    render() { 
        console.log(this.props);
        return (
            <React.Fragment>
                <span style={this.styles} 
                    className={this.getBadgeClasses()}>{this.props.value}</span>
                <button className='btn btn-success m-2'
                        onClick={this.handleIncrement}> + </button>
                <button className='btn btn-danger m-2'
                        onClick={this.props.onDelete}>Delete</button>
                <hr />
            </React.Fragment>
        );
    }
    handleIncrement() {
        // this.state.count++;
        this.setState({count: this.state.count + 1})
    }
    renderTags() {
        if (this.state.tags.length === 0) {
            return <p>There is no tags</p>
        }
        return this.state.tags.map((t) => <li key={t}>{t}</li>);
    }

    getBadgeClasses() {
        let classes = "m-2 badge badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }
    formatCount() {
        const {count} = this.state;
        return count === 0 ? "Zero" : count;
    }
}
 
export default Counter;