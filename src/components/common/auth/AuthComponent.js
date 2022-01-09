import React from 'react';
import {View,Image} from 'react-native';
import ButtonComponent from '../base/ButtonComponent';
import TextComponent from '../base/TextComponent';

import dots from '../../../ressources/images/dots.jpeg';
import TextInputComponent from '../base/TextInputComponent';

const AuthComponent = (props) =>{
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <TextComponent text={"Title"} style={{marginTop:20,marginBottom:10,fontSize:24, fontWeight:'bold'}} />
            <Image source={dots} style={{height:100,width:100,borderRadius:50}}/>
            <TextInputComponent onChangeText={props.onChangeText1} placeholder={props.placeholder} style={{marginTop:'auto'}}/>
            <TextInputComponent onChangeText={props.onChangeTex2} placeholder={props.placeholder}  />
            <ButtonComponent func={props.func} style={{marginBottom:'auto'}}/>
        </View>
    )
}
export default AuthComponent    ;