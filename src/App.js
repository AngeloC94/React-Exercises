import React from "react"
import { ClickCounter } from "./ClickCounter"
import { ClickTracker } from "./ClickTracker"
import { Counter } from "./Counter"
import { Hello } from "./Hello"
import { InteractiveWelcome } from "./InteractiveWelcome"
import { Login } from "./Login"
import { UncontrolledLogin } from "./UncontrolledLogin"

export class App extends React.Component {
    render() {
        return <React.Fragment>
            <Hello />
            <InteractiveWelcome />
            <Counter initialValue={0} incrementAmount={1} incrementInterval={1000} />
            <ClickCounter />
            <ClickTracker />
            <Login />
            <UncontrolledLogin />
        </React.Fragment>
    }
}

