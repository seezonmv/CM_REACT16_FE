import React, { Component } from 'react'
import {connect} from 'react-redux'
import UserForm from './UserForm'
import {createUser} from '../../../actions/userActions'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class NewUser extends Component{

    handleSubmit = user => {
        this.props.createUser(user);
        this.goBack();
    }

    goBack = () =>{
        this.props.history.goBack();
    }

    render(){
        const user = {name: '', lastname:'', email: '', password: '', role: '', phone: ''};

        return(
            <Container>
                <Row>
                    <Col>
                        <div align="center">
                            <h1>Crear Usuario</h1>
                        </div>
                    </Col>
                </Row>
                <UserForm 
                    action="Crear"
                    user={user}
                    submit={this.handleSubmit}
                    back={this.goBack}
                />
            </Container>
        );
    }
}
export default connect(null, {createUser})(NewUser);