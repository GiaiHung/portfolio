import React from 'react'
import { motion } from 'framer-motion'

function About() {
  return (
    <div className="relative flex max-w-5xl flex-col items-center space-y-6 text-center md:mx-auto md:text-left">
      <h1 className="mt-24 text-center text-2xl tracking-[20px] text-gray-500 md:mb-4">About</h1>

      <div className="flex flex-col items-center gap-6 md:flex-row md:items-start md:px-6">
        <motion.img
          src="https://hips.hearstapps.com/hmg-prod/images/longform-lead-credit-jake-stangel-1525106191.jpg?crop=0.5625xw:1xh;center,top&resize=640:*"
          initial={{ x: -300, opacity: 0 }}
          viewport={{ once: true }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="h-56 w-56 shrink-0 rounded-full object-cover md:mb-0 md:h-[400px] md:w-[300px] md:rounded-lg"
        />

        <div className="flex-1 px-4">
          <h1 className="text-center text-2xl font-semibold mb-4">
            Here is my little <span className="underline decoration-yellow-500">story</span>
          </h1>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="text-sm md:text-base"
          >
            <p className='leading-7 tracking-wide'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dicta atque optio
              accusamus perspiciatis pariatur illo ea corporis mollitia iure repellendus nam
              necessitatibus inventore vel quod, veritatis doloremque aspernatur! Dolorum omnis
              ducimus maxime quo. Aspernatur mollitia, repudiandae labore ex illo magni temporibus,
              culpa ipsum quo fuga tempora quaerat, aperiam facere dolores sapiente voluptatem vero
              suscipit molestiae quae nulla dolorem tempore error! Nihil voluptatum molestias nulla
              eveniet magni provident blanditiis alias laborum. Ipsa, dicta debitis aut nesciunt ad
              repellat eos libero incidunt quaerat nostrum reprehenderit? Quas facere beatae magnam
              incidunt!
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default About
