import React from 'react';
import './Welcome.css';

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        // console.log("Welcome component", this.props);
        console.log("Welcome component constructor");
        this.state = {
            username: "Surabhi",
            address: "Jaipur"
        }
    }

    updateDetails = () => {
        this.setState({ // Whenever state update, component rerender
            username: "Surya",
            address: "Bhubneshwar",
            pin: "212121"
        })
    }

    render() {
        const myStyle = {
            color: 'white',
            backgroundColor: 'blue',
            padding: '20px',
            fontFamily: 'Sans-Serif'
        }

        return <div>
            <h1 className='header'>Programming with Harsh</h1>
            <h1 style={myStyle}>This is Welcome Class Component</h1><h2 className='header'>Another element</h2>
            <div>Props message is {this.props.message}</div>

            <div style={myStyle}>
                <div>State Username is {this.state.username} and address is {this.state.address}</div>
                <button onClick={this.updateDetails}>Update State Details</button>
            </div>
            <div style={{ color: 'blue', border: '2px solid red', textAlign: 'center', padding: "2px" }}>
                <div>Props x is {this.props.x}</div>
                <div>Props username is {this.props.usernameProps}</div>
                <div>Props interests is {this.props.interestsProps[0]}</div>
                <div>Props birth place is {this.props.birthProps.place}</div>
            </div>
        </div>
    }
}

export default Welcome;