import React, {createRef} from "react"


export class UncontrolledLogin extends React.Component{
    _formRef = createRef();

    handleSubmit= (e) => {
        e.preventDefault()

        const username = e.target.elements.username.value
        const password = e.target.elements.password.value
        const remember = e.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })
    }

    render() {
        return  <div>
                    <form ref={this._formRef} onSubmit={this.handleSubmit}>
                        <input name="username" required/>
                        <input name="password" type="password" required/>
                        <input name="remember" type="checkbox" />
                        <button type="submit" >Login</button>
                        <button type="reset">Reset</button>
                    </form>
                </div>
    }
}