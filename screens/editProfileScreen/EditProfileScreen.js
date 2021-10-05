import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import Navbar from '../../components/navbar/Navbar';
import { auth } from '../../firebase';

const EditProfileScreen = () => {
    const navigation = useNavigation();

    const signOut = () => {
        auth.signOut();
    };

    const goHome = () => {
        navigation.navigate('HomeScreen');
    };

    return (
        <View style={styles.editProfileScreen}>
            <Navbar goHome={goHome} />
            <View style={styles.editProfileScreen__body}>
                <View style={styles.title__borderBottom}>
                    <Text style={styles.editProfileScreen__title}>Edit Profile</Text>
                </View>
                <View style={styles.editProfileScreen__profileInfo}>
                    <Image style={styles.editProfileScreen__avatar} source={require('../../assets/netflix-avatar.png')} />
                    <TextInput editable={false} value='testemail@gmail.com' style={styles.profileInfo__input} />
                    <View style={styles.profileInfo__plansBorderBottom}>
                        <Text style={styles.profileInfo__plans}>Plans</Text>
                    </View>
                    <TouchableOpacity style={styles.profileInfo__button} onPress={signOut}>
                        <Text style={styles.profileInfo__buttonText}>Sign Out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    editProfileScreen: {
        backgroundColor: '#111',
        height: '100%',
    },
    editProfileScreen__body: {
        width: '50%',
        top: '20%',
        left: '25%',
    },
    editProfileScreen__title: {
        fontSize: 40,
        color: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        paddingBottom: 20,
        textAlign: 'center',
    },
    title__borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
    },
    editProfileScreen__profileInfo: {
        display: 'flex',
        height: 200,
    },
    editProfileScreen__avatar: {
        height: 80,
        width: 100,
        marginVertical: 20,
        marginHorizontal: 50
    },
    profileInfo__input: {
        backgroundColor: '#bbb',
        color: '#fff',
        height: 35,
        marginBottom: 20,
        paddingLeft: 10
    },
    profileInfo__plans: {
        color: '#fff',
        marginBottom: 10,
    },
    profileInfo__plansBorderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: '#bbb'
    },
    profileInfo__button: {
        width: '100%',
        backgroundColor: '#e50914',
        padding: 10,
        marginTop: 20
    },
    profileInfo__buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '600'
    }
})

export default EditProfileScreen;
