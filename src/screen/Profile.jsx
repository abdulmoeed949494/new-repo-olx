import { useContext } from 'react'
import { StateContext } from '../state'
import { Link, useNavigate } from 'react-router-dom'

function Profile() {

  const { SignupInput, input } = useContext(StateContext)

  // const navigate = useNavigate();

  //   const LogoutFunc = () => {
  //     localStorage.removeItem("loggedin");
  //     localStorage.removeItem("login");
  //     input.email = ""
  //     input.password = ""
  //       // navigate("/login")
  //   }

  return (
    <div>
    <div className='bg-white text-black border-4 mt-1 border-black rounded-lg right-0 w-72 h-96 z-10 absolute'>
      <h1 className='flex justify-center itecent-center mr-20'>Name: {SignupInput.name}</h1>
      <div className='flex justify-center itecent-center border-2 border-black'>
      {/* <button className='flex justify-center itecent-center'><Link to={"/profileview"}>View Profile</Link></button> */}
      </div>
      <br/>
      <button>{input.email.length === 0 && input.password.length === 0 ? <Link to={"/login"}>Login</Link> : <Link to={"/logout"}>Logout</Link>}</button>
    {/* <button onClick={LogoutFunc}>Logout</button> */}
      
</div>
</div>
  )
}

export default Profile

