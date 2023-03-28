import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { RootState } from '../../redux/store';
import getDetail from '../../api/getDetail';
import MediaFormat from '../../model/enums/MediaFormat';
import { getImageUrl } from '../../api/apiUtils';
import VoteAverage from '../atomic/voteAverage/voteAverage';

const DetailView = () => {
  const navigate = useNavigate();

  const selectedShow = useSelector<RootState, number>((state) => state.shows.selected);
  const selectedMediaFormat = useSelector<RootState, MediaFormat>(
    (state) => state.shows.selectedMediaFormat,
  );

  const detailQuery = useQuery(
    ['detail', selectedShow],
    () => getDetail(selectedShow, selectedMediaFormat),
    { staleTime: 5 * 1000 * 60 },
  );

  useEffect(() => {
    if (!selectedShow) navigate('/');
  });

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="h-[5%]">
        <button onClick={() => navigate('../')} type="button">
          <span>Back to explore</span>
        </button>
      </div>
      {detailQuery.isSuccess && (
        <div className="h-[70%] flex flex-col lg:text-left text-center lg:overflow-hidden overflow-y-scroll lg:grid grid-cols-2 grid-rows-4 w-full items-center justify-center p-2">
          <img
            className="h-full col-start-1 row-span-4"
            src={getImageUrl(detailQuery.data.imageUrl)}
            alt="poster"
          />
          <span className="col-start-2 text-5xl">
            {detailQuery.data.title || detailQuery.data.name}
          </span>
          <span className="col-start-2 row-start-2">{detailQuery.data.overview}</span>
          <div>Genres</div>
          <VoteAverage value={detailQuery.data.voteAverage} />
        </div>
      )}
      <div className="h-[15%]">Related</div>
    </div>
  );
};

export default DetailView;
