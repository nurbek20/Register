import React from 'react'
import { useForm } from 'react-hook-form';
import services from '../../server/services';

const Login = (props) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit= async(data)=>{
        console.log(data)
        const object = {
            email:data.email,
            password:data.password
        }
        await services.login(object).then(response=>{
            console.log(response)
            reset()
        })
        .catch(e=>console.log(e))
    }
    return (
        <>
            <div className='container'>
                <div className='form__content'>
                    <div className='form'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div> 
                                <input {...register('email', {required:'not empty'})} className='input' placeholder='Email' type="email" />
                                {errors.email &&<span>{errors.email.message}</span>}
                            </div> 
                            <div>
                                <input {...register('password' , {required:'not empty', minLength:{value:8, message:'at least 8 characters'}})} className='input' placeholder='Password' type="password" />
                                {errors.password && <span>{errors.password.message}</span>}
                            </div>
                            <button className='btn' type='submit'>Войти</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login