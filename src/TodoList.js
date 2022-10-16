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


    inputChange = (e) => {
        const value = e.target.value

        this.setState({
            input: e.target.value,
            newitem: value
        })
    }

    addNewListItem = (e) => {
        const value = e.target.value

        this.setState({
            newitem: value
        })

        this.state.items.push(this.state.newitem)
        this.setState({
            input : ""
        })
    }
    listReset = () => {
        this.setState({
            items: []
        })
    }


    render() {
        return (
            <React.Fragment>
                <input
                    name="input"
                    value={this.state.input}
                    onChange={this.inputChange}
                />
                <button onClick={this.addNewListItem}>Add new Item</button>
                <button onClick={this.listReset}>Reset Items</button>

                <ul>
                    {this.state.items.map((todo, index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </React.Fragment>
        )
    }

}