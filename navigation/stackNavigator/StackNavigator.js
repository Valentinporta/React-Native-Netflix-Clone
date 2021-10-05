import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/homescreen/HomeScreen';
import MovieDetails from '../../screens/movieDetails/MovieDetails';
import SignInScreen from '../../screens/signInScreen/SignInScreen';
import { auth } from '../../firebase';
import EditProfileScreen from '../../screens/editProfileScreen/EditProfileScreen';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator()
    const [user, setUser] = useState(null)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
            userAuth ? setUser(userAuth) : setUser(null)
        });

        return unsubscribe;
    }, [])

    return (
        <Stack.Navigator initialRouteName={user ? 'HomeScreen' : 'SignInScreen'}>

        {user &&
            <>
            <Stack.Screen name='HomeScreen' component={HomeScreen} options={{
                headerShown: false
            }} />
            <Stack.Screen name='MovieDetails' component={MovieDetails} />
            <Stack.Screen name='EditProfileScreen' component={EditProfileScreen} options={{
                headerShown: false}} />
            </>
        }

        {!user &&
            <Stack.Screen name='SignInScreen' component={SignInScreen} options={{
                headerShown: false
            }} />
        }
        
        </Stack.Navigator>
    )
};

export default StackNavigator;
