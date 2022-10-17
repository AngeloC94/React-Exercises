import React from "react";

export class ClickTracker extends React.Component {
    state = {
        name: "",
    }
    buttonEvent = (event) => {
        this.setState(() => {
            return {
                name: event.target.name
            }
        })

    }
    render() {
        return (<React.Fragment>
            <h1>This is the {this.state.name} button</h1>
            <button name="first" onClick={this.buttonEvent}>First</button>
            <button name="second" onClick={this.buttonEvent}>Two</button>
            <button name="third" onClick={this.buttonEvent}>Three</button>
        </React.Fragment>)
    }
}