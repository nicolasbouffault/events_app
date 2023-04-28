import React, { useRef } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

const singleEvent = ({data}) => {

  const inputEmail = useRef()
  const router = useRouter()
  
  const onSubmit = async(e) => {
    e.preventDefault()
    const emailValue = inputEmail.current.value
    const eventId = router?.query.id
    try {
      const response = await fetch('/api/email-registration')
    } catch (error) {
      console.log('ERROR', error)
    }
  }

  return (
    <div className="event_single_page">
      <h1>{data.title}</h1>
      <Image src={data.image} width={1000} height={500} alt={data.title} />
      <p>{data.description}</p>
      <form onSubmit={onSubmit} className="email_registration">
        <label> Get Registered for this event!</label>
        <input ref={inputEmail} type="email" id="email" placeholder="Please insert your email here" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default singleEvent