import React from "react";
import ClickCounter from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Container } from "./Container";
import Counter from "./Counter";
import { Hello } from "./Hello";
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { TodoList } from "./TodoList";
import { UncontrolledLogin } from "./UncontrolledLogin";
import { Sum } from "./Sum";
import Welcome from "./Welcome";
import { LanguageComponent, LanguageContext } from "./LanguageContext";
import GitHubUser from "./GithubUser";
import GithubUserList from "./GithubUserList";
import CustomCounter from "./useCounter";
import { CustomLogin } from "./useForm";

export class App extends React.Component {
  state = {
    language: "en",
  };

  render() {
    return (
      <React.Fragment>
        <Hello />
        <InteractiveWelcome />
        <Counter />
        <ClickCounter
          onCounterChange={(counter) => {
            return console.log("The counter is" + counter);
          }}
        />
        <ClickTracker />
        <Login />
        <UncontrolledLogin />
        <TodoList
          render={(items, removeListItem) => {
            return items.map((todo, index) => (
              <div key={index}>
                {todo}
                <button
                  key={index}
                  onClick={() => {
                    removeListItem(todo);
                  }}
                >
                  remove
                </button>
              </div>
            ));
          }}
        />
        <Container title="Lorem Ipsum" />
        <LanguageContext.Provider value={this.state.language}>
          <LanguageComponent />
        </LanguageContext.Provider>
        <Welcome />
        <Sum numbers={[5, 1, 9]} />
        <GitHubUser />
        <GithubUserList />
        <CustomCounter />
        <CustomLogin />
      </React.Fragment>
    );
  }
}
