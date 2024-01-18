import React, { Component } from 'react';

class BookForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
            year: '',
        };
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { title, author, year } = this.state;
        this.props.onAddBook({ title, author, year });
        this.setState({ title: '', author: '', year: '' });
    };

    render() {
        return (
            <div className="container mt-4">
                <h2>Add New Book</h2>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Title:</label>
                        <input
                            type="text"
                            name="title"
                            value={this.state.title}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Author:</label>
                        <input
                            type="text"
                            name="author"
                            value={this.state.author}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </div>
                    <div className="form-group">
                        <label>Year:</label>
                        <input
                            type="text"
                            name="year"
                            value={this.state.year}
                            onChange={this.handleChange}
                            className="form-control"
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">
                        Add Book
          </button>
                </form>
            </div>
        );
    }
}


export default BookForm;
