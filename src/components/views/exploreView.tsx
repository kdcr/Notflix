import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import getPopularMovies from '../../api/getPopularMovies';
import getPopularShows from '../../api/getPopularShows';
import Carrousel from '../molecular/Carrousel/Carrousel';
import TextSwitch from '../atomic/textSwitch/textSwitch';
import MediaFormat from '../../model/enums/MediaFormat';
import { RootState } from '../../redux/store';
import { selectMediaFormat, selectShow } from '../../redux/showsSlice';

const ExploreView = () => {
  const navigate = useNavigate();

  const selectedMedia = useSelector((state: RootState) => state.shows.selectedMediaFormat);
  const dispatch = useDispatch();

  const showsQuery = useQuery('shows', getPopularShows, { staleTime: 5 * 1000 * 60 });
  const moviesQuery = useQuery('movies', getPopularMovies, { staleTime: 5 * 1000 * 60 });

  const handleMediaTypeChange = () =>
    dispatch(
      selectMediaFormat({
        format: selectedMedia === MediaFormat.Movie ? MediaFormat.TVSHow : MediaFormat.Movie,
      }),
    );

  const handleItemClick = (id: number) => {
    dispatch(
      selectShow({
        id,
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
      {(selectedMedia === MediaFormat.TVSHow && showsQuery.isSuccess) ||
      (selectedMedia === MediaFormat.Movie && moviesQuery.isSuccess) ? (
        <Carrousel
          size="large"
          items={selectedMedia === MediaFormat.TVSHow ? showsQuery.data! : moviesQuery.data!}
          className="w-screen h-[80%]"
          onClick={handleItemClick}
        />
      ) : null}
    </div>
  );
};

export default ExploreView;
