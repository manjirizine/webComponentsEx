import React, { Component } from 'react';
import RouteComponent from "./routeWebComponent";
import homeImg from "./images/home.jpeg";

export default class Home extends Component {
    homeText = "You are on the home page.....";
    render() {
        return (
            <div>
                <h1>Home</h1>
                <route-component displayText={this.homeText} pageImg={homeImg}></route-component>
            </div>
        )
    }
}