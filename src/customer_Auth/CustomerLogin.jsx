import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { BsEyeSlash, BsEye } from 'react-icons/bs'
import { FcGoogle } from 'react-icons/fc' 

const CustomerLogin = ({ wid, sign }) => {
    return (
        <CustAuthWrapper sign={sign}>
            <CustAuthBox>
                <form wid={wid}>
                    <h1>welcome back</h1>
                    <Input wid={wid}> 
                        <label>
                            email address
                        </label>

                        <div className="field">
                            <input type="text" placeholder='Your email here...'/>
                        </div>
                    </Input>

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
                        <div className="forgot">
                                <StyledLink to="/" >forgot password?</StyledLink>
                            </div>  
                    </Input>
                    <SignOption>
                    <Button>sign in</Button>
                    <h2>Or</h2>
                    <GoogleSign>
                        <FcGoogle className='icon' />
                        continue with google
                    </GoogleSign>
                    <p>Don't have an account? <StyledLink to="register">sign up</StyledLink></p>
                    </SignOption>
                </form>
            </CustAuthBox>
        </CustAuthWrapper>
    )
}

export default CustomerLogin

export const CustAuthWrapper = styled.div`
    width: 100%;
    height: 95vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 0;
    overflow: ${({sign})=> (sign? "auto" : "hidden")};
`
export const CustAuthBox = styled.article`
    width: ${({wid})=> (wid? "43rem" : "40rem")};
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Roboto", sans-serif;
    padding-inline: 0.4rem;
    box-sizing: border-box;

    form {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        gap: 3rem;
        box-sizing: border-box;

        input[type="checkbox"] {
            width: 24px;
            height: 22px;
            appearance: none;
            border: 2px solid #000;
            border-radius: 0.3rem;
            position: relative;
        }

        input[type="checkbox"]::before {
            content: "";
            position: absolute;
            top: 0;
            left: 5px;
            width: 6px;
            height: 12px;
            border: none;
            border-right: 2px solid limegreen;
            border-bottom: 2px solid limegreen;
            transform: rotate(45deg);
            opacity: 0;
        }

        input[type="checkbox"]:checked::before {
            opacity: 1;
        }
        input[type="checkbox"]:checked {
            border-color: limegreen;
        }

        input[type="text"]::placeholder {
            font-family: sans-serif;
        }

        h1 {
            text-transform: ${({wid})=> (wid? "none" : "capitalize")};
            font-size: 2rem;
            font-weight: 700;
            margin-block: 1.7rem;
        }

    }
`
export const Input = styled.div`
    width:  100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 15px; 


    label {
        font-family: Arial, Helvetica, sans-serif;
        width: 100%;
        margin-left: ${({wid})=> (wid? "2rem" : "0")};
        text-transform: capitalize;
    }

    div.field {
        /* width: 39rem; */
         width: ${({wid})=> (wid? "19rem" : "39.3rem")};
        height: 3rem;   
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-style: none;
            border-radius: 0.5rem;
            background: #f5f5f5;
            margin: 0 0;

        input {
           width: 80%;
            height: 70%;
            outline: none;
            border-style: none;
            border-radius: 0.6rem;
            background: none;
            padding-inline: 1rem;
            
        }
        .phone-input {
            display: flex;
            align-items: center;
            gap: 8px;
            border: 1px solid #ccc;
            padding: 5px 10px;
            border-radius: 8px;
            width: fit-content;
                  }
                  .country-select {
            display: flex;
            align-items: center;
            gap: 5px;
            cursor: pointer;
            }

        div.eyecon {
            width: 15%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 1.4rem;
        }
    }
   

    div.forgot {
        width: 100%;
        height: 12%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        
    }

`
export const StyledLink = styled(Link)`
    color: #369413;
    cursor: pointer;
    text-decoration: none;
    text-transform: capitalize;
    
`
const SignupLink = styled(Link)`
color: #369413;
    cursor: pointer;
    text-decoration: none;
    text-transform: capitalize;
`
export const SignOption = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
    h2 {
        color: gray;
        margin: 0 0;
    }
    p{
        margin-block: 4px;
        font-size: 0.9rem;
    }
`

export const Button = styled.button`
width: 52%;
height: 3rem;
border-style: none;
border-radius: 0.6rem;
display: flex;
justify-content: center;
align-items: center;
color: #fff;
background: #FF7F11;
font-size: 1.2rem;
cursor: pointer;
`
export const GoogleSign = styled.button`
width: 52%;
height: 3rem;
border: 1px solid #000;
border-radius: 0.6rem;
display: flex;
justify-content: center;
align-items: center;
gap: 0.5rem;
background: #fff;
cursor: pointer;
font-size: 1.2rem;


.icon {
    font-size: 1.4rem;
}
`