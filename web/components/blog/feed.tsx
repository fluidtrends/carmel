import { ReactElement, useEffect } from 'react';
import LargeCard from '~/components/blog/card/large';
import Card from '~/components/blog/card';
import type { PostsProps } from './props';
import Trending from '~/components/blog/trending';
import Spinner from '~/components/spinner'

export default ({ carmel }: any): ReactElement => {

  const posts: any = []

  if (!posts || posts.length === 0) {
    return <Spinner/>
  }

  return (<div className="flex flex-col lg:flex-row justify-center gap-4 lg:w-11/12 w-4/5 max-w-7xl">
    <div className="flex flex-col gap-4 w-full lg:w-auto md:w-full sm:w-full">
      {posts.slice(1, 3).map((post: any) => (
        <Card key={post.slug} {...post} />
      ))}
    </div>

    <LargeCard
      key={posts[0].slug}
      {...posts[0]}
    />

    <Trending posts={posts} />
  </div>)
}