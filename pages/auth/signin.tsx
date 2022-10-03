import { getProviders, signIn } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

interface Props {
  providers: any
}

function SignIn({ providers }: Props) {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-y-12">
      <div className="relative h-52 w-52 overflow-hidden rounded-full">
        <Image
          src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
          alt=""
          layout="fill"
          objectFit="contain"
        />
      </div>
      {Object.values(providers).map((provider: any) => (
        <div key={provider.name}>
          <button
            className="cursor-pointer rounded-2xl bg-blue-500 py-4 px-6 text-white opacity-75 transition hover:opacity-100"
            onClick={() => signIn(provider.id, { callbackUrl: '/blogs' })}
          >
            Sign in with Google
          </button>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()

  return {
    props: {
      providers,
    },
  }
}

export default SignIn
