import React from "react";
import {View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Button } from "react-native-paper";
const Project2=()=>{
    return(
        <View>
            <Button icon="camera" mode="contained" onPress={() => alert("Hello")}>
    Press me
  </Button>
        </View>
    )
}
export default Project2;