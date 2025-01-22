// src/screen/contactscr.js
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, TextInput, ScrollView, Alert } from 'react-native';

const ContactScr = ({ navigation }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const [email, setEmail] = useState('');

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  const handleSubmit = () => {
    if (email.trim() === '') {
      Alert.alert('Please enter your email address');
    } else {
      Alert.alert('Thank you!', 'We will contact you soon.');
      setEmail('');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <Animated.View style={[styles.container, { opacity: fadeAnim }]}>
        <Text style={styles.title}>Contact Us</Text>
        <Text style={styles.subtitle}>We would love to hear from you!</Text>

        <View style={styles.contactDetails}>
          <Text style={styles.contactItem}>📞 Phone: +91 8431093884</Text>
          <Text style={styles.contactItem}>📧 Email: prathamshirol53@gmail.com</Text>
          <Text style={styles.contactItem}>🏠 Address: Vidya Nagar, Hubli, Karnataka, India</Text>
          <Text style={styles.contactItem}>🌐 Website: www.prathamshirol.com</Text>
        </View>

        {/* Email input section */}
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>Your Email Address</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Enter your email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
        </View>

        {/* Submit Button */}
        <TouchableOpacity
          style={styles.submitButton}
          activeOpacity={0.8}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </Animated.View>
    </ScrollView>
  );
};

export default ContactScr;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9', // Light grey background for a clean look
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#2F4F4F',
    marginBottom: 15,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subtitle: {
    fontSize: 18,
    color: '#333',
    marginBottom: 30,
    textAlign: 'center',
  },
  contactDetails: {
    width: '90%',
    padding: 25,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  contactItem: {
    fontSize: 18,
    color: '#4682B4',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f8ff',
    paddingBottom: 5,
  },
  formContainer: {
    width: '90%',
    padding: 25,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: 30,
  },
  inputLabel: {
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  textInput: {
    height: 50,
    borderColor: '#4682B4',
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 15,
    fontSize: 16,
    color: '#333',
    marginBottom: 20,
  },
  submitButton: {
    backgroundColor: '#32CD32', // Lime Green for a fresh look
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#1E90FF', // Blue for the back button
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 6,
  },
});
