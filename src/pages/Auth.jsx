import React, { useState } from 'react'
import login from '../assets/login.png'
import { FloatingLabel, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Auth = ({ insideRegister }) => {
  const [userData, setUserData] = useState({
    username: "", email: "", password: ""
  })
  console.log(userData);

  const handleRegister =(e)=>{
    e.preventDefault()
    if(userData.username && userData.email && userData.password){
      //api call
      alert("Api call")
    }else{
      alert("Please fill the form completely")
    }
  }

  return (
    <div style={{ width: '100%', height: '100vh' }} className='d-flex justify-content-center align-items-center'>
      <div className="container w-75">
        <div className="card shadow p-2">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img className='w-100' src={login} alt="" />
            </div>
            <div className="col-md-6">
              <h1 className='fw-bolder mt-2'><i className='fa-brands fa-docker'></i>Project Fair</h1>
              <h5 className='fw-bolder mt-2'>
                Sign {insideRegister ? "Up" : "In to your Account"}
              </h5>
              <Form>
                {insideRegister &&
                  <FloatingLabel
                    controlId="floatingInputName"
                    label="Username"
                    className="mb-3"
                  >
                    <Form.Control value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} type="text" placeholder="username" />
                  </FloatingLabel>}

                <FloatingLabel
                  controlId="floatingInput"
                  label="Email address"
                  className="mb-3"
                >
                  <Form.Control  value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})} type="email" placeholder="name@example.com" />
                </FloatingLabel>
                <FloatingLabel controlId="floatingPassword" label="Password">
                  <Form.Control  value={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} type="password" placeholder="Password" />
                </FloatingLabel>

                {insideRegister ?
                  <div className="mt-3">
                    <button onClick={handleRegister} className='btn btn-primary mb-2'>Register</button>
                    <p>Already have an account? Click here to <Link to={'/login'}>Login</Link></p>
                  </div>
                  :
                  <div className="mt-3">
                    <button className='btn btn-primary mb-2'>Login</button>
                    <p>New User? Click here to <Link to={'/register'}>Register</Link></p>
                  </div>
                }
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth