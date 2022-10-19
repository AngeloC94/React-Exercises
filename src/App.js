import React from "react"
import { ClickCounter } from "./ClickCounter"
import { ClickTracker } from "./ClickTracker"
import { Counter } from "./Counter"
import { Hello } from "./Hello"
import { InteractiveWelcome } from "./InteractiveWelcome"
import { Login } from "./Login"

export class App extends React.Component {
    onLogin = (state) => {
		console.log(state);
	};
    render() {
        return <React.Fragment>
            <Hello />
            <InteractiveWelcome />
            <Counter initialValue={0} incrementAmount={1} incrementInterval={1000} />
            <ClickCounter />
            <ClickTracker />
            <Login onLogin={this.onLogin}/>
        </React.Fragment>
    }
}

