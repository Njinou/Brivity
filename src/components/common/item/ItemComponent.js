import React,{useState,useEffect} from 'react';
import {View,Image,Text,Pressable} from 'react-native';
import TextComponent from '../base/TextComponent';
import dots from '../../../ressources/images/dots.jpeg';
const ItemComponent = (props) =>{
    const [messageCount,setMessageCount] = useState(props?.item?.comment_count);
    const [comment,setComment] = useState(props?.item?.comment_count>1 ? "Comments" : "Comment")
    useEffect( ()=>{},[])
    return(
        <Pressable onPress={()=> alert("Can use navigation to move to the details")} style={{paddingHorizontal:15,paddingBottom:15,paddingTop:10,flex:1,marginVertical:5,marginHorizontal:15,backgroundColor:'lightgray',borderRadius:15}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <Image source= {dots}  style={{width:50,height:50,marginRight:5,borderRadius:25}}/>
                    <View style={{justifyContent:'center'}}> 
                        <TextComponent   style={{fontStyle:'italic',flexWrap:'wrap'}} text = {props.item?.title? props.item?.title:'title' +  JSON.stringify(props.item)}/>
                        <TextComponent style={{fontWeight:'bold'}} text = { props.item?.user?.display_name?props.item?.user.display_name : "dislay name" }/>
                        <TextComponent style={{color:'black',textDecorationLine: 'underline',}} text = { new Date(props?.item?.created_at).toLocaleDateString() }/>
                    </View>
                </View>
                <Pressable onPress={()=> alert("Set the edit function here")}>
                    <Text style={{fontWeight:'bold',fontSize:20}}>...</Text>
                </Pressable>
            </View>
            <TextComponent style={{marginTop:5}} text ={props.item?.body?props.item?.body:"this is the body of that crap...."} />
            <TextComponent style={{alignSelf:'flex-end',}} text={messageCount + ' ' + comment}  />
        </Pressable>      
    )
}
export default ItemComponent;
