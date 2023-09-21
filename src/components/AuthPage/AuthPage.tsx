'use client'

import React, {use, useCallback, useState} from 'react'
import Image from 'next/image';
import logoImg from 'public/logo.png';
import InputAnim from '@/components/InputAnim/InputAnim';
import axios from 'axios';

type authVariant = 'login' | 'register';

export const AuthPage = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    const [variant, setVariant] = useState<authVariant>('login');
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login')
    }, [])


    const register = useCallback(async () => {
        try {
            await axios.post('/api/register', {
                email,
                name,
                password,
            });
        } catch (error) {
            console.log(error);
        }
    }, [email, name, password])


    return (
        <div className="relative h-full w-full bg-[url('/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 py-5">
                    <Image src={logoImg} alt="netflix logo" className="h-12 w-auto"/>
                    <div className="flex justify-center">
                        <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                            <h2 className="text-4xl mb-8 font-semibold">
                                {variant === 'login' ? 'Sign in' : 'Register'}
                            </h2>
                            <div className="flex flex-col gap-4">
                                {variant === 'register' && 
                                    <InputAnim 
                                        type="username"
                                        value={name}
                                        onChange={(ev: any) => setName(ev.target.value)}
                                        label="Username"
                                        id='usernameInput'
                                    />
                                }
                                <InputAnim
                                    type="email"
                                    value={email}
                                    onChange={(ev : any) => setEmail(ev.target.value)}
                                    label='Email'
                                    id='emailInput'/>
                                <InputAnim
                                    type="password"
                                    value={password}
                                    onChange={(ev : any) => setPassword(ev.target.value)}
                                    label='Password'
                                    id='passwordInput'/>
                                <button onClick={register} className="bg-red-600 py-3 rounded-md w-full mt-10 hover:bg-red-700 transition">
                                    {variant === 'login' ? 'Login' : 'Sign up'}
                                </button>
                                <p className="text-center text-sm text-neutral-500 mt-12">
                                    {variant === 'login' ? "First time using Netflix?" : "Already have an account?"}
                                    <span onClick={toggleVariant} className="text-gray-100 ml-1 hover:underline cursor-pointer">
                                    {variant === 'login' ? "Create an account." : "Log in."}
                                    </span>
                                </p>                                    
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default AuthPage;
