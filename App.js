import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , SafeAreaView } from 'react-native';
import Mainpage from './src/Mainpage';
import data from './src/Data';
import FoodDetail from './src/FoodDetail';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { createStackNavigator } from '@react-navigation/stack';



const Stack = createNativeStackNavigator();
export default function App() {
  return (
    
    //  <Mainpage data={data}/>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Mainpage" component={Mainpage} options={{headerShown:false}} />
        <Stack.Screen name="FoodDetail" component={FoodDetail} />
      </Stack.Navigator>
    </NavigationContainer>
 
    
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
