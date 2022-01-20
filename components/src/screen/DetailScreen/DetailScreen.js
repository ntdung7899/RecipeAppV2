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
import Images from '../../Image/image'
function DetailsScreen({ dataEarn, ingredients, navigationToEdit }) {
    return (
        <SafeAreaView style={styles.container}>
            {
                dataEarn &&
                <View>
                    <View>
                        <Image style={styles.imgDish} source={dataEarn.image} />
                        <Text style={{ alignSelf: 'center', fontSize: 16, color: 'black', marginBottom: 5 }}>{dataEarn.name}</Text>
                        <View>
                            <View style={styles.cardDescription}>
                                <View style={styles.viewDes}>
                                    <Icon name="ios-book" color="#ef370d" size={20} /><Text style={{ color: 'black' }}>{dataEarn.mode}</Text>
                                </View>

                                <View style={styles.viewDes}>
                                    <Icon name="stopwatch-outline" color="#4F8EF7" size={20} /><Text style={{ color: 'black' }}>{dataEarn.time}</Text>
                                </View>
                                <View style={styles.viewDes}>
                                    <Icon name="ios-star-half-sharp" color="#efe80d" size={19} /><Text style={{ color: 'black' }}>{dataEarn.eval}</Text>
                                </View>

                            </View>

                        </View>
                    </View>
                    <View>
                        <ScrollView>
                            <View style={styles.BotContent}>
                                <Text style={{ color: 'black', fontSize: 25, marginBottom: 10 }}>Ingredients</Text>
                                {
                                    ingredients && ingredients.map((element, i) => {
                                        return (
                                            <View key={i} style={{ flexDirection: 'row' }}>
                                                <Text>{'\u2022'}</Text>
                                                <Text style={styles.textContent}>{element}</Text>
                                            </View>
                                        )
                                    })
                                }
                            </View>
                        </ScrollView>

                    </View>
                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'flex-end'  }}>
                        <TouchableOpacity
                            onPress={() => { navigationToEdit() }}
                            style={{ alignSelf: 'flex-end', borderWidth: 3, borderColor: 'blue' }} >
                            <Image style={styles.imgEdit} source={Images.edit} />
                        </TouchableOpacity>
                    </View>
                </View>
            }

        </SafeAreaView>
    );
}


export default DetailsScreen;