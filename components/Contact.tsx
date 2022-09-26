import React, { useRef } from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'

interface Inputs {
  name: string
  email: string
  subject: string
  message: string
}

function Contact() {
  const form: any = useRef()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    emailjs.sendForm('service_1lm1wyk', 'template_b5jtzgj', form.current, 'T7DG6Qt3AJtQb2cfK').then(
      (result) => {
        console.log(result.text)
      },
      (error) => {
        console.log(error.text)
      }
    )
    reset({
      name: '',
      email: '',
      subject: '',
      message: ''
    })
    alert('Mail sent!')
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center pb-6">
      <h1 className="mt-20 mb-6 text-2xl tracking-[20px] text-gray-500">Contact</h1>

      <div className="flex flex-1 flex-col justify-center space-y-6 px-4">
        <h4 className="text-2xl text-center font-semibold tracking-wide lg:text-3xl">
          Find my portfolio interesting?
          <span className="underline decoration-[#f7ab0a]/50">{` Let's talk!`}</span>
        </h4>

        <div className="space-y-3">
          <div className="contactWrapper">
            <PhoneIcon className="contactIcon" />
            <h2>0977867830</h2>
          </div>
          <div className="contactWrapper">
            <MapPinIcon className="contactIcon" />
            <h2>251D Hung Vuong, Ward 9 District 5</h2>
          </div>
          <div className="contactWrapper">
            <EnvelopeIcon className="contactIcon" />
            <h2>hunggiaitruong288@gmail.com</h2>
          </div>

          <form
            className="mx-auto flex w-full flex-col space-y-2 md:w-4/5"
            onSubmit={handleSubmit(onSubmit)}
            ref={form}
          >
            <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
              <input
                type="text"
                className="contactInput"
                spellCheck={false}
                placeholder="Name"
                {...register('name', { required: true })}
              />
              <input
                type="text"
                className="contactInput"
                spellCheck={false}
                placeholder="Email"
                {...register('email', { required: true })}
              />
            </div>
            <input
              type="text"
              className="contactInput"
              spellCheck={false}
              placeholder="Subject"
              {...register('subject', { required: true })}
            />
            <textarea
              className="contactInput"
              spellCheck={false}
              placeholder="Message"
              {...register('message', { required: true })}
            ></textarea>
            <button
              className="block cursor-pointer rounded-md bg-[#f8b523] py-4 text-lg font-semibold text-black hover:bg-[#f7ab0a]"
              onSubmit={handleSubmit(onSubmit)}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
