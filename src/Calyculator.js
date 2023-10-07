import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, Vibration, View } from "react-native";
import {Entypo} from "@expo/vector-icons"

const Calyculator=()=>{
    const[darkmode,setDarkMode]= useState(false);
    const[currentNumber, setcurrentNumber]= useState('');
    const[lastNumber,setlastNumber] = useState('');
 const buttons = ['C','DEL','/',7,8,9,'*',4,5,6,'-',1,2,3,'+',0,'.','='];

 function calculator(){
    let lastArr = currentNumber[currentNumber.lenght -1];
    if(lastArr==='/'||lastArr==='*'||lastArr==='-'||lastArr==='+'||lastArr==='.')
    {
        setcurrentNumber(currentNumber)
        return
    }else{
        let result = eval(currentNumber).toString();
        setcurrentNumber(result)
        return
    }
 }
 function handleInput(buttonPressed){
    if(buttonPressed==='/'||buttonPressed==='*'||buttonPressed==='-'||buttonPressed==='+')
    {
        Vibration.vibrate(35);
        setcurrentNumber(currentNumber+buttonPressed)
        return
    }else if(buttonPressed===1||buttonPressed===2||buttonPressed===3||buttonPressed===4||buttonPressed===5||buttonPressed===6||
        buttonPressed===7||buttonPressed===8||buttonPressed===9||buttonPressed==='.')
    {
        Vibration.vibrate(35);
    }
    switch(buttonPressed)
    {
        case'DEL':
            Vibration.vibrate(35);
            setcurrentNumber(currentNumber.substring(0,(currentNumber.lenght-1)))
            return
        case'C':
            Vibration.vibrate(35);
            setlastNumber('')
            setcurrentNumber('')
            return
        case'=':
            Vibration.vibrate(35);
            setlastNumber(currentNumber+'=')
            calculator()
            return
    }
    setcurrentNumber(currentNumber + buttonPressed)
 }
 const styles = StyleSheet.create({
    results:{
        backgroundColor:darkmode?'#282f3b':'#f5f5f5',
        maxWidth:'100',
        minHeight:'35%',
        alignItems:"flex-end",
        justifyContent:'flex-end'
    },
    resultText:{
        maxHeight:45,
        color:'#00b9d6',
        margin:15,
        fontSize:35
    },
    historyText:{
        color:darkmode?'#b5b7bb':'#7c7c7c',
        fontSize:20,
        marginRight:10,
        alignItems:"flex-end"
    },
    themeButton:{
        alignSelf:'flex-start',
        bottom:'5%',
        margin:15,
        backgroundColor:darkmode?'#7b8084':'#e5e5e5e',
        alignItems:'center',
        justifyContent:'center',
        width:50,
        height:50,
        borderRadius:25,
    },
    buttons:{
        width:'100%',
        height:'35%',
        flexDirection:'row',
        flexWrap:'wrap'
    },
    button:{
        borderColor:darkmode?'#3f4d5b':'#e5e5e5',
        alignItems:'center',
        justifyContent:'center',
        minWidth:'24%',
        minHeight:'54%',
        flex:2
    },
    textButton:{
        color:darkmode?'#b5b7bb':'#7c7c7c',
        fontSize:28,
    }
 })
    return(
        <View>
            <View style={styles.results}>
                <TouchableOpacity style={styles.themeButton}>
                    <Entypo name={darkmode?'light-up':'moon'} size={24} color={darkmode?'white':'black'} onPress={()=>darkmode?
                    setDarkMode(false):setDarkMode(true)}/>
                </TouchableOpacity>
                <Text style={styles.historyText} >{lastNumber}</Text>
                <Text style={styles.resultText} >{currentNumber}</Text>
            </View>
            <View style={styles.buttons}>
                    {buttons.map((button)=>button==='/'||button==='='||button==='+'||button==='-'||button==='*'?
                        <TouchableOpacity key={button} style={[styles.button,{backgroundColor:'#00b9d6'}]} onPress={()=>
                        handleInput(button)}>
                            <Text style={[styles.textButton,{color:'white',fontSize:28}]}>{button}</Text>
                        </TouchableOpacity>
                        :
                        button==='.'|| button==='DEL'?
                        <TouchableOpacity key={button} style={[styles.button,{backgroundColor:button==='.'?darkmode?'#303946':'#fff':darkmode===true?'#414853':'#ededed',minWidth:'39%'}]} onPress={()=>
                            handleInput(button)}>
                                <Text style={styles.textButton}>{button}</Text>
                        </TouchableOpacity>
                        :
                        button==='C'?
                        <TouchableOpacity key={button} style={[styles.button,{backgroundColor:typeof(button)==='number'?
                        darkmode?'#303946':'#fff':darkmode===true?'#414853':'#ededed',minWidth:'36%'}]} onPress={()=>
                            handleInput(button)}>
                                <Text style={styles.textButton}>{button}</Text>
                        </TouchableOpacity>
                        :
                        <TouchableOpacity key={button} style={[styles.button,{backgroundColor:typeof(button)==='number'?
                        darkmode?'#303946':'#fff':darkmode===true?'#414853':'#ededed'}]} onPress={()=>
                            handleInput(button)}>
                                <Text style={styles.textButton}>{button}</Text>
                        </TouchableOpacity>
                    )}
            </View>
        </View>
    )
 }
 export default Calyculator;