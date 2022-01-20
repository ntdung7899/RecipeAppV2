import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Modal,
    Alert,
    ScrollView
} from 'react-native';

import styles from './styles/DetailStyle'
import Icon from 'react-native-vector-icons/Ionicons';
import DetailScreen from './DetailScreen'
export default function DetailContainer({ navigation, route, props }) {
    const [dataEarn, setDataEarn] = useState();
    const [ingredients, setIngredient] = useState();
    useEffect(() => {
        const { params } = route;
        setDataEarn(params?.data)
    }, [route.params?.data]);

    useEffect(() => {
        //dataEarn && console.log('dataEarn', dataEarn);
        dataEarn && FormatIngredient(dataEarn.ingredients);
    }, [dataEarn]);
    useEffect(() => {
        //ingredients && console.log('ingredients', ingredients);

    }, [ingredients]);

    const FormatIngredient = (text) => {
        const formatValue = text.split(",")
        setIngredient(formatValue)
        //console.log('abc', formatValue[0])
    }
    const DetailProps = {
        dataEarn,
        ingredients,
        FormatIngredient,
        navigationToEdit,
    }
    function navigationToEdit() {
        // dataEarn && console.log('abc', dataEarn)
        dataEarn && navigation.navigate('Edit', { screen: 'Edit', data: dataEarn })
    }
    return <DetailScreen {...DetailProps} />

}






