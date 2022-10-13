import React from "react";

export class ClickTracker extends React.Component {
    state = {
        name: "",
    }
    buttonHandlerEvent = (event) => {
        this.setState(() => {
            return {
                name: event.target.name
            }
        })

    }
    render() {
        return (<React.Fragment>
            <h1>This is the {this.state.name} button</h1>
            <button name="first" onClick={this.buttonHandlerEvent}>First</button>
            <button name="second" onClick={this.buttonHandlerEvent}>Two</button>
            <button name="third" onClick={this.buttonHandlerEvent}>Three</button>
        </React.Fragment>)
    }
}