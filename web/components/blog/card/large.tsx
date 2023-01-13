import type { FC } from 'react';
import type { Card } from '../props';

const StoryBigCard: FC<Card> = ({
  images,
  tags,
  title,
  cities,
  author,
  slug,
}: Card) => (
  <div className="lg:h-784 h-auto border border-primary-color lg:mb-0 mb-16">
    <a
      href={`/stories/${cities[0]}/${author}/${slug}`}
      className="h-full flex flex-col justify-between">
      <div className="w-auto h-4/5 sm:h-2/3 md:h-2/3 lg:h-4/5">
        <img className="w-full h-full object-cover" src={images.cover_url} alt={`${title} Thumbnail`} />
      </div>

      <div className="p-4 bg-primary-background-blend h-1/5 sm:h-1/3 md:h-1/3 lg:h-1/5">
        <p className="flex flex-wrap gap-x-2">
          {tags.map((tag: any) => (
            <span key={tag} className="text-sm font-bold text-primary-color">
              {tag}
            </span>
          ))}
        </p>

        <div className="w-full h-auto text-xl md:text-2xl  font-medium">{title}</div>

        <div className="h-6 w-fit flex lowercase items-center bg-primary-background border-primary-color text-xs font-bold px-2">
          by <p className="text-primary-color px-1">@{author}</p> in <p className="text-primary-color">#{cities[0]}</p>
        </div>
      </div>
    </a>
  </div>
);

export default StoryBigCard;
