// export default () => (
//   <div className="card w-96 bg-base-100 mt-10">
//      <figure><img src="/images/bg-2.png" /></figure>
//      <div className="mt-10 w-full lg:p-12 p-6 flex flex-col items-start border-2 h-80 border-primary-color gap-4 bg-primary-gradient bg-no-repeat bg-top bg-fill">
//         <div className="flex flex-col gap-6 ">
//             <div
//               className="leading-7 tracking-normal whitespace-no-wrap font-bold text-2xl">
//               dddd
//             </div>
//             <div className="flex items-center gap-2"> 
//               <span className="p-1 text-primary-color">
//                 @dddd
//               </span>
//             </div>
//             <p className="self-stretch leading-6 tracking-normal text-base">
//               ddd          
//             </p>
//           </div>
//       </div>
//   </div>
// )

import { Octokit, App } from "octokit"

const Tag = ({ msg, i }: { msg: string, i: number }) => (
  <div className="badge badge-outline p-4"> { msg } </div>
)

const Tags = ({ tags }: { tags: string[] }) => tags.map((msg: string, i: number) => <Tag i={i} msg={msg} />)

export default () => (
  <div className="card w-96 bg-base-100 shadow-xl">
    <figure className=" border border-primary-color"><img src="/images/bg-1.png" /></figure>
    <div className="card-body border-primary-color gap-4 bg-primary-gradient bg-no-repeat bg-top bg-fill  border border-primary-color">
    <p className="card-title text-3xl">Title</p>
    <p className="text-xl text-left">Subtitle</p>
    <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions">
        <button className="btn btn-primary">Buy Now</button>
      </div>
      <div className="card-actions justify-end">
          
      </div>
    </div>
  </div>
)