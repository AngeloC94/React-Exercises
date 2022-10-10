import React from "react";
import { Age } from "./Age";

export class Welcome extends React.Component {
    render(){
        return (
        <>
            <p>Welcome, {this.props.name}!</p>
            {this.props.age && this.props.name === 'John' && <Age age= {this.props.age}/>}
        </>
        )
    }
}

Welcome.defaultProps = {
    name: <strong>Bon Jovi</strong>,
}