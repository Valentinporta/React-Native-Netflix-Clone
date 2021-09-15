import React from 'react';
import { ScrollView, Animated, View } from 'react-native';
import Banner from '../../components/banner/Banner';
import Navbar from '../../components/navbar/Navbar';
import Row from '../../components/row/Row';
import requests from '../../Requests';

const HomeScreen = () => {
    const scrollY = new Animated.Value(0);
    const diffClamp = Animated.diffClamp(scrollY,0,80);
    const translateY = diffClamp.interpolate({
        inputRange: [0, 80],
        outputRange: [0, -80]
    });
    return (
        <View>
            <Animated.View style={{transform: [{translateY: translateY}], elevation: 4, zIndex: 2}}>
                <Navbar />
            </Animated.View>
            <ScrollView onScroll={(e) => scrollY.setValue(e.nativeEvent.contentOffset.y)} scrollEventThrottle={1}>
                <Banner />
                <Row title="NETFLIX ORIGINALS" fetchUrl={`https://api.themoviedb.org/3${requests.fetchNetflixOriginals}`} isLargeRow />
                <Row title="Trending Now" fetchUrl={`https://api.themoviedb.org/3${requests.fetchTrending}`} />
                <Row title="Top Rated" fetchUrl={`https://api.themoviedb.org/3${requests.fetchTopRated}`} />
                <Row title="Action Movies" fetchUrl={`https://api.themoviedb.org/3${requests.fetchActionMovies}`} />
                <Row title="Comedy Movies" fetchUrl={`https://api.themoviedb.org/3${requests.fetchComedyMovies}`} />
                <Row title="Horror Movies" fetchUrl={`https://api.themoviedb.org/3${requests.fetchHorrorMovies}`} />
                <Row title="Romance Movies" fetchUrl={`https://api.themoviedb.org/3${requests.fetchRomanceMovies}`} />
                <Row title="Documentaries" fetchUrl={`https://api.themoviedb.org/3${requests.fetchDocumentaries}`} />
            </ScrollView>
        </View>
    );
};

export default HomeScreen;
