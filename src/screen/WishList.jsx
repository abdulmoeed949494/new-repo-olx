import { useContext, useEffect, useState } from 'react'
import { StateContext } from '../state'
import { Link, useNavigate } from 'react-router-dom'
import Header from './Header'

const WishList = () => {

    const navigate = useNavigate()

    const { cart, wishlist, increaseWishListQuantity, decreaseWishListQuantity, setCart, setWishList } = useContext(StateContext)

    const [checkedItems, setCheckedItems] = useState([])

    useEffect(() => {
        const checkItems = wishlist.map((item) => ({
            id: item.id,
            checked: false,
        }))
        setCheckedItems(checkItems)
    }, [wishlist])

    const handleChange = (id) => {
        setCheckedItems((prevState) =>
            prevState.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        )
    }

    const wishAddToCart = () => {
        const AddItem = checkedItems.find(item => item.checked === true)
        if(!AddItem){
            alert("Please select an item to add to cart")
            return;
        }
        const checkboxItems = checkedItems.filter(item => item.checked)
        const updatedCart = [...cart]
        const updatedWishlist = wishlist.filter(item => 
            !checkboxItems.find(checkedItem => checkedItem.id === item.id)
        )
        checkboxItems.forEach(checkedItem => {
            const existingCartItem = updatedCart.find(cartItem => cartItem.id === checkedItem.id)
    
            if (existingCartItem) {
                existingCartItem.quantity += 1
            } else {
                const wishlistItem = wishlist.find(item => item.id === checkedItem.id)
                if (wishlistItem) {
                    updatedCart.push({ ...wishlistItem, quantity: 1 })
                }
            }
        })
        setCart(updatedCart)
        setWishList(updatedWishlist)
        navigate("/cart")
    }

    return (
        <div>
            <Header />  
            {/* <div className="bg-blue-500 flex justify-between items-center pr-10 pl-10 text-white h-16 ">
                <Link to={"/"}>Product</Link>
                <Link to={"/cart"}>Cart
                    <sub>{cart.length}</sub>
                </Link>
                <Link to={"/wishlist"}>Favorite
                    <sub>{wishlist.length}</sub>
                </Link>
            </div> */}
            {wishlist.map((item) => {
                const checkedItem = checkedItems.find((checkedItem) => checkedItem.id === item.id)
                return (
                    <div key={item.id}>
                        <div className="mt-10 ml-[600px] flex w-[600px]">
                            <div className="mt-5 flex justify-center">
                                <img className='mb-5 flex flex-row justify-center border-4 border-gray-400 rounded-xl h-40 w-40' src={item.url} width={40} alt={item.name} />
                            </div>
                            <div className="ml-5 mb-5 flex gap-2 justify-center items-center">
                                <span className='text-green-600'> {item.name} | {item.category} </span>
                                <button className='text-red-600' onClick={() => decreaseWishListQuantity(item.id)}>-</button>
                                <span> {item.quantity} </span>
                                <button className='text-green-700' onClick={() => increaseWishListQuantity(item.id)}>+</button>
                                <span className='text-red-600'>Rs. {item.price * item.quantity}</span>
                                <input
                                    type='checkbox'
                                    checked={checkedItem ? checkedItem.checked : false}
                                    onChange={() => handleChange(item.id)}
                                />
                            </div>
                        </div>
                    </div>
                )
            })}
            <div className="right-10 py-10 pr-10 bottom-10 flex gap-3 justify-end items-center">
                <p className='text-blue-400'>Total: <span>{wishlist.reduce((total, item) => total + (item.price * item.quantity), 0)}</span></p>
                <button className="btn" onClick={wishAddToCart}>Add To Cart</button>
            </div>
        </div>
    )
}

export default WishList;

