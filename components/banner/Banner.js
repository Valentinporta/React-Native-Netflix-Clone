import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome, Feather } from '@expo/vector-icons';
import axios from 'axios';
import requests from '../../Requests';

const Banner = () => {
    const [movie, setMovie] = useState([])

    const truncate = (string, n) => {
        return string?.length > n ? string.substring(0, n - 1) + '...' : string;
    }

    useEffect(() => {
        const fetchData = async() => {
            const request = await axios.get(`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`)
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length - 1)
            ]);
            return request;
        }
        fetchData()
    }, [])

    return (
        <View style={{minHeight: 525}}>
            <ImageBackground style={styles.banner__image} source={{uri:`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}} >
                <View style={styles.banner}>
                    <Text style={styles.banner__title}>{movie?.title || movie?.name || movie?.original_name}</Text>
                    <Text style={styles.banner__description}>{truncate(movie?.overview, 80)}</Text>
                    <View style={styles.banner__buttons}>
                        <TouchableOpacity>
                            <Entypo style={{textAlign: 'center'}} name="plus" size={30} color="white" />
                            <Text style={{color: '#fff'}}>My List</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.playButton}>
                            <FontAwesome style={{paddingVertical: 5}} name="play" size={20} color="black" /><Text style={{color: 'black', fontSize: 20, paddingLeft: 5}}>Play</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Feather style={{textAlign: 'center'}} name="info" size={30} color="white" />
                            <Text style={{color: '#fff'}}>More Info</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </View>
    )
};

const width = Dimensions.get('screen').width

const styles = StyleSheet.create({
    banner: {
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: '100%'
    },
    banner__image: {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover'
    },
    banner__title: {
        fontSize: 60,
        color: '#fff',
        paddingBottom: 15
    },
    banner__description: {
        fontSize: 15,
        color: '#fff',
        paddingBottom: 15,
        maxWidth: '80%',
        textShadowColor: 'black',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    },
    banner__buttons: {
        display: 'flex',
        flexDirection: 'row',
        width: width,
        justifyContent: 'space-around',
        alignItems: 'center',
        paddingBottom: 10,
        textShadowColor: 'black',
        textShadowOffset: {width: -1, height: 1},
        textShadowRadius: 10,
    },
    playButton: {
        backgroundColor: '#fff',
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row'
    },
})

export default Banner;
