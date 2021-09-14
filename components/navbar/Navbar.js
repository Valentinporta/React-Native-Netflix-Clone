import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const Navbar = () => {
    return (
        <View>
            <LinearGradient style={styles.header} colors={['#111', 'rgba(37, 37, 37, 0.61)', 'transparent']}>
                <Image style={styles.header__logo} source={require('../../assets/netflix-logo-movil.png')} />
                <Image style={styles.header__avatar} source={require('../../assets/netflix-avatar.png')} />
            </LinearGradient>
        </View>
    )
};

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 80,
        width: width,
        paddingTop: 20,
        paddingHorizontal: 20,
        elevation: 4
    },
    header__logo: {
        height: 35,
        width: 20,
    },
    header__avatar: {
        height: 30,
        width: 30,
    }
})

export default Navbar;
