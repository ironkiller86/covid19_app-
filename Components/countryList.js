import React from 'react';
import {
    Text,
    FlatList,
    TouchableOpacity,
} from 'react-native';
/**
 * 
 * @returns 
 */
const CountryList = (props) => {
    return (
        <FlatList
            contentContainerStyle={{
                marginTop: 40,
                paddingBottom: 50
            }}
            data={props.data}
            renderItem={({ item, index }) => (
                <TouchableOpacity
                    onPress={() => props.goToPage(item)}
                    key={index}
                    style={{
                        backgroundColor: 'lightblue',
                        opacity: 0.7,
                        height: 50,
                        width: 300,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderWidth: 1,
                        borderRadius: 5,
                        margin: 1,

                    }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{item.denominazione_regione}</Text>
                </TouchableOpacity>
            )}
            keyExtractor={item => item.denominazione_regione}></FlatList>
    )
}
export default CountryList