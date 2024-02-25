
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, updateCartQuantity } from '../actions/actions';

const ShoppingCart = ({ cartItems, addToCart, removeFromCart, updateCartQuantity }) => {
    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState(1);

    const handleAddToCart = () => {
        if (newItemName.trim() !== '') {
            addToCart({
                id: Date.now(), // You may want to generate a unique id in a real application
                name: newItemName,
                quantity: newItemQuantity,
            });
            setNewItemName('');
            setNewItemQuantity(1);
        }
    };

    return (
        <div>
            <h2>Shopping Cart</h2>

            <div>
                <label>
                    Add Item:
            <input type="text" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} />
                </label>
                <label>
                    Quantity:
            <input type="number" value={newItemQuantity} onChange={(e) => setNewItemQuantity(e.target.value)} />
                </label>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>

            <ul>
                {cartItems.map(item => (
                    <li key={item.id}>
                        {item.name} - Quantity: {item.quantity}
                        <button onClick={() => updateCartQuantity(item.id, item.quantity + 1)}>+</button>
                        <button onClick={() => updateCartQuantity(item.id, item.quantity - 1)}>-</button>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => ({
    cartItems: state.cartItems,
});

const mapDispatchToProps = {
    addToCart,
    removeFromCart,
    updateCartQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);