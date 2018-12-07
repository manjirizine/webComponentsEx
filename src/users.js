import React, { Component } from 'react';
import RouteComponent from "./routeWebComponent";
import userImg from "./images/user.jpeg";


export default class Users extends Component {

    usersText = "You are on the users page.........";
    render() {
        return (
            <div>
                <h1>Users</h1>
                <route-component displayText={this.usersText} pageImg={userImg}></route-component>
            </div>
        )
    }
}