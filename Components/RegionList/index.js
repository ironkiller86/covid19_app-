import React, { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import RegionDetail from '../RegionDetails/';
/*
 *
 */
const covidPath = 'https://covid-19-ita-api.herokuapp.com/covidApi';
/**
 * 
 * @returns 
 */
const RegionList = () => {
  const [regionList, setList] = useState([]);
  const [flagPage, setFlagPage] = useState(false);
  /*
   * 
   */
  let ref = useRef({});
  /*
   *
   */
  useEffect(
    () => {
      fetch(covidPath)
        .then(resp => resp.json())
        .then(data => {
          data.data.forEach(data => {
            delete data.note;
            delete data.note_test;
            delete data.note_casi;
            delete data.codice_nuts_1;
            delete data.codice_nuts_2;
            delete data.lat;
            delete data.long
            data.data = data.data.substring(0, 10)
            Object.keys(data).map(key => {
              if (data[key].length === 0) {
                delete data[key]
              }
            })
          })
          setList([...data.data])
        });
    },
    [],
  );
  /*
   * 
   * @param {*} item 
   */
  const goToPage = item => {
    setFlagPage(!flagPage);
    ref.current = item;
  };
  /*
   *
   */
  const back = () => {
    setFlagPage(!flagPage);
  };
  /*
   *
   */
  if (!flagPage) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: 'lightgray',
        }}>
        <View
          style={{
            // marginTop: 50,
            height: 80,
            width: '100%',
            backgroundColor: 'lightgreen',
            justifyContent: 'center',
            alignItems: 'center',
            borderBottomWidth: 1,
          }}>
          <Text style={{ fontSize: 25, color: 'red' }}>Lista Regioni</Text>
          <Text>Dati Aggiornati ogni giorno alle 19:30</Text>
        </View>
        {regionList.length > 0 ? (
          <FlatList
            contentContainerStyle={{
              backgroundColor: 'lightgray',
              marginTop: 40,
              paddingBottom: 50,
            }}
            data={regionList}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() => goToPage(item)}
                style={{
                  backgroundColor: 'lightblue',
                  height: 50,
                  width: 300,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderWidth: 1,
                  borderRadius: 5,
                  margin: 1,
                }}>
                <Text style={{ fontSize: 18 }}>{item.denominazione_regione}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.codice}></FlatList>
        ) : (
          <View
            style={{
              flex: 1,
              backgroundColor: 'lightgray',
              alignItems: 'center',
              justifyContent: 'center',

              width: '100%',
            }}>
            <ActivityIndicator size={40} color="blue" />
          </View>
        )}
      </View>
    );
  } else {
    return <RegionDetail turnBack={back} regionData={ref.current} />;
  }
};
export default RegionList;
