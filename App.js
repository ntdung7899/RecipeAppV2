import React, { Component, useState, useEffect } from 'react';
import { View, TextInput, LogBox, TouchableOpacity, Image, StyleSheet } from 'react-native';







import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// import HomeScreen from './components/src/screen/HomeScreen/index';
import HomeContainer from './components/src/screen/HomeScreen/HomeContainer';
import CreateContainer from './components/src/screen/CreateScreen/CreateContainer'
import EditScreen from './components/src/screen/EditScreen/EditContainer';
const Tab = createBottomTabNavigator();
LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

const CustomTabBarButton = ({ children, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                top: -20,
                justifyContent: 'center',
                alignItems: 'center',
                ...styles.shadow
            }}
            onPress={onPress}
        >
            <View style={{
                width: 70,
                height: 70,
                borderRadius: 35,

            }}>
                {children}
            </View>

        </TouchableOpacity>
    )

}
const App = ({ navigation, route }) => {


    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen name="Home" component={HomeContainer} />
            <Tab.Screen name="Create" component={CreateContainer}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Image source={{ uri: 'https://clipart-best.com/img/plus/plus-clip-art-90.png' }}
                            resizeMode='contain'
                            style={{ width: 50, height: 50, }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <CustomTabBarButton {...props} />
                    ),
                    headerShown: false
                }}
            />
            <Tab.Screen name="Edit" component={EditScreen} />
        </Tab.Navigator>
    );
}
const screenOptions = ({ route }) => ({
    tabBarIcon: ({ color, size }) => {
        const icons = {
            Home: 'home',
            Edit: 'content-save'
        }
        return (
            <MaterialCommunityIcons
                name={icons[route.name]}
                color={color}
                size={size}
            />
        );
    },
    headerShown: false,
    tabBarActiveTintColor: 'tomato',
    tabBarInactiveTintColor: 'gray',
    tabBarShowLabel: false,
})

const styles = StyleSheet.create({
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
export default App;