import React, { useEffect, useState } from 'react';
import { Dimensions, ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Entypo, FontAwesome, Feather } from '@expo/vector-icons';
import instance from '../../axios';
import axios from 'axios';
import requests from '../../Requests';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/core';
import { API_KEY } from '@env';

const Banner = () => {
    const [movie, setMovie] = useState({
        title: '',
        image: '',
        poster: '',
        cast: [],
        creator: '',
        video: '',
        similarMovies: [],
        overview: '',
    })
    const base_url = "https://image.tmdb.org/t/p/original/"
    const navigation = useNavigation()

    const truncate = (string, n) => {
        return string?.length > n ? string?.substring(0, n - 1) + '...' : string;
    }

    useEffect(() => {
        const fetchData = async() => {
            
            try{
                const fetchAll = await instance.get(requests.fetchNetflixOriginals)
                const random = fetchAll.data.results[Math.floor(Math.random() * fetchAll.data.results.length - 1)]
                let fetchTv = await axios.get(`https://api.themoviedb.org/3/tv/${random.id}?api_key=${API_KEY}&append_to_response=similar,credits,videos`)
                let fetchMovie = await axios.get(`https://api.themoviedb.org/3/movie/${random.id}?api_key=${API_KEY}&append_to_response=similar,credits,videos`)
                let fetchResult = fetchTv.data.name === random.name ? fetchTv : fetchMovie
                let similarMovies = fetchResult?.data?.similar?.results
                similarMovies?.sort((a, b) => a.popularity - b.popularity)
                similarMovies.length = 6
    
                let cast = fetchResult?.data?.credits?.cast
                cast.sort((a, b) => a.popularity - b.popularity)
                cast.length = 5
    
                let creator = fetchResult?.data?.credits?.crew?.find(person => person.job === "Executive Producer").name || fetchResult?.data?.created_by || fetchResult?.data?.credits?.crew?.find(person => person.job === "Director").name
    
                setMovie({
                    title: fetchResult?.data?.name || fetchResult?.data?.title || fetchResult?.data?.original_name,
                    image: fetchResult?.data?.backdrop_path,
                    poster: fetchResult?.data?.poster_path,
                    cast: cast,
                    creator: creator,
                    video: fetchResult ? (fetchResult?.videos?.results[0].key || fetchResult?.data?.videos?.results[0].key || '') : '',
                    similarMovies: similarMovies,
                    overview: fetchResult?.data?.overview
                })
                return fetchResult;
            } catch (err) {
                fetchData()
            }
        }
        fetchData()
    }, [])

    return (
        <View style={{minHeight: 650}}>
            <ImageBackground style={styles.banner__image} source={{uri:`${base_url}${movie?.poster || movie?.image}`}} >
                <LinearGradient locations={[0, 0.8, 1]} colors={['transparent', 'rgba(37, 37, 37, 0.61)', '#111']}>
                    <View style={styles.banner}>
                        <View style={styles.banner__buttons}>
                            <TouchableOpacity>
                                <Entypo style={{textAlign: 'center'}} name="plus" size={30} color="white" />
                                <Text style={{color: '#fff'}}>My List</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.playButton}>
                                <FontAwesome style={{paddingVertical: 5}} name="play" size={20} color="black" /><Text style={{color: 'black', fontSize: 20, paddingLeft: 5}}>Play</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate("MovieDetails", movie)}>
                                <Feather style={{textAlign: 'center'}} name="info" size={30} color="white" />
                                <Text style={{color: '#fff'}}>More Info</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </LinearGradient>
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
