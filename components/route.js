import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Contacts from "./Contacts";
import Profile from "./Profile";
import colors from "../utility/colors";
import Favorites from "./Favorites";
import User from "./User";
import {MaterialIcons}from '@expo/vector-icons';
//import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import {createDrawerNavigator} from'@react-navigation/drawer'

import Options from "./Option";

const getDrawerItemIcon = icon=>({tintColor})=>(
  <MaterialIcons name={icon} size={22} style={{color:tintColor}}/>
)
const Stack = createNativeStackNavigator();
// const getTabBarIcon = icon =>({tintColor})=>(
//     <MaterialIcons name={icon} size={26}  style={{color:tintColor}} />
// )
const ContactsScreens = () => {
  return (
      <Stack.Navigator 
      initialRouteName="Contacts"
      screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen name="Contacts" component={Contacts} options={{ title: "Contacts" }} />
        <Stack.Screen name="Profile" component={Profile} 
            options={({route})=>
            {
                const {contact}=route.params;
                const {name}=contact;
                return {
                    title:name.split(' ')[0],
                    headerTintColor:'white',
                    headerStyle:{
                        backgroundColor:colors.blue,
                    }
                };
            }} />
      </Stack.Navigator>
  );
};
const FavoritesScreen =()=>
{
  return (
    <Stack.Navigator
      initialRouteName="Favorites"
      screenOptions={{
        headerShown:false
      }}>
      <Stack.Screen name='Favorites' component={Favorites} options={{title:"Favorites"}}/>
      <Stack.Screen name='Profile' component={Profile} options={{title: "Profile"}}/>
  </Stack.Navigator>
  );
}
const Drawer = createDrawerNavigator();
const DrawerNavigator = ()=>
{
return (
    
      <NavigationContainer>
       <Drawer.Navigator initialRouteName= 'ContactsScreens'>
        <Drawer.Screen name="ContactsScreens" component={ContactsScreens} 
        options={{
            drawerIcon: getDrawerItemIcon('list'),
      }}
      /> 
        <Drawer.Screen name="FavoritesScreens" component={FavoritesScreen} 
        options={{ drawerIcon: getDrawerItemIcon('star'),
      }}/>
      <Drawer.Screen name="UserScreens" component={UserScreens}
       options={{ drawerIcon: getDrawerItemIcon('person'),
      }}/>
      </Drawer.Navigator> 
      </NavigationContainer>
      );
} 
export default DrawerNavigator;
const UserScreens=({navigation})=>
{
  return (
     <Stack.Navigator
     initialRouteName="User">
         <Stack.Screen name='User' component={User}
         options={{
           headerTitle: "Me",
           headerTintColor: 'white',
           headerStyle: {
              backgroundColor: '#6495ed',
           },
           headerRight: ()=>(
           <MaterialIcons name="settings"
                          size={24}
                           style={{ color: 'white', marginRight: 10 }}   
                           onPress={() => navigation.navigate('Options')} />
           ),
         }}
         />
         <Stack.Screen name="Options" component={Options} options={{title:"Options"}}/>
     </Stack.Navigator>
  )
}
// const Tab = createMaterialBottomTabNavigator();
// const TabNavigator= ()=>
// {
//   return(
//     <NavigationContainer>
//       <Tab.Navigator
//       initialRouteName='ContactsScreens'
//       barStyle= {{backgroundColor: colors.blue}}
//       labeled={false}
//       activeTintColor={colors.greyLight}
//       inactiveColor = {colors.greyDark}
//       >
//       <Tab.Screen name="ContactsScreens" component={ContactsScreens} 
//         options={{ tabBarIcon: getTabBarIcon('list'),
//       }}/>
//       <Tab.Screen name="FavoritesScreens" component={FavoritesScreen} 
//         options={{ tabBarIcon: getTabBarIcon('star'),
//       }}/>
//       <Tab.Screen name="UserScreens" component={UserScreens} 
//         options={{ tabBarIcon: getTabBarIcon('person'),
//       }}/>
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
//     }
//       export default TabNavigator;
