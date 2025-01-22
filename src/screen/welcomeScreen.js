import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <View style={styles.container}>
      {/* Animated Title */}
      <Animated.View style={[styles.titleContainer, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Welcome to Luxury Timepieces</Text>
        <Animated.Text style={[styles.subtitle, { opacity: fadeAnim }]}>
          Your ultimate destination for timeless elegance
        </Animated.Text>
      </Animated.View>

      {/* Features Section */}
      <View style={styles.featuresContainer}>
        <Text style={styles.featureTitle}>Why Choose Us?</Text>
        <View style={styles.featureItem}>
          <Text style={styles.featureText}>✓ Exclusive Collections</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureText}>✓ Authentic Brands</Text>
        </View>
        <View style={styles.featureItem}>
          <Text style={styles.featureText}>✓ Best Price Guarantee</Text>
        </View>
      </View>

      {/* Buttons with Navigation */}
      <TouchableOpacity
        style={styles.getStartedButton}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('HOME')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.aboutButton, { marginTop: 20 }]}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.buttonText}>About Us</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.contactButton, { marginTop: 20 }]}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('Contact')}
      >
        <Text style={styles.buttonText}>Contact Us</Text>
      </TouchableOpacity>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f0f8ff', // Light background color
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#2F4F4F',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#666',
    textAlign: 'center',
    marginTop: 5,
    fontStyle: 'italic',
  },
  featuresContainer: {
    marginTop: 30,
    width: '90%',
    padding: 20,
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Semi-transparent white
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  featureTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 10,
    color: '#4682B4',
    textAlign: 'center',
  },
  featureItem: {
    marginVertical: 8,
  },
  featureText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  getStartedButton: {
    marginTop: 40,
    backgroundColor: '#1E90FF',
    padding: 15,
    borderRadius: 30,
    elevation: 5,
    width: '80%',
    alignItems: 'center',
    opacity: 0.9,
  },
  aboutButton: {
    backgroundColor: '#FF8C00',
    padding: 15,
    borderRadius: 30,
    elevation: 5,
    width: '80%',
    alignItems: 'center',
    opacity: 0.9,
  },
  contactButton: {
    backgroundColor: '#32CD32', // Lime green
    padding: 15,
    borderRadius: 30,
    elevation: 5,
    width: '80%',
    alignItems: 'center',
    opacity: 0.9,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
});
