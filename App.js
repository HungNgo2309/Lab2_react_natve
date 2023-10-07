 import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';

 import Home from './src/Home';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CustomNavigationBar from './src/CustomNavigationBar';
import Contacts from './components/Contacts';
import fetchContacts from'./utility/api'
import Profiles from './components/Profile';
import Draw from './src/Draw';
import StackNavigator from './components/route';
import Favorites from './components/Favorites';
import User from './components/User';
import TabNavigator from './components/route';
//import firestore from '@react-native-firebase/firestore'

 export default function App() {
   return (
        <TabNavigator/>
   );    
 }

 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: '#fff',
     justifyContent:'center',
   },
 });
