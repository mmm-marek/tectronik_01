import React, { Component } from "react";
import ProgressBar from "./components/progress-bar/progress-bar.component";
import "./App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            progressValue: props.progressValue,
        };
    }

    render() {
        return (
            <ProgressBar
                value={this.state.progressValue}
                max={100}
                text={() => `${this.state.progressValue}%`}
                width={"50%"}
            />
        );
    }
}

export default App;
