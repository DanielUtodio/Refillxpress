import React from 'react'
import styled from 'styled-components'
import { CustAuthWrapper } from './CustomerLogin'
import { CustAuthBox } from './CustomerLogin'
import { Input } from './CustomerLogin'
import { BsEyeSlash, BsEye } from 'react-icons/bs'
import  { SignOption } from './CustomerLogin'
import { Button } from './CustomerLogin'
import { GoogleSign } from './CustomerLogin'
import { FcGoogle } from 'react-icons/fc' 
import { Link, useNavigate } from 'react-router-dom'
import { StyledLink } from './CustomerLogin'

const CustomerSignup = () => {
    const nav = useNavigate()
    return (
        <CustAuthWrapper sign>
            <CustAuthBox>
                <form>
                    <h1>Sign Up as Customer</h1>
                    <InputRow>
                    <Input wid>
                        <label>
                            first name
                        </label>

                        <div className="field">
                            <input type="text"/>
                        </div>
                    </Input>
                    <Input wid>
                        <label>
                            last name
                        </label>

                        <div className="field">
                            <input type="text"/>
                        </div>
                    </Input>
                    </InputRow>
                    <InputRow>
                    <Input wid> 
                            <label>
                                email address
                            </label>
    
                            <div className="field">
                                <input type="text" placeholder='Your email here...'/>
                            </div>
                        </Input>
                        <Input wid> 
                            <label>
                                phone number
                            </label>
    
                            <div className="field">
                                <input type="text" placeholder='Your email here...'/>
                            </div>
                        </Input>
                    </InputRow>
                    <Input>
                        <label>
                        input your password
                        </label>
                        <div className="field">
                            <input type="password" placeholder='Password (8 or more characters)'/>
                            <div className="eyecon">
                                <BsEyeSlash />
                            </div>
                        </div>
                        
                    </Input>
                    <Input>
                        <label>
                        confirm password
                        </label>
                        <div className="field">
                            <input type="password" placeholder='Enter same password here'/>
                            <div className="eyecon">
                                <BsEyeSlash />
                            </div>
                        </div>
                    </Input>
                    <Agreement>
                        <input type="checkbox" />
                        <p>I agree to Refillxpress <span>terms and conditions</span></p>
                    </Agreement>
                    <SignOption>
                        <Button>create account</Button>
                        <h2>or</h2>
                        <GoogleSign onClick={()=> nav('register-vendor')}>
                            <FcGoogle className='icon' />
                        sign up with google
                        </GoogleSign>
                        <p>Already have an account? <StyledLink to="/">sign in</StyledLink></p>
                    </SignOption>
                </form>
            </CustAuthBox>
        </CustAuthWrapper>
    )
}

export default CustomerSignup

export const InputRow = styled.div`
    width: 41rem;
    height: 3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Agreement = styled.div`
width: 95%;
height: max-content;
display: flex;
justify-content: flex-start;
align-items: center;
gap: 0.2rem;
p {
    margin: 0 0;
    span {
        color: limegreen;
    }
}
`