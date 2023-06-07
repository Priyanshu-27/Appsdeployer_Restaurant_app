import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FoodDetail = ({ route }) => {
  const { item } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Food Name:</Text>
      <Text style={styles.value}>{item.name}</Text>

      <Text style={styles.label}>Rating:</Text>
      <Text style={styles.value}>{item.rating}</Text>

      <Text style={styles.label}>Recipe:</Text>
      <Text style={styles.value}>{item.recipe}</Text>

      <Text style={styles.label}>Ingredients:</Text>
      <Text style={styles.value}>{item.ingredients.join(', ')}</Text>

      <Text style={styles.label}>Veg:</Text>
      <Text style={styles.value}>{item.veg ? 'Yes' : 'No'}</Text>

      <Text style={styles.label}>Price:</Text>
      <Text style={styles.value}>{item.price}</Text>

      <Text style={styles.label}>Description:</Text>
      <Text style={styles.value}>{item.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  value: {
    fontSize: 14,
    marginBottom: 16,
  },
});

export default FoodDetail;
