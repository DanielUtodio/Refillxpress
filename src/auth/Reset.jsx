import React from 'react'
import "./reset.css"

const ResetPassword = () => {
    return (
        <div className='reset'>
            <article className="article">
                <header className="header">
                    <h2 className='logo-heading'>Refill<span className='logo-style'>Xpress</span></h2>
                </header>
                <form className="form">
                    <div className="form-heading">
                        <h1>reset password</h1>
                        <p>
                            Enter a new password for your account. Make 
                            sure it’s strong and easy for you 
                            to remember.
                        </p>
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">password</label>
                        <div className="input-div">
                            <input type="text" placeholder='password (8 or more characters)' />
                        </div>
                    </div>
                    <div className="input-container">
                        <label htmlFor="email">confirm password</label>
                        <div className="input-div">
                            <input type="text" placeholder='password (8 or more characters)' />
                        </div>
                    </div>
                    <div>
                        <button className="submit">reset password</button>
                    </div>
                </form>
            </article>
        </div>
    )
}

export default ResetPassword
