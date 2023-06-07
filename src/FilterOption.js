import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const FilterOptions = ({ selectedFilter, onSelectFilter }) => {
  const filterOptions = [
    { label: 'All', value: '' },
    { label: 'Veg', value: 'veg' },
    { label: 'Non-Veg', value: 'nonveg' },
    { label: 'Price: $10.99', value: '$10.99' },
    { label: 'Rating: 4.5+', value: '4.5' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Options:</Text>
      <View style={styles.optionsContainer}>
        {filterOptions.map(option => (
          <TouchableOpacity
            key={option.value}
            style={[
              styles.option,
              selectedFilter === option.value && styles.selectedOption,
            ]}
            onPress={() => onSelectFilter(option.value)}
          >
            <Text style={styles.optionText}>{option.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 9,
    color:'#36454F',
    
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  option: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#FFFF',
    marginRight: 10,
    marginBottom: 10,
  },
  selectedOption: {
    backgroundColor: '#6495ED',
  },
  optionText: {
    fontSize: 14,

  },
});

export default FilterOptions;
