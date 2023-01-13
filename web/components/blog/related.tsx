import type { FC } from 'react';
import type { Card } from './props';

const RelatedBlog: FC<Card> = ({
  title,
  cities,
  author,
  slug,
  tags,
  additionalClassNames = '',
}: Card) => (
  <div
    className={`flex flex-col items-start w-full h-max space-y-4 border-b border-gray-700 pb-3 ${additionalClassNames}`}>
    <a href={`/stories/${cities[0]}/${author}/${slug}`}>
      <div className="flex flex-col items-start gap-2">
        <div className="flex flex-col items-start self-stretch gap-2">
          <p className="flex flex-wrap gap-x-2">
            {tags.map(tag => (
              <span
                key={tag}
                className="self-stretch text-sm text-primary-color leading-6 font-bold tracking-normal whitespace-no-wrap">
                {tag}{' '}
              </span>
            ))}
          </p>
          <p className="self-stretch leading-6 text-20 font-medium tracking-wide">{title}</p>
          <div className="h-6 flex lowercase items-center bg-primary-background border-primary-color text-xs font-bold px-2">
            by
            <p className="text-primary-color pl-1 pr-1">@{author}</p>
            in
            <p className="text-primary-color pl-1">#{cities[0]} &nbsp;</p>
          </div>
        </div>
      </div>
    </a>
  </div>
);

export default RelatedBlog;
