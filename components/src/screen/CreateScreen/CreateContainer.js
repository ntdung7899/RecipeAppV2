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

} from 'react-native';
import { TextInput, RadioButton, HelperText } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

import defaultInitialState from '../../data/DataDefault'
import Images from '../../Image/image'
import CreateScreen from './CreateScreen'
function CreateContainer({ route, navigation, props }) {
    const defaultFood = {
        id: 0,
        name: '',
        image: '',
        type: 'soup',
        ingredients: '',
        steps: '',
        mode: '',
        time: '',
        eval: '',
    }
    const [newFoods, setFoods] = useState({
        id: 0,
        name: '',
        image: Images.vegetableSoup,
        type: 'Vegetables',
        ingredients: '',
        steps: '',
        mode: 'easy',
        time: '',
        eval: '',
    });



    const [dataLength, setDataLength] = useState();
    const [checked, setChecked] = useState('easy');

    const [nameErrorMessage, setNameErrorMessage] = useState(null)
    const [timeErrorMessage, setTimeErrorMessage] = useState(null)
    const [evalErrorMessage, setEvalErrorMessage] = useState(null)
    const [ingErrorMessage, setIngErrorMessage] = useState(null)
    useFocusEffect(
        React.useCallback(() => {
            //console.log('Navigation to Create Screen')
            getStorageValue('getLength')
        }, [])
    );
    useEffect(() => {
        // dataLength && console.log('dataLength', dataLength)
        if (dataLength > 0)
            setFoods({ id: dataLength + 1, name: newFoods.name, image: newFoods.image, type: newFoods.type, ingredients: newFoods.ingredients, steps: newFoods.steps, mode: newFoods.mode, time: newFoods.time, eval: newFoods.eval })
    }, [dataLength])
    async function getStorageValue(text) {
        try {
            const item = await AsyncStorage.getItem('@data');
            const value = item ? JSON.parse(item) : defaultInitialState;
            //console.log('AsyncStorage', value[0].data)
            if (text === 'getLength') {
                getLength(value[0].data);
            }
            if (text === 'pushData') {
                pushData(value[0].data);
                setStorageValue(value)
            }
        } catch (e) {
            console.log('cant get value : ' + e)
        }
    }
    const setStorageValue = async (value) => {
        try {
            //console.log('save value:', value)
            if (value === undefined) {
                console.log('value storage is null')
                return;
            }
            const jsonValue = JSON.stringify(value)
            await AsyncStorage.setItem('@data', jsonValue)
            //console.log('save success', jsonValue)
        } catch (e) {
            // save error
            console.log('cant save storage value: ' + e)
        }
    }
    const getLength = (value) => {
        value.sort((a, b) => a.id - b.id);
        const lastObj = value.slice(-1);
        let result = lastObj.map(a => a.id)
        setDataLength(Number(result))

        //console.log('length',Number(result))
    }
    const pushData = (value) => {
        value.push(newFoods);
        //console.log('value', value)
    }
    const CheckFoodName = (text) => {

        validateFoodName(text)
        setFoods({ id: newFoods.id, name: text, image: newFoods.image, type: newFoods.type, ingredients: newFoods.ingredients, steps: newFoods.steps, mode: newFoods.mode, time: newFoods.time, eval: newFoods.eval })
    }
    const CheckTimeFood = (text) => {

        validateTimeName(text)
        setFoods({ id: newFoods.id, name: newFoods.name, image: newFoods.image, type: newFoods.type, ingredients: newFoods.ingredients, steps: newFoods.steps, mode: newFoods.mode, time: text, eval: newFoods.eval })
    }
    const CheckEvalFood = (text) => {

        validateEvalName(text)
        setFoods({ id: newFoods.id, name: newFoods.name, image: newFoods.image, type: newFoods.type, ingredients: newFoods.ingredients, steps: newFoods.steps, mode: newFoods.mode, time: newFoods.time, eval: text })
    }
    const CheckIngFood = (text) => {

        validateIngFood(text)
        setFoods({ id: newFoods.id, name: newFoods.name, image: newFoods.image, type: newFoods.type, ingredients: text, steps: newFoods.steps, mode: newFoods.mode, time: newFoods.time, eval: newFoods.eval })
    }
    const validateFoodName = (text) => {
        return text.length < 1 ? setNameErrorMessage('Please enter food name') : setNameErrorMessage(null)
    }
    const validateTimeName = (text) => {
        return isNaN(text) || text.length < 1 ? setTimeErrorMessage('Please enter a number ') : setTimeErrorMessage(null)
    }
    const validateEvalName = (text) => {
        return isNaN(text) && parseInt(text) < 5 || text.length < 1 ? setEvalErrorMessage('Please enter a number ') : setEvalErrorMessage(null)
    }
    const validateIngFood = (text) => {
        return text.length < 1 ? setIngErrorMessage('Please enter ingredients ') : setIngErrorMessage(null)
    }
    const onPressCreateNewFood = () => {
        if (newFoods.name.length < 1) {
            setNameErrorMessage('Please enter name')
        }
        if (newFoods.time.length < 1) setTimeErrorMessage('Please enter time')
        if (newFoods.eval.length < 1) setEvalErrorMessage('Please enter eval')
        if (newFoods.ingredients.length < 1) setIngErrorMessage('Please enter ingredients')
        else {
            if (newFoods.name.length < 1 || newFoods.time.length < 1 || newFoods.eval.length < 1 || newFoods.ingredients.length < 1) return;
            else {
                //console.log('newFood', newFoods)
                CreateNewFood(newFoods)
            }
        }
    }
    const CreateNewFood = (value) => {
        // console.log('newFood', value)
        getStorageValue('pushData')
        setFoods({
            id: 0,
            name: '',
            image: Images.vegetableSoup,
            type: 'Vegetables',
            ingredients: '',
            steps: '',
            mode: 'easy',
            time: '',
            eval: '',
        })
    }
    const onPickerValueChange = (itemValue) => {
        setFoods({ id: newFoods.id, name: newFoods.name, image: newFoods.image, type: itemValue, ingredients: newFoods.ingredients, steps: newFoods.steps, mode: newFoods.mode, time: newFoods.time, eval: newFoods.eval })
    }


    const onRadioButtonChecked = (text) => {
        console.log('radio value', text)
        setChecked(text)
        setFoods({ id: newFoods.id, name: newFoods.name, image: newFoods.image, type: newFoods.type, ingredients: newFoods.ingredients, steps: newFoods.steps, mode: text, time: newFoods.time, eval: newFoods.eval })
    }
    const CreateProps = {
        onPressCreateNewFood,
        CheckIngFood,
        CheckEvalFood,
        CheckTimeFood,
        CheckFoodName,
        newFoods,
        props,
        checked,
        nameErrorMessage,
        timeErrorMessage,
        evalErrorMessage,
        ingErrorMessage,
        defaultFood,
        onPickerValueChange,
        onRadioButtonChecked

    }
    return <CreateScreen {...CreateProps} />

}


export default CreateContainer;