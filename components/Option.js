import React from "react";
import { StyleSheet, View } from "react-native";
import DetailListitem from "./DetailListItem";

const Options=()=>
{
    return(
        <View>
            <DetailListitem title="Update Profile"/>
            <DetailListitem title="Change Language"/>
            <DetailListitem title="Sign Out"/>
        </View>
    )
}
const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            backgroundColor:'white',
        }
    }
);
export default Options;