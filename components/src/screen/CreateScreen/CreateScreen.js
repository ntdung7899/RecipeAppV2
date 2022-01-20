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
} from 'react-native';


import { TextInput, RadioButton, HelperText } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import styles from '../CreateScreen/styles/CreateStyles';
import Images from '../../Image/image'
export default function EditScreen({ SaveEditFood, CheckIngFood, CheckEvalFood, CheckTimeFood, CheckFoodName, newFoods, nameErrorMessage, timeErrorMessage, evalErrorMessage, ingErrorMessage, checked, onPickerValueChange, onRadioButtonChecked, onPressCreateNewFood }) {
    return (
        <SafeAreaView style={styles.container}>
            {newFoods &&
                <View>
                    <View style={{ marginTop: 20 }}>
                        <TextInput
                            label="Food's name:"
                            mode='outlined'
                            value={newFoods.name}
                            onChangeText={text => CheckFoodName(text)}
                        />
                        <HelperText type='error' visible={Boolean(nameErrorMessage)}>
                            {nameErrorMessage}
                        </HelperText>
                    </View>
                    <View>
                        <Text>Kind of food: </Text>
                        <Picker
                            selectedValue={newFoods.type}
                            onValueChange={(itemValue) => onPickerValueChange(itemValue)}
                        >
                            <Picker.Item label="Vegetables" value="Vegetables" />
                            <Picker.Item label="Meats" value="Meats" />
                            <Picker.Item label="Desserts" value="Desserts" />
                            <Picker.Item label="Fruit" value="Fruit" />
                        </Picker>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                        <View>
                            <TextInput
                                style={{ width: 200, }}
                                label="Cooking time"
                                mode='outlined'
                                value={newFoods.time}
                                right={<TextInput.Icon name="cookie" color='red' />}
                                onChangeText={text => CheckTimeFood(text)}
                            />
                            <HelperText type='error' visible={Boolean(timeErrorMessage)}>
                                {timeErrorMessage}
                            </HelperText>
                        </View>
                        <View>
                            <TextInput
                                style={{ width: 200, }}
                                label="Eval"
                                mode='outlined'
                                value={newFoods.eval.toString()}
                                right={<TextInput.Icon name="star" color='orange' />}
                                onChangeText={text => CheckEvalFood(text)}
                            />
                            <HelperText type='error' visible={Boolean(evalErrorMessage)}>
                                {evalErrorMessage}
                            </HelperText>
                        </View>

                    </View>
                    <View >
                        <Text>Level: </Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ flexDirection: 'row', }}>
                                <RadioButton
                                    value="easy"
                                    status={checked === 'easy' ? 'checked' : 'unchecked'}
                                    onPress={() => onRadioButtonChecked('easy')}
                                />
                                <Text style={{ marginTop: 7, color: 'black' }}>Easy</Text>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <RadioButton
                                    value="medium"
                                    status={checked === 'medium' ? 'checked' : 'unchecked'}
                                    onPress={() => onRadioButtonChecked('medium')}
                                />
                                <Text style={{ marginTop: 7, color: 'black' }}>Medium</Text>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <RadioButton
                                    value="hard"
                                    status={checked === 'hard' ? 'checked' : 'unchecked'}
                                    onPress={() => onRadioButtonChecked('hard')}
                                />
                                <Text style={{ marginTop: 7, color: 'black' }}>Hard</Text>
                            </View>

                        </View>
                    </View>
                    <View >
                        <TextInput
                            mode="outlined"
                            label="Ingredients"
                            value={newFoods.ingredients}
                            multiline={true}
                            onChangeText={text => CheckIngFood(text)}
                            placeholder="Typing ..."
                        />
                        <HelperText type='error' visible={Boolean(ingErrorMessage)}>
                            {ingErrorMessage}
                        </HelperText>
                    </View>
                    <View style={{ alignSelf: 'flex-end', marginTop: 30 }}>
                        <TouchableOpacity onPress={onPressCreateNewFood}>
                            <Image
                                source={Images.doneMark}
                                style={styles.img} />
                        </TouchableOpacity>
                    </View>
                </View>}
        </SafeAreaView>
    );
}

