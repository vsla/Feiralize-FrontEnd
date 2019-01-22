import React, { Component } from 'react'
import { FlatList, View } from 'react-native';
import ButtonItemListHeader from './ButtonItemListHeader';
import theme from "../styles/theme.style";

class ItemListHeader extends Component{
    render(){
        return(
            <FlatList
            data={[{ 'title': 'mercearia' }, { 'title': 'frios' }, { 'title': 'temperos' }, 
                        { 'title': 'mercearia 1' }, { 'title': 'frios 1' }, { 'title': 'temperos 1' },
            ]}
            horizontal= {true}
            style={{ flex: 2, backgroundColor: theme.BG_color }}
            keyExtractor={item => item.title}
            renderItem={({item}) => 
                <ButtonItemListHeader title={item.title}/>
            }

            />
        )
    }
}
export default ItemListHeader;
