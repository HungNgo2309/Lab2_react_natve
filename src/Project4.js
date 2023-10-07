import React, { useState } from "react";
import { Button, View } from "react-native";
import { Text } from "react-native-paper";

const Project4 =()=>{
    const [count,setcount]= useState(0);
    return(
        <View>
            <Text>You're pressed the button {count}</Text>
            <Button
            title={'Press me'}
            onPress={()=>setcount(count+1)} />
        </View>
    )
}
export default Project4;