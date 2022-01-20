
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
function CategoryScreen({ dataRoute, ListItem }) {
    return (
        <SafeAreaView style={styles.container}>
            {
                <View>
                    <FlatList
                        // refreshing={render}
                        data={dataRoute}
                        stickySectionHeadersEnabled={false}
                        renderItem={({ item }) => { return <ListItem item={item} /> }}
                    />
                </View>
            }

        </SafeAreaView>
    )
}

export default CategoryScreen;