import React from 'react';
import { View, Text, StyleSheet, ScrollView, Animated } from 'react-native';

const AboutScr = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  }, [fadeAnim]);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header Section with Fade-In Animation */}
      <Animated.View style={[styles.header, { opacity: fadeAnim }]}>
        <Text style={styles.title}>✨ Luxury Timepieces ✨</Text>
        <Text style={styles.subtitle}>
          *Exquisite Craftsmanship, Unrivaled Elegance*
        </Text>
      </Animated.View>

      {/* Mission Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>🌟 Our Mission</Text>
        <Text style={styles.description}>
          At **Luxury Timepieces**, we bring you a curated selection of elite
          timepieces that embody the essence of precision, artistry, and
          sophistication. Each watch represents the pinnacle of horological
          excellence, carefully selected to resonate with your impeccable taste.
        </Text>
      </View>

      {/* Features Section */}
      <View style={[styles.card, styles.highlightCard]}>
        <Text style={[styles.sectionTitle, styles.highlightTitle]}>
          💎 Why Luxury Timepieces?
        </Text>
        <Text style={styles.description}>
          Our exclusive collection offers:
        </Text>
        <View style={styles.bulletPoints}>
          <Text style={styles.bulletPoint}>✔️ **World-Class Craftsmanship**: Immaculately designed watches crafted by the finest artisans.</Text>
          <Text style={styles.bulletPoint}>✔️ **Timeless Elegance**: Watches that define style and sophistication.</Text>
          <Text style={styles.bulletPoint}>✔️ **Unrivaled Exclusivity**: A limited selection of only the most coveted brands.</Text>
          <Text style={styles.bulletPoint}>✔️ **Tailored Experiences**: Personalized service that elevates your luxury journey.</Text>
        </View>
      </View>

      {/* Values Section */}
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>🏆 Our Core Values</Text>
        <Text style={styles.description}>
          Every watch in our collection is chosen with utmost care, representing:
        </Text>
        <View style={styles.bulletPoints}>
          <Text style={styles.bulletPoint}>🔹 **Legacy**: Honoring centuries of watchmaking excellence.</Text>
          <Text style={styles.bulletPoint}>🔹 **Innovation**: Melding tradition with cutting-edge technology.</Text>
          <Text style={styles.bulletPoint}>🔹 **Prestige**: Only the most distinguished brands make it into our collection.</Text>
        </View>
      </View>

      {/* Call-to-Action */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>
          *Indulge in the art of horology.* Start your luxurious journey with us today.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 30,
    backgroundColor: '#2C3E50', // Dark luxurious background
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
    marginTop: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#FFD700', // Rich gold color
    textAlign: 'center',
    letterSpacing: 3,
    fontFamily: 'Playfair Display', // Elegant, luxury font
  },
  subtitle: {
    fontSize: 22,
    color: '#D1D1D1', // Subtle silver/grey
    marginTop: 10,
    textAlign: 'center',
    fontStyle: 'italic',
    fontFamily: 'Georgia', // Elegant serif
  },
  card: {
    backgroundColor: '#1A1A1A', // Dark background for ultra-luxury feel
    padding: 30,
    borderRadius: 20,
    marginBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.2,
    shadowRadius: 20,
    elevation: 20,
    borderWidth: 1,
    borderColor: '#444', // Subtle borders for elegance
  },
  highlightCard: {
    backgroundColor: '#333', // Darker tone for highlights
  },
  sectionTitle: {
    fontSize: 26,
    fontWeight: '600',
    color: '#FFD700', // Gold highlights for importance
    marginBottom: 15,
    fontFamily: 'Playfair Display',
  },
  highlightTitle: {
    color: '#FF5733', // Luxurious copper accent color
  },
  description: {
    fontSize: 18,
    lineHeight: 28,
    color: '#D1D1D1',
    textAlign: 'justify',
    fontFamily: 'Roboto', // Clean and professional for readability
  },
  bulletPoints: {
    marginVertical: 20,
  },
  bulletPoint: {
    fontSize: 18,
    color: '#D1D1D1',
    marginBottom: 12,
    fontFamily: 'Roboto',
  },
  footer: {
    marginTop: 50,
    padding: 20,
    backgroundColor: '#FFD700', // Rich gold for the footer to attract attention
    borderRadius: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 20,
  },
  footerText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#2C3E50',
    textAlign: 'center',
    fontFamily: 'Georgia', // Classic font to emphasize luxury
  },
});

export default AboutScr;
