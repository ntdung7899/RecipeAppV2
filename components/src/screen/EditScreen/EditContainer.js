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
import { HelperText, TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import DatePicker from 'react-native-date-picker'
import AsyncStorage from '@react-native-async-storage/async-storage';


import EditScreen from './EditScreen'
import defaultInitialState from '../../data/DataDefault'
export default function EditContainer({ navigation, route }) {

    const [editFoods, setFoods] = useState();
    useEffect(() => {
        const { params } = route;
        setFoods(params?.data)
    }, [route.params?.data]);

    useEffect(() => {
        //editFoods && console.log('editFoods', editFoods)
    }, [editFoods]);
    const [checked, setChecked] = useState('easy');

    const [nameErrorMessage, setNameErrorMessage] = useState(null)
    const [timeErrorMessage, setTimeErrorMessage] = useState(null)
    const [evalErrorMessage, setEvalErrorMessage] = useState(null)
    const [ingErrorMessage, setIngErrorMessage] = useState(null)

    const CheckFoodName = (text) => {

        validateFoodName(text)
        setFoods({ id: editFoods.id, name: text, image: editFoods.image, type: editFoods.type, ingredients: editFoods.ingredients, steps: editFoods.steps, mode: editFoods.mode, time: editFoods.time, eval: editFoods.eval })
    }
    const CheckTimeFood = (text) => {

        validateTimeName(text)
        setFoods({ id: editFoods.id, name: editFoods.name, image: editFoods.image, type: editFoods.type, ingredients: editFoods.ingredients, steps: editFoods.steps, mode: editFoods.mode, time: text, eval: editFoods.eval })
    }
    const CheckEvalFood = (text) => {

        validateEvalName(text)
        setFoods({ id: editFoods.id, name: editFoods.name, image: editFoods.image, type: editFoods.type, ingredients: editFoods.ingredients, steps: editFoods.steps, mode: editFoods.mode, time: editFoods.time, eval: text })
    }
    const CheckIngFood = (text) => {

        validateIngFood(text)
        setFoods({ id: editFoods.id, name: editFoods.name, image: editFoods.image, type: editFoods.type, ingredients: text, steps: editFoods.steps, mode: editFoods.mode, time: editFoods.time, eval: editFoods.eval })
    }
    const validateFoodName = (text) => {
        return text.length < 1 ? setNameErrorMessage('Please enter food name') : setNameErrorMessage(null)
    }
    const validateTimeName = (text) => {
        return isNaN(text) || text.length < 1 ? setTimeErrorMessage('Please enter a number ') : setTimeErrorMessage(null)
    }
    const validateEvalName = (text) => {
        return isNaN(text) || text.length < 1 ? setEvalErrorMessage('Please enter a number ') : setEvalErrorMessage(null)
    }
    const validateIngFood = (text) => {
        return text.length < 1 ? setIngErrorMessage('Please enter ingredients ') : setIngErrorMessage(null)
    }
    const SaveEditFood = () => {
        if (editFoods.name.length < 1) {
            setNameErrorMessage('Please enter name')
        }
        if (editFoods.time.length < 1) setTimeErrorMessage('Please enter time')
        if (editFoods.eval.length < 1) setEvalErrorMessage('Please enter eval')
        if (editFoods.ingredients.length < 1) setIngErrorMessage('Please enter ingredients')
        else {
            if (editFoods.name.length < 1 || editFoods.time.length < 1 || editFoods.eval.length < 1 || editFoods.ingredients.length < 1) return;
            else {
                 console.log('ok')
                //navigation.navigate('Home', { screen: 'Home', updatedTask: editFoods });
                SaveDataThenEdit();
            }

        }
    }
    const SaveDataThenEdit = () => {
        getStorageValue()
        navigation.navigate('Home', { screen: 'Home', updatedTask: editFoods });
    }
    async function getStorageValue() {
        try {
            const item = await AsyncStorage.getItem('@data');
            const value = item ? JSON.parse(item) : defaultInitialState;
            //console.log('AsyncStorage', value[0].data)
            value[0].data.forEach(item => {
                if (item.id === editFoods.id) {
                    //console.log('abc')
                    item.name = editFoods.name;
                    item.type = editFoods.type;
                    item.ingredients = editFoods.ingredients;
                    item.mode = editFoods.mode;
                    item.time = editFoods.time;
                    item.eval = editFoods.eval;

                }
            });
            setStorageValue(value)
        } catch (e) {
            console.log('cant get value : ' + e)
        }
    }
    const setStorageValue = async (value) => {
        try {
            console.log('value:', value)
            if(value === undefined) {
                console.log('value storage is null')
                return;
            }
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@data', jsonValue)
            console.log('save success', jsonValue)
        } catch (e) {
            // save error
            console.log('cant save storage value: ' + e)
        }
    }
    const onPickerValueChange = (itemValue) => {
        setFoods({ id: editFoods.id, name: editFoods.name, image: editFoods.image, type: itemValue, ingredients: editFoods.ingredients, steps: editFoods.steps, mode: editFoods.mode, time: editFoods.time, eval: editFoods.eval })
    }
    const onRadioButtonChecked = (text) => {
        setChecked(text)
    }
    const EditProps = {
        SaveEditFood,
        CheckIngFood,
        CheckEvalFood,
        CheckTimeFood,
        CheckFoodName,
        editFoods,
        checked,
        nameErrorMessage,
        timeErrorMessage,
        evalErrorMessage,
        ingErrorMessage,
        onPickerValueChange,
        onRadioButtonChecked
    }
    return <EditScreen {...EditProps} />
}

