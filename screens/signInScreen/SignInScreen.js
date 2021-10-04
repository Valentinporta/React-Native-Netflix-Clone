import { useNavigation } from '@react-navigation/core';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, TextInput } from 'react-native';
import SignupScreen from '../signupScreen/SignupScreen';

const SignInScreen = () => {
    const [visible, setVisible] = useState(false)
    const navigation = useNavigation()
    const bgImage = require('../../assets/netflix-background.jpg')
    const logo = require('../../assets/netflix-logo.png')
    return (
        <View style={{minHeight: '100%'}}>
        
            <ImageBackground style={styles.signInScreen__background} source={bgImage}>

                <LinearGradient
                    locations={[0.2, 0.5, 0.7]}
                    style={styles.signInScreen__bgFade}
                    colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 1']}>

                    <View style={styles.signInScreen__nav}>
                        <TouchableOpacity onPress={() => setVisible(false)} >
                            <Image source={logo} style={styles.signInScreen__logo} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.signInScreen__button}>
                            <Text style={styles.button__text} onPress={() => setVisible(true)}>Sign In</Text>
                        </TouchableOpacity>
                    </View>

                    {visible ?
                        <View style={styles.signInScreen__body}>
                            <SignupScreen />
                        </View>
                        :
                        <View style={styles.signInScreen__body}>
                            <Text style={styles.signInScreen__bigText}>Unlimited films, TV programmes, and more.</Text>
                            <Text style={styles.signInScreen__mediumText}>Watch anywhere. Cancel at any time</Text>
                            <Text style={styles.signInScreen__smallText}>Ready to watch? Enter your email to create or restart your membership</Text>
                            <View style={styles.signInScreen__getStarted}>
                                <TextInput style={styles.getStarted__input} placeholder='Email Address' />
                                <TouchableOpacity style={styles.getStarted__button} onPress={() => navigation.navigate('HomeScreen')}>
                                    <Text style={styles.button__text}>GET STARTED</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    }

                </LinearGradient>

            </ImageBackground>

        </View>
    )
}

const styles = StyleSheet.create({
    signInScreen__background: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover'
    },
    signInScreen__bgFade: {
        height: '100%',
        width: '100%',
        zIndex: 1
    },
    signInScreen__nav: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 30,
        height: 70,
        width: '100%',
    },
    signInScreen__logo: {
        height: 40,
        width: 130
    },
    signInScreen__button: {
        width: 80,
        height: 35,
        backgroundColor: '#e50914',
        borderRadius: 5
    },
    button__text: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        paddingTop: 10
    },
    signInScreen__body: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '70%',
        paddingHorizontal: 30,
    },
    signInScreen__bigText: {
        fontSize: 40,
        color: '#fff',
        fontWeight: '600',
        paddingBottom: 20,
        textAlign: 'center'
    },
    signInScreen__mediumText: {
        fontSize: 25,
        color: '#fff',
        fontWeight: '600',
        paddingBottom: 20
    },
    signInScreen__smallText: {
        fontSize: 15,
        color: '#fff',
        fontWeight: '600',
        paddingBottom: 10
    },
    signInScreen__getStarted: {
        display: 'flex',
        flexDirection: 'row'
    },
    getStarted__button: {
        width: 120,
        height: 40,
        backgroundColor: '#e50914',
    },
    getStarted__input: {
        backgroundColor: '#fff',
        width: '60%',
        paddingLeft: 10
    }
})

export default SignInScreen;