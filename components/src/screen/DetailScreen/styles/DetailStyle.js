import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
} from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    imgDish: {
        width: '100%',
        height: 300,
        resizeMode: 'contain',
    },
    cardDescription: {

        padding: 10,
        borderColor: 'gray',
        borderBottomWidth: 1,
        width: 300,
        justifyContent: 'space-between',
        alignItems: 'stretch',
        alignSelf: 'center',
        flexDirection: 'row',
        marginTop: -10,
    },
    txtSeeMore: {
        alignSelf: 'flex-end',
        color: 'blue',

    },
    viewDes: {
        flexDirection: 'row',
    },
    BotContent: {
        marginTop: 20
    },
    textContent: {
        color: 'black',
        flex: 1,
        paddingLeft: 5,
    },
    textTitle: {
        color: 'black',
        fontSize: 25
    },
    imgEdit: {
        margin: 5,
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },
});
export default styles;