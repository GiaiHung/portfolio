import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'

function Header() {
  const categories = [
    {
      name: 'Psychology',
      slug: 'psychology',
    },
    {
      name: 'Neuroscience',
      slug: 'neuroscience',
    },
    {
      name: 'Philosophy',
      slug: 'philosophy',
    },
  ]
  return (
    <div className="flex w-full items-center justify-between border-b border-blue-400 py-4">
      <Link href="/">
        <span className="cursor-pointer text-2xl font-bold text-white lg:text-4xl">My Blogs</span>
      </Link>

      <div>
        <div className="block md:hidden">
          <AiOutlineMenu className="cursor-pointer text-2xl text-white" />
        </div>
        <div className="hidden items-center gap-x-4 md:flex">
          {categories.map((category) => (
            <Link href={`/blogs/category/${category.slug}`} key={category.slug}>
              <span className="cursor-pointer text-lg font-semibold text-white">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
