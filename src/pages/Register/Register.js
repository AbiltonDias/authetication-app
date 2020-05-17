import React from 'react';
import {ErrorMessage, Formik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { history } from '../../history';
import '../../pages/Form.css';

const Register = () => {

    const handleSubmit = async values =>{
        await axios.post('http://localhost:3333/v1/api/user', values)
         .then( resp=> {
             const { data } = resp
             if(data){
                 history.push('/login')
             }
         });
    }

    const validations = yup.object().shape({
        firstName: yup.string().min(4).max(255).required(),
        lastName: yup.string().min(4).max(255).required(),
        email: yup.string().email().min(8).max(34).required(),
        password: yup.string().min(8).required()
    });

    return(
        <>
            <div className='Form-Header'>
                <h1> Cadastro </h1>
                <p> Realize seu cadastro para ter acesso ao sistema </p>
            </div>
            

            <Formik
                initialValues={{}}
                onSubmit={handleSubmit}
                validationSchema={validations}
            >
                <Form className='Form'>
                    <div className='Form-Group'>
                        <Field 
                            name='firstName'
                            placeholder = 'Nome'
                            className='Form-Field'
                        />
                        <ErrorMessage 
                            component='span'
                            name='firstName'
                            className='Form-Error'
                        />

                        <Field 
                            name='lastName'
                            placeholder='Sobrenome'
                            className='Form-Field'
                        />
                        <ErrorMessage 
                            component='span'
                            name='lastName'
                            className='Form-Error'
                        />
                        <Field 
                            name='email'
                            placeholder='Email - email@email.com'
                            className='Form-Field'
                        />
                        <ErrorMessage 
                            component='span'
                            name='email'
                            className='Form-Error'
                        />

                        <Field
                            name='password'
                            placeholder='Senha'
                            type='password'
                            className='Form-Field'
                        />
                        <ErrorMessage 
                            component='span'
                            name='password'
                            className='Form-Error'
                        />

                    </div>

                    <button className='Form-Btn' type='submit'>
                        Gravar
                    </button>
                    <a href='/login' className='link'>
                        <button className='Form-Btn-New' type='button' > 
                            Voltar
                        </button>
                    </a>
                </Form>

            </Formik>
        </>
    )

}

export default Register;