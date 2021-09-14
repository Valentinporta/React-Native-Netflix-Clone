import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import Banner from './components/banner/Banner';
import Navbar from './components/navbar/Navbar';
import Row from './components/row/Row';
import requests from './Requests';

export default function App() {
  return (
    <ScrollView style={styles.app}>
      <Navbar />
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
  );
}

const styles = StyleSheet.create({
  app: {
    height: '100%',
    backgroundColor: '#111'
  }
})
