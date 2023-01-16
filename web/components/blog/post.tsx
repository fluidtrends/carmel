import Spinner from "~/components/spinner"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import remarkBreaks from 'remark-breaks'
import moment from 'moment'
import ContentLoader, { Instagram } from 'react-content-loader'

const Loader = (props: any) => (
    <ContentLoader 
      speed={5}
      viewBox="0 0 400 800"
      backgroundColor="#CECCD6"
      foregroundColor="#FFFFFF"
      {...props}
      className="w-full"
    >
      <circle cx="40" cy="31" r="15" /> 
      <rect x="60" y="20" rx="2" ry="2" width="140" height="10" /> 
      <rect x="60" y="35" rx="2" ry="2" width="140" height="10" /> 
      <rect x="25" y="50" rx="2" ry="2" width="700" height="14" /> 
      <rect x="25" y="70" rx="2" ry="2" width="700" height="100" /> 
      <rect x="25" y="178" rx="2" ry="2" width="700" height="300" /> 
    </ContentLoader>
)

const Tags = ({ post }: any) => {
    return (<div className="flex flex-wrap border-t pt-10 border-primary-color justify-start items-center">
    { post.data.tags.map((tag: string) => (
        <span key={tag} className="font-epilogue-bold border border-white p-2 m-2 text-primary-color">
            {tag}
        </span>
    ))}
    </div>)
}

const Author = ({ post }: any) => {
    return (<div className="flex flex-row">
        <div className="avatar">
            <div className="w-12 mr-4 mask mask-hexagon bg-primary border border-primary-color">
                <img src={post.data.authorImageLink} className="mask w-12 mask-hexagon"/>
            </div>
         </div>
         <div className="flex flex-col">
            <div className="text-xl text-primary text-left flex flex-row items-center justify-left">
                { post.data.author }
            </div>
            <div className="text-lg text-left">
                { moment(post.data.date).format('MMMM Do, YYYY') }
            </div>
         </div>
    </div>)
}

const Content = ({ post }: any) => {
    if (!post || post.error || !post.data) {
        return <Loader/>
    }
    
    return <div className="flex flex-col gap-8 justify-center lg:w-3/4 w-full border border-primary p-10 bg-black bg-opacity-50">
            <Author post={post}/>
            <h1 className="text-3xl text-left">{ post.data.title }</h1>            
            
            <img className="w-full min-h-100 border border-primary-color object-cover" src={post.data.coverLink} />

            <div className="content break-words text-left">
                <ReactMarkdown children={post.data.content} remarkPlugins={[remarkBreaks]} />
            </div>
            <Tags post={post}/>
    </div>
}

export default ({ post }: any) => (
    <div className="h-full w-full overflow-x-hidden flex flex-col items-center relative mb-24 bg-home-top-gradient bg-no-repeat bg-top bg-fill pt-10">
        <div className="flex flex-col lg:flex-row w-11/12 sm:w-4/5 max-w-7xl gap-8">
            <Content post={post}/>            
            <div className="lg:w-1/4 w-full flex flex-col items-start gap-8">
            <h4>  </h4>
            <div className="h-px bg-dark-purple w-full" />
            </div>
        </div>
    </div>)