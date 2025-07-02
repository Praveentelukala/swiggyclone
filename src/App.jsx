import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import RestaurantList from './components/RestaurantList';
import RestaurantView from './components/RestaurantView';
import Cart from './components/Cart';

function App() {
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleRestaurantClick = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  const handleBackToList = () => {
    setSelectedRestaurant(null);
  };

  const addToCart = (item) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      const newCartItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        image: item.image,
        restaurantName: selectedRestaurant?.name || 'Unknown Restaurant'
      };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const removeFromCart = (itemId) => {
    const existingItem = cartItems.find(cartItem => cartItem.id === itemId);
    if (existingItem && existingItem.quantity > 1) {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    } else {
      setCartItems(cartItems.filter(cartItem => cartItem.id !== itemId));
    }
  };

  const updateCartQuantity = (itemId, quantity) => {
    if (quantity <= 0) {
      setCartItems(cartItems.filter(cartItem => cartItem.id !== itemId));
    } else {
      setCartItems(cartItems.map(cartItem =>
        cartItem.id === itemId
          ? { ...cartItem, quantity }
          : cartItem
      ));
    }
  };

  const removeCartItem = (itemId) => {
    setCartItems(cartItems.filter(cartItem => cartItem.id !== itemId));
  };

  const getTotalItemsInCart = () => {
    return cartItems.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gray-50">
        <Header
          cartItemsCount={getTotalItemsInCart()}
          onCartClick={() => setIsCartOpen(true)}
        />
        
        {selectedRestaurant ? (
          <RestaurantView
            restaurant={selectedRestaurant}
            onBack={handleBackToList}
            cartItems={cartItems}
            onAddToCart={addToCart}
            onRemoveFromCart={removeFromCart}
          />
        ) : (
          <>
            <Hero />
            <Categories />
            <RestaurantList onRestaurantClick={handleRestaurantClick} />
          </>
        )}
        
        <Cart
          isOpen={isCartOpen}
          onClose={() => setIsCartOpen(false)}
          items={cartItems}
          onUpdateQuantity={updateCartQuantity}
          onRemoveItem={removeCartItem}
        />
      </div>
    </AuthProvider>
  );
}

export default App;