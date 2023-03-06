import React, {useState} from 'react'
import Order from './Order';

const showOrders = (props) => {
    return (<div>
        {props.orders.map(el => (
            <Order key={el.id} item={el} />
        ))}
    </div>)
}

const showNothing = () => {
    return (
        <div className='empty'>
            <h2>Корзина пуста</h2>
        </div>
    )
}

export default function Header(props) {
    let [cartOpen, setCartOpen] = useState(false);

  return (
    <header>
        <div>
            <span className='logo'>House Staff</span>
            <ul className="nav">
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACTS</li>
            </ul>
            <button onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`shop_cart_button ${cartOpen && 'active'}`}>SHOP</button>
        
            {cartOpen && (
                <div className='shop_cart'>
                    {props.orders.length > 0 ? 
                        showOrders(props) : showNothing()}
                </div>
            )}
        </div>
        <div className='presentation'></div>
    </header>
  )
}
