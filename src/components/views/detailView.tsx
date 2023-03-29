import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { RootState } from '../../redux/store';
import getDetail from '../../api/getDetail';
import MediaFormat from '../../model/enums/MediaFormat';
import { getImageUrl } from '../../api/apiUtils';
import VoteAverage from '../atomic/voteAverage/voteAverage';
import Carrousel from '../molecular/Carrousel/Carrousel';
import getSimilars from '../../api/getSimilars';
import { selectShow } from '../../redux/showsSlice';
import Button from '../atomic/button/Button';
import chevronLeftIcon from '../../assets/chevron-left.svg';
import Pill from '../atomic/pill/Pill';

const DetailView = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const selectedShow = useSelector<RootState, number>((state) => state.shows.selected);
  const selectedMediaFormat = useSelector<RootState, MediaFormat>(
    (state) => state.shows.selectedMediaFormat,
  );

  const detailQuery = useQuery(
    ['detail', selectedShow],
    () => getDetail(selectedShow, selectedMediaFormat),
    { staleTime: 5 * 1000 * 60 },
  );

  const similarsQuery = useQuery(
    ['similars', selectedShow],
    () => getSimilars(selectedShow, selectedMediaFormat),
    { staleTime: 5 * 1000 * 60 },
  );

  useEffect(() => {
    if (!selectedShow) navigate('/');
  }, [selectedShow]);

  const handleItemClick = (id: number) => {
    dispatch(
      selectShow({
        id,
      }),
    );
    navigate('/detail');
  };

  return (
    <div className="flex flex-col w-full h-full py-2 px-4">
      <div className="h-[50px] flex flex-col items-end justify-center">
        <Button onClick={() => navigate('../')}>
          <div className="flex flex-row items-center justify-start gap-2">
            <img src={chevronLeftIcon} alt="right" className="h-[20px]" />
            <span>Back to explore</span>
          </div>
        </Button>
      </div>
      {detailQuery.isSuccess && (
        <div className="h-full lg:h-[70%] flex flex-col lg:text-left text-center lg:overflow-hidden lg:grid lg:grid-cols-2 lg:grid-rows-4 w-full items-start justify-center p-2">
          <div className="h-[300px] lg:h-full col-start-1 row-span-4 flex justify-center">
            <img
              className="h-[300px] lg:h-full"
              src={getImageUrl(detailQuery.data.imageUrl)}
              alt={detailQuery.data.name || detailQuery.data.title || 'poster'}
            />
          </div>
          <span className="col-start-2 row-start-1 text-5xl">
            {detailQuery.data.title || detailQuery.data.name}
          </span>
          <span className="col-start-2 row-start-2">{detailQuery.data.overview}</span>
          <div className="col-start-2 row-start-3 flex flex-row gap-2 flex-wrap">
            {detailQuery.data.genres.map((genre) => (
              <Pill>
                <span>{genre.name}</span>
              </Pill>
            ))}
          </div>
          <div className="col-start-2 row-start-4">
            <VoteAverage value={detailQuery.data.voteAverage * 10} />
          </div>
        </div>
      )}
      {similarsQuery.isSuccess && (
        <Carrousel
          className="w-full h-[50%] lg:h-[25%]"
          size="small"
          items={similarsQuery.data}
          onClick={handleItemClick}
        />
      )}
    </div>
  );
};

export default DetailView;
