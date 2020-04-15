import { useState } from 'react'
import { Input, Spacer, Textarea, Button } from '@zeit-ui/react'

export default function ContactForm() {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })

  const [inputs, setInputs] = useState({
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
      setInputs({
        email: '',
        message: '',
      })
    } else {
      setStatus({
        info: { error: true, msg: msg },
      })
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
            value={inputs.email}
            id='email'
            type='email'
            onChange={handleOnChange}
          />
          <Spacer />
          <label htmlFor='message'>Message</label>
          <Spacer />
          <Textarea
            style={{ width: '100%' }}
            id='message'
            onChange={handleOnChange}
            value={inputs.message}
          />
          <Spacer />
          <Button
            type='success'
            type='submit'
            disabled={status.submitting}
            ghost
            loading={status.submitting ? true : false}
          >
            {!status.submitting
              ? !status.submitted
                ? 'Submit'
                : 'Submitted'
              : 'Submitting...'}
          </Button>
          <Spacer />
        </div>
      </form>
      {status.info.error && (
        <div className='error'>Error: {status.info.msg}</div>
      )}
      {!status.info.error && status.info.msg && (
        <div className='success'>{status.info.msg}</div>
      )}
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
