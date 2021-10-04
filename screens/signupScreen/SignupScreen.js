import React, { useState } from 'react';
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';

function SignupScreen() {
    const [input, setInput] = useState({
        email: '',
        password: '',
    })

    return (
        <View style={styles.signupScreen}>
            <Text style={styles.signupScreen__title} >Sign In</Text>
            <TextInput
                value={input.email}
                style={styles.signupScreen__emailInput}
                onChangeText={e => setInput({...input, email: e})}
                placeholder='   Email' textContentType='emailAddress'
            />
            <TextInput
                value={input.password}
                style={styles.signupScreen__passwordInput}
                onChangeText={e => setInput({...input, password: e})}
                placeholder='   Password' textContentType='password'
                secureTextEntry={true}
            />
            <TouchableOpacity style={styles.signupScreen__button} onPress={() => {}}>
                <Text style={styles.button__text}>Sign In</Text>
            </TouchableOpacity>
            <View style={styles.signupScreen__footerText}>
                <Text style={styles.footerText__gray}>New to Netflix?</Text>
                <Text style={styles.footerText__white}>Sign Up now.</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    signupScreen: {
        backgroundColor: '#111',
        padding: 30,
        width: '75%'
    },
    signupScreen__title: {
        color: '#fff',
        fontSize: 30
    },
    signupScreen__emailInput: {
        width: '100%',
        height: 30,
        marginBottom: 10,
        backgroundColor: '#fff',
        borderRadius: 2.5,
        marginTop: 20,
    },
    signupScreen__passwordInput: {
        width: '100%',
        height: 30,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 2.5,
    },
    signupScreen__button: {
        width: '100%',
        height: 30,
        backgroundColor: '#e50914',
        borderRadius: 5,
        marginBottom: 20,
    },
    button__text: {
        textAlign: 'center',
        paddingVertical: 6,
        color: '#fff',
        fontWeight: '600'
    },
    signupScreen__footerText: {
        display: 'flex',
        flexDirection: 'row'
    },
    footerText__gray: {
        color: '#bbb'
    },
    footerText__white: {
        color: '#fff',
        fontWeight: '600',
        paddingLeft: 5
    }
})

export default SignupScreen;
