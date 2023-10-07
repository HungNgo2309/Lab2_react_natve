import { getHeaderTitle } from "@react-navigation/elements";
import React, { useState } from "react";
import { Appbar, Menu } from "react-native-paper";

const CustomNavigationBar=({
    navigation,
    route,
    options,
    back,
})=>{
    const [visible,setvisiable] = useState(false);
    const openMenu=()=>setvisiable(true);
    const closeMenu=()=>setvisiable(false);
    const title = getHeaderTitle(options,route.name);
    return(
        <Appbar.Header>
            {back?
            <Appbar.BackAction onPress={navigation.goBack}/>
            :null }
            <Appbar.Content title={title}/>
            {!back?
            (
                <Menu
                    visible={visible}
                    onDismiss={closeMenu}
                    anchor={
                        <Appbar.Action
                        icon="dots-vertical"
                        onPress={openMenu}/>
                    }>
                    <Menu.Item
                       onPress={()=>{
                        console.log("Option 2 was pressed");
                       }}
                       title="Home" />
                    <Menu.Item
                       onPress={()=>{
                        navigation.navigate("Profile");
                       }}
                       title="Profile" />
                    <Menu.Item
                       onPress={()=>{
                        console.log("Option 3 was pressed");
                       }}
                       title="Option3" 
                       disabled/>
                </Menu>
            ):null}
        </Appbar.Header>
    )
}
export default CustomNavigationBar;