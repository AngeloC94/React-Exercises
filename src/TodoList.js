import React from "react";

export class TodoList extends React.Component {
    state = {
        items: [
            "Item 1",
            "Item 2",
            "Item 3",
            "Item 4",
            "Item 5"
        ]
    }


    handleInputChange = (e) => {
        const value = e.target.value

        this.setState({
            newitem: value
        })
    }

    handleSubmit = (e) => {
        const value = e.target.value

        this.setState({
            newitem: value
        })

        this.state.items.push(this.state.newitem)
    }


    render() {
        return (
            <React.Fragment>
                <input
                    name="input"
                    value={this.state.input}
                    onChange={this.handleInputChange}
                />
                <button onClick={this.handleSubmit}>Add new Item</button>

                <ul>
                    {this.state.items.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </React.Fragment>
        )
    }

}