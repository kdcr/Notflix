import StarIcon from '../../../assets/star.svg';
import StarYellowIcon from '../../../assets/star-yellow.svg';

interface propsType {
  value: number;
  stars: number;
}

const VoteAverage = ({ value, stars = 5 }: propsType) => (
  <div className="flex flex-row">
    <div className="relative" style={{ width: `${stars * 96}px` }}>
      <div className="absolute inset-0 z-0 flex flex-row">
        {Array(stars)
          .fill(0)
          .map(() => (
            <div className="w-24 h-24">
              <img src={StarIcon} alt="star" />
            </div>
          ))}
      </div>
      <div className="absolute inset-0 z-10 h-24 overflow-hidden" style={{ width: `${value}%` }}>
        <div style={{ width: `${96 * stars}px` }} className="flex flex-row h-24">
          {Array(stars)
            .fill(0)
            .map(() => (
              <div className="w-24 h-24">
                <img src={StarYellowIcon} alt="star" />
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
);

export default VoteAverage;
