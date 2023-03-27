import StarIcon from '../../../assets/star.svg';
import StarYellowIcon from '../../../assets/star-yellow.svg';

interface propsType {
  value: number;
  stars?: number;
  className?: string;
}

const VoteAverage = ({ value, stars = 5, className }: propsType) => (
  <div className={`flex flex-row h-[96px] ${className}`}>
    <div className="relative" style={{ width: `${stars * 96}px` }}>
      <div className="absolute inset-0 z-0 flex flex-row">
        {Array.from(Array(stars).keys()).map((star) => (
          <div className="w-24 h-24" key={`vote-${star}-${new Date().getTime()}`}>
            <img src={StarIcon} alt="star" />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 z-10 h-24 overflow-hidden" style={{ width: `${value}%` }}>
        <div style={{ width: `${96 * stars}px` }} className="flex flex-row h-24">
          {Array.from(Array(stars).keys()).map((star: number) => (
            <div className="w-24 h-24" key={`vote-${star}-${new Date().getTime()}`}>
              <img src={StarYellowIcon} alt="star" />
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

VoteAverage.defaultProps = {
  stars: 5,
  className: '',
};

export default VoteAverage;
