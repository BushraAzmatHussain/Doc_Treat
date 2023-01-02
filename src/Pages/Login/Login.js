import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let signInError;

    if (loading || gLoading) {
        return <button className="btn loading">loading</button>
    }

    if(error || gError){
        signInError = <p>{error?.message || gError?.message}</p>
    }

    if (gUser) {
        console.log(gUser);
    }
    const onSubmit = data => {
        console.log(data);
        signInWithEmailAndPassword(data.email, data.password);

    }

    return (
        <div className='flex h-screen justify-center items-center '>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="text-center font-mono text-2xl">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Email</span></label>
                            <input type="text"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email Address is required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid email'
                                    }
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            {errors.email?.type === 'required' && <p className='text-red-600'>{errors.email?.message}</p>}
                            {errors.email?.type === 'pattern' && <p className='text-red-600'>{errors.email?.message}</p>}
                        </div>
                        <div className="form-control w-full max-w-xs">
                            <label className="label"> <span className="label-text">Password</span></label>
                            <input type="password"
                                {...register("password", {
                                    required: "Password is required",
                                    minLength: {
                                        value: 6,
                                        message: 'Password must be 6 characters or longer'
                                    }
                                })}
                                className="input input-bordered w-full max-w-xs" />
                            <label className="label"> <span className="label-text">Forget Password?</span></label>
                            {errors.password?.type === 'required' && <p className='text-red-600'>{errors.password?.message}</p>}
                            {errors.password?.type === 'minLength' && <p className='text-red-600'>{errors.password?.message}</p>}
                        </div>
                        <input className='btn btn-accent w-full' value="Login" type="submit" />
                        <div>
                            {signInError && <p className='text-red-600'>{signInError}</p>}
                        </div>
                    </form>
                    <p>New to Doctors Portal <Link className='text-secondary' to="/signup">Create new Account</Link></p>

                    <div className="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        className="btn btn-outline"
                    >Continue with GOOGLE</button>
                </div>
            </div>
        </div>
    );
};

export default Login;