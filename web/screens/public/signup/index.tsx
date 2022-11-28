import Signup from '~/components/signup'
// import { NavLink } from '@remix-run/react'

export default () => (
  <div className="w-full h-full mt-32 flex flex-col items-center justify-center">
    <Signup />
    <a href={'/login'} className="flex flex-row">
      <button className="p-4 bg-primary-background m-4">
          Or sign back in
      </button>
    </a>
  </div>
)