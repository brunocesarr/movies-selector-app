import { useNavigation } from "@react-navigation/native";
import { homeStyles } from "@styles/screens";
import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { Appbar, Caption } from "react-native-paper";

import { MovieCard } from "../components/MovieCard";
import { SpinnerLoader } from "../components/SpinnerLoader";
import { Movie } from "../interfaces";
import { getPopularMovies } from "../services/movies.service";

export function HomeScreen() {
  const { goBack } = useNavigation();

  const [popularMovies, setPopularMovies] = useState<Array<Movie>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getMovieGenres = async () => {
      try {
        setLoading(true);
        const response = await getPopularMovies();
        setPopularMovies(response);
      } catch (error) {
        console.error("Request error: ", error);
      } finally {
        setLoading(false);
      }
    };

    getMovieGenres();
  }, []);

  if (loading) return <SpinnerLoader />;
  if (popularMovies.length == 0) return <Caption>Not Found</Caption>;

  return (
    <View style={homeStyles.container}>
      <Appbar.Header style={homeStyles.header}>
        <Appbar.BackAction onPress={goBack} />
        <Appbar.Content title="Home" />
      </Appbar.Header>
      <Text style={homeStyles.title}>Popular Movies</Text>
      <FlatList
        data={popularMovies}
        renderItem={({ item }) => <MovieCard movieInfo={item} />}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}
