import React, { useState } from 'react'
import styled from 'styled-components'
import { CustAuthWrapper, CustAuthBox, Input } from './CustomerLogin'
import { Link } from 'react-router-dom'
import { BsEyeSlash, BsEye } from 'react-icons/bs'
import { InputRow } from './CustomerSignup'
import { FcGoogle } from 'react-icons/fc' 
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const VendorSignUp = () => {
    const [phone, setPhone] = useState("")
    const handleChange = (value) => {
    setPhone(value);
    console.log('Phone number:', value);
  };
    return (
        <CustAuthWrapper>
            <CustAuthBox wid="true">
                <form>
                    <HeaderText>
                        <h1>Sign Up as Vendor</h1>
                        <p>Join our network of trusted gas vendors and connect with thousands of customers in your area</p>
                    </HeaderText>
                    <Input> 
                        <label style={{marginLeft: "3rem"}}>
                            business name
                        </label>
                        <div className="field">
                            <input type="text" placeholder='Max Gas'/>
                        </div>
                    </Input>

                    <InputRow>
                        <Input wid="true"> 
                                  <label>
                            business email
                        </label>
                        <div className="field">
                            <input type="text" placeholder='Maxgas@gmail.com'/>
                        </div>
                            </Input>
                            <Input wid="true"> 
                                <label>
                                    business phone number
                                </label>
        
                                <div className="field phone-input">
                                    <PhoneInput style={{
                                        width: "auto",
                                        height: "70%",
                                        border: "none",
                                        
                                    }}
                                      country={'ng'} 
                                      value={phone}
                                      onChange={handleChange}
                                      inputProps={{
                                        name: 'phone',
                                        required: true,
                                        autoFocus: true,
                                      }}
                                      inputStyle={{
                                      fontSize: '16px',
                                      padding: "1rem 3rem"
                                    }}
                                    />
                                </div>
                            </Input>
                        </InputRow>
                   
                </form>
            </CustAuthBox>
        </CustAuthWrapper>
    )
}

export default VendorSignUp

const HeaderText = styled.header`
width: 100%;
height: 15rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

h1 {
    margin: 0 0;
}
p {
    margin: 0 0;

}


`