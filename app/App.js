import React from 'react';
import { StyleSheet, Text, View, Button, Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Financial Wellness App</Text>
      <Text style={styles.subtitle}>Browser-Compatible Version</Text>
      
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          Running on platform: <Text style={styles.highlight}>{Platform.OS}</Text>
        </Text>
        <Text style={styles.infoText}>
          Web support is <Text style={styles.highlight}>enabled</Text>
        </Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Button 
          title="Go to Dashboard" 
          onPress={() => alert('Dashboard would open here')} 
        />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1976D2',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 30,
    color: '#424242',
  },
  infoContainer: {
    backgroundColor: '#E1F5FE',
    padding: 20,
    borderRadius: 8,
    marginBottom: 30,
    width: '100%',
    maxWidth: 400,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 10,
    color: '#424242',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#0277BD',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 200,
  },
});