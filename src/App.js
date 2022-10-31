import React from "react"
import { ClickCounter } from "./ClickCounter"
import { ClickTracker } from "./ClickTracker"
import { Container } from "./Container"
import { Counter } from "./Counter"
import { Hello } from "./Hello"
import { InteractiveWelcome } from "./InteractiveWelcome"
import { Login } from "./Login"
import { TodoList } from "./TodoList"
import { UncontrolledLogin } from "./UncontrolledLogin"
import { Sum } from "./Sum"
import Welcome from "./Welcome"
import { LanguageComponent, LanguageContext } from "./LanguageContext"

export class App extends React.Component {
    state = {
        language: 'en'
    };
    render() {
        return <React.Fragment>
            <Hello />
            <InteractiveWelcome />
            <Counter initialValue={0} incrementAmount={1} incrementInterval={1000} />
            <ClickCounter />
            <ClickTracker />
            <Login />
            <UncontrolledLogin />
            <TodoList render={(items, removeListItem) => {
                return (
                    items.map((todo, index) => (
                        <div key={index}>
                            {todo}
                            <button key={index} onClick={() => { removeListItem(todo) }}>remove</button>
                        </div>
                    ))
                )
            }
            } />
            <Container title='Lorem Ipsum' />
            <LanguageContext.Provider value={this.state.language}>
                <LanguageComponent />
            </LanguageContext.Provider>
            <Welcome />
            <Sum numbers={[5, 1, 9]} />
        </React.Fragment>
    }
}

