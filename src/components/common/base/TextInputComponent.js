import React,{useState} from 'react';
import {TextInput,StyleSheet} from 'react-native';

const TextInputComponent = (props)=>{
    const [input,setInput] = useState('')
    const [placeholder,setPlaceholder] = useState('placeholder')
    const GetInput = (val) => setInput(val);
    
    return (
        <TextInput 
            onSubmitEditing={props.onSubmitEditing}
            multiligne={true}  
            keyboardType ={props.keyboardType}
            secureTextEntry={props.secureTextEntry} 
            numberOfLines={props.numberOfLines?props.numberOfLines:4} 
            value={props.value? props.value:input} 
            style={props.style?[props.style,styles.inputStyle]:styles.inputStyle} 
            placeholder= {props.placeholder?props.placeholder: placeholder}  
            onChangeText ={props.onChangeText? props.onChangeText:GetInput}
        />
    );
}
const styles = StyleSheet.create({
    inputStyle:{
        margin:20,
        borderColor:'black',
        borderWidth:2,
        borderRadius:5,
        padding:10,
        alignSelf:'stretch'
    }
})
export default TextInputComponent;