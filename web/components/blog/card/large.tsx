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

const StoryBigCard = (post: any) => {
  console.log(post)
  if (!post) return <div/>

  return (<div className="h-auto border border-primary-color lg:mb-0 mb-16">
    <a
      href={`/${post.username}/stories/${post.data.slug}`}
      className="h-full flex flex-col justify-between">
      <div className="w-auto h-4/5 sm:h-2/3 md:h-2/3 lg:h-4/5">
        <img className="w-full h-full object-cover" src={post.imageLink} alt={`${post.data.title} Thumbnail`} />        
      </div>

      <div className="p-4 bg-primary-background-blend">
        <p className="flex flex-wrap gap-x-2">
          {post.data.tags.map((tag: any) => (
            <span key={tag} className="text-sm font-bold text-primary-color">
              {tag}
            </span>
          ))}
        </p>
        <div className="w-full h-auto text-xl md:text-2xl font-medium text-left mb-4">{post.data.title}</div>
        <Author post={post}/>
      </div>
    </a>
  </div>)
}

export default StoryBigCard;
