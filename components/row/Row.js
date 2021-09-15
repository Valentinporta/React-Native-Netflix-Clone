import { useNavigation } from '@react-navigation/core';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original/"
    const navigation = useNavigation()

    useEffect(() => {
        const fetchData = async () => {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData()
    }, [fetchUrl])

    return (
        <View style={{backgroundColor: '#111'}}>
            <Text style={{color: '#fff', marginVertical: 20, marginLeft: 10, fontSize: 20, fontWeight: 'bold'}}>{title}</Text>
            <FlatList
                data={movies}
                horizontal={true}
                keyExtractor={item => item.poster_path || item.backdrop_path}
                renderItem={({ item }) => (
                    ((isLargeRow && item.poster_path) || (!isLargeRow && item.backdrop_path)) && (
                        <TouchableOpacity onPress={() => navigation.navigate("MovieDetails")}>
                            <Image style={isLargeRow ? styles.poster : styles.image} source={{uri: `${base_url}${isLargeRow ? item.poster_path : item.backdrop_path}`}} alt={item.name} />
                        </TouchableOpacity>
                    )
                )}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        height: 100,
        width: 100,
        marginHorizontal: 5
    },
    poster: {
        height: 250,
        width: 150,
        marginHorizontal: 5
    }
})

export default Row;