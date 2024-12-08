import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnimalDetailsScreen = ({ route }) => {
  const { animal } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.name}>{animal.petName}</Text>
      <Text style={styles.breed}>{animal.breed}</Text>
      {/* Puedes agregar más detalles del animal aquí */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  breed: {
    fontSize: 18,
    marginTop: 8,
  },
});

export default AnimalDetailsScreen;
