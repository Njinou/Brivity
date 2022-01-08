import React, {useState} from 'react';
import {TouchableOpacity,View,Text,StyleSheet} from 'react-native';

const ButtonComponent = (props)=>{
        const [buttonTitle, setButtonTitle] = useState("button")
        const PressedButton  = () => console.log("pressed button");
    return (
        <TouchableOpacity onPress={props.func? props.func: PressedButton}>
            <View style={props.viewStyle?props.viewStyle: styles.viewStyle}>
                <Text style={props.titleStyle? props.titleStyle:styles.titleStyle}>
                    {props.title? props.title: buttonTitle}
                </Text>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    viewStyle:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    titleStyle:{
        color:'red',
        padding:20
    }

})
export default ButtonComponent;