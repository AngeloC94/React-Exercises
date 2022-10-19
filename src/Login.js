import React from "react"


export class Login extends React.Component {
    state = {
        username: "",
        password: "",
        checkbox: false,
        disabled: true,
    }

    inputEvent = (event) => {
        const value = event.target.value
        const name = event.target.name
        const type = event.target.type
        const checked = event.target.checked
        this.setState({
            [name]: type === "checkbox" ? checked : value
        })


    }

    onLogin = (e) => {
        const verify = e.target.disabled
        this.setState({
            disabled: verify
        })
    }

    onReset = () => {
        this.setState({
            username: "",
            password: "",
            checkbox: false
        })
    }


    render() {
        const loginStyle = {
            color: "black",
            backgroundColor: this.state.password.length >= 8 ? "green" : "red"
        }

        return <div>
            <input name="username" value={this.state.username} onChange={this.inputEvent} />
            <input name="password" type="password" value={this.state.password} onChange={this.inputEvent} />
            <input name="checkbox" type="checkbox" checked={this.state.checkbox} onChange={this.inputEvent} />
            <button style={loginStyle} disabled={!this.state.username || !this.state.password} onClick={this.onLogin}>Login</button>
            <button onClick={this.onReset}>Reset</button>
        </div>
    }
}