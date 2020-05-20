import React, {Fragment} from 'react'
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

const User = ({user, handleDelete}) => {
    const {id, name, lastname, email, role, phone} = user;

    return (
        <Fragment>
            <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{lastname}</td>
                <td>{email}</td>
                <td>{role}</td>
                <td>{phone}</td>
                <td>
                    <LinkContainer to={`/admin/users/${id}`}>
                        <Button variant="primary">
                            Editar
                        </Button>
                    </LinkContainer>{' '}
                    <Button variant="danger"
                            onClick={() => { handleDelete(id) }}>
                            Eliminar
                    </Button>
                </td>
            </tr>
        </Fragment>
)
}
export default User;