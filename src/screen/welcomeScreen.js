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
        {['Exclusive Collections', 'Authentic Brands', 'Best Price Guarantee'].map((item, index) => (
          <View key={index} style={styles.featureItem}>
            <Text style={styles.featureText}>✓ {item}</Text>
          </View>
        ))}
      </View>

      {/* Navigation Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.getStartedButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('HOME')}
        >
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.aboutButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('About')}
        >
          <Text style={styles.buttonText}>About Us</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.contactButton}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('Contact')}
        >
          <Text style={styles.buttonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
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
    backgroundColor: '#1C1C1C', // Elegant dark background
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFD700', // Gold color
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#D3D3D3', // Light gray
    textAlign: 'center',
    marginTop: 5,
    fontStyle: 'italic',
  },
  featuresContainer: {
    marginTop: 20,
    width: '90%',
    padding: 25,
    backgroundColor: '#2C2C2C', // Slightly lighter dark for contrast
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 10,
  },
  featureTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 15,
    color: '#FFD700', // Gold color for titles
    textAlign: 'center',
  },
  featureItem: {
    marginVertical: 8,
  },
  featureText: {
    fontSize: 16,
    color: '#FFFFFF', // White for readability
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 40,
    width: '100%',
    alignItems: 'center',
  },
  getStartedButton: {
    backgroundColor: '#FFD700', // Gold button
    padding: 15,
    borderRadius: 30,
    elevation: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  aboutButton: {
    backgroundColor: '#FFD700',
    padding: 15,
    borderRadius: 30,
    elevation: 5,
    width: '80%',
    alignItems: 'center',
    marginBottom: 20,
  },
  contactButton: {
    backgroundColor: '#FFD700', // Gold for another call-to-action
    padding: 15,
    borderRadius: 30,
    elevation: 5,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1C1C1C', // Dark background for contrast on buttons
  },
});
