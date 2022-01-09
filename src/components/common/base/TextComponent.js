import React,{useState} from 'react';
import {Text,StyleSheet} from 'react-native';

const TextComponent = (props)=>{
    return (
        <Text style={props.style? props.style:styles.text}>{props.text?props.text:"change text"}</Text>
    );
}
const styles = StyleSheet.create({
    textStyle:{
        flex:1,
        color:'red',
        fontSize:14
    }
})
export default TextComponent;