import React, { useEffect, useState } from "react";
import { Caption, Headline } from "react-native-paper";

import { SpinnerLoader } from "../components/SpinnerLoader";
import { Movie } from "../interfaces";

export function MovieDetailScreen() {
  const [movieDetail, setMovieDetail] = useState<Movie>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const getMovieDetail = async () => {
      try {
        console.log("Request Executing...");
      } catch (error) {
        console.error("Request error: ", error);
      } finally {
        setLoading(false);
      }
    };

    getMovieDetail();
  }, []);

  if (loading) return <SpinnerLoader />;

  if (!movieDetail) return <Caption>Not Found</Caption>;

  return (
    <>
      <Headline>Movie Detail</Headline>
    </>
  );
}
