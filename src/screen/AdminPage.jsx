import { useContext, useState } from "react";
import { StateContext } from "../state";
import "../App.css";
import Header from "./Header";

const AdminPage = () => {
  let { LocalSt } = useContext(StateContext);

  LocalSt = JSON.parse(LocalSt);
  LocalSt = LocalSt.flat();

  //   const increaseQuantity = (id) => {
  //     const updatedCart = cart.map(item =>
  //       item.id === id ? { ...item, quantity: item.quantity + 1 } : item
  //     );
  //     setCart(updatedCart);
  //   }

  const [deliverd, setDeliverd] = useState(false);

  return (
    <>
      <Header />
      <div className="mt-20">
        <table>
          <tr className="text-white  bg-blue-500">
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Seller</th>
            <th>Category</th>
            <th>Order Deliverd</th>
            <th>Order Button</th>
          </tr>

          {LocalSt.map((item) => {
            return (
              <tr className="hover:bg-gray-200" key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.seller}</td>
                <td>{item.category}</td>
                <td>{deliverd === true ? "Deliverd" : "Not Deliverd"}</td>
                <td>
                  <button
                    className="border-2 border-black rounded-md  bg-green-400 text-white w-20 h-10 hover:bg-blue-500"
                onClick={() => setDeliverd(true)}
                  >
                    Deliverd
                  </button>
                </td>
                {/* <td><button className="border-2 border-black rounded-md  bg-green-400 text-white w-20 h-10 hover:bg-blue-500" onClick={() => setDeliverd(true)}>Deliverd</button></td> */}
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default AdminPage;

// import React from 'react'

// const AdminPage = () => {

//     const LocalStorage = localStorage.getItem("userCart");

//   return (
//     <div>
//       <tr>
//         <th>Id</th>
//         <th>Name</th>
//         <th>Price</th>
//         <th>Quantity</th>
//         <th>Seller</th>
//         <th>Category</th>
//       </tr>

//     {LocalStorage.map((item) => {
//         return (
//             <tr key={item.id}>
//             <td>{item.id}</td>
//             <td>{item.name}</td>
//             <td>{item.price}</td>
//             <td>{item.quantity}</td>
//             <td>{item.seller}</td>
//             <td>{item.category}</td>
//         </tr>
//         )
//     }
//     )}

//     </div>
//   )
// }

// export default AdminPage
