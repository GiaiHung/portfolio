import React, { useRef } from 'react'
import { FaSpinner, FaMapMarkerAlt } from 'react-icons/fa'
import { BsFillTelephoneFill, BsEnvelopeFill } from 'react-icons/bs'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'

interface Inputs {
  name: string
  email: string
  subject: string
  message: string
}

interface Props {
  pageInfo: PageInfo
}

function Contact({ pageInfo }: Props) {
  const form: any = useRef()
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await emailjs
      .sendForm('service_1lm1wyk', 'template_b5jtzgj', form.current, 'T7DG6Qt3AJtQb2cfK')
      .then(
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
      message: '',
    })
  }

  return (
    <div className="mx-auto flex min-h-screen max-w-5xl flex-col items-center pb-10">
      <h1 className="mt-20 mb-6 text-2xl tracking-[20px] text-gray-500">Contact</h1>

      <div className="flex flex-1 flex-col justify-center space-y-6 px-4">
        <h4 className="text-center text-2xl font-semibold tracking-wide lg:text-3xl">
          Find my portfolio interesting?
          <span className="underline decoration-[#f7ab0a]/50">{` Let's talk!`}</span>
        </h4>

        <div className="space-y-3">
          <div className="contactWrapper">
            <BsFillTelephoneFill className="contactIcon" />
            <h2>{pageInfo.phoneNumber}</h2>
          </div>
          <div className="contactWrapper">
            <FaMapMarkerAlt className="contactIcon" />
            <h2>{pageInfo.address}</h2>
          </div>
          <div className="contactWrapper">
            <BsEnvelopeFill className="contactIcon" />
            <h2>{pageInfo.email}</h2>
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
              className="flex cursor-pointer items-center justify-center gap-x-2 rounded-md bg-[#f8b523] py-4 text-lg font-semibold text-black hover:bg-[#f7ab0a]"
              onSubmit={handleSubmit(onSubmit)}
            >
              {isSubmitting && (
                <span className="animate-spin text-lg text-black">
                  <FaSpinner />
                </span>
              )}
              {isSubmitting ? <span>Submitting</span> : <span>Submit</span>}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
