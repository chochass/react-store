import { HiStar } from "react-icons/hi";

const StarRating = (props) => {
  const { rating } = props;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }, (_, i) => {
        const fill = Math.min(1, Math.max(0, rating - i));
        return (
          <span key={i} className="relative h-4 w-4">
            <HiStar className="h-4 w-4 text-gray-200" />
            {fill > 0 && (
              <HiStar
                className="absolute inset-0 h-4 w-4 text-yellow-400"
                style={{ clipPath: `inset(0 ${(1 - fill) * 100}% 0 0)` }}
              />
            )}
          </span>
        );
      })}
      <span className="ml-1 text-xs text-gray-500">{rating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
