import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TeamDetails: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Detalles del Equipo</Text>
      {/* Agregar detalles dinámicos */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});

export default TeamDetails;
