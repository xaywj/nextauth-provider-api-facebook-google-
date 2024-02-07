"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"

export default function FormIndex() {
  const { data: session } = useSession()
  if (session) {
    return (
      <div className="border border-red-500 p-5">
        Profile: <img alt="aaa" className="w-10 h-10 overflow-hidden rounded-full" src={session?.user?.image || ''} about="AaAAA" /> <br />
        Email: {session?.user?.email} <br />
        Name: {session?.user?.name} <br />
        <button className="p-2 my-3 bg-orange-400 text-white" onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }
  return (
    <>
      Not signed in <br />
      <Link href="/login" className="bg-sky-500 rounded px-5 py-2 text-white" >Form Sign in Custom</Link>
      <button className="bg-red-500 rounded px-5 py-2 text-white" onClick={() => signIn()}>form login use next auth Sign in</button>
    </>
  )
}