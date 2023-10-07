import React, {usestate, useEffect, useState} from 'react';
import { View, Text, StyleSheet} from 'react-native';
import {fetchRandomContact} from '../utility/api';
 import ContactThumbnail from'../components/ContactThumbnail';
import colors from '../utility/colors';
import DetailListitem from './DetailListItem';
const Profile =({route})=>
{
    console.log(route);
    const {contact}=route.params;
    const{avatar, name, email, phone, cell}= contact;
    return (
    <View style={styles.container}>
        <View style={styles.avatarsection}>
            <ContactThumbnail avatar ={avatar} name={name} phone={phone}/>
        </View>
        <View style={styles.detailssection}>
            <DetailListitem icon="mail" title="Email" subtitle={email} />
            <DetailListitem icon="phone" title="work" subtitle={phone} /> 
            <DetailListitem icon="smartphone" title="Personal" subtitle={cell} />
        </View>
    </View>
    );
}
export default Profile;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#6495ed',
    },
    avatarSection:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    },
    detailssection:{
        flex:1,
        backgroundColor:'white',
    },
});