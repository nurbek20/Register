import React from 'react';
// import {toast, ToastContainer} from 'react-toastify';
import { useForm } from 'react-hook-form';
import services from '../../server/services';

const Register = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data)
        const object = {
            firstName: data.FirstName,
            lastName: data.LastName,
            email: data.Email,
            password: data.password
        }
        await services.register(object)
            .then(response => {
                console.log(response)
                reset()
            })
            .catch(error => {
                console.log(error)
            })


    }
    return (
        <>
            <div className='container'>
                <div className='form__content'>
                    <div className='form'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <input {...register("FirstName", { required: 'not empty' })} className='input' placeholder='First Name' type="text" />
                                {errors.FirstName && <span>{errors.FirstName.message}</span>}
                            </div>
                            <div>
                                <input {...register("LastName", { required: 'not empty' })} className='input' placeholder='Last Name' type="text" />
                                {errors.LastName && <span>{errors.LastName.message}</span>}
                            </div>
                            <div>
                                <input {...register("Email", { required: 'not empty' })} className='input' placeholder='Email' type="email" />
                                {errors.Email && <span>{errors.Email.message}</span>}
                            </div>
                            <div>
                                <input {...register("password", { required: 'not empty', minLength: { value: 8, message: 'at least 8 characters' } })} className='input' placeholder='Password' type="password" />
                                {errors.password && <span>{errors.password.message}</span>}
                            </div>
                            <button className='btn' type='submit'>Регистрация</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;