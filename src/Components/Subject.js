import React, { Component } from 'react';

class Subject extends Component {
    handleClick = (e) => {
        e.preventDefault();
        this.props.onChangePage();
    }
    render() {
        console.log("Subject Render");
        return (
            <header>
                <h1><a href='/' onClick={this.handleClick}>{this.props.title}</a></h1>
                {this.props.sub}
            </header>
        );
    }
}

export default Subject;
