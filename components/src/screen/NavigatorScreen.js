import React, { Component, useState, useEffect } from 'react';
import { View, TextInput, LogBox, TouchableOpacity, Image, StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IndexScreen from '../../../App'
import HomeContainer from './HomeScreen/HomeContainer'

import DetailContainer from './DetailScreen/DetailContainer'

import CreateContainer from './CreateScreen/CreateContainer'

import EditContainer from './EditScreen/EditContainer'

import CateGoryContainer from './CategoryScreen/CategoryContainer'

import SearchContainer from './SearchScreen/SearchContainer'
const Stack = createNativeStackNavigator();
function NavigatorScreen() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Index">
                <Stack.Screen name="Index" component={IndexScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Home" component={HomeContainer} options={{ headerShown: false }} />
                <Stack.Screen name="Detail" component={DetailContainer} options={{ headerShown: false }} />
                <Stack.Screen name="Create" component={CreateContainer} options={{ headerShown: false }} />
                <Stack.Screen name="Edit" component={EditContainer} options={{ headerShown: false }} />
                <Stack.Screen name="Category" component={CateGoryContainer} options={{ headerShown: false }} 
                />
                <Stack.Screen name="Search" component={SearchContainer} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default NavigatorScreen;