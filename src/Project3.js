import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Text } from "react-native-paper";
const Button = (props)=>(
    <TouchableOpacity
        onPress ={props.onPress}
        style={
            {
                backgroundColor:"#ff637c",
                alignSelf:"center",
                padding:10,
                margin:10,
                ...props.buttonStyle,
            }}>
                <Text style={{color:"white",fontSize: 18}}>Button 2</Text>
            </TouchableOpacity>
    
)
export default()=>(
        <View style={{flex:1,justifyContent:"center"}}>
                <Button Text="say hello" onPress={()=>alert("hello")}/>
                <Button
                Text="Say goodbye"
                onPress={()=>alert("goodbye!")}
                buttonStyle={{backgroundColor:'#4dc2c2'}}
                />
        </View>
)