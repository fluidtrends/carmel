import { UserCircleIcon } from '@heroicons/react/24/solid'

export default ({ username }: any) => (
  <div className="pt-24 flex flex-col">
    <div className="flex flex-col  w-full justify-center items-center">   
        <UserCircleIcon width={96} height={96}/>
        <div className="flex-1 lg:text-5xl text-3xl">{ username }</div>
    </div>
      <div className="md:flex gap-10 justify-center text-xl sm:text-2xl md:text-4xl py-4 text-center w-full md:px-0 max-w-3xl m-auto">
      <h2> Latest </h2>
      <h2 className="text-primary-color">
        Posts
      </h2>
    </div>
  </div>
);