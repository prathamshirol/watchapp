import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity, Modal, Alert } from 'react-native';
import React, { useState } from 'react';

const HomeScreen = () => {
  const watches = [
    { id: '1', name: 'Rolex Submariner', price: 8000, description: 'A luxury diving watch with a rich history.', image: require('../images/download.jpeg') },
    { id: '2', name: 'Omega Seamaster', price: 5500, description: 'A high-performance watch with a connection to James Bond.', image: require('../images/down.jpeg') },
    { id: '3', name: 'Tag Heuer Monaco', price: 3200, description: 'A square-shaped watch with a motorsport legacy.', image: require('../images/shop.webp') },
    { id: '4', name: 'Patek Philippe Nautilus', price: 15000, description: 'An iconic luxury watch with a unique design.', image: require('../images/bros.webp') },
    { id: '5', name: 'Audemars Piguet Royal Oak', price: 20000, description: 'A distinguished watch known for its octagonal bezel.', image: require('../images/man.jpeg') },
    { id: '6', name: 'Cartier Tank', price: 2500, description: 'A stylish and timeless rectangular watch.', image: require('../images/wwwww.jpeg') },
  ];

  const [cart, setCart] = useState([]);
  const [cartVisible, setCartVisible] = useState(false);
  const [paymentVisible, setPaymentVisible] = useState(false);
  const [selectedWatch, setSelectedWatch] = useState(null); // State for the selected watch to display details
  const [detailsVisible, setDetailsVisible] = useState(false); // State to control the visibility of the details modal

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

  // Show the watch details modal
  const handleWatchClick = (watch) => {
    setSelectedWatch(watch);
    setDetailsVisible(true);
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
              <TouchableOpacity onPress={() => handleWatchClick(item)}>
                <Text style={styles.watchName}>{item.name}</Text>
              </TouchableOpacity>
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

      {/* Watch Details Modal */}
      <Modal visible={detailsVisible} animationType="fade" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>{selectedWatch?.name}</Text>
            <Image source={selectedWatch?.image} style={styles.watchImage} />
            <Text style={styles.watchPrice}>${selectedWatch?.price}</Text>
            <Text style={styles.watchDescription}>{selectedWatch?.description}</Text>
            <TouchableOpacity style={styles.closeButton} onPress={() => setDetailsVisible(false)}>
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
    backgroundColor: "#1C1C1C", // Dark background for luxury
    padding: 20,
  },
  headline: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#FFD700", // Gold for a premium touch
    textAlign: "center",
    marginVertical: 20,
    textTransform: "uppercase",
    letterSpacing: 3,
  },
  searchBar: {
    height: 50,
    borderColor: "#FFD700", // Gold border for elegance
    borderWidth: 2,
    borderRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: "#333", // Dark input background
    color: "#FFF",
    fontSize: 16,
    marginBottom: 20,
  },
  watchList: {
    marginTop: 20,
  },
  watchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#2C2C2C", // Sleek dark card
    padding: 15,
    marginBottom: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  watchImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 15,
    borderWidth: 2,
    borderColor: "#FFD700", // Gold border
  },
  watchInfo: {
    flex: 1,
  },
  watchName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFF", // White text for contrast
  },
  watchPrice: {
    fontSize: 18,
    color: "#FFD700", // Gold for price
    marginTop: 5,
  },
  addToCartButton: {
    backgroundColor: "#FFD700", // Gold button
    padding: 10,
    borderRadius: 12,
    elevation: 3,
  },
  buttonText: {
    color: "#1C1C1C", // Dark text on gold
    fontWeight: "bold",
    textAlign: "center",
  },
  viewCartButton: {
    backgroundColor: "#FFD700", // Gold button
    padding: 15,
    borderRadius: 25,
    alignItems: "center",
    marginTop: 25,
    elevation: 5,
  },
  viewCartText: {
    color: "#1C1C1C", // Dark text on gold
    fontWeight: "bold",
    fontSize: 18,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Semi-transparent black overlay
  },
  modalContent: {
    backgroundColor: "#2C2C2C",
    padding: 20,
    borderRadius: 15,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFD700", // Gold for titles
    marginBottom: 15,
  },
  watchDescription: {
    color: "#FFF",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  totalText: {
    fontSize: 18,
    color: "#FFF",
    marginBottom: 15,
  },
  paymentOption: {
    fontSize: 18,
    color: "#FFD700",
    marginBottom: 10,
  },
  cartItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  cartImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  cartText: {
    color: "#FFF",
    fontSize: 16,
  },
  buyButton: {
    backgroundColor: "#FFD700",
    padding: 10,
    borderRadius: 12,
    marginTop: 15,
  },
  clearButton: {
    backgroundColor: "#D32F2F", // Red for clear
    padding: 10,
    borderRadius: 12,
    marginTop: 10,
  },
  closeButton: {
    backgroundColor: "#555", // Dark gray for close
    padding: 10,
    borderRadius: 12,
    marginTop: 10,
  },
});
