import ShowDTO from '../../../model/ShowDTO';
import MovieDTO from '../../../model/MovieDTO';
import { getImageUrl } from '../../../api/apiUtils';

interface showPosterProps {
  item: MovieDTO & ShowDTO;
  className?: string;
  onMouseUp?: () => void;
}

const ShowPoster = ({ item, className, onMouseUp }: showPosterProps) => (
  <button
    // eslint-disable-next-line max-len
    className={`flex flex-col items-center justify-start cursor-pointer overflow-hidden ${className}`}
    onMouseUp={onMouseUp}
    type="button"
  >
    <img
      width="80"
      src={getImageUrl(item.imageUrl)}
      alt={item.name || item.title}
      draggable="false"
    />
    <span className="text-center">{item.name || item.title}</span>
  </button>
);

ShowPoster.defaultProps = {
  className: '',
  onMouseUp: () => null,
};

export default ShowPoster;
