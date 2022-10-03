import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import { useRecoilState } from 'recoil'
import sidebarState from '../../atoms/sidebarAtom'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'

interface Props {
  categories: Category[]
}

function Header({ categories }: Props) {
  const [sidebarActive, setSidebarActive] = useRecoilState(sidebarState)

  const { data: session }: any = useSession()

  return (
    <div className="flex w-full items-center justify-between border-b border-blue-400 py-4">
      <Link href="/">
        <span className="cursor-pointer text-2xl font-bold text-white lg:text-4xl">My Blogs</span>
      </Link>

      <div className="flex items-center gap-x-4">
        <div className="block md:hidden">
          <AiOutlineMenu
            className="cursor-pointer text-2xl text-white"
            onClick={() => setSidebarActive(true)}
          />
        </div>

        <div className="hidden items-center gap-x-4 md:flex">
          {categories.map((category) => (
            <Link href={`/blogs/category/${category.slug.current}`} key={category.slug.current}>
              <span className="cursor-pointer text-lg font-semibold text-white transition hover:text-pink-500">
                {category.title}
              </span>
            </Link>
          ))}
        </div>
        {!session ? (
          <button
            className="cursor-pointer rounded-full bg-green-500 py-2 px-4 text-white transition hover:bg-green-600"
            onClick={() => signIn()}
          >
            Sign in
          </button>
        ) : (
          <div className="relative h-10 w-10 cursor-pointer overflow-hidden rounded-full">
            <Image
              src={session.user?.image}
              alt=""
              layout="fill"
              objectFit="cover"
              onClick={() => signOut()}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
