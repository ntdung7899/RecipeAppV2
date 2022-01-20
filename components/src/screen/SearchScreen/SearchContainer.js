import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    TextInput,
    TouchableOpacity
} from 'react-native';
import styles from './styles'
import SearchScreen from './SearchScreen'
export default function SearchComponent({ navigation, route, props }) {

    const [dataRoute, setDataRoute] = useState();
    const [filterData, setFilterData] = useState();
    const [textSearch, setTextSearch] = useState();
    useEffect(() => {
        let data = route?.params?.data[0].data
        setDataRoute(data)
        setFilterData(data)
    }, [route?.params?.data[0].data]);

    const SearchBar = () => {
        return (
            <View style={styles.searchBarContainer}>
                <TextInput style={styles.searchInput} placeholder='Search here..' />
            </View>
        )

    }
    const searchFilter = (text) => {
        if (text) {
            const newData = dataRoute.filter((item) => {
                const itemData = item.name ? item.name.toUpperCase()
                    : ''.toLowerCase();
                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setFilterData(newData);
            setTextSearch(text);
        }
        else {
            setFilterData(dataRoute);
            setTextSearch(text);
        }
    }
    const ItemView = ({ item }) => {
        // item &&  console.log(">>>>>>>>>>item", item.name)
        return (
            <View style={styles.LineItem}>
                <TouchableOpacity onPress={() => navigateToDetails(item)}>
                    <Text style={styles.LineText}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }
    const navigateToDetails = (item) => {
        console.log('detail', item)
        navigation.navigate('Detail', { screen: 'Detail', data: item })
    }
    const SearchProps = {
        textSearch,
        SearchBar,
        dataRoute,
        filterData,
        searchFilter,
        navigateToDetails,
        ItemView
    }
    return <SearchScreen {...SearchProps} />
}