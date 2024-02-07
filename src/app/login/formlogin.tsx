"use client"
import React, { useEffect, useState } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Image from 'next/image'
import { useRouter } from 'next/navigation';
 
export default function Formlogin() {
    const { data: session } = useSession();
    const router = useRouter();
    const [form, setForm] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        // If the user is logged in, redirect to the desired page
        if (session) {
            router.push('/'); // Replace '/dashboard' with your desired page
        }
    }, [session, router]);
    return (
        <div className='lg:w-[450px] mx-auto md:w-[400px] w-[350px] lg:text-lg md:text-md text-sm'>
            <div className='shadow-lg rounded bg-sky-200 px-10 py-5'>
                <h3 className="text-xl font-bold text-center my-5">Form Login</h3>
                <form method='post' className='flex flex-col gap-x-1' onSubmit={(e) => {
                    e.preventDefault();
                    signIn('credentials', {
                        email: form.email,
                        password: form.password,
                        redirect: true,
                        callbackUrl: '/'
                    })
                }}> 
                    <label htmlFor="email">Email</label> 
                    <input type="email" name='email' onChange={(e) => {
                        setForm({
                            ...form,
                            email: e.target.value
                        })
                    }} placeholder='Enter Email' className='border p-2' />
                    <br />
                    <label htmlFor="password">Password</label> 
                    <input type="password" onChange={(e) => {
                        setForm({
                            ...form,
                            password: e.target.value
                        })
                    }} name='password' placeholder='Enter password' className='border p-2' />  
                </form>

                <button onClick={() => signIn('google')} className="text-green-500 flex gap-1 items-center p-4">
                        <Image src='/google.png' className='w-8 h-8 block' width={20} height={20} alt='google' />
                        Signin By Google</button>
                    <button onClick={() => signIn('facebook')} className="text-blue-500 flex gap-1  items-center p-4">
                        <Image src='/facebook.png'  className='w-8 h-8 block' width={20} height={20} alt='facebook' />
                        Signin By Facebook</button>
            </div>
        </div>
    )
}
