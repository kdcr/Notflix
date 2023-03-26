import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import getPopularMovies from '../../api/getPopularMovies';
import getPopularShows from '../../api/getPopularShows';
import ShowDTO from '../../model/ShowDTO';
import MovieDTO from '../../model/MovieDTO';
import Carrousel from '../molecular/Carrousel/Carrousel';
import { mapMovies, mapShows } from '../../api/apiUtils';
import TextSwitch from '../atomic/textSwitch/textSwitch';
import MediaFormat from '../../model/enums/MediaFormat';
import { RootState } from '../../redux/store';
import { selectMediaFormat, selectShow } from '../../redux/showsSlice';

const ExploreView = () => {
  const navigate = useNavigate();

  const selectedMedia = useSelector((state: RootState) => state.shows.selectedMediaFormat);
  const dispatch = useDispatch();

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

  const handleMediaTypeChange = () =>
    dispatch(
      selectMediaFormat({
        format: selectedMedia === MediaFormat.Movie ? MediaFormat.TVSHow : MediaFormat.Movie,
      }),
    );

  const handleItemClick = (index: number) => {
    dispatch(
      selectShow({
        id: selectedMedia === MediaFormat.Movie ? topMovies[index].id : topShows[index].id,
      }),
    );
    navigate('/detail');
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full overflow-hidden">
      <div className="h-[10%] flex items-center">
        <TextSwitch
          leftValue="Movies"
          rightValue="TV Shows"
          active={selectedMedia === MediaFormat.TVSHow}
          onChange={handleMediaTypeChange}
        />
      </div>
      <Carrousel
        items={selectedMedia === MediaFormat.TVSHow ? topShows : topMovies}
        className="w-screen h-[80%]"
        onClick={handleItemClick}
      />
    </div>
  );
};

export default ExploreView;
