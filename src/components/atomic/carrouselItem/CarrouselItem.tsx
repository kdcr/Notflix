import MovieDTO from '../../../model/MovieDTO';
import ShowDTO from '../../../model/ShowDTO';
import VoteAverage from '../voteAverage/voteAverage';

interface carrouselItemsProps {
  item: MovieDTO & ShowDTO;
  className?: string;
}

const CarrouselItem = ({ item, className }: carrouselItemsProps) => (
  <div className={`h-[680px] flex flex-col items-center justify-between ${className}`}>
    <img
      className="h-[70%]"
      src={`${import.meta.env.VITE_IMAGE_BASE_URL}${item.imageUrl}`}
      alt={item.title || item.name}
    />
    <span className="text-[32px] text-center min-h-[100px]">{item.title || item.name}</span>
    <VoteAverage value={item.voteAverage * 10} />
  </div>
);

CarrouselItem.defaultProps = {
  className: '',
};

export default CarrouselItem;
