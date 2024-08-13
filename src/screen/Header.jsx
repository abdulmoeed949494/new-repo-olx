import { useContext } from 'react'
import Profile from "./Profile";
import { StateContext } from '../state';
import { Link } from 'react-router-dom';

const Header = () => {

    const { showProfile, toggleProfile, setSearchFilter, cart, wishlist} = useContext(StateContext)

  return (
    <div className="bg-blue-500 flex justify-between items-center pr-10 pl-10 text-white h-16">
      <input className="text-black h-10 rounded-md w-[800px]" type="text" onChange={(e) => setSearchFilter(e.target.value)} placeholder="Search"/>
      {/* <Link to={"/Signup"}>Signup</Link>
      <Link to={"/login"}>Login</Link> */}
      <Link to={"/adminpage"}>AdminPage</Link>
      <Link to={"/"}>Product</Link>
      <Link to={"/cart"}>Cart
      <sub>{cart.length}</sub> 
      </Link>
      <Link to={"/wishlist"}>Favorite
      <sub>{wishlist.length}</sub>
      </Link>
        <div className="border-2 border-black rounded-full w-14 h-14">
          <button className='' onClick={toggleProfile}>
          <img src="https://www.olx.com.pk/assets/iconProfilePicture.7975761176487dc62e25536d9a36a61d.png" alt="" />
          </button>
          {showProfile ? <Profile /> : null}
        </div>
      </div>
  )
}

export default Header
