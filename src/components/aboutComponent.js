import React from "react";

class AboutComponent extends React.Component {
    state = {
        author: "Ngo Duc Luong",
        email: "ndluong1903@gmail.com",
        github: "Natlife",
        description: "This is a typing app for you to practice typing speed and accuracy. It is a simple app with basic features. You can choose the text to type, the language, and the length of the text. You can also see your typing speed and accuracy.",
        version: "0.0.1",

    }
    reder() {
        return (
            <div>

                <h2>About</h2>
                <div>
                    <h3>Let TypeType</h3>
                    <p>version: {this.state.version}</p>
                </div>
                <p>Author: {this.state.author}</p>
                <p>Email: {this.state.email}</p>
                <p>Github: {this.state.github}</p>
                <p>Description: {this.state.description}</p>
            </div>
        )
    }
}
export default AboutComponent;