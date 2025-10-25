import React, { useRef, useEffect } from 'react'
import "./verify.css"
import { HiFire } from "react-icons/hi";

const Verify = () => {
    const inputRef = [useRef(""), useRef(""), useRef(""), useRef("")]
    const handleChange = (e, index) => {
            const value = e.target.value
        if (value && index < inputRef.length - 1)  {
            inputRef[index + 1].current.focus()
        } else if (value === "" && index > 0) {
            inputRef[index - 1].current.focus()
    }
    
    }
    useEffect(()=> {
        inputRef[0].current.focus()
    }, [])
  return (
    <div className='verify'>
      <article className="article">
        <header className="header">
            <h4 className='logo-heading'>
                <span className='fire'>
                    <HiFire /> 
                </span>
                Refill<span className='logo-style'>Xpress</span>
            </h4>
        </header>
        <form className="form">
            <div className="form-heading">
                <h1>verify account</h1>
                <p>A verification code has been sent to your email
                address.Please enter it to continue</p>
            </div>
            <div className="code">
                {inputRef.map((ref, index) => (
                    <input 
                    ref={ref}
                    key={index}
                    type='text'
                    onChange={(e)=> handleChange(e, index)}
                    maxLength="1"
                    placeholder={index + 1}
                    className='code-box'
                    />
                ))}
            </div>
            <p>didn't receive code, resend in 00:00</p>
            <div className='submit-section'>
                <button className="submit">verify</button>
            </div>
        </form>
      </article>
    </div>
  )
}

export default Verify
