import React from "react"


export class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false,
        disabled: true
    }
    handleInputEvent = (event) => {
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
    render() {
        return <div>
            <input name="username" value={this.state.username} onChange={this.handleInputEvent} />
            <input name="password" type="password" value={this.state.password} onChange={this.handleInputEvent} />
            <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.handleInputEvent} />
            <button disabled={!this.state.username || !this.state.password} onClick={this.onLogin}>Login</button>
        </div>
    }
}