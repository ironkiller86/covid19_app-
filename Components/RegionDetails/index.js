import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const RegionDetails = props => {
  const regionData = props.regionData;
  /**
   * 
   * @param {*} dato 
   * @returns 
   */
  const setCss = dato => {
    switch (dato) {
      case 'deceduti':
        return {
          color: 'red',
          fontWeight: 'bold',
        };
      case 'dimessi_guariti':
        return {
          color: 'green',
          fontWeight: 'bold',
        };

      case 'ricoverati_con_sintomi':
        return {
          color: 'orange',
          fontWeight: 'bold',
        };
      case 'nuovi_positivi':
        return {
          color: 'blue',
          fontWeight: 'bold',
        };
      case 'denominazione_regione':
        return {
          color: 'brown',
          fontWeight: 'bold',
        };
    }
  };
  /*
   * 
   */
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          flex: 1,
          backgroundColor: 'lightgray',
          flexDirection: 'column',
        }}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: 'lightgreen',
            height: 80,
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingRight: 5,
            paddingLeft: 5,
            borderBottomWidth: 1,
          }}>
          <Text style={{ fontSize: 20 }}>{regionData.regione}</Text>
          <TouchableOpacity
            style={{
              backgroundColor: 'lightblue',
              borderWidth: 1,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
              height: 50,
              width: 80,
            }}
            onPress={props.turnBack}>
            <Text style={{ fontSize: 18 }}>Home</Text>
          </TouchableOpacity>
        </View>
        {Object.keys(regionData).map(key => {
          return (
            <View
              style={{
                flex: 1,

                flexDirection: 'row',
                borderWidth: 1,
                margin: 1,
              }}>
              <View
                style={{
                  flex: 2,
                  height: 40,

                  justifyContent: 'center',
                  paddingLeft: 5,
                }}>
                <Text ellipsizeMode='tail' numberOfLines={1} style={{ fontSize: 13, fontWeight: 'bold' }}>
                  {key.toLocaleUpperCase()}:
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={[{ fontSize: 17 }, setCss(key)]}>
                  {regionData[key]}
                </Text>
              </View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};
/*
 * 
 */
export default RegionDetails;
