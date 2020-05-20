import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class SearchUser extends Component{
    state = {
        searchValue: ''
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.handleSearchUser(this.state.searchValue);
    }

    handleChange = e => {
        this.setState({ searchValue: e.target.value });
    };

    render(){
        const {searchValue} = this.props;
        return (
            <Form onSubmit={this.handleSubmit}>
                <Form.Group>
                <Form.Control 
                            type="text"
                            name="name" 
                            placeholder="Ingresar Nombre"
                            value={searchValue}
                            onChange={this.handleChange}
                          
                />
                <Button 
                    variant="primary" 
                    type="submit"
                >
                    Buscar
                </Button>
                </Form.Group>
            </Form>
        );
    }
}

export default SearchUser;