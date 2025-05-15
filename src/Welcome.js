import React from 'react';
class Welcome extends React.Component {
    constructor(props) {
        super(props);
        // console.log("Welcome component", this.props);
        console.log("Welcome component constructor");
    }

    render() {
        return <div>
            <h1>This is Welcome Class Component</h1><h2>Another element</h2>
            <div>Props message is {this.props.message}</div>
        </div>
    }
}

export default Welcome;