import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

import { useRecoilState } from 'recoil'
import sidebarState from '../../atoms/sidebarAtom'

interface Props {
  categories: Category[]
}

function Header({ categories }: Props) {
  const [sidebarActive, setSidebarActive] = useRecoilState(sidebarState)

  return (
    <div className="flex w-full items-center justify-between border-b border-blue-400 py-4">
      <Link href="/">
        <span className="cursor-pointer text-2xl font-bold text-white lg:text-4xl">My Blogs</span>
      </Link>

      <div>
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
      </div>
    </div>
  )
}

export default Header
