import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Home from "./Home";
import Profile from "./Profile";
import CustomDrawer from "./CustomDrawer";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
const Drawer = createDrawerNavigator();
//const Tab = createMaterialBottomTabNavigator();
const Draw =()=>{
    return(
         <NavigationContainer>
             <Drawer.Navigator
             initialRouteName="Detail"
             drawerContent={(props)=><CustomDrawer {...props}/>}>
                 <Drawer.Screen name="Home" component={Home}/>
                 <Drawer.Screen name="Detail" component={Profile}/>
             </Drawer.Navigator>
         </NavigationContainer>
        // <NavigationContainer>
        //     <Tab.Navigator>
        //         <Tab.Screen name="Home" component={Home}
        //         options={{
        //             tabBarIcon:"home"
        //         }}/>
        //        <Tab.Screen name="Detail" component={Profile}
        //         options={{
        //             tabBarIcon:"account"}}/>
        //     </Tab.Navigator>
        // </NavigationContainer>
    )
}
export default Draw;
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
    }
})