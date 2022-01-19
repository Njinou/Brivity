import React from 'react';
import {View,Image} from 'react-native';
import ButtonComponent from '../base/ButtonComponent';
import TextComponent from '../base/TextComponent';

import dots from '../../../ressources/images/dots.jpeg';
import TextInputComponent from '../base/TextInputComponent';

const AuthComponent = (props) =>{
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <Image source={dots} style={{height:100,width:100,borderRadius:50,resizeMode:'contain'}}/>
            <TextComponent text={props.buttonTitle}  style={{marginTop:'auto',color:'gray',fontWeight:'bold',fontSize:20}}/>
            {props.error && <TextComponent style={{color:'red',textAlign:'center'}} text={props.error+ ' !!!!'}/>}
            {props.showingDisplayNameField?<TextInputComponent value={props.value1} onChangeText={props.onChangeText1} placeholder={props.placeholder1} style={{marginTop:20}}     keyboardType={props.keyboardType1} secureTextEntry={props.secureTextEntry1}/>:null}
            <TextInputComponent value={props.value2}  onChangeText={props.onChangeText2} placeholder={props.placeholder2}      keyboardType={props.keyboardType2} secureTextEntry={props.secureTextEntry2}/>
            <TextInputComponent value={props.value3}  onChangeText={props.onChangeText3} placeholder={props.placeholder3}     keyboardType={props.keyboardType3} secureTextEntry={props.secureTextEntry3} /> 
            <ButtonComponent title={props.buttonTitle} func={props.func} style={{marginBottom:20,color:'white',backgroundColor:'gray'}} textStyle={{color:'white',fontWeight:'bold',fontSize:20}}/>
            <TextComponent text={props.alternative} textPress={props.textPress} style={{marginBottom:'auto',color:'black',fontWeight:'bold',fontSize:16}}/>
        </View>
    )
}
export default AuthComponent    ;