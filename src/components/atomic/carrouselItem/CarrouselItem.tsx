import MovieDTO from '../../../model/MovieDTO';
import ShowDTO from '../../../model/ShowDTO';
import VoteAverage from '../voteAverage/voteAverage';

interface carrouselItemsProps {
  item: MovieDTO & ShowDTO;
  className?: string;
  onClick?: () => void;
}

const CarrouselItem = ({ item, className, onClick }: carrouselItemsProps) => (
  <button
    className={`h-[680px] flex flex-col items-center justify-between ${className}`}
    onClick={onClick}
    type="button"
  >
    <img
      className="h-[70%]"
      src={`${import.meta.env.VITE_IMAGE_BASE_URL}${item.imageUrl}`}
      alt={item.title || item.name}
      draggable="false"
    />
    <span className="text-[32px] text-center min-h-[10%]">{item.title || item.name}</span>
    <VoteAverage value={item.voteAverage * 10} />
  </button>
);

CarrouselItem.defaultProps = {
  className: '',
  onClick: () => null,
};

export default CarrouselItem;
