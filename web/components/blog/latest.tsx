import type { FC, ReactElement } from 'react';
import Card from './card'
import type { LatestProps } from './props';

const LatestStories: FC<LatestProps> = ({
  more = true,
  posts = [],
}: LatestProps): ReactElement => {
  return (
    <section className="flex flex-col justify-center items-center lg:w-11/12 w-4/5 max-w-7xl">
      <h2
        className="text-xl sm:text-2xl md:text-4xl  max-w-3xl pb-12 pt-24  text-center w-full md:px-0">
        {more ? 'More' : 'not more'}
      </h2>
      <div className="max-w-7xl flex flex-col lg:flex-row w-full justify-between gap-6 h-fit">
        {posts.map(post => (
          <Card key={post.slug} {...post} />
        ))}
      </div>
      {more && (
        <a
          className="text-primary-color pt-6 text-lg"
          href={'/stories'}>
          See More
        </a>
      )}
    </section>
  );
};

export default LatestStories;
