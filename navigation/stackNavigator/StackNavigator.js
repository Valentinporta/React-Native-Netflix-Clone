import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/homescreen/HomeScreen';
import MovieDetails from '../../screens/movieDetails/MovieDetails';
import SignInScreen from '../../screens/signInScreen/SignInScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator>
            <Stack.Screen name='SignInScreen' component={SignInScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name='MovieDetails' component={MovieDetails} />
        </Stack.Navigator>
    )
};

export default StackNavigator;
