import React from 'react';
import {View,Image} from 'react-native';
import ButtonComponent from '../base/ButtonComponent';
import TextComponent from '../base/TextComponent';

import dots from '../../../ressources/images/dots.jpeg';
import TextInputComponent from '../base/TextInputComponent';

const AuthComponent = (props) =>{
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <TextComponent text={props.title?props.title:"Title"} style={{marginTop:20,marginBottom:10,fontSize:24, fontWeight:'bold'}} />
            <Image source={dots} style={{height:100,width:100,borderRadius:50}}/>
            <TextInputComponent value={props.value1} onChangeText={props.onChangeText1} placeholder={props.placeholder1} style={{marginTop:'auto'}}     keyboardType={props.keyboardType1} secureTextEntry={props.secureTextEntry1}/>
            <TextInputComponent value={props.value2}  onChangeText={props.onChangeText2} placeholder={props.placeholder2}      keyboardType={props.keyboardType2} secureTextEntry={props.secureTextEntry2}/>
            <TextInputComponent value={props.value3}  onChangeText={props.onChangeText3} placeholder={props.placeholder3}     keyboardType={props.keyboardType3} secureTextEntry={props.secureTextEntry3} /> 
            <ButtonComponent func={props.func} style={{marginBottom:'auto'}}/>
        </View>
    )
}
export default AuthComponent    ;