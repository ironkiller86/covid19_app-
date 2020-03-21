import React, {useState, useEffect, useRef} from 'react';
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
const covidPath = 'https://openpuglia.org/api/?q=getdatapccovid-19';

const RegionList = () => {
  const [regionList, setList] = useState([]);
  const [flagPage, setFlagPage] = useState(false);
  /*
   *
   */
  const httpConfig = {
    method: 'GET',
  };
  let ref = useRef({});
  /*
   *
   */
  useEffect(
    () => {
      fetch(covidPath, httpConfig)
        .then(resp => resp.json())
        .then(data => {
          data.map(elm => {
            // console.log(elm['codice regione']);
          });
          setList(data);
        });
    },
    [
      /*regionList*/
    ],
  );
  const goToPage = item => {
    setFlagPage(!flagPage);
    ref.current = item;
    console.log(item['ricoverati con sintomi']);
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
          <Text style={{fontSize: 25, color: 'red'}}>Lista Regioni</Text>
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
            renderItem={({item, index}) => (
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
                <Text style={{fontSize: 18}}>{item.regione}</Text>
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
