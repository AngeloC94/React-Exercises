import React from "react"


export class Login extends React.Component {
    state = {
        username: "",
        password: "",
        remember: false,
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


    onReset = () => {
        this.setState({
            username: "",
            password: "",
            remember: false
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
            <input name="remember" type="checkbox" checked={this.state.remember} onChange={this.inputEvent} />
            <button style={loginStyle} disabled={!this.state.username || !this.state.password} onClick={this.props.onLogin(this.state)}>Login</button>
            <button onClick={this.onReset}>Reset</button>
        </div>
    }
}