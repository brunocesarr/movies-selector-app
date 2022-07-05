import { SpinnerLoader } from '@components/SpinnerLoader';
import React, { useEffect, useState } from 'react';
import { Headline } from 'react-native-paper';

export function MovieDetailScreen() {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const getMovieDetail = () => {
      setLoading(false);
    };

    getMovieDetail();
  }, []);

  if (loading) return <SpinnerLoader />;

  return <Headline>Movie Detail</Headline>;
}
