import React from 'react';
import { Redirect} from 'react-router';
import { ErrorMessage, Formik, Form, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { history } from '../../history'; 
import '../../pages/Form.css';
//import imgLogon from '../../asserts/img.png';

const Login = () => {
    const handleSubmit = async values => {
        await axios.post('http://localhost:3333/v1/api/auth', values)
            .then(resp =>{
                const { data} = resp
                if(data){
                    localStorage.setItem('app-token', data)
                    history.push('/')
                }
            })
    }
    const validations = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(8).required()
    })
    return(
        <>
            <div className='Form-Header'>
                <h1>Login</h1>
                <p>Página para realizar o login</p>
           </div>

            <Formik 
                initialValues={{}} 
                onSubmit={handleSubmit}
                validationSchema={validations}    
                className='Form-Body'
                >
                <Form className='Form'>
                
                        

                    <div className='Form-Group'>
                        <Field 
                            name='email'
                            className='Form-Field'
                        />

                        <ErrorMessage
                             component='span'
                             name='email' 
                             className='Form-Error' 
                        />
                        
                    </div>
                    <div className='Form-Group'>
                        <Field 
                            name='password'
                            type='password'
                            className='Form-Field'
                        />
                        <ErrorMessage 
                            component='span'
                            name='password'
                            className='Form-Error'
                        />

                    </div>

                    <button
                            className='Form-Btn'
                            type='submit'>
                            Login
                    </button>

                    <a href='/register' className='link'>
                        <button className='Form-Btn-New' type='button' > 
                            Cadastrar
                        </button>
                    </a>   
                    
                </Form>
            </Formik> 
            
        </>
)};

export default Login;