import React from "react";
import logo from "../assets/images/logo.png";
import "../styles/about.scss";
class AboutComponent extends React.Component {
    state = {
        author: "Ngo Duc Luong",
        email: "ndluong1903@gmail.com",
        github: "Natlife",
        description: "This is a typing app for you to practice typing speed and accuracy. It is a simple app with basic features. You can choose the text to type, the language, and the length of the text. You can also see your typing speed and accuracy.",
        version: "0.0.1",
        time: "5/17/2025",

    }
    render() {
        return (
            <div className="about-container">

                <div className="about-content">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="about-title">
                        <h1 className="app-name">
                            Let TypeType
                            <p className="app-version">version: {this.state.version}</p>
                            <p className="app-time">last update: {this.state.time}</p>
                        </h1>

                    </div>
                    <p className="about-des">Description: {this.state.description}</p>
                    <p>Author: {this.state.author}</p>
                    <p>Email: {this.state.email}</p>
                    <p className="about-des">Github: {this.state.github}</p>


                    <p>Have a good day!</p>
                    <p>The end.</p>
                    <p>* * * * * * *</p>
                </div>
            </div >
        )
    }
}
export default AboutComponent;