import { useEffect, useState } from 'react';
import getPopularMovies from '../../api/getPopularMovies';
import getPopularShows from '../../api/getPopularShows';
import ShowDTO from '../../model/ShowDTO';
import MovieDTO from '../../model/MovieDTO';
import Carrousel from '../molecular/Carrousel/Carrousel';
import { mapMovies, mapShows } from '../../api/apiUtils';

const ExploreView = () => {
  const [topShows, setTopShows] = useState<ShowDTO[]>([]);
  const [topMovies, setTopMovies] = useState<MovieDTO[]>([]);

  useEffect(() => {
    getPopularShows().then((request) => {
      if (request?.status === 200) {
        setTopShows(mapShows(request.data.results));
      }
    });

    getPopularMovies().then((request) => {
      if (request?.status === 200) {
        setTopMovies(mapMovies(request.data.results));
      }
    });
  }, []);

  useEffect(() => {
    console.log(topMovies);
  }, [topMovies]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden">
      <div className="h-[10%]">
        <span>Explore</span>
        <a href="/detail">Go to detail</a>
      </div>
      <Carrousel items={topMovies} className="w-screen h-[90%]" />
    </div>
  );
};

export default ExploreView;
