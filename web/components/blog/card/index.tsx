import type { FC } from 'react';
import type { Card } from '../props';
import moment from 'moment'

const Author = ({ post }: any) => {
  return (<div className="flex flex-row m-4">
      <div className="avatar">
          <div className="w-12 mr-4 mask mask-hexagon bg-primary border border-primary-color">
              <img src={post.authorImageLink} className="mask w-12 mask-hexagon"/>
          </div>
       </div>
       <div className="flex flex-col">
          <div className="text-xl text-primary text-left flex flex-row items-center justify-left">
              { post.author }
          </div>
          <div className="text-lg text-left">
              { moment(post.data.date).format('MMMM Do, YYYY') }
          </div>
       </div>
  </div>)
}

const StoryCard =  (post: any) => {
  return (<a
    href={`/${post.username}/stories/${post.data.slug}`}
    className={`lg:w-72 w-full sm:w-full h-auto border border-primary-color flex flex-col`}>
      <img className="w-full h-2/3 object-cover" src={post.imageLink} />
      <div className="flex h-1/2 flex-col justify-between p-4 bg-primary-background">
        <p className="flex flex-wrap gap-x-2">
          {post.data.tags.map((tag: string) => (
            <span key={tag} className="text-sm font-bold text-primary-color">
              {tag} {''}
            </span>
          ))}
        </p>
        <span className="w-full h-auto xl:text-xl text-md font-medium text-left">{post.data.title}</span>
      </div>
    </a>)
}

export default StoryCard;
