import Signup from '~/components/auth/signup'
import { NavLink } from '@remix-run/react'

export default () => (
  <div className="w-full h-full mt-32 flex flex-col items-center justify-center">
    <Signup />
    <NavLink to={'/login'} className="flex flex-row">
      <button className="p-4 bg-primary-background m-4">
          Or sign back in
      </button>
    </NavLink>
  </div>
)