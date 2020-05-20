import React, { Component } from 'react'
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import User from './User'
import {fetchUsers, removeUser, filterUsers} from '../../../actions/userActions'
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import SearchUser from './SearchUser';

const mapStateToProps = state => {
    return {
        users: state.users.users,
        filtered: state.users.filtered
    }
};

const mapDispatchToProps = dispatch => {
    return {
        getUsers: () => {
            dispatch(fetchUsers());
        },
        removeUser: (id) => {
            dispatch(removeUser(id));
        },
        filterUser: (searchValue) => {
            dispatch(filterUsers(searchValue));
        }
    };
};

class UserList extends Component{
    constructor(props){
        super(props);
        this.state = {
            titles:['id','Nombre','Apellido','Email','Role','Teléfono','Acción']
        };
    }

    componentDidMount(){
        this.props.getUsers();
    }

    handleDelete = id => {
        this.props.removeUser(id);
    };

    handleSearchUser = searchValue => {
        this.props.filterUser(searchValue);
    };

    render(){
        const {titles} = this.state;
        const users = this.props.users;
        const filtered = this.props.filtered.length ? this.props.filtered : users;

        return(
            <Container fluid>
                <Row>
                    <Col ><h1>Lista de Usuarios</h1></Col>
                    <Col>
                        <div align="Right" style={{margin:"1em"}}>
                            <LinkContainer to="/admin/users/new">
                                <Button variant="primary">Nuevo</Button>
                            </LinkContainer>
                        </div>
                    </Col>
                </Row>
                { filtered.length? (
                    <>
                    <Row>
                        <Col>
                            <SearchUser handleSearchUser={this.handleSearchUser}/>
                        </Col>
                    </Row>
                   
                    <Row>
                        <Col>
                            <Table striped bordered hover responsive variant="dark">
                                <thead>
                                    <tr>
                                        { titles.map((title,idx)=>(
                                            <th key={idx}>{title}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                        {filtered.map((user)=>(
                                            <User 
                                                user={user}
                                                key={user.id}
                                                handleDelete={this.handleDelete}/>
                                        ))}
                                </tbody>
                            </Table>    
                        </Col>
                    </Row>
                </> )
                :
                    <p> No existen usuarios </p>
                }
                
            </Container>
        );
    }
}

export default withRouter(
    connect(mapStateToProps,mapDispatchToProps)(UserList)
);