import React, { useContext } from 'react'
import { StateContext } from '../state'
import Signup from './Signup'

const ProfileView = () => {

    const { SignupInput } = useContext(StateContext)

  return (
    <div>
        <h1>Name: {SignupInput.name}</h1>
        <h1>Phone Number: {SignupInput.phone}</h1>
        <h1>Adress: {SignupInput.adress}</h1>
        <h1>Email: {SignupInput.email}</h1>
    </div>
  )
}

export default ProfileView
