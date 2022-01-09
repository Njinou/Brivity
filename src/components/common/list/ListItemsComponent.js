import React from 'react';
import {FlatList,ScrollView,Text} from 'react-native';
import ItemComponent from '../item/ItemComponent';

const ListItemsComponent = (props) =>{
    return (
        <FlatList 
            data={props.data?props.data:[]}
            renderItem={ (elmnt) =>  <ItemComponent item={elmnt.item}/>}
            keyExtractor={item=> item.id}

        />
    ) 
}
export default ListItemsComponent;