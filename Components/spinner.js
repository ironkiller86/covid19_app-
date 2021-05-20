import React from 'react';
import {
    View,

    ActivityIndicator,
} from 'react-native';

const Spinner = () => {
    return (
        <View
            style={{
                flex: 1,
                //   backgroundColor: 'lightgray',
                alignItems: 'center',
                justifyContent: 'center',

                width: '100%',
            }}>
            <ActivityIndicator size={60} color="white" />
        </View>)
}
/*
 * 
 */
export default Spinner