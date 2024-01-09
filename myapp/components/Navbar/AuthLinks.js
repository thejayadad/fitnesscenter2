import React from 'react'
import { signIn, signOut } from 'next-auth/react'
import {getServerSession} from "next-auth";
import Link from "next/link";
import LoginWithGoogle from '../Buttons/LoginWithGoogle';
import LogoutButton from '../Buttons/LogoutButton';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';

const AuthLinks = async () => {
    const session = await getServerSession(authOptions);

  return (
       <div
    className="flex items-center gap-4 text-sm text-slate-500"
    >
       {!!session && (
            <>
              <Link href={'/post'}>Post</Link>
              <Link href={'/account'}>
                Hello, {session?.user?.name}
              </Link>
              <Link href={'/create'}>Create</Link>
              <LogoutButton />
            </>
          )}
          {!session && (
            <>
            <Link href={'/post'}>Post</Link>
            <LoginWithGoogle />
            </>
          )}
    </div>
  )
}

export default AuthLinks