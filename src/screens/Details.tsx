import { SpinnerLoader } from '@components/SpinnerLoader';
import { Movie } from '@interfaces/Movie';
import React, { useEffect, useState } from 'react';
import { Caption, Headline } from 'react-native-paper';

export function MovieDetailScreen() {
  const [movieDetail, setMovieDetail] = useState<Movie | null>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getMovieDetail = () => {
      setLoading(false);
    };

    getMovieDetail();
  }, []);

  if (loading) return <SpinnerLoader />;

  if (!movieDetail) return <Caption>Not Found</Caption>;

  return <Headline>Movie Detail</Headline>;
}
