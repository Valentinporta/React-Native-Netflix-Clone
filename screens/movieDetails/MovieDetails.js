import { useNavigation } from '@react-navigation/core';
import React, { useLayoutEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import { FontAwesome, MaterialCommunityIcons, AntDesign, Entypo, Ionicons } from '@expo/vector-icons';

function MovieDetails(props) {
    const navigation = useNavigation();
    const movieData = props.route.params;
    const base_url = "https://image.tmdb.org/t/p/original/";

    const director = Array.isArray(movieData?.creator) ? movieData?.creator?.map((c, i) => (i !== movieData?.creator?.length - 1) ? `${c.name}, ` : `${c.name}`) : movieData?.creator;
    const cast = movieData?.cast?.map((actor, i) => (i !== movieData?.cast?.length - 1) ? `${actor.name}, ` : `${actor.name}`);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: '',
            headerStyle: {
                backgroundColor: '#111'
            },
            headerRight: () => (
                <TouchableOpacity>
                    <Image style={styles.header__avatar} source={require('../../assets/netflix-avatar.png')} />
                </TouchableOpacity>
            ),
            headerTintColor: '#fff',
            headerBackTitle: ''
        })
    }, [navigation]);

    return (
        <View style={styles.container}>
            <View>
            {movieData?.video ? (
                <YoutubePlayer
                    height={250}
                    play={true}
                    videoId={movieData?.video}
                    initialPlayerParams={{
                        modestbranding: 1,
                        iv_load_policy: 3,
                    }}
                />
            ) : <Image style={{height: 250, width: '100%'}} source={{uri: `https://image.tmdb.org/t/p/original/${movieData?.image}`}} />}
            
            </View>
            <ScrollView style={styles.scrollContainer}>
                    <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 20}}>{movieData?.title}</Text>
                    <TouchableOpacity style={[styles.button, {backgroundColor: '#fff'}]}>
                        <FontAwesome style={{textAlign: 'center', paddingTop: 2.5}} name="play" size={18} color="black" /><Text style={{color: 'black', fontSize: 20, paddingLeft: 10}}>Play</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.button, {backgroundColor: 'gray'}]}>
                        <MaterialCommunityIcons style={{textAlign: 'center', paddingTop: 2.5}} name="download" size={20} color="white" /><Text style={{color: 'white', fontSize: 20, paddingLeft: 10, textAlign: 'center'}}>Download</Text>
                    </TouchableOpacity>

                    <Text style={{color: '#fff', paddingTop: 15}}>{movieData?.overview}</Text>

                    <Text style={{color: '#fff', paddingTop: 10, fontSize: 12, color: 'gray'}}>
                        Cast: {cast}
                    </Text>

                    <Text style={{color: '#fff', paddingTop: 2, fontSize: 12, color: 'gray'}}>
                        Director: {director}
                    </Text>

                    <View style={{display: 'flex', flexDirection: 'row', marginTop: 15, width: 275, justifyContent: 'space-around'}}>
                        <TouchableOpacity>
                            <Entypo style={{textAlign: 'center', paddingBottom: 7.5}} name="plus" size={30} color="white" />
                            <Text style={{color: '#fff'}}>My List</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <AntDesign style={{textAlign: 'center', paddingBottom: 7.5}} name="like2" size={30} color="white" />
                                <Text style={{color: '#fff'}}>Rate</Text>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <Ionicons style={{textAlign: 'center', paddingBottom: 7.5}} name="paper-plane-outline" size={30} color="white" />
                            <Text style={{color: '#fff'}}>Share</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{marginTop: 15, display: 'flex', flexDirection: 'row'}}>
                        <TouchableOpacity style={{borderTopWidth: 4, borderTopColor: 'red'}}>
                            <Text style={{color: '#fff', paddingTop: 10}}>More like this</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={{borderTopWidth: 4, borderTopColor: '#111'}}>
                            <Text style={{color: '#fff', paddingLeft: 20, paddingTop: 10}}>Trailers & more</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginVertical: 10}}>
                        {movieData.similarMovies?.map(item => (
                            <Image
                                key={item?.id}
                                style={{height: 200, width: 120, marginRight: 10, marginBottom: 10}}
                                source={{uri: `${base_url}${item?.poster_path}`}}
                            />
                        ))}
                    </View>
            </ScrollView>
                        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#111',
    },
      header__avatar: {
        height: 30,
        width: 30,
    },
    scrollContainer: {
        paddingHorizontal: 10
    },
    button: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 5,
        paddingVertical: 5,
    }
})

export default MovieDetails;
