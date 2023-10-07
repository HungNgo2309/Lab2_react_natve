import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";
import {  Text, TextInput } from "react-native-paper";

const styles = StyleSheet.create({
    container:{
        padding: 20,
    },
    label:{
        fontWeight:"bold",
        fontSize:18
    },
    input:{
        marginTop:10,
        backgroundColor: "rgba(0,0,0,0.1)",
        padding: 10,
        borderRadius:5
    },
});
export default()=>{
    const [name, setname]= useState("");
    return(
        <View style={styles.container}>
            <Text style={styles.label}>What is your name</Text>
            <TextInput
            style={styles.input}
            placeholder="Your name"
            placeholderTextColor="rgba(0,0,0,0.5)"
            onChangeText={(text)=>setname(text) }
            value={name}/>
            <Button title="Say Hello"
            onPress={()=>{alert('Hello '+(name)+' !');
            setname("");}}/>
        </View>
    )
}