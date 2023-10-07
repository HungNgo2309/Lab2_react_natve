import { StyleSheet, Text, View } from "react-native"
import { Button } from "react-native-paper";

const Home =({navigation})=>{
    return(
        <View style={styles.container}>
            <Text>
                Home Screen
            </Text>
            <Button mode="contained" onPress={()=>navigation.navigate('Profile')}>
                Go to Profile
            </Button>
        </View>
    )
}
export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent:"center",
      alignItems:"center",     
    },
  });