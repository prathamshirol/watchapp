import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import React, { useState } from 'react';

const HomeScreen = () => {
  const watches = [
    { id: '1', name: 'Rolex Submariner', price: 8000, image: require('../images/download.jpeg') },
    { id: '2', name: 'Omega Seamaster', price: 5500, image: require('../images/down.jpeg') },
    { id: '3', name: 'Tag Heuer Monaco', price: 3200, image: require('../images/shop.webp') },
    { id: '4', name: 'Patek Philippe Nautilus', price: 15000, image: require('../images/bros.webp') },
    { id: '5', name: 'Audemars Piguet Royal Oak', price: 20000, image: require('../images/man.jpeg') },
    { id: '6', name: 'Cartier Tank', price: 2500, image: require('../images/wwwww.jpeg') },
  ];

  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [paymentVisible, setPaymentVisible] = useState(false);

  const addToCart = (item) => {
    setCart([...cart, item]);
    Alert.alert('Success', `${item.name} added to cart!`);
  };

  const clearCart = () => {
    setCart([]);
    Alert.alert('Cart Cleared', 'Your cart is now empty.');
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleBuy = () => {
    setCartVisible(false);
    setPaymentVisible(true);
  };

  const handlePaymentOption = (option) => {
    setPaymentVisible(false);
    Alert.alert('Payment Successful', `You selected ${option} payment method. Thank you for your purchase!`);
    clearCart();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headline}>Find Your Suitable Watch</Text>
      <TextInput
        style={styles.searchBar}
        placeholder="Search for watches..."
        placeholderTextColor="#888"
      />
      <FlatList
        data={watches}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.watchContainer}>
            <Image source={item.image} style={styles.watchImage} />
            <View style={styles.watchInfo}>
              <Text style={styles.watchName}>{item.name}</Text>
              <Text style={styles.watchPrice}>${item.price}</Text>
            </View>
            <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(item)}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        )}
        style={styles.watchList}
      />

      <TouchableOpacity style={styles.viewCartButton} onPress={() => setCartVisible(true)}>
        <Text style={styles.viewCartText}>View Cart ({cart.length})</Text>
      </TouchableOpacity>

      {/* Cart Modal */}
      <Modal visible={cartVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Your Cart</Text>
            <FlatList
              data={cart}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <View style={styles.cartItem}>
                  <Image source={item.image} style={styles.cartImage} />
                  <Text style={styles.cartText}>{item.name}</Text>
                  <Text style={styles.cartText}>${item.price}</Text>
                </View>
              )}
            />
            <Text style={styles.totalText}>Total: ${calculateTotal()}</Text>
            <TouchableOpacity style={styles.buyButton} onPress={handleBuy}>
              <Text style={styles.buttonText}>Buy</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.clearButton} onPress={clearCart}>
              <Text style={styles.buttonText}>Clear Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => setCartVisible(false)}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Payment Modal */}
      <Modal visible={paymentVisible} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Select Payment Method</Text>
            <TouchableOpacity onPress={() => handlePaymentOption('Credit Card')}>
              <Text style={styles.paymentOption}>Credit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePaymentOption('Debit Card')}>
              <Text style={styles.paymentOption}>Debit Card</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePaymentOption('UPI')}>
              <Text style={styles.paymentOption}>UPI</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handlePaymentOption('Net Banking')}>
              <Text style={styles.paymentOption}>Net Banking</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    padding: 20,
  },
  headline: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 20,
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  searchBar: {
    height: 45,
    borderColor: '#2196F3',
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    fontSize: 16,
  },
  watchList: {
    marginTop: 20,
  },
  watchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 20,
    borderRadius: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  watchImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  watchInfo: {
    flex: 1,
  },
  watchName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  watchPrice: {
    fontSize: 18,
    color: '#FF5722',
    marginTop: 5,
  },
  addToCartButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 12,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  viewCartButton: {
    backgroundColor: '#FF5722',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 25,
  },
  viewCartText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#FFF',
    padding: 20,
    borderRadius: 15,
    width: '80%',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  cartImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  cartText: {
    fontSize: 16,
    flex: 1,
  },
  totalText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 15,
    textAlign: 'center',
  },
  buyButton: {
    backgroundColor: '#4CAF50',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  clearButton: {
    backgroundColor: '#FF5722',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
  },
  closeButton: {
    backgroundColor: '#1E90FF',
    padding: 12,
    borderRadius: 10,
  },
  paymentOption: {
    fontSize: 20,
    color: '#333',
    paddingVertical: 10,
    textAlign: 'center',
  },
});
