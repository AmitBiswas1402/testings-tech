'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import React from 'react'

const Dashboard = () => {
    const {data: session} = useSession()

  return (
    <>
    {session ? (
        <>
            <img src={session.user?.image as string} className='rounded-full h-20 w-20' alt="logo" />
            <h1 className='text-3xl text-purple-500 font-bold'>
                Welcome Back!! {session.user?.name}
            </h1>
            <p className='text-2xl text-teal-500 font-bold'>
                {session.user?.email}
            </p>
            <button onClick={() => signOut()} className='border border-black rounded-lg text-zinc-100 bg-red-400 p-1 ml-2'>Sign Out</button>
        </> 
    ) : (
        <>
            <h1 className='text-3xl text-red-500 font-bold'>You're not logged in</h1>
            <div className=''>
                <button onClick={() => signIn('github')} className='border border-black rounded-lg text-zinc-100 bg-slate-500 p-1 mr-2'>Sign In with Github</button>
                <button onClick={() => signIn('google')} className='border border-black rounded-lg text-zinc-100 bg-red-400 p-1 ml-2'>Sign In with Google</button>
            </div>
        </>
    )
    }
    </>
  )
}

export default Dashboard