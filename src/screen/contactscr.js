import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, TextInput, ScrollView, Alert } from 'react-native';

const ContactScr = ({ navigation }) => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');

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
    } else if (feedback.trim() === '') {
      Alert.alert('Please provide your feedback');
    } else {
      Alert.alert('Thank you!', 'We have received your feedback. We will contact you soon.');
      setEmail('');
      setFeedback('');
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

        {/* Feedback input section */}
        <View style={styles.formContainer}>
          <Text style={styles.inputLabel}>Your Feedback</Text>
          <TextInput
            style={[styles.textInput, styles.feedbackInput]}
            placeholder="Enter your feedback"
            value={feedback}
            onChangeText={setFeedback}
            multiline
            numberOfLines={4}
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
    backgroundColor: '#1C1C1C', // Dark background for a luxurious touch
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFD700', // Gold for a luxurious feel
    marginBottom: 15,
    textAlign: 'center',
    textShadowColor: 'rgba(255, 215, 0, 0.5)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#E0E0E0', // Light grey for elegance
    marginBottom: 30,
    textAlign: 'center',
  },
  contactDetails: {
    width: '90%',
    padding: 25,
    backgroundColor: '#2C2C2C', // Dark card for contact details
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    marginBottom: 30,
  },
  contactItem: {
    fontSize: 18,
    color: '#FFD700', // Gold accents for text
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#444',
    paddingBottom: 5,
  },
  formContainer: {
    width: '90%',
    padding: 25,
    backgroundColor: '#2C2C2C', // Match the card theme
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 10,
    marginBottom: 30,
  },
  inputLabel: {
    fontSize: 16,
    color: '#E0E0E0', // Light grey for labels
    marginBottom: 10,
  },
  textInput: {
    height: 50,
    borderColor: '#FFD700', // Gold border for elegance
    borderWidth: 1,
    borderRadius: 15,
    paddingLeft: 15,
    fontSize: 16,
    color: '#E0E0E0', // Light text for dark background
    backgroundColor: '#333', // Dark input field
    marginBottom: 20,
  },
  feedbackInput: {
    height: 120, // More height for the feedback input field
    textAlignVertical: 'top', // Align text to the top of the multiline input
  },
  submitButton: {
    backgroundColor: '#FFD700', // Luxurious gold button
    padding: 15,
    borderRadius: 25,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#FFD700',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    marginTop: 20,
  },
  buttonText: {
    fontSize: 20,
    color: '#1C1C1C', // Dark text for contrast
    fontWeight: 'bold',
  },
});
