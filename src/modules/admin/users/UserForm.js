import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as yup from 'yup';

const schema = yup.object({
    name: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().required().email(),
    role: yup.string().required(),
    password: yup.string().required().min(6),
    phone: yup.string().required().min(7)
});

export default ({action, user, submit, back}) =>{
    return (
        <Formik 
            validationSchema={schema}
            onSubmit={(values)=>submit(values)}
            initialValues={user}
        >
            {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
            }) =>
            (
                <Form noValidate autoComplete="off">
                    <Form.Group controlId="formName">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control 
                            type="text"
                            name="name" 
                            placeholder="Ingresar Nombre"
                            onChange={handleChange}
                            value={values.name}
                            isValid={touched.name && !errors.name}
                            isInvalid={!!errors.name}
                        />
                        <Form.Control.Feedback  type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formLastName">
                        <Form.Label>Apellido</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ingresar Apellido"
                            name="lastname" 
                            onChange={handleChange}
                            value={values.lastname}
                            isValid={touched.lastname && !errors.lastname}
                            isInvalid={!!errors.lastname}
                        />
                        <Form.Control.Feedback  type="invalid">
                            {errors.lastname}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            type="email" 
                            placeholder="Ingresar email"
                            name="email" 
                            onChange={handleChange}
                            value={values.email}
                            isValid={touched.email && !errors.email}
                            isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback  type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formRole">
                        <Form.Label>Rol</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Ingresar Rol"
                            name="role" 
                            onChange={handleChange}
                            value={values.role}
                            isValid={touched.role && !errors.role}
                            isInvalid={!!errors.role}
                        />
                        <Form.Control.Feedback  type="invalid">
                            {errors.role}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            type="password" 
                            placeholder="Ingresar password"
                            name="password" 
                            onChange={handleChange}
                            value={values.password}
                            isValid={touched.password && !errors.password}
                            isInvalid={!!errors.password}
                        />
                        <Form.Control.Feedback  type="invalid">
                            {errors.password}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="formPhone">
                        <Form.Label>Teléfono</Form.Label>
                        <Form.Control 
                            type="phone" 
                            placeholder="Ingresar teléfono"
                            name="phone" 
                            onChange={handleChange}
                            value={values.phone}
                            isValid={touched.phone && !errors.phone}
                            isInvalid={!!errors.phone}
                        />
                        <Form.Control.Feedback  type="invalid">
                            {errors.phone}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Button 
                            variant="primary" 
                            type="button"
                            onClick={handleSubmit}
                        >
                            {action}
                        </Button>
                        <Button 
                            variant="secondary" 
                            type="button"
                            onClick={()=>back()}
                        >
                            Regresar
                        </Button>
                    </Form.Group>
                </Form>
            )}
        </Formik>
    );
}