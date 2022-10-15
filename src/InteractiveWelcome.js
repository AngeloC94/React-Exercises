import React from "react"
import { Welcome } from "./Welcome"

export class InteractiveWelcome extends React.Component{
    state= {
        name: ""
    }
    handleInputChange = (event) => {
        this.setState({
            name:event.target.value
        })
    }
    render() {
        return  <>
                    <input name="name" value={this.state.name} onChange={this.handleInputChange} />
                    <Welcome age= {47} name={this.state.name}/>
                </>
    }
}