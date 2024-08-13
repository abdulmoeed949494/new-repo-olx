import { useContext, useEffect } from "react";
import "../App.css"
import { useNavigate } from "react-router-dom"
import { StateContext } from "../state";


function Signup() {

    const { SignupInput, setInput, setSignupInput, input, userCart, setCart, setShowCart, handleOrderPlacement, setIsLogin } = useContext(StateContext)

    const navigate = useNavigate();



    useEffect(() => {
        const login = localStorage.getItem("login");
        if (login) {
          setIsLogin(true);
          navigate("/");
        }
      });

        const handleSubmit = (e) => {
            if(SignupInput.email.length < 2 || SignupInput.password.length < 2) {
                alert("Please Login")
                navigate("/login")
            }else {   
                CartLocal()
                navigate("/")
                alert("Order Placed")
                handleOrderPlacement()
                e.preventDefault()
                localStorage.setItem("user", JSON.stringify(SignupInput))
                localStorage.setItem("loggedin", true);
                localStorage.setItem("login", true);
                localStorage.setItem("userCart", JSON.stringify(userCart)) || "[]"; setInput({
                    email: SignupInput.email,
                    password: SignupInput.password,
                })
            }
        }

        const CartLocal = () => {
            let use =  localStorage.getItem("userCart", JSON.stringify(userCart)) || "[]"
             use = JSON.parse(use)
             use.push(userCart)
             localStorage.setItem("userCart", JSON.stringify(use))
         }

    return (
        <div>
            <div>
                <div className="h-20">
                </div>
                <form className='signupscreen' onSubmit={handleSubmit}>
                    <div className='mainSignup'>
                        
                        <div className='namedivSignup'>
                            <p className='namepSignup'>Name</p>
                            <input className='nameinputSignup' type='name' name="name" id="name" placeholder='Name' autoComplete="off" value={SignupInput.name} onChange={(e) => setSignupInput({
                                ...SignupInput,
                                [e.target.name]: e.target.value,
                            })} />
                        </div>

                        <div className='namedivSignup'>
                            <p className='namepSignup'>Phone</p>
                            <input className='nameinputSignup' type='phone' name="phone" id="phone" placeholder='Phone' autoComplete="off" value={SignupInput.phone} onChange={(e) => setSignupInput({
                                ...SignupInput,
                                [e.target.name]: e.target.value,
                            })} />
                        </div>

                        <div className='namedivSignup'>
                            <p className='namepSignup'>Adress</p>
                            <input className='nameinputSignup' type='adress' name="adress" id="adress" placeholder='Adress' autoComplete="off" value={SignupInput.adress} onChange={(e) => setSignupInput({
                                ...SignupInput,
                                [e.target.name]: e.target.value,
                            })} />
                        </div>

                        <div className='emaildivSignup'>
                            <p className='emailpSignup'>Email</p>
                            <input className='emailinputSignup' type='email' name="email" id="email" placeholder='Email' autoComplete="off" value={SignupInput.email} onChange={(e) => setSignupInput({
                                ...SignupInput,
                                [e.target.name]: e.target.value,
                            })}/>
                        </div>
                        <div className='passdivSignup'>
                            <p className='passwordpSignup'>Password</p>
                            <input className='passinputSignup' type='text' name="password" id="password" placeholder='Password' autoComplete="off" value={SignupInput.password} onChange={(e) => setSignupInput({
                                ...SignupInput,
                                [e.target.name]: e.target.value,
                            })} />
                        </div>
                        <div className='btnloginSignup'>
                            <button className='loginbtnSignup' type="submit" onClick={handleSubmit}>Signup</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup
