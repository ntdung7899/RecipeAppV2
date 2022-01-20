import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TextInput,
    SafeAreaView,
    TouchableOpacity
} from 'react-native';
import styles from './styles'
export default function SearchScreen({ textSearch, filterData, searchFilter, navigateToDetails, ItemView }) {
    // console.log('dataSearch', dataRoute)
    
    return (
        <SafeAreaView>
            {filterData && <View style={styles.MainContainer}>
                <View style={styles.searchBarContainer}>
                    <TextInput style={styles.searchInput}
                        value={textSearch}
                        onChangeText={(text) => searchFilter(text)}
                        placeholder='Search here..'
                        underlineColorAndroid='transparent'
                    />
                </View>
                <View>
                    <FlatList
                        data={filterData}
                        renderItem={({ item }) => { return <ItemView item={item} /> }}
                    />
                </View>
            </View>
            }

        </SafeAreaView>
    )
}