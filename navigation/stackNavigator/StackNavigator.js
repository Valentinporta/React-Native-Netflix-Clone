import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/homescreen/HomeScreen';
import MovieDetails from '../../screens/movieDetails/MovieDetails';
import SignInScreen from '../../screens/signInScreen/SignInScreen';
import EditProfileScreen from '../../screens/editProfileScreen/EditProfileScreen';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';

const StackNavigator = () => {
    const Stack = createNativeStackNavigator()
    const user = useSelector(selectUser)
    const dispatch = useDispatch()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(userAuth => {
          if (userAuth) {
            dispatch(login({
              uid: userAuth.uid,
              email: userAuth.email
            }))
          } else {
            dispatch(logout())
          }
        })
    
        return unsubscribe
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
