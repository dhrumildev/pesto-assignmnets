// BookDetail.js
import React, { Component } from 'react';

class BookDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetails: false,
        };
    }

    toggleDetails = () => {
        this.setState((prevState) => ({ showDetails: !prevState.showDetails }));
    };

    render() {
        const { title, author, year } = this.props;
        return (
            <div className="mt-3">
                <h3>{title}</h3>
                <p>Author: {author}</p>
                <p>Year: {year}</p>
                <button onClick={this.toggleDetails} className="btn btn-secondary">
                    Toggle Details
        </button>
                {this.state.showDetails && (
                    <div className="mt-3">
                        {/* Additional details go here */}
                        <p>Book Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Genre: Fiction</p>
                    </div>
                )}
            </div>
        );
    }

}

export default BookDetail;
