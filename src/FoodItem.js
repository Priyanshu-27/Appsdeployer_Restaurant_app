import { View, Text ,StyleSheet, TouchableOpacity , ScrollView , StatusBar} from 'react-native'
import React, { useRef } from 'react'
import data from './Data'

const FoodItem = ({item}) => {
  
  return (
    <View>

    
    <ScrollView >
    <StatusBar backgroundColor="#87CEFA" />
      <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description}>Rating: {item.rating}</Text>
      <Text style={styles.price}>Price: {item.price}</Text>
      {/* Add more details or components to display */}
    </View>
    </ScrollView>
 

      </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    
  },

   button: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    elevation: 5,
  },
  buttonText: {
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  // Add more styles as needed
});

export default FoodItem