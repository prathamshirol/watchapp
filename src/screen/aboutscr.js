import React from 'react';
import { View, Text, StyleSheet, ScrollView, Animated, LinearGradient } from 'react-native';

const AboutScr = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section with Fade-In Animation */}
      <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
        <Text style={styles.title}>✨ About Luxury Timepieces ✨</Text>
        <Text style={styles.subtitle}>
          Redefining Elegance with Timeless Craftsmanship
        </Text>
      </Animated.View>

      {/* Mission Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>🌟 Our Mission</Text>
        <Text style={styles.description}>
          At Luxury Timepieces, we bring you the finest selection of high-end
          watches that blend precision, elegance, and craftsmanship. Each watch
          in our collection represents the pinnacle of artistry and innovation.
        </Text>
      </View>

      {/* Features Section */}
      <View style={[styles.card, styles.highlightCard]}>
        <Text style={[styles.sectionTitle, styles.highlightTitle]}>💎 What We Offer</Text>
        <View style={styles.bulletPoints}>
          <Text style={styles.bulletPoint}>✔️ Exclusive and authentic brands</Text>
          <Text style={styles.bulletPoint}>✔️ Handpicked luxury collections</Text>
          <Text style={styles.bulletPoint}>✔️ Best price guarantee</Text>
          <Text style={styles.bulletPoint}>✔️ Exceptional customer service</Text>
        </View>
      </View>

      {/* Why Choose Us Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>💼 Why Choose Us?</Text>
        <Text style={styles.description}>
          When you choose Luxury Timepieces, you're not just buying a watch;
          you're investing in a legacy of class, precision, and sophistication.
          We curate each piece to ensure it resonates with your style and
          persona.
        </Text>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          Experience the Art of Luxury. Start Your Journey Today! 🚀
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#E6F7FF',
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#1E90FF',
    textAlign: 'center',
    textShadowColor: '#87CEEB',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginTop: 10,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  highlightCard: {
    backgroundColor: '#FFF3E0',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1E90FF',
    marginBottom: 10,
  },
  highlightTitle: {
    color: '#FF8C00',
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
    textAlign: 'justify',
  },
  bulletPoints: {
    marginVertical: 10,
  },
  bulletPoint: {
    fontSize: 16,
    color: '#333',
    marginBottom: 5,
  },
  footer: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#1E90FF',
    borderRadius: 15,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default AboutScr;
