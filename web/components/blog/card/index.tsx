import type { FC } from 'react';
import type { Card } from '../props';

const StoryCard: FC<Card> = ({
  title,
  images,
  tags,
  cities,
  author,
  slug,
  additionalClassNames = '',
}: Card) => (
  <a
    href={`/stories/${cities[0]}/${author}/${slug}`}
    className={`lg:w-72 w-full sm:w-full lg:h-96 border border-primary-color flex flex-col ${additionalClassNames}`}>
    <img className="w-full h-2/3 object-cover" src={images.thumbnail_url} alt={`${title} Thumbnail`} />
    <div className="flex h-1/2 flex-col justify-between p-4 bg-primary-background">
      <p className="flex flex-wrap gap-x-2">
        {tags.map(tag => (
          <span key={tag} className="text-sm font-bold text-primary-color">
            {tag} {''}
          </span>
        ))}
      </p>
      <span className="w-full h-auto xl:text-xl text-md font-medium">{title}</span>

      <div className="flex flex-row w-full text-sm font-light">
        <div className="h-6 flex lowercase items-center bg-primary-background border-primary-color text-xs font-bold px-2">
          by
          <p className="text-primary-color px-1">@{author}</p>
          in
          <p className="text-primary-color pl-1">#{cities[0]}</p>
        </div>
      </div>
    </div>
  </a>
);

export default StoryCard;
