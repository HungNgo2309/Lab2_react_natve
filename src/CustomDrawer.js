import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Drawer } from 'react-native-paper';

const CustomDrawer = ({navigation}) => {
  const [active, setActive] = React.useState('');

  return (
    <View>
    <Drawer.Section title="Some title">
      <Drawer.Item
        icon="home"
        label="Home"
        active={active === 'home'}
        onPress={() => {
            setActive('home');
            navigation.navigate("Home");}}

      />
      <Drawer.Item
        label="Detail"
        active={active === 'detail'}
        onPress={() => {
            setActive('detail');
            navigation.navigate("Detail");}}
      />
    </Drawer.Section>
    </View>
  );
};

export default CustomDrawer;
const styles= StyleSheet.create({
    container:{
        flex:1,
        paddingTop:40,
    }
})