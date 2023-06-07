import React, { useState  } from 'react';
import { View, TextInput, FlatList, StyleSheet ,TouchableOpacity ,Text } from 'react-native';
import FoodItem from './FoodItem';
import { useNavigation  } from '@react-navigation/native';
import FilterOptions from './FilterOption';
import SearchBar from './SearchBar';
import data from './Data';
// import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { withNavigation } from '@react-navigation/compat';
const Stack = createStackNavigator();

const Mainpage = () => {
const navigation = useNavigation();
  const [searchText, setSearchText] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('');

  const filteredData = data.filter((item) =>{
    const nameMatches = item.name.toLowerCase().includes(searchText.toLowerCase());
      const filterMatches = selectedFilter ? (
    selectedFilter === 'veg' ? item.veg === true :
    selectedFilter === 'nonveg' ? item.veg === false :
    selectedFilter === '$10.99' ? item.price === '$10.99' :
    selectedFilter === '4.5' ? item.rating >= 4.5 :
    true
  ) : true;

  return nameMatches && filterMatches;
  });
    // item.name.toLowerCase().includes(searchText.toLowerCase())

  

  const handleSearchTextChange = (text) => {
    setSearchText(text);
  };


  const handleSelectFilter = (filterValue) => {
    // setSearchText(text);
    setSelectedFilter(filterValue);
  };




  // const renderItem = ({ item }) =>  <FoodItem item={item} />

   const navigateToFoodDetail = (item) => {
    navigation.navigate('FoodDetail', { item });
  };

   const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigateToFoodDetail(item)}>
      <FoodItem item={item} />
    </TouchableOpacity>
  );
   
     
    
  
  return (

  <View style={styles.container}>
  <View>
    <Text style={styles.head}>Appsdeployer Restaurant</Text>
    <SearchBar onChangeText={handleSearchTextChange} />
  </View>

  <View style={styles.filterOptions}>
    <FilterOptions selectedFilter={selectedFilter} onSelectFilter={handleSelectFilter} />
  </View>

  {filteredData.map((item) => (
    <TouchableOpacity key={item.id} onPress={() => navigateToFoodDetail(item)}>
      <FoodItem item={item} />
    </TouchableOpacity>
  ))}
</View>
    
  
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: '#ffc0cb',

    backgroundColor: '#87CEFA',
  },
  searchInput: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 0,
    marginTop:38
  },
  filterOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    color:'black' ,
  },

  head:{
    justifyContent:'center' ,
    marginLeft : 80 ,
    marginTop:20 ,
    fontSize: 20 ,
    marginBottom:40 ,
  }
});

export default Mainpage