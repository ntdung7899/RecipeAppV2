import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    SectionList,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Alert,
    Dimensions,
    Image
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import defaultInitialState from '../../data/DataDefault'
import HomeScreen from './HomeScreen'
import { useFocusEffect } from '@react-navigation/native';

import { TabView, SceneMap } from 'react-native-tab-view';

export default function HomeContainer({ navigation, route, props }) {
    const [search, setTextSearch] = useState('');

    const [data, setData] = useState([]);
    const [DataByText, setFormatDataByText] = useState();
    // tab layout state 
    const [indexTab, setIndex] = React.useState(0);
    const [routesTab] = React.useState([
        { key: 'first', title: 'First' },
        { key: 'second', title: 'Second' },
    ]);
    useEffect(() => {
        getStorageValue()
        // console.log('first load data')
    }, [])
    useEffect(() => {
        //data && console.log('dataLoad', data);
    }, [data])

    useFocusEffect(
        React.useCallback(() => {
            getStorageValue()
        }, [])
    );

    async function getStorageValue() {
        try {
            const item = await AsyncStorage.getItem('@data');
            const value = item ? JSON.parse(item) : defaultInitialState;
            setData(value);
        } catch (e) {
            console.log('cant get value : ' + e)
        }
    }
    const navigateToDetails = item => {
        console.log(item)
        navigation.navigate('Detail', { screen: 'Detail', data: item })
    }
    const navigateToCategories = () => {
        navigation.navigate('Category', { screen: 'Category', data: data })
    }

    const NavigatorSearchScreen = () => {
        navigation.navigate('Search', { screen: 'Search', data: data })
    }
    const setDataByText = (text) => {
        //console.log(text)
        const cloneData = data[0].data;
        const formatData = cloneData.filter(item => item.type === text);
        setFormatDataByText(formatData)
       // console.log(formatData)
    }
   
    const homeProps = {
        navigateToDetails,
        navigateToCategories,
        NavigatorSearchScreen,
        data,
        props,
        setIndex,
        setDataByText,
        DataByText
    };
    return <HomeScreen {...homeProps} />;
}