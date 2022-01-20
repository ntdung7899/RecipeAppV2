
import React, { useState, useEffect } from 'react';
import {
    View,
    StyleSheet,
    Text,
    FlatList,
    ImageBackground,
    Image,
    TouchableOpacity,
    SafeAreaView,
    Modal,
    SectionList,
    Alert,
} from 'react-native';
import { TextInput, RadioButton, Card } from 'react-native-paper';
import styles from './styles/CategoryStyle';
import CategoryScreen from './CategoryScreen'
function CategoryContainer({ route, navigation, props }) {

    const [dataRoute, setDataRoute] = useState();
    // console.log(">>>>>>", dataRoute)
    const [newData, setNewData] = useState();
    const [render, setRender] = useState();
    const [checked, setChecked] = React.useState('first');
    useEffect(() => {
        let data = route?.params?.data[0].data
        setDataRoute(data)
    }, [route?.params?.data[0].data]);

    useEffect(() => {
        dataRoute && console.log('dataRoute', dataRoute[0]?.data);
    }, [dataRoute]);
    useEffect(() => {
        newData && console.log('newData', newData);
    }, [newData]);
    const createButtonAlert = (item) => {
        Alert.alert(
            "Hệ thống",
            "Bạn có muốn xóa task này chứ ?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => onPressDeleteItem(item, '@data') }
            ]
        );
    }
    const onPressDeleteItem = (deleItem, key) => {
        console.log('deleteItem', deleItem);
        const tempData = dataRoute.filter(item => item.id !== deleItem.id)
        console.log('tempData', tempData);
        setDataRoute(tempData)
        setRender(true);
    }
    const navigateToDetails = item => {
        //console.log(item)
        navigation.navigate('Detail', { screen: 'Detail', data: item })
    }
    const ListItem = ({ item }) => {
        // console.log(">>>>>>>>>>item", item.name)
        return (
            <TouchableOpacity onPress={() => { navigateToDetails(item)}}>
                <View style={{
                    flexDirection: 'column',
                    backgroundColor: item?.id % 2 == 0 ? "#0b8457" : "#f5c3ca",
                    borderRadius: 20,
                    marginTop: 10,
                    alignContent: 'center',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image style={styles.imgDish} source={item?.image} />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginLeft: 10, marginTop: 20 }}>{item?.name}</Text>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', marginLeft: 20 }}>{item?.eval}⭐</Text>

                        </View>
                        <View style={{ marginTop: 20, marginLeft: 50, }}>
                            <TouchableOpacity onPress={() => createButtonAlert(item)}>
                                <Image source={{ uri: 'https://previews.123rf.com/images/vectorstockcompany/vectorstockcompany1808/vectorstockcompany180810079/107109630-delete-button-icon-vector-isolated-on-white-background-for-your-web-and-mobile-app-design-delete-but.jpg' }}
                                    style={{
                                        height: 25,
                                        width: 25,
                                        paddingTop: 20,

                                    }} />
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
            </TouchableOpacity>

        )
    }
    const CategoryProps = {
        dataRoute,
        createButtonAlert,
        onPressDeleteItem,
        ListItem

    }
    return <CategoryScreen {...CategoryProps} />
}

export default CategoryContainer;