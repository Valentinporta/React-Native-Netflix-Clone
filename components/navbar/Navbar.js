import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

const Navbar = () => {
    return (
        <View style={styles.header}>
            <Image style={styles.header__logo} source={require('../../assets/netflix-logo-movil.png')} />
            <Image style={styles.header__avatar} source={require('../../assets/netflix-avatar.png')} />
        </View>
    )
};

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 80,
        backgroundColor: '#111',
        width: width,
        paddingTop: 20,
        paddingHorizontal: 20
    },
    header__logo: {
        height: 50,
        width: 40,
    },
    header__avatar: {
        height: 50,
        width: 50,
    }
})

export default Navbar;
