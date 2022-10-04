import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { calculateTotals, getCartItems } from "./features/cart/cartSlice";
import CartContainer from "./components/CartContainer";
import Navbar from "./components/Navbar";
import Modal from "./components/Modal";

function App() {
  const { cartItems, isLoadding } = useSelector((store)=> store.cart)
  const { isOpen } = useSelector((store)=> store.modal)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(calculateTotals())
  },[cartItems])

  useEffect(() => {
    dispatch(getCartItems())
  }, [])
  
  if(isLoadding){
    return <div className="loading">
      <h1>Loading...</h1>
    </div>
  }
  
  return <main>
    { isOpen && <Modal/> }
    <Navbar/>
    <CartContainer/>
  </main>;
}
export default App;
