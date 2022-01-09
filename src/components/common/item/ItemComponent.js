import React from 'react';
import {View,Image,Text} from 'react-native';
import TextComponent from '../base/TextComponent';
import dots from '../../../ressources/images/dots.jpeg';
const ItemComponent = (props) =>{
    return(
        <View style={{paddingHorizontal:15,paddingBottom:15,paddingTop:10,flex:1,marginTop:5,backgroundColor:'grey'}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Image source= {dots}  style={{width:50,height:50,marginRight:5,borderRadius:25}}/>
                    <View>
                        <TextComponent style={{fontWeight:'bold',color:'red'}} text = {props.item?.title? props.item?.title:'title'}/>
                        <TextComponent text = { props.item?.user?.display_name?props.item?.user.display_name : "dislay name" + " - " + props.item?.date? props.item?.date?.toLocaleTime():Now()}/>
                    </View>
                </View>
                <Image source= {dots}  style={{width:50,height:20,backgroundColor:'red'}}/>
            </View>
            <TextComponent style={{marginTop:5}} text ={props.item?.body?props.item?.body:"this is the body of that crap...."} />
        </View>      
    )
}
export default ItemComponent;
