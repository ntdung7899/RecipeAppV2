import React, { useState, useEffect } from 'react';
import {
    StyleSheet,
    StatusBar
} from 'react-native';
const styles = StyleSheet.create({
    searchBarContainer: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8
    },
    MainContainer: {
        marginTop: StatusBar.currentHeight,
        paddingHorizontal: 15
    },
    LineItem: { marginBottom: 20 },
    LineText: { color: 'black', fontSize: 16 },
    searchInput: { width: '100%', height: '100%', fontSize: 16, padding: 6 }
})
export default styles