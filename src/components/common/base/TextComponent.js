import React,{useState} from 'react';
import {Text,StyleSheet} from 'react-native';

const TextComponent = (props)=>{
    return (
        <Text style={props.style? props.style:styles.text}>{props.textStyle?props.textStyle:"change text"}</Text>
    );
}
const styles = StyleSheet.create({
    textStyle:{
        color:'red',
        fontSize:14
    }
})
export default TextInputComponent;