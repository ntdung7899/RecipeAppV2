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
import { HelperText, TextInput, Card } from 'react-native-paper';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { TabView, SceneMap } from 'react-native-tab-view';
import styles from './HomeStyles/HomeStyles'
import Icon from 'react-native-vector-icons/Ionicons';
import Images from '../../Image/image'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCarrot, apple, faLightbulb, faHeartbeat, faSoap, faBath } from '@fortawesome/free-solid-svg-icons'
function HomeScreen({ navigation, route, navigateToDetails, navigateToCategories, data, NavigatorSearchScreen, setDataByText, DataByText }) {

    const buttonArr = [
        {
            id: '1',
            title: 'Vegetables',
            icon: faCarrot,
        },
        {
            id: '2',
            title: 'Fruit',
            icon: faCarrot,
        },
        {
            id: '3',
            title: 'Meats',
            icon: faHeartbeat,
        },
        {
            id: '4',
            title: 'Soup',
            icon: faSoap,
        },
        {
            id: '5',
            title: 'Desserts',
            icon: faBath,
        },
        {
            id: '6',
            title: 'Drinks',
            icon: faLightbulb,
        },

    ];
    const renderItemButton = ({ item }) => (
        <View style={styles.viewBtn}>
            <TouchableOpacity onPress={() => { setDataByText(item.title) }}>
                <View style={{ margin: 5 }}>
                    <FontAwesomeIcon style={{
                        justifyContent: 'center', alignSelf: 'center',

                    }} size={30} icon={item.icon} />
                    <Text>{item.title}</Text>
                </View>
            </TouchableOpacity>

        </View>
    );
    const renderItemByButton = ({ item }) => {
        console.log('item by text', item)
        return (
            <TouchableOpacity onPress={() => { navigateToDetails(item) }}
                style={{ marginRight: 50 }}>
                <View>
                    <Image style={styles.imgDishMin} source={item.image} />
                    <Text style={{ color: 'black' }}>{item.title}</Text>
                </View>
            </TouchableOpacity>

        )
    }
    const ListItem = ({ item }) => {
        return (
            <View style={styles.cardView}>
                <TouchableOpacity onPress={() => { navigateToDetails(item) }} >
                    <View>
                        <Image style={styles.imgDish} source={item.image} />

                        <View style={styles.cardDescription}>

                            <View style={styles.viewDes}>
                                <Icon name="ios-book" color="#ef370d" size={20} /><Text style={{ color: 'black' }}>{item.mode}</Text>
                            </View>

                            <View style={styles.viewDes}>
                                <Icon name="stopwatch-outline" color="#4F8EF7" size={20} /><Text style={{ color: 'black' }}>{item.time}</Text>
                            </View>
                            <View style={styles.viewDes}>
                                <Icon name="ios-star-half-sharp" color="#efe80d" size={19} /><Text style={{ color: 'black' }}>{item.eval}</Text>
                            </View>
                        </View>

                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    return (
        <SafeAreaView styles={styles.container}>
            <View>
                <View style={styles.content}>
                    <TouchableOpacity onPress={() => { NavigatorSearchScreen() }}>
                        <View style={styles.searchContent}>
                            <TextInput
                                autoFocus={false}
                                editable={false}
                                style={styles.searchIcon}
                                mode='outlined'
                                label="Search"
                                right={<TextInput.Icon name="search-web" />}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.dataTrend}>
                        <View>
                            <TouchableOpacity onPress={() => { navigateToCategories() }} >
                                <Text style={styles.txtSeeMore}>View All </Text>
                            </TouchableOpacity>

                        </View>
                        <SectionList
                            contentContainerStyle={styles.contentContainerStyle}
                            sections={data}
                            stickySectionHeadersEnabled={false}
                            horizontal={true}
                            renderItem={({ item }) => { return <ListItem item={item} /> }}
                        />
                    </View>
                    <View>
                        <View>
                            <FlatList
                                data={buttonArr}
                                renderItem={renderItemButton}
                                keyExtractor={item => item.id}
                                horizontal={true}
                            />
                        </View>
                        <View>
                            <FlatList
                                data={DataByText}
                                renderItem={renderItemByButton}
                                keyExtractor={item => item.id}
                                horizontal={true}
                            />

                        </View>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );

}
const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default HomeScreen