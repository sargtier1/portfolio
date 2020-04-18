import { useState } from 'react'
import { Input, Spacer, Textarea, Button, useToasts } from '@zeit-ui/react'
import baseUrl from '../lib/baseUrl'
import axios from 'axios'

export default function ContactForm() {
  const [toasts, setToast] = useToasts()

  const [status, setStatus] = React.useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })

  const [inputs, setInputs] = React.useState({
    email: '',
    message: '',
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      })
      setToast({ text: msg })
      setInputs({
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
      setToast({ text: msg })
    }
  }

  const handleOnChange = (e) => {
    e.persist()
    setInputs((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }))
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputs),
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }
  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <div className='form-wrapper'>
          <label htmlFor='email'>Email</label>
          <Spacer />
          <Input
            width='100%'
            id='email'
            type='email'
            required
            value={inputs.email}
            onChange={handleOnChange}
          />
          <Spacer />
          <label htmlFor='message'>Message</label>
          <Spacer />
          <Textarea
            style={{ width: '100%' }}
            id='message'
            required
            value={inputs.message}
            onChange={handleOnChange}
          />
          <Spacer />
          <Button
            type='success'
            type='submit'
            disabled={status.submitting}
            ghost
            loading={status.submitting ? true : false}
          >
            Submit
          </Button>
          <Spacer />
        </div>
      </form>
      {/* {status.info.error && (
        <div className='error'>Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <div className='success'>{status.info.msg}</div>
      )} */}
      <style jsx>{`
        .form-wrapper {
          display: flex;
          flex-direction: column;
          max-width: 100%;
          margin: 0;
        }
        form {
          margin: auto;
          max-width: 750px;
        }
      `}</style>
    </>
  )
}
