import React, { useContext } from 'react'
import { StateContext } from '../state'
import { useNavigate } from 'react-router-dom'
import Header from './Header'

const Logout = () => {

  const { SignupInput, input } = useContext(StateContext)

  const navigate = useNavigate();

    const LogoutFunc = () => {
      localStorage.removeItem("loggedin");
      localStorage.removeItem("login");
      input.email = ""
      input.password = ""
        navigate("/")
    }

//     const { loggout } = useContext(StateContext)

//   const navigate = useNavigate();

//     const LogoutFunc = () => {
//         loggout()
//         navigate("/login")
//     }

  return (
    <div>
      <Header />
      <div className='logoutmain'>
        <div className='logoutdiv'>
          <h1 className='logouthone'>Logout</h1>
          <button className='logoutbtn' onClick={LogoutFunc}>Logout</button>
        </div>
      </div>
    </div>
  )
}

export default Logout
