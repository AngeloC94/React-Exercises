import React from 'react';

export class Counter extends React.Component {
    state = { count: 0 };

    constructor() {
        super();

        setInterval(() => {
            this.setState({
                count: this.state.count + 1
            });
        }, 1000);
    }

    render() {
        return (
            <>
                <h1>Count : {this.state.count}</h1>
            </>
        );
    }
}

