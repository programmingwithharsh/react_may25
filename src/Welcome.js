import React from 'react';
import './Welcome.css';
import { Link } from 'react-router-dom';

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
            color: 'black',
            backgroundColor: 'yellow',
            padding: '20px',
            fontFamily: 'Sans-Serif'
        }

        return <div>
            <h1 className='header'>Welcome to Users Module</h1>

            <div className='text-center'>
                <p>Existing Users</p>
                <Link className="btn btn-outline-dark" to="/login" >Login</Link>
                <p>New Users</p>
                <Link className="btn btn-outline-dark" to="/register" >Register</Link>
            </div>

            <h1 style={myStyle}>This is Welcome Class Component</h1><h2 className='header'>Another element</h2>
            <div>Props message is {this.props.message}</div>

            <div style={myStyle}>
                <div>State Username is {this.state.username} and address is {this.state.address}</div>
                <button className='btn btn-primary' onClick={this.updateDetails}>Update State Details</button>
            </div>
            <div style={{ color: 'blue', border: '2px solid red', textAlign: 'center', padding: "2px" }}>
               
            </div>
        </div>
    }
}

export default Welcome;