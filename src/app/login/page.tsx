import React from 'react'
// import { useSession, signIn, signOut } from 'next-auth/react'
import Formlogin from './formlogin' 
export default function page() {
   return (
    <div className='container mx-auto p-5'> 
        <Formlogin />
    </div>
   )
}
