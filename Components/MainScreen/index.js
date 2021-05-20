/* eslint-disable react-native/no-inline-styles */
import React, {useState, useEffect, useRef, useCallback} from 'react';
import {View, Text} from 'react-native';

import RegionDetail from '../RegionDetails/';
import Spinner from '../spinner';
import CountryList from '../countryList/';
/*
 *
 */
const covidPath =
  'https://covid-19-ita-api.herokuapp.com/covidApi/v1/italy?apiKey=82cec605-d305-4df7-8c98-78e13b335da3&orderBy=nuovi_positivi&sortBy=desc';
/**
 *
 * @returns
 */
const MainScreen = () => {
  const [dataApi, setDataApi] = useState({
    loading: true,
    virusData: [],
    statusCode: null,
    message: '',
  });
  const [flagPage, setFlagPage] = useState(false);
  /*
   *
   */
  let ref = useRef({});

  /*
   *
   */
  const fetchData = useCallback(async () => {
    const rawResp = await fetch(covidPath);
    const data = await rawResp.json();
    if (rawResp.status === 200) {
      data.data.forEach(data => {
        delete data.note;
        delete data.note_test;
        delete data.note_casi;
        delete data.codice_nuts_1;
        delete data.codice_nuts_2;
        delete data.lat;
        delete data.long;
        data.data = data.data.substring(0, 10);
        Object.keys(data).map(key => {
          if (data[key].length === 0) {
            delete data[key];
          }
        });
      });
      setDataApi({
        virusData: [...data.data],
        statusCode: rawResp.status,
        loading: !dataApi.loading,
      });
    } else {
      console.log(data);
      setDataApi({
        statusCode: rawResp.status,
        loading: !dataApi.loading,
        message: data.message,
      });
    }
  }, [dataApi]);

  useEffect(() => {
    fetchData();
  }, []);
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
        }}>
        <View
          style={{
            shadowColor: '#000',
            shadowOffset: {
              width: 1,
              height: 30,
            },
            shadowOpacity: 2,
            shadowRadius: 1.19,
            elevation: 5,
            height: 80,
            width: '100%',
            // backgroundColor: 'lightgreen',
            justifyContent: 'center',
            alignItems: 'center',
            // borderBottomWidth: 1,
            borderColor: 'black',
          }}>
          <Text style={{fontSize: 25, color: 'white'}}>Lista Regioni</Text>
          <Text style={{color: 'white'}}>
            Dati Aggiornati ogni giorno alle 18:30
          </Text>
        </View>
        {dataApi.loading ? (
          <Spinner />
        ) : dataApi.statusCode === 200 ? (
          <CountryList data={dataApi.virusData} goToPage={goToPage} />
        ) : (
          alert(dataApi?.message)
        )}
      </View>
    );
  } else {
    return <RegionDetail turnBack={back} regionData={ref.current} />;
  }
};
export default MainScreen;
