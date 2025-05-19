import React from "react";

import TypingComponent from "./typingComponent";
import AboutComponent from "./aboutComponent";
import { Link, NavLink } from "react-router-dom";
class HomeComponent extends React.Component {
    render() {
        return (
            <div className="home-container">
                <NavLink to="/start" activeClassName="active">Start</NavLink>
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </div>
        )
    }
}
export default HomeComponent;