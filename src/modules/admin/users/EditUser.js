import React, { Component } from 'react'
import {connect} from 'react-redux'

import { updateUser, fetchUser } from '../../../actions/userActions'
import UserForm from './UserForm'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class EditUser extends Component{

    componentDidMount(){
        const { params: {id}} = this.props.match;
        this.props.fetchUser(id);
    }

    handleSubmit = user => {
        this.props.updateUser(user);
        this.goBack();
    }

    goBack = () => {
        this.props.history.goBack();
    }

    render(){
        const {user} = this.props;

        return (
            <Container>
                <Row>
                    <Col>
                        <div align="center">
                            <h1>Actualizar Usuario</h1>
                        </div>
                    </Col>
                </Row>
                {
                    user.id?
                    <UserForm 
                        action="Actualizar"
                        user={user}
                        submit={this.handleSubmit}
                        back={this.goBack}
                    />
                    :
                    null
                }  
            </Container>
        );
    }

}

export default connect( (state)=>{
    return {
        user: state.users.user
    };
}, {updateUser, fetchUser}) (EditUser);