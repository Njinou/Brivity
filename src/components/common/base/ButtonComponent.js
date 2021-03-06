import React, {useState} from 'react';
import {TouchableOpacity,View,Text,StyleSheet,Pressable} from 'react-native';
 
const ButtonComponent = (props)=>{
        const [buttonTitle, setButtonTitle] = useState("button")
        const PressedButton  = () => console.log("pressed button");
    return (
        <Pressable style={[styles.touchableStyle,props.style]} onPress={props.func? props.func: PressedButton}>
            <Text style={{fontSize:16,fontWeight:'bold'},props.textStyle}>
                {props.title? props.title: buttonTitle}
            </Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red'
    },
    titleStyle:{
        color:'red',
        padding:20,
        backgroundColor:'blue'
    },
    touchableStyle : {
        alignItems:'center',
        backgroundColor:'red',
        paddingHorizontal:25,
        paddingVertical:10,
        marginHorizontal:20,
        borderRadius:25
    }

})
export default ButtonComponent;