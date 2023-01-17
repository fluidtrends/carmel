import RelatedPost from '~/components/blog/related'
import type { PostsProps } from './props'

export default ({ posts }: PostsProps) => (
  <div className="flex flex-col flex-grow w-full lg:w-auto">
    <h3 className="font-epilogue-bold text-5xl"></h3>
    <div className="flex flex-col justify-between h-full w-full items-start lg:gap-0 gap-6">
      { posts.slice(3, 7).map((post: any, i) => (
        <RelatedPost
          key={post.slug}
          {...post}
          additionalClassNames="sm:h-unset"
        />
      ))}
    </div>
  </div>
)