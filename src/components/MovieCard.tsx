import React from "react";
import { Image, Text, View } from "react-native";
import { Colors, Paragraph } from "react-native-paper";

import { Movie } from "../interfaces";
import movieCardStyles from "../styles/movie-card";

interface IMovieCardProps {
  movieInfo: Movie;
}

export function MovieCard({ movieInfo }: IMovieCardProps) {
  const getColorClassificationRate = (voteAverage: number) => {
    if (voteAverage >= 7.0) return Colors.green500;
    else if (voteAverage > 5.0 && voteAverage < 7.0) return Colors.yellow500;
    else return Colors.red500;
  };

  return (
    <View style={movieCardStyles.movieCard}>
      <View>
        <Text style={movieCardStyles.movieTitle}>{movieInfo.title}</Text>
        <Text style={movieCardStyles.movieSubtitle}>
          {`Date: ${movieInfo.releaseDate} - Language: ${movieInfo.originalLanguage}`}
        </Text>
      </View>
      <Image
        source={{ uri: movieInfo.posterPath }}
        style={movieCardStyles.movieImage}
      />
      <View>
        <Text
          style={{
            ...movieCardStyles.movieVote,
            backgroundColor: getColorClassificationRate(movieInfo.voteAverage),
          }}
        >
          {movieInfo.voteAverage}
        </Text>
        <Paragraph style={movieCardStyles.movieDescription}>
          {movieInfo.overview}
        </Paragraph>
      </View>
    </View>
  );
}

export default MovieCard;
