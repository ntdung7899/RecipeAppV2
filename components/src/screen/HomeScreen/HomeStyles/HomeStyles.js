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
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        justifyContent: 'center',
    },
    searchContent: {
        backgroundColor: '#ffc33d',
        height: height * 0.2,
        borderBottomEndRadius: 20,
        borderBottomLeftRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchIcon: {
        borderRadius: 100,
        height: 40,
        width: width * 0.8,
    },
    imgDish: {
        borderRadius: 30,
        borderWidth: 1,
        height: '70%',
        width: 400,
    },
    imgDishMin: {
        borderRadius: 30,
        borderWidth: 1,
        height: '60%',
        width: 300,
        resizeMode: 'contain'
    },
    cardView: {
        flex: 1,
        paddingRight: 20,
        height: 250,
    },
    contentContainerStyle: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        height: 200
    },
    cardDescription: {
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        width: 300,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        alignSelf: 'center',
        flexDirection: 'row',

    },
    txtSeeMore: {
        alignSelf: 'flex-end',
        color: 'blue',

    },
    viewDes: {
        flexDirection: 'row',
    },
    viewBtn:{
        borderWidth: 1,
        margin: 10,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
});
export default styles